import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { StructuredData } from "@/components/layout/StructuredData";
import { PageLead } from "@/components/sections/PageLead";
import { SoftCard } from "@/components/ui/SoftCard";
import { siteConfig } from "@/content/site";
import { buildPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Finance Support",
  description:
    "Finance-related owner support and Landsdowne contact guidance for The Lombardy Lifestyle Estate.",
  path: "/levy-resources",
});

const financeSupportItems = [
  {
    title: "Finance contact",
    body: "Finance-related owner matters are administered through Landsdowne.",
  },
  {
    title: "Owner records",
    body: "If you already have owner portal access, use WeConnectU for account records, circulars, and estate-issued documents.",
  },
  {
    title: "Management issues",
    body: "Estate management issues can be sent to the Estate Manager on WhatsApp for operational follow-up.",
  },
  {
    title: "Escalation",
    body: "If Landsdowne is not responsive, trustees remain the escalation path for unresolved support matters.",
  },
];

export default function LevyResourcesPage() {
  return (
    <>
      <StructuredData
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Finance Support", path: "/levy-resources" },
          ]),
        ]}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Finance Support" }]} />
      <PageLead
        eyebrow="Finance Support"
        title="Finance-related owner matters should be directed to Landsdowne."
        description="Finance support for owners is administered through Landsdowne. Use the contact path below rather than relying on detailed public-facing process notes."
        actions={[
          {
            href: `mailto:${siteConfig.ownerSupportEmail}`,
            label: "Email Landsdowne",
          },
          {
            href: siteConfig.ownerPortalPath,
            label: "Owner portal",
            variant: "secondary",
          },
        ]}
        highlights={[
          "Landsdowne contact",
          "Owner portal",
          "Trustee escalation",
        ]}
      />

      <section className="section-space-end">
        <div className="page-shell grid gap-5 xl:grid-cols-[0.82fr_1.18fr]">
          <SoftCard tone="dark" padding="lg">
            <p className="eyebrow text-on-dark-label">Owner finance support</p>
            <h2 className="display-title display-section mt-4 font-semibold text-on-dark">
              Landsdowne administers finance-related support for owners.
            </h2>
            <p className="mt-5 text-sm leading-7 text-on-dark-muted sm:text-base">
              For finance-related queries, contact Landsdowne at{" "}
              <a
                href={`mailto:${siteConfig.ownerSupportEmail}`}
                className="text-on-dark transition hover:text-white"
              >
                {siteConfig.ownerSupportEmail}
              </a>
              . Estate management issues can be sent to the Estate Manager on{" "}
              <a
                href={siteConfig.estateManagerWhatsappUrl}
                className="text-on-dark transition hover:text-white"
              >
                WhatsApp at {siteConfig.estateManagerWhatsapp}
              </a>
              . If Landsdowne is not responsive, escalations may be sent to{" "}
              <a
                href={`mailto:${siteConfig.trusteeContactEmail}`}
                className="text-on-dark transition hover:text-white"
              >
                {siteConfig.trusteeContactEmail}
              </a>
              .
            </p>
          </SoftCard>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {financeSupportItems.map((item, index) => (
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
    </>
  );
}
