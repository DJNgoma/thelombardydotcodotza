import Link from "next/link";
import { siteConfig } from "@/content/site";
import { primaryNavigation, utilityNavigation } from "@/lib/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function SiteFooter() {
  return (
    <footer className="section-space">
      <div className="page-shell">
        <div className="soft-card surface-dark radius-feature px-6 py-10 sm:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr_0.7fr]">
            <div className="max-w-md">
              <p className="eyebrow text-on-dark-label">The Lombardy Lifestyle Estate</p>
              <h2 className="display-title display-section mt-3 font-semibold text-on-dark">
                Calm, managed residential living with clear standards.
              </h2>
              <p className="mt-5 text-sm leading-7 text-on-dark-muted sm:text-base">
                Estate information, notices, governance updates, and
                management contacts are kept here for owners, residents,
                trustees, tenants, and prospective residents.
              </p>
            </div>

            <div>
              <p className="meta-label text-on-dark-label">
                Explore
              </p>
              <div className="mt-4 space-y-3">
                {primaryNavigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-sm text-on-dark-muted transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="meta-label text-on-dark-label">
                Resident links
              </p>
              <div className="mt-4 space-y-3 text-sm text-on-dark-muted">
                {utilityNavigation.map((item) => (
                  item.external ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block transition hover:text-white"
                  >
                    {item.label}
                  </a>
                  ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                  )
                ))}
                <Link
                  href="/management"
                  className="block transition hover:text-white"
                >
                  Management overview
                </Link>
                <Link
                  href="/notices-login"
                  className="block transition hover:text-white"
                >
                  Owner notice support
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-[1.7rem] border border-white/10 bg-white/6 p-5 sm:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <p className="meta-label text-on-dark-label">Appearance</p>
                <p className="mt-3 text-sm leading-6 text-on-dark-muted">
                  Theme follows your device by default. Change it here only if
                  you want to keep this browser in light or dark mode.
                </p>
              </div>
              <ThemeToggle tone="overlay" />
            </div>
          </div>

          <div className="my-8 h-px w-full bg-[linear-gradient(90deg,rgba(251,248,242,0),rgba(251,248,242,0.18),rgba(251,248,242,0))]" />

          <div className="flex flex-col gap-3 text-sm text-on-dark-muted sm:flex-row sm:items-center sm:justify-between">
            <p>
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                {siteConfig.locationLabel}
              </a>
            </p>
            <p>
              Landsdowne support:{" "}
              <a
                href={`mailto:${siteConfig.ownerSupportEmail}`}
                className="transition hover:text-white"
              >
                {siteConfig.ownerSupportEmail}
              </a>
            </p>
            <p>
              Trustee escalation:{" "}
              <a
                href={`mailto:${siteConfig.trusteeContactEmail}`}
                className="transition hover:text-white"
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
