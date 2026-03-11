import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import type { NoticeAudience, NoticeCategory, NoticeMeta } from "@/lib/types";

const NEWS_DIRECTORY = path.join(process.cwd(), "content/news");

interface NoticeFrontmatter {
  title: string;
  slug: string;
  summary: string;
  publishedAt: string | Date;
  category: NoticeCategory;
  featured: boolean;
  audience: NoticeAudience[];
  ctaLabel: string;
}

function normalizeDateValue(value: string | Date | undefined): string {
  if (value instanceof Date) {
    return value.toISOString();
  }

  if (typeof value === "string") {
    return value;
  }

  return new Date().toISOString();
}

function normalizeNotice(frontmatter: Partial<NoticeFrontmatter>): NoticeMeta {
  return {
    title: frontmatter.title ?? "Untitled Notice",
    slug: frontmatter.slug ?? "",
    summary: frontmatter.summary ?? "",
    publishedAt: normalizeDateValue(frontmatter.publishedAt),
    category: frontmatter.category ?? "Community",
    featured: frontmatter.featured ?? false,
    audience: frontmatter.audience ?? ["Residents"],
    ctaLabel: frontmatter.ctaLabel ?? "Read notice",
  };
}

async function getNoticeFileNames(): Promise<string[]> {
  const files = await fs.readdir(NEWS_DIRECTORY);
  return files.filter((file) => file.endsWith(".mdx"));
}

async function readNoticeFile(fileName: string): Promise<string> {
  return fs.readFile(path.join(NEWS_DIRECTORY, fileName), "utf8");
}

export async function getAllNotices(): Promise<NoticeMeta[]> {
  const fileNames = await getNoticeFileNames();
  const notices = await Promise.all(
    fileNames.map(async (fileName) => {
      const rawContent = await readNoticeFile(fileName);
      const { data } = matter(rawContent);
      return normalizeNotice(data as Partial<NoticeFrontmatter>);
    }),
  );

  return notices.sort((left, right) =>
    right.publishedAt.localeCompare(left.publishedAt),
  );
}

export async function getFeaturedNotices(limit = 3): Promise<NoticeMeta[]> {
  const notices = await getAllNotices();
  return notices.filter((notice) => notice.featured).slice(0, limit);
}

export async function getLatestNotices(limit = 4): Promise<NoticeMeta[]> {
  const notices = await getAllNotices();
  return notices.slice(0, limit);
}

export async function getAllNoticeSlugs(): Promise<string[]> {
  const notices = await getAllNotices();
  return notices.map((notice) => notice.slug);
}

export async function getNoticeBySlug(slug: string) {
  const filePath = path.join(NEWS_DIRECTORY, `${slug}.mdx`);
  const source = await fs.readFile(filePath, "utf8");
  const { content, frontmatter } = await compileMDX<NoticeFrontmatter>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  return {
    content,
    meta: normalizeNotice(frontmatter),
  };
}
