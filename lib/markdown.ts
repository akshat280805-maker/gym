import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const postsDirectory = path.join(process.cwd(), 'content');

export type PostFrontmatter = {
  title: string;
  description?: string;
  date?: string;
  category?: string;
  cover?: string;
};

export type PostMeta = {
  slug: string;
  frontmatter: PostFrontmatter;
};

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) return [];
  const fileNames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.md'));
  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fileContents = fs.readFileSync(path.join(postsDirectory, fileName), 'utf8');
    const { data } = matter(fileContents);
    return { slug, frontmatter: data as PostFrontmatter };
  });
  return posts.sort((a, b) => {
    const da = a.frontmatter.date ? Date.parse(a.frontmatter.date) : 0;
    const db = b.frontmatter.date ? Date.parse(b.frontmatter.date) : 0;
    return db - da;
  });
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const html = marked.parse(content, { async: false });
  return { frontmatter: data as PostFrontmatter, content, html };
}
