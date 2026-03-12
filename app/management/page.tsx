import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { StructuredData } from "@/components/layout/StructuredData";
import { EstateMapCard } from "@/components/sections/EstateMapCard";
import { ManagementPanel } from "@/components/sections/ManagementPanel";
import { PageLead } from "@/components/sections/PageLead";
import { SoftCard } from "@/components/ui/SoftCard";
import { siteConfig } from "@/content/site";
import { buildPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Management",
  description:
    "Operational management, resident support, and owner administration for The Lombardy Lifestyle Estate.",
  path: "/management",
});

const managementFunctions = [
  {
    title: "Operational management",
    body: "Landsdowne Property Group supports day-to-day estate operations and owner communication across the estate.",
  },
  {
    title: "Maintenance coordination",
    body: "Maintenance planning, contractor coordination, and ongoing work communication are managed through the operational structure.",
  },
  {
    title: "Resident support",
    body: "Owners, residents, and tenants rely on Landsdowne and the Estate Manager line for day-to-day support, issue reporting, and practical guidance.",
  },
  {
    title: "Owner administration",
    body: "Finance-related owner matters and account support are administered through Landsdowne rather than detailed public-facing process notes.",
  },
];

export default function ManagementPage() {
  return (
    <>
      <StructuredData
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Management", path: "/management" },
          ]),
        ]}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Management" }]} />
      <PageLead
        eyebrow="Management"
        title="Operational support and estate administration managed by Landsdowne."
        description="The Lombardy Lifestyle Estate’s operational management is handled by Landsdowne Property Group. Landsdowne supports maintenance coordination, resident queries, estate administration, and finance-related owner support."
        actions={[
          {
            href: `mailto:${siteConfig.ownerSupportEmail}`,
            label: "Email Landsdowne",
          },
          {
            href: siteConfig.estateManagerWhatsappUrl,
            label: "WhatsApp Estate Manager",
            variant: "secondary",
          },
        ]}
        highlights={[
          "Landsdowne support",
          "Estate Manager WhatsApp",
          "Trustee escalation",
        ]}
      />

      <section className="section-space-end-tight">
        <div className="page-shell grid gap-5 xl:grid-cols-[0.82fr_1.18fr]">
          <SoftCard tone="dark" padding="lg">
            <p className="eyebrow text-on-dark-label">Support pathway</p>
            <h2 className="display-title display-section mt-4 font-semibold text-on-dark">
              Landsdowne is the first point of contact for finance queries, owner administration, and general estate matters.
            </h2>
            <p className="mt-5 text-sm leading-7 text-on-dark-muted sm:text-base">
              For day-to-day estate management issues, message the Estate Manager on{" "}
              <a
                href={siteConfig.estateManagerWhatsappUrl}
                className="text-on-dark transition hover:text-white"
              >
                WhatsApp at {siteConfig.estateManagerWhatsapp}
              </a>
              . Trustees remain an escalation path if Landsdowne is not responsive.
            </p>
          </SoftCard>

          <div className="grid gap-5 md:grid-cols-2">
            {managementFunctions.map((item, index) => (
              <SoftCard key={item.title} tone={index === 0 ? "stone" : "card"}>
                <h2 className="text-2xl font-medium text-[var(--color-ink)]">
                  {item.title}
                </h2>
                <p className="body-copy-sm mt-4 sm:text-base">
                  {item.body}
                </p>
              </SoftCard>
            ))}
          </div>
        </div>
      </section>

      <ManagementPanel />
      <EstateMapCard />
    </>
  );
}
