import Link from "next/link";
import { Pill } from "@/components/ui/Pill";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatDisplayDate } from "@/lib/date";
import type { NoticeMeta } from "@/lib/types";

interface NoticeCardGridProps {
  notices: NoticeMeta[];
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function NoticeCardGrid({
  notices,
  eyebrow = "News & Notices",
  title = "Latest community updates",
  description = "Resident communication, planned maintenance, governance notices, and meeting updates are published here first.",
}: NoticeCardGridProps) {
  return (
    <section className="section-space">
      <div className="page-shell">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          maxWidth="wide"
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {notices.map((notice) => (
            <article
              key={notice.slug}
              className="soft-card surface-card radius-card interactive-lift group flex h-full flex-col p-5 sm:p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <Pill>{notice.category}</Pill>
                <span className="meta-label text-[var(--color-ink-soft)]">
                  {formatDisplayDate(notice.publishedAt)}
                </span>
              </div>
              <h3 className="mt-5 text-2xl leading-tight font-medium text-[var(--color-ink)]">
                {notice.title}
              </h3>
              <p className="body-copy-sm mt-4 flex-1">
                {notice.summary}
              </p>
              <Link
                href={`/news/${notice.slug}`}
                className="text-link mt-6 group-hover:text-[var(--color-ink)]"
              >
                {notice.ctaLabel}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
