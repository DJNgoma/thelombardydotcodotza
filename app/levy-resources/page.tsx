import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { StructuredData } from "@/components/layout/StructuredData";
import { PageLead } from "@/components/sections/PageLead";
import { SoftCard } from "@/components/ui/SoftCard";
import { siteConfig } from "@/content/site";
import { buildPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Levy Information",
  description:
    "Levy guidance, payment support context, and owner finance resources for The Lombardy Lifestyle Estate.",
  path: "/levy-resources",
});

const levyResources = [
  "Levies are the main source of funding that keeps the estate operating effectively.",
  "Owners are responsible for keeping levy accounts current so the estate can meet maintenance, service, and operational obligations.",
  "Where an account falls into arrears, early communication with the relevant debtors function remains important.",
  "Acknowledgement of Debt arrangements may be used where a structured repayment plan is required.",
];

export default function LevyResourcesPage() {
  return (
    <>
      <StructuredData
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Levy Information", path: "/levy-resources" },
          ]),
        ]}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Levy Information" }]} />
      <PageLead
        eyebrow="Levy Information"
        title="Levy guidance and owner finance support."
        description="Levies fund the estate’s core operations, maintenance obligations, and service delivery. This page summarises the main finance principles communicated to owners."
        actions={[
          {
            href: `mailto:${siteConfig.ownerSupportEmail}`,
            label: "Email support",
          },
          {
            href: `mailto:${siteConfig.trusteeContactEmail}`,
            label: "Contact trustees",
            variant: "secondary",
          },
        ]}
      />

      <section className="section-space-end">
        <div className="page-shell grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {levyResources.map((item) => (
            <SoftCard key={item}>
              <p className="body-copy-sm sm:text-base">
                {item}
              </p>
            </SoftCard>
          ))}
        </div>
        <div className="page-shell mt-5">
          <SoftCard tone="panel">
            <p className="body-copy-sm max-w-3xl sm:text-base">
              Owners who need assistance can contact{" "}
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
