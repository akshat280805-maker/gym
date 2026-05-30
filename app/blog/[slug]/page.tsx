import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getAllPosts, getPostBySlug } from "../../../lib/markdown";

const UNSPLASH = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;
const DEFAULT_COVER = "1517836357463-d25dfeac3438";

const getCover = (cover?: string, w = 1600) =>
  cover?.startsWith("/") ? cover : UNSPLASH(cover ?? DEFAULT_COVER, w);

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const url = `/blog/${slug}`;
  const cover = getCover(post.frontmatter.cover, 1800);
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      url,
      images: [{ url: cover, width: 1800, height: 1013, alt: post.frontmatter.title }],
      publishedTime: post.frontmatter.date,
      section: post.frontmatter.category,
    },
    twitter: {
      card: "summary_large_image",
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      images: [cover],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { frontmatter, html } = post;

  const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gymnex.ai";
  const url = `${SITE}/blog/${slug}`;
  const cover = getCover(frontmatter.cover, 1800);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: frontmatter.title,
    description: frontmatter.description,
    image: [cover],
    datePublished: frontmatter.date,
    dateModified: frontmatter.date,
    author: { "@type": "Organization", name: "GymnexAI" },
    publisher: {
      "@type": "Organization",
      name: "GymnexAI",
      logo: { "@type": "ImageObject", url: `${SITE}/icon.svg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    articleSection: frontmatter.category,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Case Studies", item: `${SITE}/blog` },
      { "@type": "ListItem", position: 3, name: frontmatter.title, item: url },
    ],
  };

  return (
    <article className="bg-paper text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="pt-32 md:pt-40 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] font-semibold text-mute hover:text-ink"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> All Case Studies
          </Link>

          <div className="mt-10 flex items-center gap-4 text-[10px] uppercase tracking-[0.25em] font-semibold text-mute">
            {frontmatter.category && (
              <span className="px-3 py-1.5 rounded-full border border-line">
                {frontmatter.category}
              </span>
            )}
            {frontmatter.date && <span>{frontmatter.date}</span>}
          </div>

          <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[0.95] tracking-tight">
            {frontmatter.title}
          </h1>
          {frontmatter.description && (
            <p className="mt-8 text-mute text-xl leading-relaxed">
              {frontmatter.description}
            </p>
          )}
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-5xl mx-auto">
          <div className="group relative aspect-[16/9] overflow-hidden rounded-[2rem] border border-line transition-transform duration-1000 ease-out hover:-translate-y-0.5">
            <Image
              src={cover}
              alt={frontmatter.title}
              fill
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div
          className="max-w-3xl mx-auto prose-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-3xl mx-auto rounded-[2rem] bg-ink text-paper p-10 md:p-14 text-center">
          <h3 className="font-serif text-3xl md:text-4xl leading-tight tracking-tight">
            See what GymnexAI can do for <em className="italic text-paper/80">your gym.</em>
          </h3>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 bg-paper text-ink px-7 py-3.5 rounded-full text-[11px] font-semibold tracking-[0.22em] uppercase hover:bg-paper-warm transition-colors"
          >
            Book a Private Demo <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Inline prose styling — keeps this page self-contained */}
      <style>{`
        .prose-content h1 {
          font-family: var(--font-serif);
          font-size: 2.5rem;
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
        }
        .prose-content h2 {
          font-family: var(--font-serif);
          font-size: 2rem;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
        }
        .prose-content p {
          font-size: 1.125rem;
          line-height: 1.75;
          color: var(--color-ink-soft);
          margin: 1.25rem 0;
        }
        .prose-content strong { color: var(--color-ink); font-weight: 600; }
        .prose-content ol, .prose-content ul {
          padding-left: 1.5rem;
          margin: 1.25rem 0;
          color: var(--color-ink-soft);
          font-size: 1.0625rem;
          line-height: 1.75;
        }
        .prose-content li { margin: 0.5rem 0; }
        .prose-content a {
          color: var(--color-ink);
          text-decoration: underline;
          text-underline-offset: 4px;
          text-decoration-color: var(--color-line);
        }
        .prose-content a:hover { text-decoration-color: var(--color-ink); }
        .prose-content img {
          display: block;
          max-width: 100%;
          height: auto;
          margin: 2rem auto;
          border-radius: 1.25rem;
          border: 1px solid var(--color-line);
        }
        .prose-content blockquote {
          margin: 1.5rem 0;
          padding-left: 1.25rem;
          border-left: 2px solid var(--color-line);
          color: var(--color-mute);
          font-style: italic;
        }
        .prose-content code {
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 0.95em;
          background: var(--color-line-soft);
          padding: 0.1rem 0.35rem;
          border-radius: 0.35rem;
        }
      `}</style>
    </article>
  );
}
