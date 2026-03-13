"use client";

import Link from "next/link";
import { useDeferredValue, useState } from "react";
import clsx from "clsx";
import { Pill } from "@/components/ui/Pill";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatDisplayDate } from "@/lib/date";
import type { NoticeAudience, NoticeCategory, NoticeMeta } from "@/lib/types";

const ALL_CATEGORIES = "All categories";
const ALL_AUDIENCES = "All audiences";

interface NoticeArchiveExplorerProps {
  notices: NoticeMeta[];
}

function filterChipClass(active: boolean) {
  return clsx(
    "inline-flex min-h-10 items-center rounded-full border px-4 text-[0.72rem] font-semibold uppercase tracking-[var(--tracking-ui)] transition duration-200",
    active
      ? "accent-surface border-transparent text-on-dark"
      : "border-[var(--color-line)] bg-white/72 text-[var(--color-ink-soft)] hover:bg-white hover:text-[var(--color-ink)]",
  );
}

export function NoticeArchiveExplorer({
  notices,
}: NoticeArchiveExplorerProps) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const [activeCategory, setActiveCategory] = useState<
    NoticeCategory | typeof ALL_CATEGORIES
  >(ALL_CATEGORIES);
  const [activeAudience, setActiveAudience] = useState<
    NoticeAudience | typeof ALL_AUDIENCES
  >(ALL_AUDIENCES);

  const categories = Array.from(new Set(notices.map((notice) => notice.category)));
  const audiences = Array.from(new Set(notices.flatMap((notice) => notice.audience)));
  const normalizedQuery = deferredQuery.trim().toLowerCase();

  const filteredNotices = notices.filter((notice) => {
    const matchesCategory =
      activeCategory === ALL_CATEGORIES || notice.category === activeCategory;
    const matchesAudience =
      activeAudience === ALL_AUDIENCES || notice.audience.includes(activeAudience);
    const matchesQuery =
      normalizedQuery.length === 0 ||
      [
        notice.title,
        notice.summary,
        notice.category,
        ...notice.audience,
      ].some((value) => value.toLowerCase().includes(normalizedQuery));

    return matchesCategory && matchesAudience && matchesQuery;
  });

  const hasActiveFilters =
    query.trim().length > 0 ||
    activeCategory !== ALL_CATEGORIES ||
    activeAudience !== ALL_AUDIENCES;

  return (
    <section className="section-space">
      <div className="page-shell">
        <div className="soft-card surface-feature radius-feature px-6 py-7 sm:px-10 sm:py-10">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(19rem,24rem)] xl:items-end">
            <SectionHeading
              eyebrow="Notice archive"
              title="Find the estate notice you need."
              description="Search the archive, narrow by notice type, or focus on the audience the update was issued for."
              maxWidth="wide"
            />

            <div className="inset-surface radius-panel p-4 sm:p-5">
              <label
                htmlFor="notice-search"
                className="meta-label text-[var(--color-sage-deep)]"
              >
                Search archive
              </label>
              <input
                id="notice-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search notices, topics, or audience"
                className="mt-3 w-full rounded-[1.2rem] border border-[var(--color-line)] bg-white/90 px-4 py-3 text-[0.95rem] text-[var(--color-ink)] transition placeholder:text-[var(--color-ink-soft)] focus:border-[rgba(70,84,70,0.34)] focus:bg-white focus:outline-none"
              />
              <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-sm text-[var(--color-ink-soft)]">
                <span>
                  {filteredNotices.length}{" "}
                  {filteredNotices.length === 1 ? "notice" : "notices"} shown
                </span>
                {hasActiveFilters ? (
                  <button
                    type="button"
                    onClick={() => {
                      setQuery("");
                      setActiveCategory(ALL_CATEGORIES);
                      setActiveAudience(ALL_AUDIENCES);
                    }}
                    className="text-sm font-semibold text-[var(--color-sage-deep)] transition hover:text-[var(--color-ink)]"
                  >
                    Clear filters
                  </button>
                ) : (
                  <span>Newest first</span>
                )}
              </div>
            </div>
          </div>

          <div className="section-rule mt-8" />

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div>
              <p className="meta-label text-[var(--color-sage-deep)]">Category</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  type="button"
                  aria-pressed={activeCategory === ALL_CATEGORIES}
                  className={filterChipClass(activeCategory === ALL_CATEGORIES)}
                  onClick={() => setActiveCategory(ALL_CATEGORIES)}
                >
                  {ALL_CATEGORIES}
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={activeCategory === category}
                    className={filterChipClass(activeCategory === category)}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="meta-label text-[var(--color-sage-deep)]">Audience</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  type="button"
                  aria-pressed={activeAudience === ALL_AUDIENCES}
                  className={filterChipClass(activeAudience === ALL_AUDIENCES)}
                  onClick={() => setActiveAudience(ALL_AUDIENCES)}
                >
                  {ALL_AUDIENCES}
                </button>
                {audiences.map((audience) => (
                  <button
                    key={audience}
                    type="button"
                    aria-pressed={activeAudience === audience}
                    className={filterChipClass(activeAudience === audience)}
                    onClick={() => setActiveAudience(audience)}
                  >
                    {audience}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {filteredNotices.length ? (
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredNotices.map((notice) => (
                <article
                  key={notice.slug}
                  className="soft-card surface-card radius-card interactive-lift group flex h-full flex-col p-5 sm:p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <Pill>{notice.category}</Pill>
                    <div className="space-y-2 text-right">
                      <span className="meta-label block text-[var(--color-ink-soft)]">
                        {formatDisplayDate(notice.publishedAt)}
                      </span>
                      {notice.featured ? (
                        <span className="meta-label block text-[var(--color-sage-deep)]">
                          Featured
                        </span>
                      ) : null}
                    </div>
                  </div>

                  <h3 className="mt-5 text-2xl leading-tight font-medium text-[var(--color-ink)]">
                    {notice.title}
                  </h3>

                  <p className="body-copy-sm mt-4 flex-1">{notice.summary}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {notice.audience.map((audience) => (
                      <span
                        key={`${notice.slug}-${audience}`}
                        className="inset-surface radius-inset px-3 py-2 text-[0.7rem] font-semibold tracking-[var(--tracking-ui)] uppercase text-[var(--color-ink-soft)]"
                      >
                        {audience}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/news/${notice.slug}`}
                    className="text-link mt-6 group-hover:text-[var(--color-ink)]"
                  >
                    {notice.ctaLabel}
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-8 inset-surface radius-panel px-5 py-6 sm:px-7">
              <p className="meta-label text-[var(--color-sage-deep)]">
                No notices match
              </p>
              <h3 className="mt-3 text-2xl font-medium text-[var(--color-ink)]">
                Try a broader search or clear the current filters.
              </h3>
              <p className="body-copy-sm mt-4 max-w-2xl">
                The archive stays sorted by the newest notice first, so clearing
                your filters will bring the full communication history back into
                view.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
