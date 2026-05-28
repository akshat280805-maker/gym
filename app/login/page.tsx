"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Lock, Mail } from "lucide-react";
import Logo from "../../components/Logo";

const UNSPLASH = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  return (
    <div className="min-h-screen bg-paper text-ink grid grid-cols-1 lg:grid-cols-2">
      {/* LEFT — editorial image */}
      <div className="relative hidden lg:block">
        <Image
          src={UNSPLASH("1534438327276-14e5300c3a48", 1600)}
          alt="Strength training"
          fill
          priority
          sizes="50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-ink/60 via-ink/20 to-transparent" />
        <div className="absolute top-10 left-10 text-paper">
          <Logo size="md" />
        </div>
        <div className="absolute bottom-12 left-12 right-12 text-paper">
          <p className="font-serif text-3xl md:text-4xl leading-snug tracking-tight max-w-md">
            &ldquo;The first software our members actually compliment us on.&rdquo;
          </p>
          <p className="mt-6 text-[11px] uppercase tracking-[0.25em] text-paper/70">
            — Priya Raghavan, Atelier Athletic
          </p>
        </div>
      </div>

      {/* RIGHT — login */}
      <div className="flex items-center justify-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-md"
        >
          <div className="lg:hidden mb-10">
            <Logo size="md" className="text-ink" />
          </div>

          <span className="text-[10px] uppercase tracking-[0.28em] font-semibold text-mute">
            Owner Console
          </span>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl leading-[0.95] tracking-tight">
            Welcome back.
          </h1>
          <p className="mt-4 text-mute">
            Access your gym&apos;s operating system.
          </p>

          <form
            className="mt-10 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              if (!email || !password) return;
              setSubmitting(true);
            }}
          >
            <div>
              <label htmlFor="login-email" className="text-[10px] uppercase tracking-[0.25em] font-semibold text-mute">
                Business Email
              </label>
              <div className="mt-3 relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-mute" />
                <input
                  id="login-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@yourgym.com"
                  className="w-full bg-paper border border-line rounded-full py-4 pl-12 pr-5 text-sm placeholder:text-mute-soft focus:outline-none focus:border-ink transition-colors"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="login-password" className="text-[10px] uppercase tracking-[0.25em] font-semibold text-mute">
                  Password
                </label>
                <button
                  type="button"
                  className="text-[10px] uppercase tracking-[0.22em] font-semibold text-mute hover:text-ink"
                >
                  Forgot?
                </button>
              </div>
              <div className="mt-3 relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-mute" />
                <input
                  id="login-password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-paper border border-line rounded-full py-4 pl-12 pr-5 text-sm placeholder:text-mute-soft focus:outline-none focus:border-ink transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="group w-full bg-ink text-paper py-4 rounded-full text-[12px] font-semibold tracking-[0.22em] uppercase hover:bg-ink-soft transition-colors inline-flex items-center justify-center gap-3 disabled:opacity-60"
            >
              {submitting ? "Signing in…" : "Enter Console"}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </form>

          <p className="mt-10 text-[12px] text-mute text-center">
            New to GymnexAI?{" "}
            <Link href="/contact" className="text-ink underline underline-offset-4 decoration-line hover:decoration-ink">
              Request access
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
