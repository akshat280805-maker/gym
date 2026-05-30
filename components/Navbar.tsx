"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

/**
 * Adaptive navbar.
 *
 * State machine:
 *   1. Homepage + at top  → transparent, light text (sits over the dark video hero)
 *   2. Homepage + scrolled  → frosted paper, dark text
 *   3. Other pages         → frosted paper, dark text (always)
 *
 * The "over-dark" treatment is only for the homepage because that's the only
 * route with a dark full-bleed hero. Other pages start with a light bg.
 */
export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/features", label: "The System" },
    { href: "/#problem", label: "The Problem" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Case Studies" },
    { href: "/pricing", label: "Pricing" },
  ];

  const overDark = pathname === "/" && !scrolled;

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-xl border-b border-line"
          : "bg-ink/10 backdrop-blur-2xl"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 md:h-20 lg:h-24 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center pl-2">
          <span
            className={`font-display uppercase tracking-[0.28em] font-semibold leading-none pr-2 ${
              overDark ? "text-paper" : "text-ink"
            } text-[15px] md:text-[18px] lg:text-[20px]`}
          >
            GYMNEXAI
          </span>
        </Link>

        <div
          className={`hidden md:flex items-center gap-10 text-[11px] tracking-[0.24em] uppercase font-medium transition-colors duration-500 ${
            overDark ? "text-paper/80" : "text-ink/70"
          }`}
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`transition-colors ${overDark ? "hover:text-paper" : "hover:text-ink"}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className={`text-[11px] uppercase tracking-[0.22em] font-medium transition-all duration-300 ${
              overDark ? "text-paper/70 hover:text-paper" : "text-mute hover:text-ink"
            }`}
          >
            Login
          </Link>
          <Link
            href="/contact"
            className={`inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-[11px] font-semibold tracking-[0.24em] uppercase transition-all duration-300 border ${
              overDark
                ? "bg-paper/95 text-ink border-paper/20 hover:bg-paper hover:-translate-y-0.5"
                : "bg-ink text-paper border-paper/15 hover:bg-ink/90 hover:-translate-y-0.5"
            }`}
          >
            BOOK A DEMO
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden p-2 -mr-2 transition-colors duration-500 ${
            overDark ? "text-paper" : "text-ink"
          }`}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-paper">
          <div className="px-6 py-6 flex flex-col gap-5 text-sm tracking-[0.18em] uppercase text-ink">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link href="/login" onClick={() => setOpen(false)} className="text-mute">
              Login
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="bg-ink text-paper text-center py-3 rounded-full text-[11px] font-semibold tracking-[0.22em]"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
