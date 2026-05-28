"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Check, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const UNSPLASH = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

const MEMBER_RANGES = ["<200", "200–500", "500–1k", "1k+"] as const;
type MemberRange = (typeof MEMBER_RANGES)[number];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [memberRange, setMemberRange] = useState<MemberRange | null>(null);

  return (
    <div className="bg-paper text-ink">
      <section className="pt-32 md:pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* LEFT — copy + photo */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <span className="text-[10px] uppercase tracking-[0.28em] font-semibold text-mute">
              Request Access
            </span>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[0.95] tracking-tight">
              Let&apos;s quietly <br /> rebuild your <em className="italic text-mute">gym.</em>
            </h1>
            <p className="mt-8 text-mute text-lg leading-relaxed max-w-md">
              Tell us about your operation. We&apos;ll come back within one working day with a
              private walkthrough — tailored to your stack, not a generic pitch.
            </p>

            <div className="mt-12 relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line">
              <Image
                src={UNSPLASH("1540497077202-7c8a3999166f", 1200)}
                alt="Boutique gym floor"
                fill
                sizes="(min-width: 1024px) 35vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <Mail className="w-4 h-4 text-ink" />
                <p className="mt-3 text-[10px] uppercase tracking-[0.22em] font-semibold text-mute">Email</p>
                <p className="mt-1 text-sm">team@gymnex.ai</p>
              </div>
              <div>
                <Phone className="w-4 h-4 text-ink" />
                <p className="mt-3 text-[10px] uppercase tracking-[0.22em] font-semibold text-mute">WhatsApp</p>
                <p className="mt-1 text-sm">+91 90000 00000</p>
              </div>
              <div>
                <MapPin className="w-4 h-4 text-ink" />
                <p className="mt-3 text-[10px] uppercase tracking-[0.22em] font-semibold text-mute">HQ</p>
                <p className="mt-1 text-sm">Bengaluru · Remote-first</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="sticky top-32 p-8 md:p-12 rounded-[2rem] bg-paper-warm/50 border border-line">
              {submitted ? (
                <div className="py-16 text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-lime flex items-center justify-center">
                    <Check className="w-5 h-5 text-ink" />
                  </div>
                  <h2 className="mt-6 font-serif text-4xl md:text-5xl tracking-tight">
                    Request received.
                  </h2>
                  <p className="mt-4 text-mute max-w-md mx-auto">
                    A founding-team member will reach out within one working day on WhatsApp.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-6"
                >
                  <h2 className="font-serif text-3xl md:text-4xl tracking-tight">
                    Book a private demo.
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Field name="fullName" label="Full Name" placeholder="Priya Raghavan" required />
                    <Field name="role" label="Role" placeholder="Owner · GM · Operations" />
                  </div>

                  <Field name="gym" label="Gym / Studio Name" placeholder="Atelier Athletic" required />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Field name="whatsapp" label="WhatsApp Number" placeholder="+91 00000 00000" required />
                    <Field name="email" label="Business Email" type="email" placeholder="you@yourgym.com" required />
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-mute">
                      Active Members
                    </span>
                    <input type="hidden" name="memberRange" value={memberRange ?? ""} />
                    <div className="mt-3 grid grid-cols-4 gap-2" role="radiogroup" aria-label="Active members">
                      {MEMBER_RANGES.map((opt) => {
                        const selected = memberRange === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            role="radio"
                            aria-checked={selected}
                            onClick={() => setMemberRange(opt)}
                            className={`py-3 rounded-full border text-sm transition-colors ${
                              selected
                                ? "border-ink bg-ink text-paper"
                                : "border-line hover:border-ink hover:bg-paper"
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-leak" className="text-[10px] uppercase tracking-[0.25em] font-semibold text-mute">
                      What&apos;s the biggest leak?
                    </label>
                    <textarea
                      id="contact-leak"
                      name="leak"
                      rows={3}
                      placeholder="Churn, lead response time, billing, all of the above…"
                      className="mt-3 w-full bg-paper border border-line rounded-2xl px-5 py-4 text-sm placeholder:text-mute-soft focus:outline-none focus:border-ink transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full bg-ink text-paper py-5 rounded-full text-[12px] font-semibold tracking-[0.22em] uppercase hover:bg-ink-soft transition-colors inline-flex items-center justify-center gap-3"
                  >
                    Request Access
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  <p className="text-center text-[11px] text-mute pt-2">
                    By submitting, you agree to receive a WhatsApp briefing from our AI assistant.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
  required,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  const id = `contact-${name}`;
  return (
    <div>
      <label htmlFor={id} className="text-[10px] uppercase tracking-[0.25em] font-semibold text-mute">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-3 w-full bg-paper border border-line rounded-full px-5 py-4 text-sm placeholder:text-mute-soft focus:outline-none focus:border-ink transition-colors"
      />
    </div>
  );
}
