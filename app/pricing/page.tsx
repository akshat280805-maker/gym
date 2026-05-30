"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const PRICING_CARDS = [
  {
    title: "Basic",
    subtitle: "For smaller studios that need a cleaner way to manage members and payments.",
    features: [
      "Up to 100 active members",
      "Basic client management",
      "Payment processing",
      "Member records and status tracking",
      "Simple owner dashboard",
      "Email support",
    ],
    cta: "Get started",
    variant: "light",
  },
  {
    title: "Professional",
    badge: "Most Popular",
    subtitle: "For growing gyms that want retention, lead follow-up and AI-powered operating clarity.",
    intro: "Everything in Basic, plus:",
    features: [
      "AI automation workflows",
      "Nex Intelligence owner assistant",
      "Churn prediction and member risk signals",
      "Lead follow-up automation",
      "Daily AI briefing",
      "Advanced dashboard insights",
      "Up to 400 active members",
      "Limited to one branch",
    ],
    cta: "Get started",
    variant: "dark",
  },
  {
    title: "Enterprise",
    subtitle: "For multi-location fitness businesses that need a complete AI operating layer.",
    intro: "Everything in Professional, plus:",
    features: [
      "Unlimited members",
      "Multi-location management",
      "All AI automations",
      "Nex Intelligence across locations",
      "Priority support",
      "Custom onboarding",
      "Personal website for the fitness studio",
      "One month SEO setup by our team",
    ],
    cta: "Get started",
    variant: "light",
  },
];

export default function PricingPage() {
  return (
    <div className="bg-paper text-ink">
      <main className="max-w-7xl mx-auto px-6 pt-36 pb-24 sm:pt-40 sm:pb-28">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="font-serif text-6xl md:text-7xl leading-[0.92] tracking-tight text-ink mx-auto max-w-2xl">
            Flexible plans for every fitness studio.
          </h1>
          <p className="mt-8 mx-auto max-w-2xl text-base md:text-lg leading-8 text-mute">
            Start with GymnexAI from just{" "}
            <span className="font-semibold text-ink">$49/month</span>. Choose
            the level of intelligence your gym needs as you grow.
          </p>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 grid gap-8 lg:grid-cols-3"
        >
          {PRICING_CARDS.map((card) => (
            <div
              key={card.title}
              className={`group flex h-full flex-col rounded-[2rem] border p-8 transition-transform duration-300 hover:-translate-y-1 ${
                card.variant === "dark"
                  ? "bg-ink text-paper border-paper/20 shadow-[0_30px_80px_rgba(0,0,0,0.12)]"
                  : "bg-paper border-line shadow-[0_15px_40px_rgba(0,0,0,0.04)]"
              }`}
            >
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2
                      className={`font-serif text-4xl tracking-tight ${
                        card.variant === "dark" ? "text-paper" : "text-ink"
                      }`}
                    >
                      {card.title}
                    </h2>
                    <p
                      className={`mt-4 max-w-[22rem] text-sm leading-7 ${
                        card.variant === "dark" ? "text-mute/75" : "text-mute"
                      }`}
                    >
                      {card.subtitle}
                    </p>
                  </div>
                  {card.badge ? (
                    <span className="rounded-full border border-paper/20 bg-paper/10 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-paper">
                      {card.badge}
                    </span>
                  ) : null}
                </div>

                <div
                  className={`mt-8 h-px ${
                    card.variant === "dark" ? "bg-paper/10" : "bg-line"
                  }`}
                />

                {card.intro ? (
                  <p className="mt-8 text-sm text-mute">{card.intro}</p>
                ) : null}

                <ul className="mt-6 space-y-4 text-sm leading-7">
                  {card.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-4 text-sm leading-7"
                    >
                      <span
                        className={`mt-1 h-2.5 w-2.5 rounded-full ${
                          card.variant === "dark" ? "bg-paper" : "bg-ink"
                        }`}
                      />
                      <span
                        className={`${
                          card.variant === "dark" ? "text-paper/90" : "text-ink"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className={`mt-10 inline-flex w-full items-center justify-center rounded-full px-6 py-4 text-[12px] font-semibold tracking-[0.22em] uppercase transition-colors duration-300 ${
                  card.variant === "dark"
                    ? "bg-paper text-ink hover:bg-paper/90"
                    : "bg-ink text-paper hover:bg-ink/90"
                }`}
              >
                {card.cta}
              </Link>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 max-w-3xl text-sm text-mute"
        >
          Final pricing depends on studio size, locations and selected
          capabilities.
        </motion.p>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 rounded-[2rem] border border-line bg-paper-warm/80 p-12 text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-ink">
            Ready to choose the right operating layer?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-mute">
            Book a private walkthrough and we’ll map GymnexAI around your
            members, leads and daily operations.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-ink px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.24em] text-paper transition-all duration-300 hover:bg-ink/90"
          >
            BOOK A PRIVATE DEMO
          </Link>
        </motion.section>
      </main>
    </div>
  );
}