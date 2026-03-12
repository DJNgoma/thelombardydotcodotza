import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { StructuredData } from "@/components/layout/StructuredData";
import { PageLead } from "@/components/sections/PageLead";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SoftCard } from "@/components/ui/SoftCard";
import { siteConfig } from "@/content/site";
import { buildPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Owner Portal",
  description:
    "Owner portal access, registration support, and WeConnectU guidance for The Lombardy Lifestyle Estate.",
  path: "/portal",
});

const requestAccessHref = `mailto:${siteConfig.ownerSupportEmail}?subject=${encodeURIComponent(
  "The Lombardy owner portal access request",
)}&body=${encodeURIComponent(
  "Hello Landsdowne,\n\nI need assistance with owner portal access / registration for The Lombardy Lifestyle Estate.\n\nName:\nUnit number:\nPreferred contact number:\nIssue:\n",
)}`;

const portalSupportSteps = [
  {
    title: "Already have portal access?",
    body: "Open WeConnectU to view levy information, account records, circulars, and estate-issued owner documents.",
    actionLabel: "Go to WeConnectU login",
    actionHref: siteConfig.ownerPortalUrl,
    tone: "dark" as const,
  },
  {
    title: "Need login or registration help?",
    body: "Contact Landsdowne to request access, confirm registration, or resolve ordinary portal access issues.",
    actionLabel: "Request access from Landsdowne",
    actionHref: requestAccessHref,
    tone: "stone" as const,
  },
  {
    title: "Still not getting a response?",
    body: "Trustees remain the escalation path if Landsdowne is not responsive on owner portal or governance-related support matters.",
    actionLabel: "Escalate to trustees",
    actionHref: `mailto:${siteConfig.trusteeContactEmail}`,
    tone: "panel" as const,
  },
];

const ownerPortalUses = [
  "Levy statements and account records",
  "Owner circulars and controlled documents",
  "Estate-issued notices relevant to owners",
];

export default function PortalPage() {
  return (
    <>
      <StructuredData
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Owner Portal", path: "/portal" },
          ]),
        ]}
      />
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Owner Portal" }]}
      />
      <PageLead
        eyebrow="Owner Portal"
        title="Choose the right owner access path before continuing to WeConnectU."
        description="Owners who already have portal access can continue to WeConnectU. If access still needs to be arranged or restored, Landsdowne should handle the request first."
        actions={[
          { href: siteConfig.ownerPortalUrl, label: "Already have access" },
          {
            href: requestAccessHref,
            label: "Request portal access",
            variant: "secondary",
          },
        ]}
        highlights={[
          "WeConnectU login",
          "Access requests",
          "Trustee escalation",
        ]}
      />

      <section className="section-space-end">
        <div className="page-shell grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
          <div className="grid gap-5 md:grid-cols-3 xl:grid-cols-1">
            {portalSupportSteps.map((step) => (
              <SoftCard key={step.title} tone={step.tone} padding="lg">
                <p
                  className={`meta-label ${
                    step.tone === "dark"
                      ? "text-on-dark-label"
                      : "text-[var(--color-sage-deep)]"
                  }`}
                >
                  {step.tone === "dark"
                    ? "Portal login"
                    : step.tone === "stone"
                      ? "Registration support"
                      : "Escalation"}
                </p>
                <h2
                  className={`mt-4 text-[2rem] leading-[1.06] font-medium ${
                    step.tone === "dark"
                      ? "text-on-dark"
                      : "text-[var(--color-ink)]"
                  }`}
                >
                  {step.title}
                </h2>
                <p
                  className={`mt-4 text-sm leading-7 sm:text-base ${
                    step.tone === "dark"
                      ? "text-on-dark-muted"
                      : "text-[var(--color-ink-soft)]"
                  }`}
                >
                  {step.body}
                </p>
                <div className="mt-7">
                  <ButtonLink
                    href={step.actionHref}
                    variant={step.tone === "dark" ? "secondary" : "primary"}
                    size="compact"
                  >
                    {step.actionLabel}
                  </ButtonLink>
                </div>
              </SoftCard>
            ))}
          </div>

          <div className="grid gap-5">
            <SoftCard tone="feature" padding="lg">
              <p className="eyebrow">Before you continue</p>
              <h2 className="display-title display-section mt-4 font-semibold text-on-light">
                The public site points owners to the correct support path first.
              </h2>
              <p className="body-copy mt-5 max-w-2xl">
                WeConnectU remains the live login environment, but access should
                only be attempted there if your owner profile has already been
                set up or restored.
              </p>
              <ul className="mt-6 space-y-3">
                {ownerPortalUses.map((item) => (
                  <li
                    key={item}
                    className="inset-surface radius-inset px-4 py-4 text-sm leading-6 text-[var(--color-ink-soft)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </SoftCard>

            <SoftCard tone="panel">
              <p className="eyebrow">Support order</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <div className="inset-surface radius-inset px-4 py-4">
                  <p className="meta-label text-[var(--color-sage-deep)]">
                    1. Check access
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-ink-soft)]">
                    If you already have login details, continue to WeConnectU.
                  </p>
                </div>
                <div className="inset-surface radius-inset px-4 py-4">
                  <p className="meta-label text-[var(--color-sage-deep)]">
                    2. Contact Landsdowne
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-ink-soft)]">
                    Use Landsdowne for registration, password issues, and ordinary access support.
                  </p>
                </div>
                <div className="inset-surface radius-inset px-4 py-4">
                  <p className="meta-label text-[var(--color-sage-deep)]">
                    3. Escalate if needed
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-ink-soft)]">
                    Trustees remain the escalation path only if Landsdowne is not responsive.
                  </p>
                </div>
              </div>
            </SoftCard>
          </div>
        </div>
      </section>
    </>
  );
}
