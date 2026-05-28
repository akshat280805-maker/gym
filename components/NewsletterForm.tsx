"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return submitted ? (
    <p className="mt-4 text-[13px] text-ink">
      Thank you — first briefing lands within a week.
    </p>
  ) : (
    <form
      className="mt-4 flex"
      onSubmit={(e) => {
        e.preventDefault();
        if (!email) return;
        setSubmitted(true);
      }}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Business email for the GymnexAI briefing
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@yourgym.com"
        className="flex-1 bg-transparent border-b border-line py-2 text-sm placeholder:text-mute-soft focus:outline-none focus:border-ink transition-colors"
      />
      <button
        type="submit"
        className="ml-3 text-[11px] font-semibold tracking-[0.22em] uppercase text-ink hover:text-mute"
      >
        Join →
      </button>
    </form>
  );
}
