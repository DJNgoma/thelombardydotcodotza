import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { StructuredData } from "@/components/layout/StructuredData";
import { PageLead } from "@/components/sections/PageLead";
import { SoftCard } from "@/components/ui/SoftCard";
import { buildPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Estate Rules",
  description:
    "Community standards, respectful shared-space use, access expectations, tenant compliance, and resident conduct principles at The Lombardy.",
  path: "/estate-rules",
});

const ruleThemes = [
  {
    title: "Shared standards",
    body: "Residents, owners, tenants, and guests are expected to contribute to a clean, calm, and well-managed estate environment.",
  },
  {
    title: "Access and movement",
    body: "Access control requirements, guest submissions, and movement rules support security and must be followed consistently.",
  },
  {
    title: "Shared amenities",
    body: "Clubhouse, pool, braai, and gym use must remain considerate, booked where required, and aligned with estate procedures.",
  },
  {
    title: "Tenant responsibility",
    body: "Owners remain accountable for ensuring tenants understand and comply with estate rules before and during occupation.",
  },
  {
    title: "Pet registration",
    body: "Pets kept in the estate must be registered and managed responsibly in line with estate standards, neighbour consideration, and shared-space expectations.",
  },
];

export default function EstateRulesPage() {
  return (
    <>
      <StructuredData
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Estate Rules", path: "/estate-rules" },
          ]),
        ]}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Estate Rules" }]} />
      <PageLead
        eyebrow="Estate Rules"
        title="Community standards that protect residential quality."
        description="This page summarises the estate’s standards for access, shared amenities, conduct, tenant compliance, and pet registration."
      />

      <section className="section-space-end">
        <div className="page-shell grid gap-5 md:grid-cols-2">
          {ruleThemes.map((theme) => (
            <SoftCard key={theme.title}>
              <h2 className="text-2xl font-medium text-[var(--color-ink)]">
                {theme.title}
              </h2>
              <p className="body-copy-sm mt-4 sm:text-base">
                {theme.body}
              </p>
            </SoftCard>
          ))}
        </div>
      </section>
    </>
  );
}
