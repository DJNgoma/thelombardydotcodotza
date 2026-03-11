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
  variant?: "grid" | "featured";
  tone?: "light" | "dark";
}

export function NoticeCardGrid({
  notices,
  eyebrow = "News & Notices",
  title = "Latest community updates",
  description = "Resident communication, planned maintenance, governance notices, and meeting updates are published here first.",
  variant = "grid",
  tone = "light",
}: NoticeCardGridProps) {
  const [primaryNotice, ...secondaryNotices] = notices;

  return (
    <section className="section-space">
      <div className="page-shell">
        <div
          className={
            tone === "dark"
              ? "soft-card surface-dark radius-feature px-6 py-7 sm:px-10 sm:py-10"
              : undefined
          }
        >
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            maxWidth="wide"
            tone={tone}
          />

          {variant === "featured" && primaryNotice ? (
            <div className="mt-10 grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
              <article className="soft-card surface-panel radius-feature p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <Pill>{primaryNotice.category}</Pill>
                  <span className="meta-label text-[var(--color-ink-soft)]">
                    {formatDisplayDate(primaryNotice.publishedAt)}
                  </span>
                </div>
                <h3 className="mt-6 text-[2.2rem] leading-[1.02] font-medium text-[var(--color-ink)] sm:text-[2.7rem]">
                  {primaryNotice.title}
                </h3>
                <p className="body-copy mt-5 max-w-2xl">
                  {primaryNotice.summary}
                </p>
                <Link
                  href={`/news/${primaryNotice.slug}`}
                  className="text-link mt-7"
                >
                  {primaryNotice.ctaLabel}
                </Link>
              </article>

              <div className="grid gap-5">
                {secondaryNotices.map((notice) => (
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
          ) : (
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
          )}
        </div>
      </div>
    </section>
  );
}
