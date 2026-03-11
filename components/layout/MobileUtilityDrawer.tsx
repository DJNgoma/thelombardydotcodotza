"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site";
import type { NavItem } from "@/lib/types";

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
    (item) => item.label !== "The Lombardy Community Chat",
  );
  const communityLink = utilityNavigation.find(
    (item) => item.label === "The Lombardy Community Chat",
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
        className="absolute inset-0 bg-[rgba(15,18,15,0.55)] backdrop-blur-[5px]"
        onClick={onClose}
      />

      <div className="absolute inset-0 overflow-y-auto bg-[radial-gradient(circle_at_top_left,rgba(148,164,140,0.16),transparent_28%),linear-gradient(180deg,rgba(26,33,28,0.985),rgba(18,24,20,0.995))] text-on-dark">
        <div className="page-shell flex min-h-screen flex-col py-4 sm:py-5">
          <div className="flex items-center justify-between gap-4 rounded-[1.85rem] border border-white/10 bg-white/6 px-4 py-3 sm:px-5">
            <div>
              <p className="eyebrow text-on-dark-label">Lifestyle Estate</p>
              <h2 className="brand-wordmark mt-1 text-[2.5rem] text-on-dark sm:text-[2.8rem]">
                The Lombardy
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex min-h-11 items-center rounded-full border border-white/14 bg-white/8 px-4 text-[0.76rem] font-semibold uppercase tracking-[var(--tracking-ui)] text-on-dark transition hover:bg-white/12"
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
                          ? "bg-white/10 text-on-dark"
                          : "text-on-dark-muted hover:bg-white/8 hover:text-white"
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
                          ? "bg-white/10 text-on-dark"
                          : "text-on-dark-muted hover:bg-white/8 hover:text-white"
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
              <a
                href={siteConfig.ownerPortalUrl}
                target="_blank"
                rel="noreferrer"
                onClick={onClose}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--color-stone)] px-5 text-[0.8rem] font-semibold uppercase tracking-[var(--tracking-ui)] text-[var(--color-ink)] transition hover:bg-[#e8dccd]"
              >
                Owner Portal
              </a>

              <div className="rounded-[1.7rem] border border-white/10 bg-white/6 p-5">
                <p className="meta-label text-on-dark-label">Resident links</p>
                <div className="mt-4 space-y-3">
                  {residentLinks.map((item) =>
                    item.external ? (
                      <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        onClick={onClose}
                        className="block text-sm leading-6 text-on-dark-muted transition hover:text-white"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={onClose}
                        className="block text-sm leading-6 text-on-dark-muted transition hover:text-white"
                      >
                        {item.label}
                      </Link>
                    ),
                  )}
                </div>
              </div>

              <div className="rounded-[1.7rem] border border-white/10 bg-white/6 p-5">
                <p className="meta-label text-on-dark-label">Support</p>
                <p className="mt-3 text-sm leading-6 text-on-dark-muted">
                  Landsdowne remains the primary support path for owner access,
                  operational queries, and account assistance. Trustees are for
                  escalation if Landsdowne is not responsive.
                </p>
                <div className="mt-4 space-y-2 text-sm">
                  <a
                    href={`mailto:${siteConfig.ownerSupportEmail}`}
                    className="block text-on-dark transition hover:text-white"
                  >
                    {siteConfig.ownerSupportEmail}
                  </a>
                  <a
                    href={`mailto:${siteConfig.trusteeContactEmail}`}
                    className="block text-on-dark-muted transition hover:text-white"
                  >
                    {siteConfig.trusteeContactEmail}
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/6">
                <div className="relative min-h-[13rem]">
                  <Image
                    src="/images/inspiration/garden-walkway.jpg"
                    alt="Residential garden walkway reference."
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,24,20,0.72)] via-[rgba(18,24,20,0.16)] to-transparent" />
                  <div className="absolute inset-x-4 bottom-4">
                    <p className="meta-label text-on-dark-label">
                      Community chat
                    </p>
                    {communityLink ? (
                      <a
                        href={communityLink.href}
                        target="_blank"
                        rel="noreferrer"
                        onClick={onClose}
                        className="mt-2 inline-flex text-sm font-semibold text-on-dark transition hover:text-white"
                      >
                        {communityLink.label}
                      </a>
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
