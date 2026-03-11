import Link from "next/link";
import { siteConfig } from "@/content/site";
import { primaryNavigation, utilityNavigation } from "@/lib/navigation";

export function SiteFooter() {
  return (
    <footer className="section-space">
      <div className="page-shell">
        <div className="soft-card surface-feature radius-feature px-6 py-10 sm:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr_0.7fr]">
            <div className="max-w-md">
              <p className="eyebrow">The Lombardy Lifestyle Estate</p>
              <h2 className="display-title display-section mt-3 font-semibold text-[var(--color-ink)]">
                Calm, managed residential living with clear standards.
              </h2>
              <p className="body-copy-sm mt-5 sm:text-base">
                Estate information, notices, governance updates, and
                management contacts are kept here for owners, residents,
                trustees, tenants, and prospective residents.
              </p>
            </div>

            <div>
              <p className="meta-label text-[var(--color-sage-deep)]">
                Explore
              </p>
              <div className="mt-4 space-y-3">
                {primaryNavigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-sm text-[var(--color-ink-soft)] transition hover:text-[var(--color-ink)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="meta-label text-[var(--color-sage-deep)]">
                Resident links
              </p>
              <div className="mt-4 space-y-3 text-sm text-[var(--color-ink-soft)]">
                {utilityNavigation.map((item) => (
                  item.external ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block transition hover:text-[var(--color-ink)]"
                  >
                    {item.label}
                  </a>
                  ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block transition hover:text-[var(--color-ink)]"
                  >
                    {item.label}
                  </Link>
                  )
                ))}
                <Link
                  href="/management"
                  className="block transition hover:text-[var(--color-ink)]"
                >
                  Management overview
                </Link>
                <Link
                  href="/notices-login"
                  className="block transition hover:text-[var(--color-ink)]"
                >
                  Owner notice support
                </Link>
              </div>
            </div>
          </div>

          <div className="section-rule my-8" />

          <div className="flex flex-col gap-3 text-sm text-[var(--color-ink-soft)] sm:flex-row sm:items-center sm:justify-between">
            <p>
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[var(--color-ink)]"
              >
                {siteConfig.locationLabel}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="transition hover:text-[var(--color-ink)]"
              >
                {siteConfig.contactEmail}
              </a>{" "}
              and{" "}
              <a
                href={siteConfig.contactPhoneHref}
                className="transition hover:text-[var(--color-ink)]"
              >
                {siteConfig.contactPhoneDisplay}
              </a>
            </p>
            <p>
              Owner support:{" "}
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
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
