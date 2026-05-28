import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Bot, Cog, CreditCard, LineChart, MessageCircle, Sparkles } from "lucide-react";
import Reveal from "../../components/Reveal";

export const metadata: Metadata = {
  title: "The System",
  description:
    "Six tightly coupled modules — one intelligent layer. WhatsApp AI, retention intelligence, operations OS, zero-friction billing, lead conversion and member experience.",
  alternates: { canonical: "/features" },
  openGraph: {
    title: "The System — GymnexAI",
    description: "Six tightly coupled modules. One intelligent layer.",
    url: "/features",
  },
};

const UNSPLASH = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

const modules = [
  {
    icon: Bot,
    tag: "WhatsApp AI",
    title: "Autonomous member concierge.",
    body: "A 24/7 digital teammate that answers diet questions, schedules tours, recovers payments and re-engages drifting members — in your voice, on the channel members already use.",
    image: UNSPLASH("1556761175-5973dc0f32e7"),
  },
  {
    icon: LineChart,
    tag: "Retention Intelligence",
    title: "Predictive churn signal.",
    body: "GymnexAI watches attendance cadence, payment health and engagement decay — surfacing the 12 members most likely to leave this week, with a single-tap recovery flow.",
    image: UNSPLASH("1551288049-bebda4e38f71"),
  },
  {
    icon: Cog,
    tag: "Operations OS",
    title: "One command surface.",
    body: "Trainers, classes, locations, attendance and contracts — unified. Replace eleven tools with one elegant control room your team will actually open every morning.",
    image: UNSPLASH("1581009146145-b5ef050c2e1e"),
  },
  {
    icon: CreditCard,
    tag: "Zero-Friction Billing",
    title: "Subscriptions that just work.",
    body: "Auto-debit, dunning, failed-payment recovery, upgrades, freezes and refunds — handled. Operators stop being collections agents.",
    image: UNSPLASH("1554224155-1696413565d3"),
  },
  {
    icon: MessageCircle,
    tag: "Lead Conversion",
    title: "Inbox-to-trial in minutes.",
    body: "Inquiries from Instagram, the website, walk-ins and referrals are unified, qualified, and converted — with a personal reply within minutes, day or night.",
    image: UNSPLASH("1517649763962-0c623066013b"),
  },
  {
    icon: Sparkles,
    tag: "Member Experience",
    title: "Programming, personalised.",
    body: "Plans that adapt to attendance, recovery and goals. Members feel seen — without anyone on your team writing a single template.",
    image: UNSPLASH("1517836357463-d25dfeac3438"),
  },
];

export default function FeaturesPage() {
  return (
    <div className="bg-paper text-ink">
      {/* HERO */}
      <section className="relative pt-36 md:pt-44 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,255,58,0.18),_transparent_55%)]" />
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <span className="text-[10px] uppercase tracking-[0.28em] font-semibold text-mute">
              The System
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-serif text-6xl md:text-[120px] leading-[0.92] tracking-tight max-w-5xl">
              Built for <em className="italic text-mute">performance.</em>
              <br /> Engineered for scale.
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-2xl text-mute text-lg md:text-xl leading-relaxed">
              Six tightly coupled modules — one intelligent layer. Built specifically for
              fitness operators who refuse to glue together eleven half-products.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MODULES */}
      <section className="px-6 pb-32 md:pb-44">
        <div className="max-w-7xl mx-auto space-y-24">
          {modules.map((m, i) => {
            const Icon = m.icon;
            const flip = i % 2 === 1;
            return (
              <div
                key={m.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                <Reveal className={`lg:col-span-6 ${flip ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line">
                    <Image
                      src={m.image}
                      alt={m.title}
                      fill
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
                <Reveal delay={0.1} className="lg:col-span-6">
                  <div className={flip ? "lg:pr-8" : "lg:pl-8"}>
                    <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-line bg-paper">
                      <Icon className="w-3.5 h-3.5 text-ink" />
                      <span className="text-[10px] uppercase tracking-[0.28em] font-semibold text-mute">
                        {m.tag}
                      </span>
                    </div>
                    <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.02] tracking-tight">
                      {m.title}
                    </h2>
                    <p className="mt-6 text-mute text-lg leading-relaxed max-w-lg">{m.body}</p>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="rounded-[2.5rem] bg-ink text-paper p-12 md:p-20 text-center">
              <h2 className="font-serif text-5xl md:text-7xl leading-[0.95] tracking-tight max-w-3xl mx-auto">
                Ready to deploy <em className="italic text-lime">GymnexAI</em>?
              </h2>
              <p className="mt-8 max-w-xl mx-auto text-paper/60 text-lg leading-relaxed">
                A private 30-minute walkthrough — mapped to your operation.
              </p>
              <Link
                href="/contact"
                className="mt-10 inline-flex items-center gap-3 bg-paper text-ink px-8 py-4 rounded-full text-[12px] font-semibold tracking-[0.22em] uppercase hover:bg-paper-warm transition-colors"
              >
                Book a Demo <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
