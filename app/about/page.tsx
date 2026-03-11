import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageLead } from "@/components/sections/PageLead";
import { SoftCard } from "@/components/ui/SoftCard";
import { buildPageMetadata } from "@/lib/metadata";
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
      />

      <section className="section-space-end">
        <div className="page-shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <SoftCard className="overflow-hidden p-3" tone="panel" padding="md">
            <div className="radius-panel relative min-h-[28rem] overflow-hidden">
              <Image
                src="/images/estate/estate-courtyard-clean.jpg"
                alt="Residential courtyard and building frontage at The Lombardy Lifestyle Estate."
                fill
                className="object-cover"
              />
            </div>
          </SoftCard>

          <div className="grid gap-5">
            {principles.map((item) => (
              <SoftCard key={item.title}>
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
