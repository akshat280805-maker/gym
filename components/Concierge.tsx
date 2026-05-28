"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUp, X } from "lucide-react";
import { KB, answer, type ConciergeEntry } from "../lib/concierge";

/**
 * Concierge — the floating editorial chat.
 *
 * Design grammar:
 *  - Pure ink-on-paper, no SaaS chrome.
 *  - Floating bubble is a single ink disc with an italic serif "g." mark.
 *    A one-time teaser pill expands from it ~6s after first paint, holds for
 *    ~4.5s, then collapses back to the disc.
 *  - Panel is paper with a single lime hairline at the top edge. The only
 *    header element is the title in italic Instrument Serif.
 *  - Each concierge reply carries 2–3 contextual follow-up chips, derived
 *    from the matched entry's `related` ids in the KB. The starter chips
 *    are shown only when no message has been sent yet.
 *  - No status row, no footer micro-text. The work is the work.
 *
 * Everything is local: matching runs against `data/concierge-kb.json` via
 * `lib/concierge.ts`. No network, no LLM, no persistence by design.
 */

type Message =
  | {
      role: "concierge";
      text: string;
      matchedId: string | null;
      followUps: ConciergeEntry[];
      id: number;
    }
  | { role: "guest"; text: string; id: number };

const THINKING_MS = 540;
const TEASER_DELAY_MS = 6000;
const TEASER_DURATION_MS = 4500;

