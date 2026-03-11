import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { StructuredData } from "@/components/layout/StructuredData";
import { Pill } from "@/components/ui/Pill";
import { getAllNoticeSlugs, getNoticeBySlug } from "@/lib/content";
import { formatDisplayDate } from "@/lib/date";
import { buildPageMetadata } from "@/lib/metadata";
import { articleSchema, breadcrumbSchema } from "@/lib/structured-data";

interface NoticePageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

async function safeGetNotice(slug: string) {
  try {
    return await getNoticeBySlug(slug);
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  const slugs = await getAllNoticeSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: NoticePageProps): Promise<Metadata> {
  const { slug } = await params;
  const notice = await safeGetNotice(slug);

  if (!notice) {
    return buildPageMetadata({
      title: "Notice not found",
      description: "Requested estate notice could not be found.",
      path: "/news",
    });
  }

  return buildPageMetadata({
    title: notice.meta.title,
    description: notice.meta.summary,
    path: `/news/${notice.meta.slug}`,
  });
}

export default async function NoticePage({ params }: NoticePageProps) {
  const { slug } = await params;
  const notice = await safeGetNotice(slug);

  if (!notice) {
    notFound();
  }

  return (
    <>
      <StructuredData
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "News & Notices", path: "/news" },
            { name: notice.meta.title, path: `/news/${notice.meta.slug}` },
          ]),
          articleSchema(notice.meta),
        ]}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "News & Notices", href: "/news" },
          { label: notice.meta.title },
        ]}
      />

      <section className="section-space">
        <div className="page-shell grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="soft-card surface-panel radius-panel sticky-page-aside p-6 sm:p-8 lg:sticky lg:self-start">
            <Pill>{notice.meta.category}</Pill>
            <h1 className="display-title display-section mt-5 font-semibold text-[var(--color-ink)]">
              {notice.meta.title}
            </h1>
            <p className="body-copy-sm mt-5 sm:text-base">
              {notice.meta.summary}
            </p>
            <div className="section-rule my-6" />
            <div className="body-copy-sm space-y-4 sm:text-base">
              <p>
                <strong className="text-[var(--color-ink)]">Published:</strong>{" "}
                {formatDisplayDate(notice.meta.publishedAt)}
              </p>
              <p>
                <strong className="text-[var(--color-ink)]">Audience:</strong>{" "}
                {notice.meta.audience.join(", ")}
              </p>
            </div>
            <Link
              href="/news"
              className="text-link mt-8"
            >
              Back to all notices
            </Link>
          </aside>

          <article className="soft-card surface-feature radius-panel px-6 py-8 sm:px-10">
            <div className="mdx">{notice.content}</div>
          </article>
        </div>
      </section>
    </>
  );
}
