import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Quote } from "lucide-react";
import Reveal from "../components/Reveal";
import EditorialDivider from "../components/EditorialDivider";
import HeroVideo from "../components/HeroVideo";

const UNSPLASH = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

const partners = [
  "ELEVATE FITNESS", "PULSE STUDIOS", "IRONHOUSE", "NORTH STRENGTH",
  "ATELIER ATHLETIC", "TRUE FORM", "MERIDIAN CLUB", "KINEMATIC",
];

const problems = [
  {
    stat: "38%",
    title: "Members leave in silence.",
    body: "By the time a card declines, the goodbye was written months ago. GymnexAI notices the drift in week one — and writes back, in your voice.",
  },
  {
    stat: "6 in 10",
    title: "Inquiries die after dark.",
    body: "Premium intent arrives at midnight. Most operations answer at nine. The lead has already walked into someone else's lobby.",
  },
  {
    stat: "11 tools",
    title: "The orchestra has no conductor.",
    body: "Billing here, CRM there, attendance somewhere else. You become the integration — instead of the operator.",
  },
];

const pillars = [
  {
    tag: "I — Retention Intelligence",
    title: "Foresight, before farewell.",
    body: "We read the quiet signals — missed sessions, softer engagement, billing friction — and reach out with a personal, on-brand note long before a member decides to leave.",
    image: UNSPLASH("1571019613454-1cb2f99b2d8b"),
  },
  {
    tag: "II — Lead Conversion",
    title: "A concierge that never sleeps.",
    body: "Every inquiry receives a considered, immediate reply. Tour booked, trial confirmed, doubt resolved — in your house voice, on the channels they already trust.",
    image: UNSPLASH("1517836357463-d25dfeac3438"),
  },
  {
    tag: "III — Operations Atelier",
    title: "One command surface.",
    body: "Members, payments, attendance, trainers, programming — composed into a single, deliberate control room. The data finally lives in one place. So does the decision.",
    image: UNSPLASH("1593079831268-3381b0db4a77"),
  },
  {
    tag: "IV — Member Experience",
    title: "A coach in every pocket.",
    body: "Personal programming, recovery, nutrition and ritual — delivered with restraint through the channel members already keep close.",
    image: UNSPLASH("1518611012118-696072aa579a"),
  },
];

const metrics = [
  { k: "+62%", l: "Lead → trial conversion" },
  { k: "-44%", l: "Monthly member attrition" },
  { k: "11h", l: "Reclaimed each week, per owner" },
  { k: "<2m", l: "Median reply, day or night" },
];

const testimonials = [
  {
    quote:
      "GymnexAI quietly replaced four tools and our front-desk fatigue. It is the first software our members actually compliment.",
    name: "Priya Raghavan",
    role: "Founder, Atelier Athletic — Bengaluru",
    avatar: UNSPLASH("1544005313-94ddf0286df2", 200),
  },
  {
    quote:
      "Retention lifted in the first month. The system noticed two of our finest members drifting before I did. That is the whole game.",
    name: "Marcus Hale",
    role: "General Manager, North Strength — Austin",
    avatar: UNSPLASH("1500648767791-00dcc994a43e", 200),
  },
  {
    quote:
      "It feels like a senior operator who never sleeps and never raises their voice. The WhatsApp concierge alone paid for the year.",
    name: "Sofia Marin",
    role: "Founder, Pulse Studios — Madrid",
    avatar: UNSPLASH("1438761681033-6461ffad8d80", 200),
  },
];

