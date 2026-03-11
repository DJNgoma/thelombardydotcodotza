"use client";

import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { siteConfig } from "@/content/site";
import { primaryNavigation, utilityNavigation } from "@/lib/navigation";
import { MobileUtilityDrawer } from "@/components/layout/MobileUtilityDrawer";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    window.setTimeout(() => {
      triggerRef.current?.focus();
    }, 0);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen((current) => !current);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30">
        <div className="page-shell pt-2 sm:pt-3">
          <div className="soft-card surface-feature radius-feature flex items-center justify-between gap-4 px-4 py-3 sm:px-5 sm:py-3.5 lg:grid lg:grid-cols-[auto_1fr_auto] lg:px-6 xl:px-7">
            <Link href="/" className="min-w-0 shrink-0 lg:pr-6">
              <span className="block text-[0.66rem] font-semibold tracking-[var(--tracking-eyebrow)] uppercase text-[var(--color-sage-deep)] sm:text-[0.7rem]">
                Lifestyle Estate
              </span>
              <span className="brand-wordmark mt-1 block text-[2.25rem] text-[var(--color-ink)] sm:text-[2.55rem]">
                The Lombardy
              </span>
            </Link>

            <nav
              aria-label="Primary"
              className="hidden items-center justify-center gap-1 lg:flex xl:gap-2"
            >
              {primaryNavigation.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={clsx(
                      "rounded-full px-3.5 py-2.5 text-[12px] font-medium whitespace-nowrap transition xl:px-4.5",
                      active
                        ? "accent-surface text-on-dark"
                        : "text-[var(--color-ink-soft)] hover:bg-white/70 hover:text-[var(--color-ink)]",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3 lg:ml-0 lg:justify-self-end">
              <a
                href={siteConfig.ownerPortalUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden min-h-11 items-center rounded-full accent-surface px-5 text-[0.78rem] font-semibold uppercase tracking-[var(--tracking-ui)] text-on-dark transition hover:bg-[#3e4b3f] lg:inline-flex"
              >
                Owner Portal
              </a>
              <button
                ref={triggerRef}
                type="button"
                aria-expanded={isOpen}
                aria-controls="mobile-utility-drawer"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                onClick={toggleMenu}
                className={clsx(
                  "inline-flex min-h-11 items-center gap-3 rounded-full border px-3.5 text-sm font-medium transition duration-200 sm:px-4 lg:hidden",
                  isOpen
                    ? "accent-surface border-transparent text-on-dark"
                    : "border-[var(--color-line)] bg-white/72 text-[var(--color-ink)] hover:bg-white",
                )}
              >
                <span>Menu</span>
                <span className="relative block h-4 w-4">
                  <span
                    className={clsx(
                      "absolute left-0 top-0.5 h-0.5 w-4 rounded-full bg-current transition duration-300",
                      isOpen && "translate-y-[5px] rotate-45",
                    )}
                  />
                  <span
                    className={clsx(
                      "absolute left-0 top-[7px] h-0.5 w-4 rounded-full bg-current transition duration-300",
                      isOpen && "scale-x-0 opacity-0",
                    )}
                  />
                  <span
                    className={clsx(
                      "absolute left-0 top-[13px] h-0.5 w-4 rounded-full bg-current transition duration-300",
                      isOpen && "-translate-y-[7px] -rotate-45",
                    )}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileUtilityDrawer
        open={isOpen}
        onClose={closeMenu}
        primaryNavigation={primaryNavigation}
        utilityNavigation={utilityNavigation}
      />
    </>
  );
}