export default function Concierge() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [thinking, setThinking] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [teaser, setTeaser] = useState<string | null>(null);
  const teaserFired = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const reduce = useReducedMotion();
  const nextId = useRef(1);

  // Seed greeting on first open
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        {
          role: "concierge",
          text: KB.meta.greeting,
          matchedId: null,
          followUps: [],
          id: nextId.current++,
        },
      ]);
    }
  }, [open, messages.length]);

  // Auto-scroll
  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: reduce ? "auto" : "smooth",
    });
  }, [messages, thinking, reduce]);

  // Focus input when panel opens
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 250);
      return () => clearTimeout(t);
    }
  }, [open]);

  // Escape closes panel
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Proactive teaser — fires once per session, after a polite delay,
  // only if the panel is still closed and the user hasn't opened it.
  useEffect(() => {
    if (reduce || teaserFired.current) return;
    const t = setTimeout(() => {
      if (open || teaserFired.current) return;
      const choice =
        KB.meta.teasers[Math.floor(Math.random() * KB.meta.teasers.length)];
      setTeaser(choice);
      teaserFired.current = true;
      const t2 = setTimeout(() => setTeaser(null), TEASER_DURATION_MS);
      // Cleanup the inner timer if the component unmounts
      teaserCleanupRef.current = () => clearTimeout(t2);
    }, TEASER_DELAY_MS);
    return () => clearTimeout(t);
  }, [reduce, open]);

  const teaserCleanupRef = useRef<(() => void) | null>(null);
  useEffect(
    () => () => {
      teaserCleanupRef.current?.();
    },
    []
  );

  // If the user opens while the teaser is visible, clear it
  useEffect(() => {
    if (open && teaser) setTeaser(null);
  }, [open, teaser]);

  function ask(text: string) {
    const trimmed = text.trim();
    if (!trimmed || thinking) return;

    setMessages((m) => [
      ...m,
      { role: "guest", text: trimmed, id: nextId.current++ },
    ]);
    setDraft("");
    setThinking(true);

    window.setTimeout(() => {
      const result = answer(trimmed);
      setMessages((m) => [
        ...m,
        {
          role: "concierge",
          text: result.text,
          matchedId: result.matchedId,
          followUps: result.followUps,
          id: nextId.current++,
        },
      ]);
      setThinking(false);
    }, THINKING_MS);
  }

  function askChip(entry: ConciergeEntry) {
    ask(entry.questions[0]);
  }

  return (
    <>
      {/* ── Floating bubble + teaser ────────────────────────────── */}
      <AnimatePresence>
        {!open && (
          <motion.div
            key="bubble-wrap"
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.92 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-6 right-6 z-[60]"
          >
            <motion.button
              onClick={() => setOpen(true)}
              aria-label="Open the GymnexAI Concierge"
              layout
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex items-center bg-ink text-paper rounded-full shadow-[0_18px_60px_-18px_rgba(10,10,10,0.6)] hover:shadow-[0_22px_70px_-18px_rgba(10,10,10,0.7)] transition-shadow overflow-hidden"
            >
              {/* The disc — italic serif mark */}
              <motion.span
                layout
                className="relative flex items-center justify-center w-14 h-14 shrink-0"
              >
                <span className="font-display italic text-lime text-[26px] leading-none translate-y-[-1px]">
                  g.
                </span>
                <span className="absolute top-2 right-2 flex w-2 h-2">
                  <span className="absolute inset-0 rounded-full bg-lime animate-ping opacity-70" />
                  <span className="relative w-2 h-2 rounded-full bg-lime" />
                </span>
              </motion.span>

              {/* Teaser slot — only renders when teaser is set */}
              <AnimatePresence initial={false}>
                {teaser && (
                  <motion.span
                    key={teaser}
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden whitespace-nowrap"
                  >
                    <span className="block pr-5 pl-1 font-display italic text-[15px] text-paper/90 leading-none">
                      “{teaser}”
                    </span>
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Panel ───────────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-6 right-6 left-6 sm:left-auto z-[60] w-auto sm:w-[420px] max-h-[min(680px,calc(100vh-3rem))] flex flex-col rounded-[28px] bg-paper border border-line shadow-[0_50px_140px_-30px_rgba(10,10,10,0.5)] overflow-hidden"
            role="dialog"
            aria-modal="false"
            aria-label="GymnexAI Concierge"
          >
            {/* Lime hairline at top edge */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-lime/55 to-transparent z-10" />

            {/* Header — title + close, nothing else */}
            <div className="px-6 pt-6 pb-4 flex items-center justify-between">
              <div className="flex items-baseline gap-2">
                <span className="font-display italic text-[28px] text-ink leading-none">
                  Concierge
                </span>
                <span className="font-display italic text-[15px] text-mute leading-none">
                  ✦
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close the concierge"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full text-mute hover:text-ink hover:bg-paper-warm transition-colors -mr-1.5"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-5 pt-1 pb-4 space-y-4 bg-paper"
            >
              {messages.map((m) =>
                m.role === "guest" ? (
                  <GuestBubble key={m.id} text={m.text} />
                ) : (
                  <ConciergeReply
                    key={m.id}
                    text={m.text}
                    followUps={m.followUps}
                    onChip={askChip}
                  />
                )
              )}
              {thinking && <Typing />}

              {/* Starter chips — only on the very first turn */}
              {messages.length === 1 && !thinking && (
                <div className="pt-1 pb-1 flex flex-wrap gap-1.5">
                  {KB.meta.suggested.map((q) => (
                    <button
                      key={q}
                      onClick={() => ask(q)}
                      className="text-[12px] leading-snug px-3 py-1.5 rounded-full border border-line text-ink/80 hover:text-ink hover:border-ink/30 hover:bg-paper-warm/60 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Composer */}
            <div className="px-4 pb-4 pt-2">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  ask(draft);
                }}
                className="flex items-center gap-2 bg-paper-warm/50 border border-line rounded-full pl-5 pr-1.5 py-1 focus-within:border-ink/40 focus-within:bg-paper-warm/70 transition-colors"
              >
                <input
                  ref={inputRef}
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder="Ask anything…"
                  className="flex-1 bg-transparent outline-none text-[14px] text-ink placeholder:text-mute py-2.5"
                  autoComplete="off"
                  aria-label="Your question"
                />
                <button
                  type="submit"
                  disabled={!draft.trim() || thinking}
                  aria-label="Send"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-ink text-paper disabled:bg-line disabled:text-mute hover:bg-ink-soft transition-colors"
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function GuestBubble({ text }: { text: string }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[82%] rounded-[20px] rounded-br-md bg-ink text-paper px-4 py-2.5 text-[14px] leading-relaxed">
        {text}
      </div>
    </div>
  );
}

function ConciergeReply({
  text,
  followUps,
  onChip,
}: {
  text: string;
  followUps: ConciergeEntry[];
  onChip: (entry: ConciergeEntry) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="max-w-[92%] text-ink text-[14.5px] leading-[1.6] pr-1">
        {text}
      </div>
      {followUps.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-0.5">
          {followUps.map((f) => (
            <button
              key={f.id}
              onClick={() => onChip(f)}
              className="group inline-flex items-center gap-1 text-[11.5px] tracking-tight text-mute hover:text-ink border border-line hover:border-ink/30 hover:bg-paper-warm/60 rounded-full pl-3 pr-2.5 py-1 transition-colors"
            >
              {f.chip}
              <span className="text-mute/70 group-hover:text-ink transition-colors">
                →
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Typing() {
  return (
    <div className="flex items-center gap-1.5 pl-1 py-1">
      <Dot delay={0} />
      <Dot delay={0.15} />
      <Dot delay={0.3} />
    </div>
  );
}

function Dot({ delay }: { delay: number }) {
  return (
    <motion.span
      className="block w-1.5 h-1.5 rounded-full bg-mute"
      animate={{ opacity: [0.25, 1, 0.25], y: [0, -2, 0] }}
      transition={{ duration: 1.1, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
