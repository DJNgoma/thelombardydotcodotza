import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { StructuredData } from "@/components/layout/StructuredData";
import { PageLead } from "@/components/sections/PageLead";
import { SoftCard } from "@/components/ui/SoftCard";
import { siteConfig } from "@/content/site";
import { buildPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Owner Notice Support",
  description:
    "Owner circular access and support guidance for The Lombardy Lifestyle Estate.",
  path: "/notices-login",
});

const noticeAccessItems = [
  {
    title: "Owner circulars",
    body: "Owner-specific circulars may be distributed through the owner portal when notices should not sit in the public archive.",
  },
  {
    title: "Governance packs",
    body: "Meeting agendas, trustee packs, and supporting documents can be shared securely with owners when required.",
  },
  {
    title: "Archive access",
    body: "Older owner communications, resolutions, and governance records can be kept behind secure owner access.",
  },
];

export default function NoticesLoginPage() {
  return (
    <>
      <StructuredData
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Owner Notice Support", path: "/notices-login" },
          ]),
        ]}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Owner Notice Support" }]} />
      <PageLead
        eyebrow="Owner Notice Support"
        title="Owner-specific circulars and governance documents are handled through secure access."
        description="General notices remain available in the public notices archive. Owner-specific packs, circulars, and controlled governance material should be accessed through the owner portal."
        actions={[
          { href: siteConfig.ownerPortalUrl, label: "Open owner portal" },
          {
            href: `mailto:${siteConfig.ownerSupportEmail}`,
            label: "Email Landsdowne support",
            variant: "secondary",
          },
        ]}
      />

      <section className="section-space-end">
        <div className="page-shell grid gap-5 md:grid-cols-3">
          {noticeAccessItems.map((item) => (
            <SoftCard key={item.title} tone="panel">
              <h2 className="text-2xl font-medium text-[var(--color-ink)]">
                {item.title}
              </h2>
              <p className="body-copy-sm mt-4 sm:text-base">
                {item.body}
              </p>
            </SoftCard>
          ))}
        </div>
        <div className="page-shell mt-5">
          <SoftCard tone="feature" padding="lg">
            <p className="body-copy-sm max-w-3xl sm:text-base">
              If you cannot reach the owner portal, contact{" "}
              <a
                href={`mailto:${siteConfig.ownerSupportEmail}`}
                className="transition hover:text-[var(--color-ink)]"
              >
                {siteConfig.ownerSupportEmail}
              </a>{" "}
              or{" "}
              <a
                href={`mailto:${siteConfig.trusteeContactEmail}`}
                className="transition hover:text-[var(--color-ink)]"
              >
                {siteConfig.trusteeContactEmail}
              </a>
              .
            </p>
          </SoftCard>
        </div>
      </section>
    </>
  );
}
