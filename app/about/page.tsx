import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Instagram, Quote } from "lucide-react";
import Reveal from "../../components/Reveal";
import EditorialDivider from "../../components/EditorialDivider";

export const metadata: Metadata = {
  title: "About — Built from a problem we saw closely",
  description:
    "GymnexAI was founded by Akshat Chauhan, who grew up watching his father run a gym. We build the intelligent operating layer behind modern fitness businesses.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About GymnexAI",
    description:
      "Founded by Akshat Chauhan — an intelligent operating system for gyms, fitness clubs and studios.",
    url: "/about",
    type: "website",
  },
};

const UNSPLASH = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

const PRINCIPLES = [
  {
    k: "Owners first",
    v: "Every decision starts with the operator — their time, their margin, their evenings.",
  },
  {
    k: "Quiet by design",
    v: "Software should disappear. The best systems do their work in the background.",
  },
  {
    k: "Signals over guesses",
    v: "Retention is a signal problem. We build for the small drifts long before they become churn.",
  },
  {
    k: "Respect the channel",
    v: "Members live on WhatsApp. We meet them there — personal, never spammy.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-paper text-ink">
      {/* ============================================================
          HERO
      ============================================================ */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_rgba(212,255,58,0.18),_transparent_55%)]" />
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <span className="text-[10px] uppercase tracking-[0.28em] font-semibold text-mute">
              About — GymnexAI
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-serif text-6xl md:text-[120px] leading-[0.92] tracking-tight max-w-5xl">
              Built from a problem <br />
              <em className="italic text-mute">we saw closely.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-10 max-w-xl text-mute text-lg md:text-xl leading-relaxed">
              GymnexAI was founded by Akshat Chauhan, who grew up seeing the
              challenges his father faced while owning and operating a gym.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          STORY
      ============================================================ */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <Reveal className="lg:col-span-5">
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line bg-paper-warm">
                {/* Typographic fallback — sits beneath the image so that if the
                    file is missing or fails to load on any system, the card
                    still presents an elegant "AC" monogram instead of a broken
                    image icon. */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center select-none"
                >
                  <span className="font-display italic text-[40vw] md:text-[20rem] leading-none text-mute-soft/40 tracking-tighter">
                    AC
                  </span>
                </div>

                <Image
                  src="/team/akshat-chauhan.jpg"
                  alt="Akshat Chauhan — Founder & CEO of GymnexAI"
                  fill
                  priority
                  sizes="(min-width: 1024px) 35vw, 100vw"
                  className="object-cover relative z-10"
                />

                {/* Subtle masthead chip — sits clear of the face */}
                <div className="absolute top-5 left-5 z-20 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-paper/90 backdrop-blur text-[10px] uppercase tracking-[0.28em] font-semibold text-ink">
                  <span className="w-1 h-1 rounded-full bg-lime" />
                  Founder
                </div>
              </div>
              <figcaption className="mt-6 flex items-end justify-between gap-6 border-t border-line pt-5">
                <div>
                  <p className="font-display text-2xl md:text-3xl tracking-tight text-ink leading-none">
                    Akshat Chauhan
                  </p>
                  <p className="mt-3 text-[10px] uppercase tracking-[0.28em] font-semibold text-mute">
                    Founder &amp; CEO · GymnexAI
                  </p>
                </div>
                <span className="font-display italic text-mute-soft text-xl leading-none">
                  ✦
                </span>
              </figcaption>
            </figure>
          </Reveal>

          <div className="lg:col-span-7 lg:pt-4">
            <Reveal>
              <span className="text-[10px] uppercase tracking-[0.28em] font-semibold text-mute">
                The Origin
              </span>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.02] tracking-tight">
                A quiet leak, hiding in plain sight.
              </h2>
            </Reveal>

            <div className="mt-8 space-y-6 text-mute text-lg leading-relaxed max-w-xl">
              <Reveal delay={0.05}>
                <p>
                  He saw that members do not always leave because of trainers,
                  staff or equipment. Often, they leave because they start
                  feeling lost — without guidance, consistency or a sense of
                  progress.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  By the time an owner notices, the member has already stopped
                  showing up.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p>
                  At the same time, valuable leads are lost because follow-ups
                  are delayed and owners are already busy running daily
                  operations.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          WHY GYMNEXAI EXISTS
      ============================================================ */}
      <section className="bg-paper-warm/50 border-y border-line px-6 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <EditorialDivider className="mb-16" label="Why GymnexAI Exists" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <Reveal className="lg:col-span-7">
              <h2 className="font-serif text-4xl md:text-6xl leading-[0.98] tracking-tight">
                An intelligent operating <br />
                layer for <em className="italic text-mute">fitness.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-5">
              <div className="space-y-6 text-mute text-lg leading-relaxed">
                <p>
                  GymnexAI is building an intelligent operating system for gyms,
                  fitness clubs and studios — helping owners retain members
                  through timely engagement and convert more leads into paying
                  members.
                </p>
                <p>
                  The goal is simple: make owners&apos; lives easier, help
                  members feel supported, and help fitness businesses make more
                  money through better retention and smarter conversions.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          MISSION
      ============================================================ */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-ink text-paper p-12 md:p-20">
              <div className="absolute -top-20 -left-20 w-[420px] h-[420px] rounded-full bg-lime/15 blur-3xl" />
              <div className="relative">
                <Quote className="w-8 h-8 text-lime fill-lime" />
                <p className="mt-8 max-w-4xl font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight">
                  <span className="text-paper/50">Our mission —</span>{" "}
                  Help fitness businesses{" "}
                  <em className="italic text-lime">retain</em> more members,{" "}
                  <em className="italic text-lime">convert</em> more leads, and{" "}
                  <em className="italic text-lime">grow</em> through intelligent
                  systems that work in the background.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          PRINCIPLES
      ============================================================ */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.28em] font-semibold text-mute">
                Principles
              </span>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.02] tracking-tight">
                Four convictions we build by.
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-px bg-line">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.k} delay={i * 0.06}>
                <div className="bg-paper p-10 md:p-12 h-full">
                  <span className="font-serif italic text-mute text-xl">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-serif text-2xl md:text-3xl tracking-tight">
                    {p.k}
                  </h3>
                  <p className="mt-4 text-mute text-[15px] leading-relaxed max-w-md">
                    {p.v}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CONNECT / INSTAGRAM
      ============================================================ */}
      <section className="px-6 pb-32 md:pb-44">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="rounded-[2.5rem] border border-line bg-paper-warm/40 p-10 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <span className="text-[10px] uppercase tracking-[0.28em] font-semibold text-mute">
                  Follow Along
                </span>
                <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.02] tracking-tight">
                  Field notes, in real time.
                </h2>
                <p className="mt-5 max-w-lg text-mute text-lg leading-relaxed">
                  We publish the small operator wins, the design language and
                  the occasional retention insight on Instagram.
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-3 lg:items-end">
                <Link
                  href="https://instagram.com/gymnexai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-ink text-paper px-7 py-4 rounded-full text-[12px] font-semibold tracking-[0.22em] uppercase hover:bg-ink-soft transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  @gymnexai
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-2 py-2 text-[11px] uppercase tracking-[0.22em] font-semibold text-ink hover:text-mute"
                >
                  Or book a private demo →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
