import type { MetadataRoute } from "next";
import { getAllPosts } from "../lib/markdown";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gymnex.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE}/`,         lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${SITE}/features`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/about`,    lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/blog`,     lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${SITE}/contact`,  lastModified: now, changeFrequency: "yearly",  priority: 0.7 },
  ];

  const posts: MetadataRoute.Sitemap = getAllPosts().map((p) => ({
    url: `${SITE}/blog/${p.slug}`,
    lastModified: p.frontmatter.date ? new Date(p.frontmatter.date) : now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...posts];
}
