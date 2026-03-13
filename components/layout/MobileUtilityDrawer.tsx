"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site";
import type { NavItem } from "@/lib/types";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

interface MobileUtilityDrawerProps {
  open: boolean;
  onClose: () => void;
  primaryNavigation: NavItem[];
  utilityNavigation: NavItem[];
}

function isActiveLink(pathname: string, href: string, external?: boolean) {
  if (external) {
    return false;
  }

  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function MobileUtilityDrawer({
  open,
  onClose,
  primaryNavigation,
  utilityNavigation,
}: MobileUtilityDrawerProps) {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);
  const residentLinks = utilityNavigation.filter(
    (item) => item.href !== siteConfig.communityChatPath,
  );
  const communityLink = utilityNavigation.find(
    (item) => item.href === siteConfig.communityChatPath,
  );

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (open && previousPathname.current !== pathname) {
      onClose();
    }

    previousPathname.current = pathname;
  }, [pathname, open, onClose]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const media = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (media.matches) {
        onClose();
      }
    };

    closeOnDesktop();
    media.addEventListener("change", closeOnDesktop);

    return () => {
      media.removeEventListener("change", closeOnDesktop);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[70] lg:hidden">
      <button
        type="button"
        aria-label="Close menu"
        className="mobile-drawer-backdrop absolute inset-0 backdrop-blur-[5px]"
        onClick={onClose}
      />

      <div className="mobile-drawer-shell absolute inset-0 overflow-y-auto">
        <div className="page-shell flex min-h-screen flex-col py-4 sm:py-5">
          <div className="mobile-drawer-panel flex items-center justify-between gap-4 rounded-[1.85rem] px-4 py-3 sm:px-5">
            <div className="min-w-0">
              <p className="mobile-drawer-label text-[0.62rem] font-semibold tracking-[0.22em] uppercase sm:text-[0.68rem]">
                Lifestyle Estate
              </p>
              <h2 className="brand-wordmark mt-1.5 text-[2.45rem] sm:text-[2.8rem]">
                The Lombardy
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="mobile-drawer-close inline-flex min-h-11 shrink-0 items-center rounded-full border px-4 text-[0.72rem] font-semibold uppercase tracking-[var(--tracking-ui)] transition"
            >
              Close
            </button>
          </div>

          <div className="mt-5 grid flex-1 gap-7 md:grid-cols-[0.92fr_1.08fr] md:gap-8">
            <div>
              <nav aria-label="Primary" className="space-y-1.5">
                {primaryNavigation.map((item) =>
                  item.external ? (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={onClose}
                      className={`block rounded-[1.65rem] px-4 py-4 transition ${
                        isActiveLink(pathname, item.href, item.external)
                          ? "mobile-drawer-link-active"
                          : "mobile-drawer-link"
                      }`}
                    >
                      <span className="display-title text-[2rem] leading-none font-semibold sm:text-[2.3rem]">
                        {item.label}
                      </span>
                    </a>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className={`block rounded-[1.65rem] px-4 py-4 transition ${
                        isActiveLink(pathname, item.href, item.external)
                          ? "mobile-drawer-link-active"
                          : "mobile-drawer-link"
                      }`}
                    >
                      <span className="display-title text-[2rem] leading-none font-semibold sm:text-[2.3rem]">
                        {item.label}
                      </span>
                    </Link>
                  ),
                )}
              </nav>
            </div>

            <div className="grid gap-4">
              <Link
                href={siteConfig.ownerPortalPath}
                onClick={onClose}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--color-stone)] px-5 text-[0.8rem] font-semibold uppercase tracking-[var(--tracking-ui)] text-[var(--color-ink)] transition hover:bg-[#e8dccd]"
              >
                Owner Portal
              </Link>

              <div className="mobile-drawer-panel rounded-[1.7rem] p-5">
                <p className="mobile-drawer-label meta-label">Resident links</p>
                <div className="mt-4 space-y-3">
                  {residentLinks.map((item) =>
                    item.external ? (
                      <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        onClick={onClose}
                        className="mobile-drawer-utility-link block text-sm leading-6 transition"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={onClose}
                        className="mobile-drawer-utility-link block text-sm leading-6 transition"
                      >
                        {item.label}
                      </Link>
                    ),
                  )}
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

              <div className="mobile-drawer-panel overflow-hidden rounded-[1.7rem]">
                <div className="relative min-h-[13rem]">
                  <Image
                    src="/images/inspiration/garden-walkway.jpg"
                    alt="Residential garden walkway reference."
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div className="mobile-drawer-media-overlay absolute inset-0" />
                  <div className="absolute inset-x-4 bottom-4">
                    <p className="meta-label text-on-dark-label">
                      Estate WhatsApp
                    </p>
                    {communityLink ? (
                      <Link
                        href={communityLink.href}
                        onClick={onClose}
                        className="mt-2 inline-flex text-sm font-semibold text-on-dark transition hover:text-white"
                      >
                        {communityLink.label}
                      </Link>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
