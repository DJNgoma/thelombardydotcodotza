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
    "Trustees, governance responsibilities, CSOS context, and owner support pathways for The Lombardy Lifestyle Estate.",
  path: "/governance",
});

const governanceItems = [
  {
    title: "Role of trustees",
    body: "The trustees are responsible for oversight, policy direction, governance standards, and stewardship of the estate’s shared interests.",
  },
  {
    title: "Estate governance framework",
    body: "The estate's governance framework supports accountable management of common property, shared obligations, maintenance priorities, and resident standards.",
  },
  {
    title: "CSOS relationship",
    body: "The Community Schemes Ombud Service provides oversight around scheme rules, dispute resolution processes, and governance training for trustees and directors.",
  },
];

const financeItems = [
  {
    title: "Finance contact",
    body: "Finance-related owner matters are administered through Landsdowne.",
  },
  {
    title: "Owner portal",
    body: "Use WeConnectU for account records, circulars, and estate-issued documents if your access is already active.",
  },
  {
    title: "Estate management issues",
    body: `Operational estate matters can be sent to the Estate Manager on WhatsApp at ${siteConfig.estateManagerWhatsapp}.`,
  },
  {
    title: "Escalation path",
    body: "Trustees remain the escalation path if Landsdowne is not responsive on governance or support matters.",
  },
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
        description="The estate is governed through a trustee-led structure supported by operational management. Governance covers estate standards, maintenance priorities, shared responsibilities, and formal owner communication."
        actions={[
          { href: "/news", label: "Trustee notices" },
          { href: "/management", label: "Management overview", variant: "secondary" },
        ]}
        highlights={[
          "Trustee oversight",
          "Owner communication",
          "CSOS context",
        ]}
      />

      <section className="section-space-end-tight">
        <div className="page-shell grid gap-6 xl:grid-cols-[0.84fr_1.16fr]">
          <SoftCard tone="dark" padding="lg">
            <p className="eyebrow text-on-dark-label">Board of Trustees</p>
            <div className="mt-6 space-y-4">
              {trustees.map((trustee) => (
                <div
                  key={trustee.name}
                  className="band-support-card radius-inset px-5 py-4"
                >
                  <p className="text-lg font-medium text-on-dark">
                    {formatTrusteePublicName(trustee.name)}
                  </p>
                  <p className="mt-1 text-sm text-on-dark-muted">
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
          <SoftCard tone="stone" padding="lg">
            <p className="eyebrow">Owner support</p>
            <h2 className="display-title display-section mt-4 font-semibold text-[var(--color-ink)]">
              Finance and estate administration contact paths.
            </h2>
            <div className="mt-8 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="grid gap-4 sm:grid-cols-2">
                {financeItems.slice(0, 2).map((item) => (
                  <div
                    key={item.title}
                    className="body-copy-sm inset-surface radius-inset p-5"
                  >
                    <p className="meta-label text-[var(--color-sage-deep)]">
                      {item.title}
                    </p>
                    <p className="mt-3">{item.body}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {financeItems.slice(2).map((item) => (
                  <div
                    key={item.title}
                    className="body-copy-sm inset-surface radius-inset p-5"
                  >
                    <p className="meta-label text-[var(--color-sage-deep)]">
                      {item.title}
                    </p>
                    <p className="mt-3">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="body-copy-sm inset-surface radius-panel mt-6 px-5 py-4">
              Owners who need finance or administrative support should contact Landsdowne at{" "}
              <a
                href={`mailto:${siteConfig.ownerSupportEmail}`}
                className="transition hover:text-[var(--color-ink)]"
              >
                {siteConfig.ownerSupportEmail}
              </a>
              . Estate management issues can also be sent to the Estate Manager on{" "}
              <a
                href={siteConfig.estateManagerWhatsappUrl}
                className="transition hover:text-[var(--color-ink)]"
              >
                WhatsApp at {siteConfig.estateManagerWhatsapp}
              </a>
              . If Landsdowne is not responsive, escalate to{" "}
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
