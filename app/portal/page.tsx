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
    "Owner portal access, account records, and WeConnectU guidance for The Lombardy Lifestyle Estate.",
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
        description="The owner portal is the primary access point for account records, levy information, and other owner-facing estate information."
        actions={[
          { href: siteConfig.ownerPortalUrl, label: "Open owner portal" },
          {
            href: `mailto:${siteConfig.ownerSupportEmail}`,
            label: "Email Landsdowne",
            variant: "secondary",
          },
        ]}
        highlights={[
          "WeConnectU access",
          "Account records",
          "Owner documents",
        ]}
      />

      <section className="section-space-end">
        <div className="page-shell grid gap-5 xl:grid-cols-[0.84fr_1.16fr]">
          <SoftCard tone="dark" padding="lg">
            <p className="eyebrow text-on-dark-label">Access support</p>
            <h2 className="display-title display-section mt-4 font-semibold text-on-dark">
              WeConnectU is the primary owner access point for records, documents, and account information.
            </h2>
            <p className="mt-5 text-sm leading-7 text-on-dark-muted sm:text-base">
              If you cannot access the owner portal, contact Landsdowne at{" "}
              <a
                href={`mailto:${siteConfig.ownerSupportEmail}`}
                className="text-on-dark transition hover:text-white"
              >
                {siteConfig.ownerSupportEmail}
              </a>
              . If Landsdowne is not responsive, escalate to{" "}
              <a
                href={`mailto:${siteConfig.trusteeContactEmail}`}
                className="text-on-dark transition hover:text-white"
              >
                {siteConfig.trusteeContactEmail}
              </a>
              .
            </p>
          </SoftCard>

          <div className="grid gap-5 md:grid-cols-3">
            {portalModules.map((module, index) => (
              <SoftCard key={module.title} tone={index === 0 ? "stone" : "panel"}>
                <h2 className="text-2xl font-medium text-[var(--color-ink)]">
                  {module.title}
                </h2>
                <p className="body-copy-sm mt-4 sm:text-base">
                  {module.body}
                </p>
              </SoftCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
