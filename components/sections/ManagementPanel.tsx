import clsx from "clsx";
import { siteConfig } from "@/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaticImage } from "@/components/ui/StaticImage";

export function ManagementPanel() {
  return (
    <section className="section-space">
      <div className="page-shell">
        <div className="soft-card surface-stone radius-feature px-6 py-7 sm:px-10 sm:py-10">
          <div className="grid gap-8 xl:grid-cols-[0.94fr_1.06fr] xl:items-start">
            <div>
              <div className="inset-surface radius-inset inline-flex px-4 py-3">
                <StaticImage
                  src="/images/brands/landsdowne-logo.png"
                  alt="Landsdowne Property Group"
                  width={138}
                  height={72}
                  className="h-auto w-[138px]"
                />
              </div>
              <SectionHeading
                eyebrow="Managed by Landsdowne"
                title="Operational management, owner support, and contact pathways."
                description={siteConfig.managementSummary}
              />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/management">Management overview</ButtonLink>
                <ButtonLink href={siteConfig.ownerPortalPath} variant="secondary">
                  Owner portal
                </ButtonLink>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="inset-surface radius-inset px-4 py-4">
                  <p className="meta-label text-[var(--color-sage-deep)]">
                    Landsdowne support
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-ink-soft)]">
                    Contact Landsdowne first for finance queries, owner administration, and general estate matters.
                  </p>
                </div>
                <div className="inset-surface radius-inset px-4 py-4">
                  <p className="meta-label text-[var(--color-sage-deep)]">
                    Estate Manager WhatsApp
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-ink-soft)]">
                    Estate management issues can be sent to the Estate Manager on WhatsApp at {siteConfig.estateManagerWhatsapp}.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {siteConfig.managementContacts.map((contact, index) => (
                <article
                  key={contact.title}
                  className={clsx(
                    "radius-card flex min-h-[14.75rem] flex-col border p-5 sm:p-6",
                    index === 0 && "surface-dark border-white/8 md:col-span-2",
                    index === 1 && "surface-panel border-[var(--color-line)]",
                    index > 1 && "inset-surface border-[var(--color-line)]",
                  )}
                >
                  <p
                    className={`meta-label ${
                      index === 0 ? "text-on-dark-label" : "text-[var(--color-sage-deep)]"
                    }`}
                  >
                    {index === 0
                      ? "Primary support"
                      : index === 1
                        ? "Estate issues"
                        : index === 2
                          ? "Portal access"
                          : "Escalation path"}
                  </p>
                  <h3
                    className={`display-title balanced-text mt-4 max-w-[11ch] text-[1.65rem] leading-[1.04] font-medium sm:text-[1.9rem] ${
                      index === 0 ? "text-on-dark" : "text-[var(--color-ink)]"
                    }`}
                  >
                    {contact.title}
                  </h3>
                  <p
                    className={`mt-3 text-sm leading-7 ${
                      index === 0 ? "text-on-dark-muted" : "text-[var(--color-ink-soft)]"
                    }`}
                  >
                    {contact.summary}
                  </p>
                  <div className="mt-auto pt-7">
                    {contact.actionLabel && contact.actionHref ? (
                      <a
                        href={contact.actionHref}
                        className={`inline-flex min-h-11 items-center justify-center rounded-full border px-4 text-[0.74rem] font-semibold uppercase tracking-[var(--tracking-ui)] transition ${
                          index === 0
                            ? "border-white/14 bg-white/10 text-on-dark hover:bg-white/16 hover:text-white"
                            : "control-surface control-surface-strong"
                        }`}
                        target={contact.actionHref.startsWith("http") ? "_blank" : undefined}
                        rel={contact.actionHref.startsWith("http") ? "noreferrer" : undefined}
                      >
                        {contact.actionLabel}
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
