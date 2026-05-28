"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

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
  ];

  const overDark = pathname === "/" && !scrolled;

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-paper/85 backdrop-blur-xl border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Logo size="md" className={overDark ? "text-paper" : "text-ink"} />

        <div
          className={`hidden md:flex items-center gap-10 text-[11px] tracking-[0.22em] uppercase font-medium transition-colors duration-500 ${
            overDark ? "text-paper/70" : "text-mute"
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
            className={`text-[11px] uppercase tracking-[0.22em] font-medium transition-colors duration-500 ${
              overDark ? "text-paper/70 hover:text-paper" : "text-mute hover:text-ink"
            }`}
          >
            Login
          </Link>
          <Link
            href="/contact"
            className={`px-5 py-2.5 rounded-full text-[11px] font-semibold tracking-[0.22em] uppercase transition-colors duration-500 ${
              overDark
                ? "bg-paper text-ink hover:bg-paper-warm"
                : "bg-ink text-paper hover:bg-ink-soft"
            }`}
          >
            Book a Demo
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
