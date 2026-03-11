import Image from "next/image";
import { siteConfig } from "@/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ManagementPanel() {
  return (
    <section className="section-space">
      <div className="page-shell">
        <div className="soft-card surface-stone radius-feature px-6 py-7 sm:px-10 sm:py-10">
          <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
            <div>
              <div className="inset-surface radius-inset inline-flex px-4 py-3">
                <Image
                  src="/images/brands/landsdowne-logo.png"
                  alt="Landsdowne Property Group"
                  width={138}
                  height={72}
                  className="h-auto w-[138px]"
                />
              </div>
              <SectionHeading
                eyebrow="Managed by Landsdowne"
                title="Operational management, resident support, and maintenance oversight."
                description={siteConfig.managementSummary}
              />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/management">Management overview</ButtonLink>
                <ButtonLink href={siteConfig.ownerPortalUrl} variant="secondary">
                  Owner portal
                </ButtonLink>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="inset-surface radius-inset px-4 py-4">
                  <p className="meta-label text-[var(--color-sage-deep)]">
                    Landsdowne support
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-ink-soft)]">
                    Landsdowne remains the primary path for portal access, operational queries, and finance-related owner support.
                  </p>
                </div>
                <div className="inset-surface radius-inset px-4 py-4">
                  <p className="meta-label text-[var(--color-sage-deep)]">
                    Trustee escalation
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-ink-soft)]">
                    Trustees provide an escalation path when Landsdowne is not responsive on governance or support matters.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {siteConfig.managementContacts.map((contact, index) => (
                <article
                  key={contact.title}
                  className={`radius-card border p-5 ${
                    index === 0
                      ? "surface-dark border-white/8"
                      : index === 1
                        ? "surface-panel border-[var(--color-line)]"
                        : "inset-surface border-[var(--color-line)]"
                  }`}
                >
                  <h3
                    className={`text-xl font-medium ${
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
                  <div className="mt-5 flex flex-wrap gap-4">
                    {contact.actionLabel && contact.actionHref ? (
                      <a
                        href={contact.actionHref}
                        className={
                          index === 0
                            ? "text-sm font-semibold text-on-dark transition hover:text-white"
                            : "text-link"
                        }
                        target={contact.actionHref.startsWith("http") ? "_blank" : undefined}
                        rel={contact.actionHref.startsWith("http") ? "noreferrer" : undefined}
                      >
                        {contact.actionLabel}
                      </a>
                    ) : null}
                    {contact.secondaryLabel && contact.secondaryHref ? (
                      <a
                        href={contact.secondaryHref}
                        className={
                          index === 0
                            ? "text-sm font-semibold text-on-dark-muted transition hover:text-white"
                            : "text-link"
                        }
                        target={contact.secondaryHref.startsWith("http") ? "_blank" : undefined}
                        rel={contact.secondaryHref.startsWith("http") ? "noreferrer" : undefined}
                      >
                        {contact.secondaryLabel}
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
