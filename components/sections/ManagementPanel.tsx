import Image from "next/image";
import { siteConfig } from "@/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ManagementPanel() {
  return (
    <section className="section-space">
      <div className="page-shell">
        <div className="soft-card surface-feature radius-feature px-6 py-7 sm:px-10 sm:py-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
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
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {siteConfig.managementContacts.map((contact, index) => (
                <article
                  key={contact.title}
                  className={`radius-card border border-[var(--color-line)] p-5 ${
                    index === 0 ? "surface-panel" : "inset-surface"
                  }`}
                >
                  <h3 className="text-xl font-medium text-[var(--color-ink)]">
                    {contact.title}
                  </h3>
                  <p className="body-copy-sm mt-3">{contact.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-4">
                    {contact.actionLabel && contact.actionHref ? (
                      <a
                        href={contact.actionHref}
                        className="text-link"
                        target={contact.actionHref.startsWith("http") ? "_blank" : undefined}
                        rel={contact.actionHref.startsWith("http") ? "noreferrer" : undefined}
                      >
                        {contact.actionLabel}
                      </a>
                    ) : null}
                    {contact.secondaryLabel && contact.secondaryHref ? (
                      <a href={contact.secondaryHref} className="text-link">
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
