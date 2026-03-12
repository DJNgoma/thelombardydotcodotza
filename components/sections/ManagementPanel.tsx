import Image from "next/image";
import { siteConfig } from "@/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ManagementPanel() {
  return (
    <section className="section-space">
      <div className="page-shell">
        <div className="soft-card surface-stone radius-feature px-6 py-7 sm:px-10 sm:py-10">
          <div className="grid gap-8 xl:grid-cols-[0.94fr_1.06fr] xl:items-start">
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

            <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
              {siteConfig.managementContacts.map((contact, index) => (
                <article
                  key={contact.title}
                  className={`radius-card flex min-h-[16.5rem] flex-col border p-5 sm:p-6 ${
                    index === 0
                      ? "surface-dark border-white/8"
                      : index === 1
                        ? "surface-panel border-[var(--color-line)]"
                        : "inset-surface border-[var(--color-line)]"
                  }`}
                >
                  <p
                    className={`meta-label ${
                      index === 0 ? "text-on-dark-label" : "text-[var(--color-sage-deep)]"
                    }`}
                  >
                    {index === 0
                      ? "Primary support"
                      : index === 1
                        ? "Portal access"
                        : "Escalation path"}
                  </p>
                  <h3
                    className={`mt-4 text-[1.85rem] leading-[1.08] font-medium ${
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
                            : "border-[var(--color-line)] bg-white/86 text-[var(--color-ink)] hover:bg-white"
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
