import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAllPosts } from "../../lib/markdown";
import Reveal from "../../components/Reveal";

export const metadata: Metadata = {
  title: "Case Studies & Playbooks",
  description:
    "Field notes from inside premium fitness operations using GymnexAI to retain members, convert leads and quietly run with AI.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Case Studies & Playbooks — GymnexAI",
    description: "Field notes from inside premium fitness operations using GymnexAI.",
    url: "/blog",
    type: "website",
  },
};

const UNSPLASH = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

const DEFAULT_COVER = "1517836357463-d25dfeac3438";

const getCover = (cover?: string, w = 1600) =>
  cover?.startsWith("/") ? cover : UNSPLASH(cover ?? DEFAULT_COVER, w);

export default function BlogIndex() {
  const posts = getAllPosts();
  const [feature, ...rest] = posts;

  return (
    <div className="bg-paper text-ink">
      {/* HERO */}
      <section className="pt-32 md:pt-40 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <span className="text-[10px] uppercase tracking-[0.28em] font-semibold text-mute">
              Field Notes
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-serif text-6xl md:text-[110px] leading-[0.92] tracking-tight max-w-5xl">
              Case Studies & <em className="italic text-mute">Playbooks.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-xl text-mute text-lg leading-relaxed">
              Field notes from inside premium fitness operations using GymnexAI to retain
              members, convert leads and quietly run with AI.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FEATURE */}
      {feature && (
        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <Link
                href={`/blog/${feature.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
              >
                <div className="lg:col-span-7 group relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-line transition-transform duration-1000 ease-out hover:-translate-y-0.5">
                  <Image
                    src={getCover(feature.frontmatter.cover, 1600)}
                    alt={feature.frontmatter.title}
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
                  />
                </div>
                <div className="lg:col-span-5 lg:pl-8">
                  <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.25em] font-semibold text-mute">
                    {feature.frontmatter.category && (
                      <span className="px-3 py-1.5 rounded-full border border-line">
                        {feature.frontmatter.category}
                      </span>
                    )}
                    {feature.frontmatter.date && <span>{feature.frontmatter.date}</span>}
                  </div>
                  <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.02] tracking-tight">
                    {feature.frontmatter.title}
                  </h2>
                  {feature.frontmatter.description && (
                    <p className="mt-6 text-mute text-lg leading-relaxed">
                      {feature.frontmatter.description}
                    </p>
                  )}
                  <span className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] font-semibold text-ink">
                    Read the Story <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* GRID */}
      {rest.length > 0 && (
        <section className="px-6 pb-32 md:pb-44 border-t border-line">
          <div className="max-w-7xl mx-auto pt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {rest.map((post, i) => (
                <Reveal key={post.slug} delay={i * 0.06}>
                  <Link href={`/blog/${post.slug}`} className="group block transition-all duration-300">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-line transition-all duration-300 group-hover:shadow-[0_20px_60px_-40px_rgba(0,0,0,0.25)] group-hover:-translate-y-0.5">
                      <Image
                        src={getCover(post.frontmatter.cover, 1000)}
                        alt={post.frontmatter.title}
                        fill
                        sizes="(min-width: 1024px) 30vw, 100vw"
                        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="mt-6 flex items-center gap-4 text-[10px] uppercase tracking-[0.25em] font-semibold text-mute">
                      {post.frontmatter.category && <span>{post.frontmatter.category}</span>}
                      {post.frontmatter.date && <span>· {post.frontmatter.date}</span>}
                    </div>
                    <h3 className="mt-4 font-serif text-2xl md:text-3xl leading-snug tracking-tight">
                      {post.frontmatter.title}
                    </h3>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
