import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { StructuredData } from "@/components/layout/StructuredData";
import { PageLead } from "@/components/sections/PageLead";
import { SoftCard } from "@/components/ui/SoftCard";
import { siteConfig } from "@/content/site";
import { trustees } from "@/content/trustees";
import { formatTrusteePublicName } from "@/lib/formatters";
import { buildPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Estate Governance",
  description:
    "Trustees, governance responsibilities, CSOS context, levy responsibility, and governance information for The Lombardy Lifestyle Estate.",
  path: "/governance",
});

const governanceItems = [
  {
    title: "Role of trustees",
    body: "The trustees are responsible for oversight, policy direction, governance standards, and stewardship of the estate’s shared interests.",
  },
  {
    title: "Estate governance framework",
    body: "The estate's governance framework supports accountable management of common property, financial obligations, maintenance priorities, and resident standards.",
  },
  {
    title: "CSOS relationship",
    body: "The Community Schemes Ombud Service provides oversight around scheme rules, dispute resolution processes, and governance training for trustees and directors.",
  },
];

const financeItems = [
  "Levies are the main source of funding that keeps the estate operating effectively.",
  "Owners are expected to keep levy accounts current so the estate can meet maintenance and service obligations.",
  "Owners in arrears are encouraged to communicate early with the debtors department.",
  "Acknowledgement of Debt processes may be used when owners need a structured repayment arrangement.",
];

export default function GovernancePage() {
  return (
    <>
      <StructuredData
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Estate Governance", path: "/governance" },
          ]),
        ]}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Estate Governance" }]} />
      <PageLead
        eyebrow="Estate Governance"
        title="Governance that gives owners and residents a clear line of accountability."
        description="The estate is governed through a trustee-led structure supported by operational management. Governance covers estate standards, financial stewardship, maintenance priorities, and formal owner communication."
        actions={[
          { href: "/news", label: "Trustee notices" },
          { href: "/management", label: "Management overview", variant: "secondary" },
        ]}
      />

      <section className="section-space-end-tight">
        <div className="page-shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <SoftCard tone="panel">
            <p className="eyebrow">Board of Trustees</p>
            <div className="mt-6 space-y-4">
              {trustees.map((trustee) => (
                <div
                  key={trustee.name}
                  className="inset-surface radius-inset px-5 py-4"
                >
                  <p className="text-lg font-medium text-[var(--color-ink)]">
                    {formatTrusteePublicName(trustee.name)}
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-ink-soft)]">
                    {trustee.role}
                  </p>
                </div>
              ))}
            </div>
          </SoftCard>

          <div className="grid gap-5">
            {governanceItems.map((item) => (
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

      <section className="section-space-end">
        <div className="page-shell">
          <SoftCard tone="feature" padding="lg">
            <p className="eyebrow">Finance</p>
            <h2 className="display-title display-section mt-4 font-semibold text-[var(--color-ink)]">
              Levy responsibility and arrears communication.
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {financeItems.map((item) => (
                <div
                  key={item}
                  className="body-copy-sm inset-surface radius-inset p-5"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="body-copy-sm inset-surface radius-panel mt-6 px-5 py-4">
              Owners who need account support can contact{" "}
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
            </div>
          </SoftCard>
        </div>
      </section>
    </>
  );
}
