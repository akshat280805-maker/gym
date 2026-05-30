"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Grain from "./Grain";

const SLIDES = [
  "/images/hero-slide-01-luxury-studio.webp",
  "/images/hero-slide-02-minimal-studio.webp",
  "/images/hero-slide-05-reception-os.webp",
];

const HEADLINE = [
  ["The", "operating", "system"],
  ["behind", "exceptional", "gyms."],
];

export default function HeroVideo() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const [frame, setFrame] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yHeadline = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacityHeadline = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setFrame((current) => (current + 1) % SLIDES.length);
    }, 5600);

    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden bg-transparent"
    >
      <div className="absolute inset-0 bg-ink">
        <AnimatePresence mode="sync">
          <motion.div
            key={frame}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={SLIDES[frame]}
              alt="Premium gym environment background"
              fill
              sizes="100vw"
              className="object-cover object-right"
              priority={frame === 0}
              style={{ backgroundColor: "transparent" }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
      <Grain opacity={0.03} className="mix-blend-overlay" />

      {/* ── 5. Top & bottom hairlines (neutral warm-up) ─────────────── */}
      <div className="absolute top-[56px] inset-x-0 h-px bg-gradient-to-r from-transparent via-paper/20 to-transparent z-30" />
      <div className="absolute bottom-[56px] inset-x-0 h-px bg-gradient-to-r from-transparent via-paper/15 to-transparent z-30" />

      {/* ── 6. Editorial corner ticks (cinema viewfinder) ────────────── */}
      <CornerTicks />

      {/* ── 7. Content layer ─────────────────────────────────────────── */}
      <div className="relative h-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-center z-20 pt-20 md:pt-24 pb-16">
        <motion.div
          style={{ y: yHeadline, opacity: opacityHeadline }}
          className="max-w-4xl"
        >
          <h1 className="mt-0 font-display text-[clamp(2.6rem,6vw,5.8rem)] leading-[0.95] tracking-[-0.02em] text-paper max-w-[min(90vw,720px)]">
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
                    <span key={wi} className="inline-block pr-3">
                      {word}
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
            className="mt-8 text-paper/75 text-lg md:text-xl leading-relaxed max-w-xl font-medium"
          >
            Surface member risk early. Keep every lead moving. Give owners one intelligent view of the business.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 2.05 }}
            className="mt-6 text-paper/60 text-base md:text-lg leading-relaxed max-w-lg font-light"
          >
            And give every member a personalised fitness experience that makes them feel seen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 2.2 }}
            className="mt-12 flex justify-start"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-paper/95 text-ink px-7 py-4 rounded-full text-[11px] font-semibold tracking-[0.24em] uppercase border border-paper/15 shadow-[0_18px_60px_-40px_rgba(0,0,0,0.35)] hover:bg-paper transition-all"
            >
              BOOK A PRIVATE DEMO
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-ink text-paper transition-transform duration-500">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </motion.div>
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
