import { trustees } from "@/content/trustees";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { InfoList } from "@/components/ui/InfoList";
import { Pill } from "@/components/ui/Pill";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/content/site";
import { formatTrusteePublicName } from "@/lib/formatters";

export function GovernanceSnapshot() {
  return (
    <section className="section-space">
      <div className="page-shell">
        <div className="grid gap-6 xl:grid-cols-[0.86fr_1.14fr]">
          <div className="soft-card surface-dark radius-feature px-6 py-7 sm:px-8 sm:py-9">
            <SectionHeading
              eyebrow="Governance"
              title="Governance with visible accountability."
              description="The trustees oversee estate standards, governance stewardship, policy direction, and owner communication within the body corporate framework."
              tone="dark"
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/governance" variant="secondary">
                Governance overview
              </ButtonLink>
              <ButtonLink href="/estate-rules" variant="secondary">
                Estate rules
              </ButtonLink>
            </div>
            <div className="mt-8 band-stack">
              <div className="band-support-card radius-panel px-5 py-5">
                <p className="meta-label text-on-dark-label">
                  Trustee role
                </p>
                <p className="mt-3 text-sm leading-7 text-on-dark-muted sm:text-base">
                  Trustees guide standards, policy decisions, major maintenance priorities, and owner communication across the scheme.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="band-support-card radius-inset px-4 py-4">
                  <p className="meta-label text-on-dark-label">CSOS context</p>
                  <p className="mt-2 text-sm leading-6 text-on-dark-muted">
                    Governance remains part of the wider community schemes framework and dispute-resolution structure.
                  </p>
                </div>
                <div className="band-support-card radius-inset px-4 py-4">
                  <p className="meta-label text-on-dark-label">Owner communication</p>
                  <p className="mt-2 text-sm leading-6 text-on-dark-muted">
                    Meeting notices, owner updates, and trustee communication remain structured and owner-facing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="soft-card surface-stone radius-feature px-6 py-7 sm:px-8 sm:py-8">
              <div className="flex items-center justify-between gap-4">
                <Pill>Board of Trustees</Pill>
                <span className="meta-label text-[var(--color-ink-soft)]">
                  2026 composition
                </span>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {trustees.map((trustee) => (
                  <div
                    key={trustee.name}
                    className="inset-surface radius-inset p-4"
                  >
                    <p className="font-medium text-[var(--color-ink)]">
                      {formatTrusteePublicName(trustee.name)}
                    </p>
                    <p className="mt-1 text-sm text-[var(--color-ink-soft)]">
                      {trustee.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              <div className="soft-card surface-card radius-card px-6 py-7">
                <Pill>Finance overview</Pill>
                <p className="mt-5 text-base leading-7 text-[var(--color-ink-soft)]">
                  Finance-related owner matters are administered through Landsdowne.
                </p>
              </div>
              <div className="soft-card surface-card radius-card px-6 py-7">
                <InfoList
                  items={[
                    `Contact Landsdowne at ${siteConfig.ownerSupportEmail} for finance queries and owner administration support.`,
                  ]}
                />
              </div>
              <div className="soft-card surface-card radius-card px-6 py-7">
                <InfoList
                  items={[
                    `Estate management issues can be sent to the Estate Manager on WhatsApp at ${siteConfig.estateManagerWhatsapp}.`,
                    "Trustees remain the escalation path if Landsdowne is not responsive.",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
