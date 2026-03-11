import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { StructuredData } from "@/components/layout/StructuredData";
import { PageLead } from "@/components/sections/PageLead";
import { SoftCard } from "@/components/ui/SoftCard";
import { buildPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Forms",
  description:
    "Estate forms and administration documents for The Lombardy Lifestyle Estate.",
  path: "/forms",
});

const formExamples = [
  {
    title: "Move-in pack",
    body: "A move-in pack can combine owner details, tenant confirmations, access procedures, and occupation requirements.",
  },
  {
    title: "Contractor access form",
    body: "Contractor requests can capture dates, contact details, work scope, and security approval information in one document.",
  },
  {
    title: "Resident information update",
    body: "Contact updates, vehicle details, and occupant records can be managed through a simple resident information form.",
  },
  {
    title: "Amenity booking form",
    body: "Clubhouse and shared amenity bookings can be standardised with date, time, resident responsibility, and usage conditions.",
  },
  {
    title: "Pet registration form",
    body: "Pet registration should capture owner and unit details, pet information, and the supporting records required for estate compliance.",
  },
];

export default function FormsPage() {
  return (
    <>
      <StructuredData
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Forms", path: "/forms" },
          ]),
        ]}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Forms" }]} />
      <PageLead
        eyebrow="Forms"
        title="Estate forms for everyday administration."
        description="Move-ins, contractor access, resident updates, amenity bookings, and pet registration can be supported through a clear forms library."
        highlights={[
          "Move-ins",
          "Contractor access",
          "Pet registration",
        ]}
      />

      <section className="section-space-end">
        <div className="page-shell grid gap-5 xl:grid-cols-[0.84fr_1.16fr]">
          <SoftCard tone="stone" padding="lg">
            <p className="eyebrow">Forms library</p>
            <h2 className="display-title display-section mt-4 font-semibold text-[var(--color-ink)]">
              Standard forms support move-ins, access requests, resident updates, amenity bookings, and pet registration.
            </h2>
            <p className="body-copy-sm mt-5 sm:text-base">
              A clear forms library helps management keep resident information current and shared processes consistent across the estate.
            </p>
          </SoftCard>

          <div className="grid gap-5 md:grid-cols-2">
            {formExamples.map((item, index) => (
              <SoftCard key={item.title} tone={index === formExamples.length - 1 ? "dark" : "panel"}>
                <h2
                  className={`text-2xl font-medium ${
                    index === formExamples.length - 1
                      ? "text-on-dark"
                      : "text-[var(--color-ink)]"
                  }`}
                >
                  {item.title}
                </h2>
                <p
                  className={`mt-4 text-sm leading-7 sm:text-base ${
                    index === formExamples.length - 1
                      ? "text-on-dark-muted"
                      : "text-[var(--color-ink-soft)]"
                  }`}
                >
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
