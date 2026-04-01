/* eslint-disable @next/next/no-html-link-for-pages */

import { siteConfig } from "@/content/site";
import { primaryNavigation, utilityNavigation } from "@/lib/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function SiteHeader() {
  const residentLinks = utilityNavigation.filter(
    (item) => item.href !== siteConfig.communityChatPath,
  );

  return (
    <>
      <input id="site-menu-toggle" type="checkbox" className="peer sr-only lg:hidden" />

      <header className="fixed inset-x-0 top-0 z-30">
        <div className="page-shell pt-2 sm:pt-3">
          <div className="soft-card surface-feature radius-feature flex items-center justify-between gap-4 px-4 py-3 sm:px-5 sm:py-3.5 lg:grid lg:grid-cols-[minmax(0,18rem)_1fr_auto] lg:gap-6 lg:px-6 xl:grid-cols-[minmax(0,19rem)_1fr_auto] xl:px-7">
            <a
              href="/"
              aria-label="The Lombardy home"
              className="min-w-0 shrink-0 lg:pr-4"
            >
              <span className="block text-[0.62rem] font-semibold tracking-[0.22em] uppercase text-[var(--color-sage-deep)] sm:text-[0.68rem]">
                Lifestyle Estate
              </span>
              <span
                aria-hidden="true"
                className="site-wordmark mt-1.5 w-[12.2rem] sm:w-[13.8rem] lg:w-[14.5rem] xl:w-[15.2rem]"
              />
            </a>

            <nav
              aria-label="Primary"
              className="hidden items-center justify-center gap-1.5 lg:flex xl:gap-2"
            >
              {primaryNavigation.map((item) => {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-full px-4 py-2.5 text-[0.92rem] font-semibold whitespace-nowrap text-[var(--color-ink-soft)] transition hover:bg-[var(--color-control-bg)] hover:text-[var(--color-ink)] xl:px-4.5 xl:text-[0.96rem]"
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3 lg:ml-0 lg:justify-self-end">
              <a
                href={siteConfig.ownerPortalPath}
                className="hidden min-h-11 items-center rounded-full accent-surface px-5 text-[0.78rem] font-semibold uppercase tracking-[var(--tracking-ui)] text-on-dark transition hover:bg-[#3e4b3f] lg:inline-flex"
              >
                Owner Portal
              </a>
              <label
                htmlFor="site-menu-toggle"
                className="inline-flex min-h-11 cursor-pointer items-center gap-3 rounded-full border px-3.5 text-sm font-medium control-surface control-surface-strong transition duration-200 sm:px-4 lg:hidden"
              >
                <span>Menu</span>
                <span className="relative block h-4 w-4">
                  <span className="absolute left-0 top-0.5 h-0.5 w-4 rounded-full bg-current" />
                  <span className="absolute left-0 top-[7px] h-0.5 w-4 rounded-full bg-current" />
                  <span className="absolute left-0 top-[13px] h-0.5 w-4 rounded-full bg-current" />
                </span>
              </label>
            </div>
          </div>
        </div>
      </header>

      <div className="pointer-events-none fixed inset-0 z-[70] opacity-0 transition duration-200 peer-checked:pointer-events-auto peer-checked:opacity-100 lg:hidden">
        <label
          htmlFor="site-menu-toggle"
          className="mobile-drawer-backdrop absolute inset-0 block backdrop-blur-[5px]"
        />

        <div className="mobile-drawer-shell absolute inset-0 overflow-y-auto">
          <div className="page-shell flex min-h-screen flex-col py-4 sm:py-5">
            <div className="mobile-drawer-panel flex items-center justify-between gap-4 rounded-[1.85rem] px-4 py-3 sm:px-5">
              <div className="min-w-0">
                <p className="mobile-drawer-label text-[0.62rem] font-semibold tracking-[0.22em] uppercase sm:text-[0.68rem]">
                  Lifestyle Estate
                </p>
                <span
                  aria-hidden="true"
                  className="site-wordmark mt-1.5 w-[12rem] sm:w-[13.5rem]"
                />
              </div>
              <label
                htmlFor="site-menu-toggle"
                className="mobile-drawer-close inline-flex min-h-11 cursor-pointer shrink-0 items-center rounded-full border px-4 text-[0.72rem] font-semibold uppercase tracking-[var(--tracking-ui)] transition"
              >
                Close
              </label>
            </div>

            <div className="mt-5 grid flex-1 gap-7 md:grid-cols-[0.92fr_1.08fr] md:gap-8">
              <div>
                <nav aria-label="Primary" className="space-y-1.5">
                  {primaryNavigation.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="mobile-drawer-link block rounded-[1.65rem] px-4 py-4 transition"
                    >
                      <span className="display-title text-[2rem] leading-none font-semibold sm:text-[2.3rem]">
                        {item.label}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>

              <div className="grid gap-4">
                <a
                  href={siteConfig.ownerPortalPath}
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--color-stone)] px-5 text-[0.8rem] font-semibold uppercase tracking-[var(--tracking-ui)] text-[var(--color-ink)] transition hover:bg-[#e8dccd]"
                >
                  Owner Portal
                </a>

                <div className="mobile-drawer-panel rounded-[1.7rem] p-5">
                  <p className="mobile-drawer-label meta-label">Resident links</p>
                  <div className="mt-4 space-y-3">
                    {residentLinks.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="mobile-drawer-utility-link block text-sm leading-6 transition"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mobile-drawer-panel rounded-[1.7rem] p-5">
                  <p className="mobile-drawer-label meta-label">Support</p>
                  <p className="mobile-drawer-copy mt-3 text-sm leading-6">
                    Contact Landsdowne first for finance queries, owner access,
                    and general support. Estate management issues can go to the
                    Estate Manager WhatsApp line. Trustees are for escalation if
                    Landsdowne is not responsive.
                  </p>
                  <div className="mt-4 space-y-2 text-sm">
                    <a
                      href={`mailto:${siteConfig.ownerSupportEmail}`}
                      className="mobile-drawer-utility-link mobile-drawer-utility-link-strong block transition"
                    >
                      {siteConfig.ownerSupportEmail}
                    </a>
                    <a
                      href={siteConfig.estateManagerWhatsappUrl}
                      className="mobile-drawer-utility-link mobile-drawer-utility-link-strong block transition"
                    >
                      {siteConfig.estateManagerWhatsapp}
                    </a>
                    <a
                      href={`mailto:${siteConfig.trusteeContactEmail}`}
                      className="mobile-drawer-utility-link block transition"
                    >
                      {siteConfig.trusteeContactEmail}
                    </a>
                  </div>
                </div>

                <div className="mobile-drawer-panel rounded-[1.7rem] p-5">
                  <p className="mobile-drawer-label meta-label">Appearance</p>
                  <p className="mobile-drawer-copy mt-3 text-sm leading-6">
                    Theme follows your device by default. Change it only if you
                    want this browser to stay light or dark.
                  </p>
                  <ThemeToggle className="mt-4 w-full" />
                </div>

                <div className="mobile-drawer-panel rounded-[1.7rem] p-5">
                  <p className="mobile-drawer-label meta-label">Estate atmosphere</p>
                  <p className="mobile-drawer-copy mt-3 text-sm leading-6">
                    Landscaped walkways, shared gardens, and quiet internal
                    streets reinforce the estate&apos;s calmer residential feel.
                  </p>
                </div>

                <a
                  href={siteConfig.communityChatPath}
                  className="mobile-drawer-panel rounded-[1.7rem] p-5 transition hover:bg-white/10"
                >
                  <p className="mobile-drawer-label meta-label">Estate WhatsApp</p>
                  <p className="mobile-drawer-copy mt-3 text-sm leading-6">
                    Access the estate community chat and resident WhatsApp entry guidance.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
