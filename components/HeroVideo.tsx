"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import Grain from "./Grain";

/**
 * Cinematic editorial hero.
 *
 * Composition philosophy:
 *   - 2.35:1 cinema letterbox bands draw in on mount.
 *   - A slow cross-fading reel of curated stills plays underneath (3.6s per
 *     frame, 1.6s crossfade). Each frame ken-burns gently. This gives the
 *     section true film-loop life even before /videos/hero.mp4 ships.
 *   - When the .mp4 exists, the <video> rides on top at full opacity and
 *     hides the reel. When it 404s, the reel continues unbroken.
 *   - Headline is a slow word-by-word mask reveal. Instrument Serif italic
 *     carries the couture feel — sharp terminals, calligraphic joins.
 *   - Prestige micro-typography (Roman numerals, atelier line, ISO dateline,
 *     reel serial) frames the composition without shouting.
 */

const REEL = [
  // Hands-on coaching — close detail, low light, premium
  "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=2200&q=90&auto=format&fit=crop",
  // Architectural gym interior — moody, sculpted light
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=2200&q=90&auto=format&fit=crop",
  // Athlete portrait — film-grain monochrome feel
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=2200&q=90&auto=format&fit=crop",
  // Cathedral-scale studio — dramatic perspective
  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=2200&q=90&auto=format&fit=crop",
];

const HEADLINE = [
  ["The", "art"],
  ["of", "running"],
  ["a", "gym."],
];

