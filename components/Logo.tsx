/**
 * GymnexAI brand system.
 *
 * Mark design rationale:
 *   - Outer thin halo: the "operating ring" — the system around the operator.
 *   - Inner bold G: a confident, slightly closed serif-flavoured terminator
 *     drawn from a single SVG path so it scales pixel-perfectly from 16px
 *     (favicon) to 200px+ (hero) without rasterisation seams.
 *   - Lime precision dot: the "AI" reference — a fixed, intelligent point
 *     inside the open mouth of the G. The only chromatic moment in the system.
 *
 * The mark uses `currentColor` for the strokes so it inherits text colour from
 * its parent (dark on light pages, light on dark sections). The lime accent
 * is the brand's single fixed colour and remains constant.
 *
 * Wordmark uses .font-display (Instrument Serif, -0.022em tracking, ligatures
 * + contextual alternates on) — that combination is what makes the wordmark
 * feel bespoke instead of a generic Google Fonts pairing.
 */

import Link from "next/link";

const LIME = "#d4ff3a";

type MarkProps = {
  size?: number;
  className?: string;
  /** Set false on dark surfaces if you want a monochrome dot instead of lime. */
  accent?: boolean;
};

export function LogoMark({ size = 32, className, accent = false }: MarkProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* Outer halo — the operating ring */}
      <circle
        cx="20"
        cy="20"
        r="17.5"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.35"
      />
      {/* Inner G — precision motion and system intelligence */}
      <path
        d="M 26 12 A 8 8 0 1 0 26 28 H 20 V 22 H 26"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Signal node — the AI reference */}
      <circle cx="26" cy="14" r="1.7" fill={accent ? LIME : "currentColor"} />
    </svg>
  );
}

export function LogoWordmark({ className }: { className?: string }) {
  return (
    <span
      className={`font-display uppercase tracking-[0.28em] font-semibold leading-none ${className ?? ""}`}
    >
      GYMNEXAI
    </span>
  );
}

type LockupProps = {
  href?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  showMark?: boolean;
  accent?: boolean;
};

const SIZE_MAP: Record<NonNullable<LockupProps["size"]>, { mark: number; text: string; gap: string }> = {
  sm: { mark: 24, text: "text-[22px]", gap: "gap-2.5" },
  md: { mark: 30, text: "text-[26px]", gap: "gap-2.5" },
  lg: { mark: 44, text: "text-[42px]", gap: "gap-3" },
};

export default function Logo({
  href = "/",
  size = "md",
  className,
  showMark = true,
  accent = true,
}: LockupProps) {
  const cfg = SIZE_MAP[size];
  const content = (
    <span className={`inline-flex items-center ${cfg.gap} ${className ?? ""}`}>
      {showMark && <LogoMark size={cfg.mark} accent={accent} />}
      <LogoWordmark className={cfg.text} />
    </span>
  );
  return href ? (
    <Link href={href} aria-label="GymnexAI — Home" className="inline-flex items-center">
      {content}
    </Link>
  ) : (
    content
  );
}
