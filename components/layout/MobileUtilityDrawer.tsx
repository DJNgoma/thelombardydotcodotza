"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
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

function PrimaryNavigationItem({
  item,
  active,
  onClose,
}: {
  item: NavItem;
  active: boolean;
  onClose: () => void;
}) {
  const className = clsx(
    "group flex items-center justify-between rounded-[1.75rem] px-4 py-4 transition sm:px-5",
    active
      ? "bg-white/10 text-on-dark"
      : "text-on-dark-muted hover:bg-white/6 hover:text-on-dark",
  );

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        onClick={onClose}
        className={className}
      >
        <span className="display-title text-[2rem] leading-none font-semibold sm:text-[2.25rem]">
          {item.label}
        </span>
        <span className="meta-label text-on-dark-label">Open</span>
      </a>
    );
  }

  return (
    <Link href={item.href} onClick={onClose} className={className}>
      <span className="display-title text-[2rem] leading-none font-semibold sm:text-[2.25rem]">
        {item.label}
      </span>
      <span className="meta-label text-on-dark-label">Open</span>
    </Link>
  );
}

function UtilityNavigationItem({
  item,
  onClose,
}: {
  item: NavItem;
  onClose: () => void;
}) {
  const className =
    "rounded-[1.45rem] border border-white/10 bg-white/6 px-4 py-4 text-on-dark transition hover:bg-white/10";

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        onClick={onClose}
        className={className}
      >
        <p className="text-sm font-medium">{item.label}</p>
      </a>
    );
  }

  return (
    <Link href={item.href} onClick={onClose} className={className}>
      <p className="text-sm font-medium">{item.label}</p>
    </Link>
  );
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
    document.body.style.overflow = open ? "hidden" : "";
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

  return (
    <div
      className={clsx(
        "fixed inset-0 z-50 lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
    >
      <div
        className={clsx(
          "absolute inset-0 bg-[rgba(22,30,25,0.42)] backdrop-blur-[4px] transition duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
      />

      <div
        id="mobile-utility-drawer"
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        className={clsx(
          "absolute inset-3 flex flex-col overflow-hidden rounded-[2rem] border border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(148,164,140,0.18),transparent_30%),linear-gradient(180deg,rgba(54,66,54,0.98),rgba(30,38,31,0.98))] p-5 shadow-[0_30px_72px_rgba(19,24,20,0.28)] transition duration-300 sm:inset-4 sm:rounded-[2.35rem] sm:p-6",
          open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        )}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow text-on-dark-label">Lifestyle Estate</p>
            <h2 className="display-title mt-2 text-[2.2rem] leading-none font-semibold text-on-dark">
              The Lombardy
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="meta-label rounded-full border border-white/12 bg-white/6 px-4 py-3 text-on-dark transition hover:bg-white/10"
          >
            Close
          </button>
        </div>

        <div className="mt-5 h-px w-full bg-[linear-gradient(90deg,rgba(251,248,242,0),rgba(251,248,242,0.18),rgba(251,248,242,0))]" />

        <div className="mt-5 flex-1 overflow-y-auto">
          <nav aria-label="Primary" className="space-y-2">
            {primaryNavigation.map((item) => (
              <PrimaryNavigationItem
                key={item.href}
                item={item}
                active={isActiveLink(pathname, item.href, item.external)}
                onClose={onClose}
              />
            ))}
          </nav>

          <div className="mt-8">
            <p className="meta-label text-on-dark-label">Owner and resident links</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {residentLinks.map((item) => (
                <UtilityNavigationItem
                  key={item.href}
                  item={item}
                  onClose={onClose}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-3">
          {communityLink ? (
            <a
              href={communityLink.href}
              target="_blank"
              rel="noreferrer"
              onClick={onClose}
              className="rounded-[1.45rem] border border-white/10 bg-white/6 px-4 py-4 text-on-dark transition hover:bg-white/10"
            >
              <p className="meta-label text-on-dark-label">Community chat</p>
              <p className="mt-2 text-sm font-medium text-on-dark">
                {communityLink.label}
              </p>
            </a>
          ) : null}

          <div className="band-support-card rounded-[1.45rem] px-4 py-4">
            <p className="meta-label text-on-dark-label">Support</p>
            <p className="mt-3 text-sm leading-6 text-on-dark-muted">
              Landsdowne remains the primary support path for portal access and
              operational queries. Trustees are for escalation if Landsdowne is
              not responsive.
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <a
                href={`mailto:${siteConfig.ownerSupportEmail}`}
                className="text-on-dark transition hover:text-white"
              >
                {siteConfig.ownerSupportEmail}
              </a>
              <a
                href={`mailto:${siteConfig.trusteeContactEmail}`}
                className="text-on-dark-muted transition hover:text-white"
              >
                {siteConfig.trusteeContactEmail}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
