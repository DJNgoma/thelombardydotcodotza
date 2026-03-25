import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageLead } from "@/components/sections/PageLead";
import { SoftCard } from "@/components/ui/SoftCard";
import { StaticImage } from "@/components/ui/StaticImage";
import { buildPageMetadata } from "@/lib/metadata";
import { estateCourtyardImage } from "@/lib/image-assets";
import { breadcrumbSchema } from "@/lib/structured-data";
import { StructuredData } from "@/components/layout/StructuredData";

export const metadata: Metadata = buildPageMetadata({
  title: "About The Estate",
  description:
    "Overview of The Lombardy Lifestyle Estate, its secure residential environment, standards, and managed community approach.",
  path: "/about",
});

const principles = [
  {
    title: "Estate overview",
    body: "The Lombardy Lifestyle Estate is a managed residential environment built around secure, modern living and clear operational structure.",
  },
  {
    title: "Secure residential community",
    body: "The estate prioritises access control, managed visitor processes, and resident-first safety standards.",
  },
  {
    title: "Lifestyle positioning",
    body: "Amenities support everyday residential life with a calm, premium atmosphere and a managed shared environment.",
  },
  {
    title: "Community standards",
    body: "Conduct, upkeep, and shared space use are shaped by estate rules and an expectation of respectful communal living.",
  },
  {
    title: "Managed environment",
    body: "Operational management is handled by Landsdowne Property Group, allowing the estate to maintain continuity in service delivery and administration.",
  },
];

export default function AboutPage() {
  const [overview, secureCommunity, lifestylePositioning, communityStandards, managedEnvironment] =
    principles;

  return (
    <>
      <StructuredData
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About The Estate", path: "/about" },
          ]),
        ]}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About The Estate" }]} />
      <PageLead
        eyebrow="About The Estate"
        title="A managed community environment with residential calm at its centre."
        description="The Lombardy Lifestyle Estate is a managed residential community with secure access, shared amenities, clear governance, and practical day-to-day estate administration."
        actions={[
          { href: "/living", label: "Living at The Lombardy" },
          { href: "/governance", label: "View governance", variant: "secondary" },
        ]}
        highlights={[
          "Secure access",
          "Shared amenities",
          "Managed by Landsdowne",
        ]}
      />

      <section className="section-space-end">
        <div className="page-shell grid gap-6 xl:grid-cols-[1.06fr_0.94fr]">
          <SoftCard className="overflow-hidden p-3" tone="stone" padding="md">
            <div className="grid gap-3 lg:grid-cols-[1.04fr_0.96fr]">
              <div className="radius-panel relative min-h-[27rem] overflow-hidden lg:min-h-[33rem]">
                <StaticImage
                  {...estateCourtyardImage}
                  alt="Residential courtyard and building frontage at The Lombardy Lifestyle Estate."
                  pictureClassName="absolute inset-0"
                  sizes="(max-width: 1279px) 100vw, 44vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="grid gap-3">
                <div className="surface-panel radius-card border border-[var(--color-line)] p-5 sm:p-6">
                  <p className="meta-label text-[var(--color-sage-deep)]">
                    {overview.title}
                  </p>
                  <p className="body-copy-sm mt-4 sm:text-base">
                    {overview.body}
                  </p>
                </div>
                <div className="surface-panel radius-card border border-[var(--color-line)] p-5 sm:p-6">
                  <p className="meta-label text-[var(--color-sage-deep)]">
                    {secureCommunity.title}
                  </p>
                  <p className="body-copy-sm mt-4 sm:text-base">
                    {secureCommunity.body}
                  </p>
                </div>
              </div>
            </div>
          </SoftCard>

          <div className="grid gap-5">
            <SoftCard tone="dark" padding="lg">
              <p className="eyebrow text-on-dark-label">
                {lifestylePositioning.title}
              </p>
              <h2 className="display-title display-section mt-4 font-semibold text-on-dark">
                Residential calm, shared amenities, and a managed sense of order.
              </h2>
              <p className="mt-5 text-sm leading-7 text-on-dark-muted sm:text-base">
                {lifestylePositioning.body}
              </p>
            </SoftCard>

            <div className="grid gap-5 md:grid-cols-2">
              <SoftCard key={communityStandards.title} tone="panel">
                <h2 className="text-2xl font-medium text-[var(--color-ink)]">
                  {communityStandards.title}
                </h2>
                <p className="body-copy-sm mt-4 sm:text-base">
                  {communityStandards.body}
                </p>
              </SoftCard>
              <SoftCard key={managedEnvironment.title} tone="card">
                <h2 className="text-2xl font-medium text-[var(--color-ink)]">
                  {managedEnvironment.title}
                </h2>
                <p className="body-copy-sm mt-4 sm:text-base">
                  {managedEnvironment.body}
                </p>
              </SoftCard>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