export default function HeroVideo() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [frame, setFrame] = useState(0);
  const [time, setTime] = useState<string>("");

  // Slow reel crossfade — 4.8s per frame for a true film cadence
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setFrame((f) => (f + 1) % REEL.length), 4800);
    return () => clearInterval(id);
  }, [reduce]);

  // Live ISO clock (UTC) — pure prestige garnish, like a Bloomberg terminal
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const hh = String(d.getUTCHours()).padStart(2, "0");
      const mm = String(d.getUTCMinutes()).padStart(2, "0");
      setTime(`${hh}:${mm} UTC`);
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yHeadline = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -90]);
  const opacityHeadline = useTransform(scrollYProgress, [0, 0.7], [1, reduce ? 1 : 0]);
  const scaleReel = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.08]);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[720px] w-full overflow-hidden bg-ink"
    >
      {/* ── 1. Crossfading still reel (the "film loop") ─────────────── */}
      <motion.div style={{ scale: scaleReel }} className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={frame}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={REEL[frame]}
              alt=""
              fill
              priority={frame === 0}
              sizes="100vw"
              className="object-cover animate-kenburns-slow"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* ── 2. Optional self-hosted film (drops in over the reel) ───── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* ── 3. Cinematic legibility wash ─────────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/15 to-ink/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,10,10,0.55)_100%)]" />
      <Grain opacity={0.085} className="mix-blend-overlay" />

      {/* ── 4. Cinema 2.35:1 letterbox bands ─────────────────────────── */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 56 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        className="absolute top-0 inset-x-0 bg-ink z-30 origin-top"
      />
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 56 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        className="absolute bottom-0 inset-x-0 bg-ink z-30 origin-bottom"
      />

      {/* ── 5. Top & bottom hairlines (lime warm-up) ─────────────────── */}
      <div className="absolute top-[56px] inset-x-0 h-px bg-gradient-to-r from-transparent via-lime/55 to-transparent z-30" />
      <div className="absolute bottom-[56px] inset-x-0 h-px bg-gradient-to-r from-transparent via-paper/15 to-transparent z-30" />

      {/* ── 6. Editorial corner ticks (cinema viewfinder) ────────────── */}
      <CornerTicks />

      {/* ── 7. Content layer ─────────────────────────────────────────── */}
      <div className="relative h-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col z-20">
        {/* Top metadata strip — like a film slate / Bloomberg ribbon */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 1.0 }}
          className="pt-28 md:pt-32 flex items-center justify-between text-paper"
        >
          <div className="flex items-center gap-2.5 text-[10px] uppercase tracking-[0.32em]">
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inset-0 rounded-full bg-lime animate-ping opacity-75" />
              <span className="relative w-1.5 h-1.5 rounded-full bg-lime" />
            </span>
            <span className="text-paper/85">On Air</span>
            <span className="text-paper/25">·</span>
            <span className="text-paper/55 tabular-nums">{time || "00:00 UTC"}</span>
          </div>
          <div className="hidden md:flex items-center gap-3 text-[10px] uppercase tracking-[0.38em] text-paper/45">
            <span className="font-display italic">Reel</span>
            <span className="tabular-nums">N°{String(frame + 1).padStart(2, "0")}</span>
            <span className="text-paper/25">/</span>
            <span>London · Bengaluru · NYC</span>
            <span className="text-paper/25">/</span>
            <span className="font-display italic">MMXXVI</span>
          </div>
        </motion.div>

        {/* Center headline — slow couture mask reveal */}
        <motion.div
          style={{ y: yHeadline, opacity: opacityHeadline }}
          className="flex-1 flex flex-col justify-center max-w-5xl"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.05 }}
            className="flex items-center gap-4 mb-9"
          >
            <span className="h-px w-10 bg-paper/45" />
            <span className="text-[10px] uppercase tracking-[0.42em] font-medium text-paper/75">
              GymnexAI
            </span>
            <span className="font-display italic text-paper/45 text-sm">—</span>
            <span className="text-[10px] uppercase tracking-[0.42em] font-medium text-paper/55">
              An Atelier for Intelligent Fitness
            </span>
          </motion.div>

          <h1 className="font-display text-[clamp(2.8rem,7.6vw,8rem)] leading-[0.92] tracking-tighter text-paper">
            {HEADLINE.map((line, li) => (
              <span key={li} className="block overflow-hidden">
                <motion.span
                  initial={{ y: "115%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 1.05,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 1.25 + li * 0.18,
                  }}
                  className="inline-block"
                >
                  {line.map((word, wi) => (
                    <span key={wi} className="inline-block">
                      {li === 0 && wi === 1 ? (
                        <em className="italic text-paper/85 pr-3">{word}</em>
                      ) : li === 2 && wi === 1 ? (
                        <span className="text-paper/75">{word}</span>
                      ) : (
                        <span className="pr-3">{word}</span>
                      )}
                    </span>
                  ))}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 1.95 }}
            className="mt-10 text-paper/75 text-lg md:text-xl leading-relaxed max-w-xl font-light"
          >
            A discreet intelligence behind the world&apos;s most considered gyms.
            Quiet, decisive, beautifully engineered — your operation, conducted.
          </motion.p>
        </motion.div>

        {/* Bottom band: prestige line + CTAs + sponsor names */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 2.1 }}
          className="pb-24 md:pb-28 grid grid-cols-1 md:grid-cols-12 gap-8 items-end"
        >
          <div className="md:col-span-5 space-y-4">
            <div className="text-[10px] uppercase tracking-[0.38em] text-paper/45 flex items-center gap-3">
              <span className="font-display italic text-base leading-none text-lime/80">✦</span>
              <span>Est. MMXXIV · Crafted in Bengaluru</span>
            </div>
            <div className="hidden md:flex items-center gap-5 text-[10px] uppercase tracking-[0.32em] text-paper/40">
              <span>Atelier Athletic</span>
              <span className="text-paper/20">·</span>
              <span>Meridian Club</span>
              <span className="text-paper/20">·</span>
              <span>Pulse Studios</span>
            </div>
          </div>
          <div className="md:col-span-7 flex flex-wrap items-center md:justify-end gap-3 md:gap-5">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-paper text-ink pl-7 pr-3 py-3 rounded-full text-[11px] font-semibold tracking-[0.26em] uppercase hover:bg-paper-warm transition-colors"
            >
              Request a Private Demo
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-ink text-paper group-hover:rotate-45 transition-transform duration-500">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link
              href="#how"
              className="group inline-flex items-center gap-3 px-2 py-3 text-[11px] font-semibold tracking-[0.26em] uppercase text-paper hover:text-paper/70 transition-colors"
            >
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-paper/35 group-hover:border-paper transition-colors">
                <Play className="w-3.5 h-3.5 ml-0.5" />
              </span>
              View the Film
            </Link>
          </div>
        </motion.div>
      </div>

      {/* ── 8. Scroll cue ────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 2.4 }}
        className="absolute bottom-[72px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-paper/55 z-20"
      >
        <span className="text-[9px] uppercase tracking-[0.5em] font-display italic">Continue</span>
        <div className="w-px h-12 bg-paper/35 animate-pulse-line" />
      </motion.div>
    </section>
  );
}

/** Camera-viewfinder corner brackets — pure SVG, no asset request. */
function CornerTicks() {
  const stroke = "currentColor";
  return (
    <div
      aria-hidden="true"
      className="absolute inset-x-8 top-[80px] bottom-[80px] md:inset-x-12 pointer-events-none text-paper/35 z-20"
    >
      <svg className="absolute top-0 left-0" width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M0 10V0H10" stroke={stroke} strokeWidth="1" />
      </svg>
      <svg className="absolute top-0 right-0" width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M22 10V0H12" stroke={stroke} strokeWidth="1" />
      </svg>
      <svg className="absolute bottom-0 left-0" width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M0 12V22H10" stroke={stroke} strokeWidth="1" />
      </svg>
      <svg className="absolute bottom-0 right-0" width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M22 12V22H12" stroke={stroke} strokeWidth="1" />
      </svg>
    </div>
  );
}
