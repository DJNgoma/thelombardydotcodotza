import fs from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { StructuredData } from "@/components/layout/StructuredData";
import { NoticeCardGrid } from "@/components/sections/NoticeCardGrid";
import { PageLead } from "@/components/sections/PageLead";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SoftCard } from "@/components/ui/SoftCard";
import { getAllNotices } from "@/lib/content";
import { buildPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "News & Notices",
  description:
    "Estate notices, maintenance updates, levy communication, meeting announcements, and trustee updates for The Lombardy Lifestyle Estate.",
  path: "/news",
});

async function newsletterExists() {
  try {
    await fs.access(
      path.join(
        process.cwd(),
        "public/documents/the-lombardy-news-letter-march-2026.pdf",
      ),
    );
    return true;
  } catch {
    return false;
  }
}

export default async function NewsPage() {
  const [notices, hasNewsletterPdf] = await Promise.all([
    getAllNotices(),
    newsletterExists(),
  ]);

  return (
    <>
      <StructuredData
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "News & Notices", path: "/news" },
          ]),
        ]}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "News & Notices" }]} />
      <PageLead
        eyebrow="News & Notices"
        title="Current estate communication for owners and residents."
        description="Maintenance programmes, levy communication, trustee notices, and meeting announcements are published here in a clear estate archive."
        actions={[
          { href: "/governance", label: "Governance page" },
          { href: "/management", label: "Management overview", variant: "secondary" },
        ]}
      />

      <section className="section-space-end-tight">
        <div className="page-shell">
          <SoftCard tone="panel">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow">Newsletter archive</p>
                <h2 className="mt-4 text-3xl font-medium text-[var(--color-ink)]">
                  The March 2026 newsletter remains available as a direct reference.
                </h2>
                <p className="body-copy-sm mt-4 sm:text-base">
                  The latest newsletter includes maintenance, finance, tenant compliance, and governance updates for the estate.
                </p>
              </div>
              {hasNewsletterPdf ? (
                <ButtonLink
                  href="/documents/the-lombardy-news-letter-march-2026.pdf"
                  variant="secondary"
                  size="compact"
                >
                  Download newsletter PDF
                </ButtonLink>
              ) : (
                <div className="body-copy-sm inset-surface radius-inset px-5 py-4">
                  The March 2026 newsletter PDF is not attached in this build.
                </div>
              )}
            </div>
          </SoftCard>
        </div>
      </section>

      <NoticeCardGrid
        notices={notices}
        eyebrow="Notice archive"
        title="All current notices"
        description="Each notice is published as its own update so owners and residents can find estate information quickly."
      />
    </>
  );
}
