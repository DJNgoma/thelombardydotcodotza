import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { StructuredData } from "@/components/layout/StructuredData";
import { PageLead } from "@/components/sections/PageLead";
import { SoftCard } from "@/components/ui/SoftCard";
import { siteConfig } from "@/content/site";
import { buildPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Owner Portal",
  description:
    "Owner portal access, account support, and WeConnectU guidance for The Lombardy Lifestyle Estate.",
  path: "/portal",
});

const portalModules = [
  {
    title: "Account documents and statements",
    body: "Owners can use the portal for statements, levy references, account records, and estate-issued documentation.",
  },
  {
    title: "Owner service records",
    body: "Maintenance requests, owner support interactions, and administration history can be kept in one accessible owner view.",
  },
  {
    title: "Access and resident information",
    body: "Owner records may include resident details, submitted visitors, and supporting information relevant to estate administration.",
  },
];

export default function PortalPage() {
  return (
    <>
      <StructuredData
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Owner Portal", path: "/portal" },
          ]),
        ]}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Owner Portal" }]} />
      <PageLead
        eyebrow="Owner Portal"
        title="Owners can access account information and estate records through WeConnectU."
        description="The owner portal is the primary access point for account records, support history, and other owner-facing estate information."
        actions={[
          { href: siteConfig.ownerPortalUrl, label: "Open owner portal" },
          {
            href: `mailto:${siteConfig.ownerSupportEmail}`,
            label: "Email support",
            variant: "secondary",
          },
        ]}
      />

      <section className="section-space-end">
        <div className="page-shell grid gap-5 md:grid-cols-3">
          {portalModules.map((module) => (
            <SoftCard key={module.title} tone="panel">
              <h2 className="text-2xl font-medium text-[var(--color-ink)]">
                {module.title}
              </h2>
              <p className="body-copy-sm mt-4 sm:text-base">
                {module.body}
              </p>
            </SoftCard>
          ))}
        </div>
        <div className="page-shell mt-5">
          <SoftCard tone="feature" padding="lg">
            <p className="eyebrow">Access support</p>
            <p className="body-copy-sm mt-4 max-w-3xl sm:text-base">
              If you cannot access the owner portal, contact{" "}
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
