import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { LifestyleAmenities } from "@/components/sections/LifestyleAmenities";
import { NearbyAmenities } from "@/components/sections/NearbyAmenities";
import { PageLead } from "@/components/sections/PageLead";
import { SoftCard } from "@/components/ui/SoftCard";
import { buildPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";
import { StructuredData } from "@/components/layout/StructuredData";

export const metadata: Metadata = buildPageMetadata({
  title: "Living at The Lombardy",
  description:
    "Amenity access, clubhouse bookings, pool and braai guidance, gym upkeep, access control, visitor management, and tenant compliance at The Lombardy.",
  path: "/living",
});

const livingTopics = [
  {
    title: "Clubhouse bookings",
    body: "Residents may book the clubhouse for small functions by coordinating with the estate manager and following estate procedures.",
  },
  {
    title: "Pool access",
    body: "Pool use is intended for residents and approved guests within estate standards that protect comfort, safety, and upkeep.",
  },
  {
    title: "Braai facilities",
    body: "Braai areas support shared leisure use while remaining subject to considerate conduct, cleaning expectations, and booking controls where applicable.",
  },
  {
    title: "Gym",
    body: "The estate gym is maintained as a practical wellness amenity, with equipment upkeep and servicing forming part of ongoing estate maintenance.",
  },
  {
    title: "Access control",
    body: "Access credentials and codes must be handled carefully and updated where needed to reduce misuse and preserve residential security.",
  },
  {
    title: "Visitor management",
    body: "Residents and owners are expected to submit guest details before arrival to support estate security and controlled access.",
  },
  {
    title: "Tenant compliance",
    body: "Owners remain responsible for ensuring tenants comply with movement, occupation, and documentation requirements before moving in.",
  },
  {
    title: "Pet registration",
    body: "Pets kept in the estate must be registered and managed responsibly in line with estate rules, neighbour consideration, and shared-space standards.",
  },
];

export default function LivingPage() {
  return (
    <>
      <StructuredData
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Living at The Lombardy", path: "/living" },
          ]),
        ]}
      />
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Living at The Lombardy" }]}
      />
      <PageLead
        eyebrow="Living at The Lombardy"
        title="Shared amenities, access standards, and resident guidance in one place."
        description="Everyday estate living is supported by practical amenities, structured booking processes, clear access procedures, and resident compliance requirements."
        actions={[
          { href: "/news", label: "Latest notices" },
          { href: "/management", label: "Management overview", variant: "secondary" },
        ]}
      />

      <LifestyleAmenities />
      <NearbyAmenities />

      <section className="section-space-end">
        <div className="page-shell grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {livingTopics.map((topic) => (
            <SoftCard key={topic.title}>
              <h2 className="text-2xl font-medium text-[var(--color-ink)]">
                {topic.title}
              </h2>
              <p className="body-copy-sm mt-4 sm:text-base">
                {topic.body}
              </p>
            </SoftCard>
          ))}
        </div>
      </section>
    </>
  );
}