export default function Home() {
  return (
    <div className="bg-paper text-ink">
      {/* ============================================================
          01 — CINEMATIC VIDEO HERO (full viewport)
      ============================================================ */}
      <HeroVideo />

      {/* ============================================================
          PARTNER MARQUEE
      ============================================================ */}
      <section className="border-y border-line bg-paper-warm/40 py-10 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
          {[...partners, ...partners].map((p, i) => (
            <span
              key={`${p}-${i}`}
              className="mx-10 text-[11px] tracking-[0.45em] uppercase text-mute font-medium"
            >
              {p} <span className="ml-10 text-line">/</span>
            </span>
          ))}
        </div>
      </section>

      {/* ============================================================
          OPERATOR SNAPSHOT — moved from the old hero card
      ============================================================ */}
      <section className="px-6 py-32 md:py-44">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <Reveal className="lg:col-span-7 order-2 lg:order-1">
            <div className="max-w-xl">
              <span className="text-[10px] uppercase tracking-[0.32em] text-mute font-semibold">
                A morning, observed
              </span>
              <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
                What an <em className="italic text-mute">operator</em> <br />
                wakes up to.
              </h2>
              <p className="mt-8 text-mute text-lg leading-relaxed font-light">
                Revenue health, members at the edge, conversations already
                handled, and the next twenty-four hours composed in advance.
                Surfaced before the first coffee. The work, quietly, is done.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6">
                <SnapshotKpi k="₹15.2L" l="Recurring revenue" />
                <SnapshotKpi k="+₹4.8L" l="Earned this month" />
                <SnapshotKpi k="12" l="Members reawakened" />
                <SnapshotKpi k="2.4×" l="Reply, in real time" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-line shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]">
              <Image
                src={UNSPLASH("1581009146145-b5ef050c2e1e", 1200)}
                alt="Modern boutique gym interior"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />

              <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                <span className="px-3 py-1.5 rounded-full bg-paper/90 backdrop-blur text-[10px] uppercase tracking-[0.22em] font-semibold text-ink">
                  Live · Atelier Athletic
                </span>
                <span className="px-3 py-1.5 rounded-full bg-ink/80 backdrop-blur text-[10px] uppercase tracking-[0.22em] font-semibold text-paper">
                  AI Online
                </span>
              </div>

              <div className="animate-floaty absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-paper/95 backdrop-blur-xl border border-line/80 shadow-xl">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] font-semibold text-mute">
                  <span>This Month</span>
                  <span className="text-ink">+₹4.8L</span>
                </div>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-display text-4xl tracking-tight text-ink">₹15.2L</span>
                  <span className="text-xs text-mute">recurring revenue</span>
                </div>
                <div className="mt-4 h-1.5 rounded-full bg-line overflow-hidden">
                  <div className="h-full w-[78%] bg-ink rounded-full" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          02 — THE PROBLEM
      ============================================================ */}
      <section id="problem" className="bg-ink text-paper py-32 md:py-44 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 border-b border-paper/10 pb-12">
              <div>
                <span className="text-[10px] uppercase tracking-[0.34em] text-paper/55 font-semibold">
                  Chapter II — The Cost of Ordinary
                </span>
                <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
                  A great gym <br />
                  deserves more than <em className="italic text-paper/65">spreadsheets.</em>
                </h2>
              </div>
              <p className="max-w-md text-paper/65 text-base leading-relaxed font-light">
                Most fitness houses are still run on instinct and effort — not intelligence.
                The cost is invisible, and it compounds in silence, every month.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-paper/10">
            {problems.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="bg-ink p-10 md:p-12 h-full flex flex-col justify-between min-h-[320px]">
                  <span className="font-display italic text-7xl md:text-8xl tracking-tight text-lime">
                    {p.stat}
                  </span>
                  <div className="mt-12">
                    <h3 className="text-xl font-medium tracking-tight">{p.title}</h3>
                    <p className="mt-3 text-paper/55 text-[15px] leading-relaxed">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          03 — CORE SYSTEM
      ============================================================ */}
      <section id="how" className="px-6 py-32 md:py-44">
        <div className="max-w-7xl mx-auto">
          <EditorialDivider className="mb-20" label="The Composition" />
          <Reveal>
            <div className="max-w-3xl">
              <span className="text-[10px] uppercase tracking-[0.34em] text-mute font-semibold">
                Chapter III — The Composition
              </span>
              <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
                One instrument. <br />
                <em className="italic text-mute">Four</em> deliberate movements.
              </h2>
              <p className="mt-8 text-mute text-lg leading-relaxed max-w-xl font-light">
                Composed from the studio floor — not retrofitted from a generic CRM.
                Each movement is in dialogue with the next.
              </p>
            </div>
          </Reveal>

          <div className="mt-20 space-y-24">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal className="lg:col-span-6">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>

                <Reveal delay={0.1} className="lg:col-span-6">
                  <div className="lg:pl-8">
                    <span className="text-[10px] uppercase tracking-[0.34em] text-mute font-semibold">
                      {p.tag}
                    </span>
                    <h3 className="mt-5 font-display text-4xl md:text-5xl leading-[1.02] tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-6 text-mute text-lg leading-relaxed max-w-lg font-light">{p.body}</p>
                    <Link
                      href="/features"
                      className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] font-semibold text-ink hover:text-mute"
                    >
                      Read the movement <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          04 — PROOF
      ============================================================ */}
      <section id="proof" className="bg-paper-warm/50 border-y border-line py-32 md:py-44 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="max-w-3xl">
              <span className="text-[10px] uppercase tracking-[0.34em] text-mute font-semibold">
                Chapter IV — Evidence
              </span>
              <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
                Operators do not <em className="italic text-mute">buy software.</em> <br />
                They commission outcomes.
              </h2>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-line">
            {metrics.map((m, i) => (
              <Reveal key={m.l} delay={i * 0.06}>
                <div className="bg-paper-warm/50 p-8 md:p-10 h-full">
                  <div className="font-display text-5xl md:text-6xl tracking-tight text-ink">
                    {m.k}
                  </div>
                  <div className="mt-4 text-[11px] uppercase tracking-[0.22em] text-mute font-semibold">
                    {m.l}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <figure className="h-full p-8 md:p-10 rounded-3xl bg-paper border border-line flex flex-col">
                  <Quote className="w-6 h-6 text-lime fill-lime" />
                  <blockquote className="mt-6 font-display text-2xl leading-snug tracking-tight text-ink flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-8 pt-6 border-t border-line flex items-center gap-4">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-sm font-medium text-ink">{t.name}</div>
                      <div className="text-xs text-mute mt-0.5">{t.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          05 — DEMO CTA
      ============================================================ */}
      <section className="px-6 py-32 md:py-44">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-ink text-paper p-12 md:p-20">
              <div className="absolute -top-20 -right-20 w-[420px] h-[420px] rounded-full bg-lime/15 blur-3xl" />
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                <div className="lg:col-span-8">
                  <span className="text-[10px] uppercase tracking-[0.34em] text-paper/55 font-semibold">
                    Chapter V — An Invitation
                  </span>
                  <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
                    Watch your house <br />
                    conduct itself <em className="italic text-lime">— beautifully.</em>
                  </h2>
                  <p className="mt-8 max-w-lg text-paper/65 text-lg leading-relaxed font-light">
                    A thirty-minute walkthrough, composed around your operation. No
                    pitch deck. Only the instrument, your data, and the shape of the
                    next quarter.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-3 lg:items-end">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 bg-paper text-ink px-8 py-4 rounded-full text-[12px] font-semibold tracking-[0.26em] uppercase hover:bg-paper-warm transition-colors"
                  >
                    Request a Private Demo <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/features"
                    className="inline-flex items-center justify-center gap-2 px-2 py-2 text-[11px] uppercase tracking-[0.26em] font-semibold text-paper/70 hover:text-paper"
                  >
                    Or read the composition →
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function SnapshotKpi({ k, l }: { k: string; l: string }) {
  return (
    <div>
      <div className="font-display text-3xl md:text-4xl tracking-tight text-ink">{k}</div>
      <div className="mt-2 text-[10px] uppercase tracking-[0.22em] text-mute font-semibold">
        {l}
      </div>
    </div>
  );
}
