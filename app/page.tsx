import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Quote } from "lucide-react";
import Reveal from "../components/Reveal";
import EditorialDivider from "../components/EditorialDivider";
import HeroVideo from "../components/HeroVideo";

const UNSPLASH = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

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
    image: "/images/system/retention-intelligence-laptop.png",
  },
  {
    tag: "II — Lead Conversion",
    title: "A concierge that never sleeps.",
    body: "Every inquiry receives a considered, immediate reply. Tour booked, trial confirmed, doubt resolved — in your house voice, on the channels they already trust.",
    image: "/images/system/lead-conversion-ai-concierge.png",
  },
  {
    tag: "III — Operations Atelier",
    title: "One command surface.",
    body: "Members, payments, attendance, trainers, programming — composed into a single, deliberate control room. The data finally lives in one place. So does the decision.",
    image: "/images/system/operations-command-center.png",
  },
  {
    tag: "IV — Member Experience",
    title: "A coach in every pocket.",
    body: "Personal programming, recovery, nutrition and ritual — delivered with restraint through the channel members already keep close.",
    image: "/images/system/member-experience-nex-coach.png",
  },
];

const metrics = [
  { k: "Qualified leads", l: "Immediate follow-up" },
  { k: "Member retention", l: "Signals surfaced early" },
  { k: "Operational clarity", l: "One command surface" },
  { k: "Faster replies", l: "In minutes, not hours" },
];

