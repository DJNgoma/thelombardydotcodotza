import { trustees } from "@/content/trustees";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { InfoList } from "@/components/ui/InfoList";
import { Pill } from "@/components/ui/Pill";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatTrusteePublicName } from "@/lib/formatters";

export function GovernanceSnapshot() {
  return (
    <section className="section-space">
      <div className="page-shell">
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="soft-card surface-panel radius-panel px-6 py-7 sm:px-8 sm:py-8">
            <SectionHeading
              eyebrow="Governance"
              title="Governance with visible accountability."
              description="The trustees oversee estate standards, financial stewardship, policy direction, and owner communication within the body corporate framework."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/governance">Governance overview</ButtonLink>
              <ButtonLink href="/estate-rules" variant="secondary">
                Estate rules
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="soft-card surface-card radius-card px-6 py-7 sm:px-8 sm:py-8">
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

            <div className="soft-card surface-card radius-card px-6 py-7 sm:px-8 sm:py-8">
              <Pill>Finance overview</Pill>
              <p className="mt-5 text-xl leading-8 text-[var(--color-ink)]">
                Levies are the main source of funding that keeps the estate operating effectively.
              </p>
              <div className="mt-6">
                <InfoList
                  items={[
                    "Levy income supports maintenance, service providers, and essential estate obligations.",
                    "Owners in arrears are encouraged to communicate proactively with the debtors department.",
                    "Acknowledgement of Debt arrangements can be used where full settlement is not immediately possible.",
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