export default function Home() {
  return (
    <div className="bg-paper text-ink">
      {/* ============================================================
          01 — CINEMATIC VIDEO HERO (full viewport)
      ============================================================ */}
      <HeroVideo />

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
              <div className="mt-10 text-[10px] uppercase tracking-[0.32em] text-mute font-semibold">
                SAMPLE DATA
              </div>
              <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-6">
                <SnapshotKpi k="$42,860" l="Monthly recurring revenue" caption="Active memberships" />
                <SnapshotKpi k="$2,940" l="Revenue at risk" caption="Members needing attention" />
                <SnapshotKpi k="12" l="Members re-engaged" />
                <SnapshotKpi k="7" l="Leads awaiting follow-up" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-5 order-1 lg:order-2">
            <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-line shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)] transition-transform duration-1000 ease-out hover:-translate-y-0.5">
              <Image
                src="/images/system/morning-observed-operator.png"
                alt="Gym owner reviewing daily operations inside a premium fitness studio"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />

              <div className="animate-floaty absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-paper/95 backdrop-blur-xl border border-line/80 shadow-xl">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] font-semibold text-mute">
                  <span>THIS MONTH</span>
                  <span className="text-ink/75 uppercase tracking-[0.28em] text-[9px]">Illustrative workspace preview</span>
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <span className="text-[10px] uppercase tracking-[0.26em] text-mute font-semibold">Monthly recurring revenue</span>
                  <span className="font-display text-4xl md:text-5xl tracking-tight text-ink">$42,860</span>
                  <span className="text-xs text-mute uppercase tracking-[0.22em]">Sample data</span>
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
                  <span className="font-display text-7xl md:text-8xl tracking-tight text-paper">
                    {p.stat}
                  </span>
                  <div className="mt-12">
                    <h3 className="text-xl font-medium tracking-tight text-paper">{p.title}</h3>
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
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line transition-transform duration-1000 ease-out hover:-translate-y-0.5">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
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
                      className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] font-semibold text-ink hover:text-mute transition-all duration-300"
                    >
                      Read the movement <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          04 — THE SYSTEM (3 problems → 3 solutions)
      ============================================================ */}
      <section id="system" className="bg-paper/0 border-y border-line py-32 md:py-44 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="max-w-3xl">
              <span className="text-[10px] uppercase tracking-[0.34em] text-mute font-semibold">
                THE SYSTEM
              </span>
              <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
                Three problems. <br />
                One clearer operation.
              </h2>
              <p className="mt-8 text-mute text-lg leading-relaxed max-w-xl font-medium">
                GymnexAI helps fitness studios prevent silent churn, respond to leads faster, and give owners one clear operating system for the business.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3 items-stretch">
            <Reveal>
              <div className="rounded-[1.5rem] border border-line bg-paper p-8 md:p-10 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.22)] h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.3)] hover:border-line-soft">
                <div className="flex-1">
                  <div className="text-[10px] uppercase tracking-[0.32em] text-mute font-semibold">
                    MEMBER CHURN
                  </div>
                  <h3 className="mt-6 font-display text-2xl md:text-3xl leading-tight tracking-tight text-ink">Members disappear silently.</h3>
                  <p className="mt-4 text-ink/70 text-base leading-relaxed font-light">
                    Revenue starts slipping when members stop showing up and no one catches the warning signs early enough.
                  </p>
                </div>

                <div className="mt-6 border-t border-line/60" />

                <div className="mt-6">
                  <div className="text-[10px] uppercase tracking-[0.28em] text-mute font-semibold">
                    GYMNEXAI SOLUTION
                  </div>
                  <p className="mt-3 text-ink text-base leading-relaxed font-medium">
                    Predict churn risk early by surfacing attendance and engagement signals, so your team can intervene before a member is lost.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="rounded-[1.5rem] border border-line bg-paper p-8 md:p-10 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.22)] h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.3)] hover:border-line-soft">
                <div className="flex-1">
                  <div className="text-[10px] uppercase tracking-[0.32em] text-mute font-semibold">
                    LEAD RESPONSE
                  </div>
                  <h3 className="mt-6 font-display text-2xl md:text-3xl leading-tight tracking-tight text-ink">Enquiries go cold too fast.</h3>
                  <p className="mt-4 text-ink/70 text-base leading-relaxed font-light">
                    A prospective member can lose interest quickly when they do not receive timely answers about the studio.
                  </p>
                </div>

                <div className="mt-6 border-t border-line/60" />

                <div className="mt-6">
                  <div className="text-[10px] uppercase tracking-[0.28em] text-mute font-semibold">
                    GYMNEXAI SOLUTION
                  </div>
                  <p className="mt-3 text-ink text-base leading-relaxed font-medium">
                    Send instant, accurate replies with studio details to keep each lead engaged, while your staff continues personal follow-up over calls.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-[1.5rem] border border-line bg-paper p-8 md:p-10 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.22)] h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.3)] hover:border-line-soft">
                <div className="flex-1">
                  <div className="text-[10px] uppercase tracking-[0.32em] text-mute font-semibold">
                    OWNER OVERLOAD
                  </div>
                  <h3 className="mt-6 font-display text-2xl md:text-3xl leading-tight tracking-tight text-ink">Owners are buried in operations.</h3>
                  <p className="mt-4 text-ink/70 text-base leading-relaxed font-light">
                    Too much time is lost chasing updates, checking multiple tools and asking staff what needs attention.
                  </p>
                </div>

                <div className="mt-6 border-t border-line/60" />

                <div className="mt-6">
                  <div className="text-[10px] uppercase tracking-[0.28em] text-mute font-semibold">
                    GYMNEXAI SOLUTION
                  </div>
                  <p className="mt-3 text-ink text-base leading-relaxed font-medium">
                    Bring member signals, lead priorities and daily insights into one operating system, so owners reclaim time for growth — and life outside the gym.
                  </p>
                </div>
              </div>
            </Reveal>
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
              <div className="absolute -top-20 -right-20 w-[420px] h-[420px] rounded-full bg-paper/10 blur-3xl" />
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                <div className="lg:col-span-8">
                  <span className="text-[10px] uppercase tracking-[0.34em] text-paper/55 font-semibold">
                    Chapter V — An Invitation
                  </span>
                  <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
                    Watch your house <br />
                    conduct itself <em className="italic text-paper/80">— beautifully.</em>
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

function SnapshotKpi({ k, l, caption }: { k: string; l: string; caption?: string }) {
  return (
    <div>
      <div className="font-display text-3xl md:text-4xl tracking-tight text-ink">{k}</div>
      <div className="mt-2 text-[10px] uppercase tracking-[0.22em] text-mute font-semibold">
        {l}
      </div>
      {caption ? (
        <div className="mt-2 text-[11px] text-paper/70 uppercase tracking-[0.24em] font-medium">
          {caption}
        </div>
      ) : null}
    </div>
  );
}