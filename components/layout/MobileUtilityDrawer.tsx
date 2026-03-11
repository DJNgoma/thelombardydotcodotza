"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
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

function NavigationItem({
  item,
  active,
  onClose,
}: {
  item: NavItem;
  active: boolean;
  onClose: () => void;
}) {
  const className = clsx(
    "block rounded-2xl px-4 py-3 text-base font-medium transition",
    active
      ? "accent-surface text-on-dark"
      : "text-on-light hover:bg-white/78",
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
        {item.label}
      </a>
    );
  }

  return (
    <Link href={item.href} onClick={onClose} className={className}>
      {item.label}
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
    <>
      <div
        className={clsx(
          "fixed inset-0 z-40 bg-[rgba(24,31,27,0.22)] backdrop-blur-[2px] transition duration-200 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={onClose}
      />
      <div
        id="mobile-utility-drawer"
        aria-hidden={!open}
        className={clsx(
          "fixed inset-x-0 top-[calc(var(--header-offset-mobile)-0.55rem)] z-50 transition duration-200 ease-out lg:hidden md:top-[calc(var(--header-offset-desktop)-0.45rem)]",
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        <div className="page-shell">
          <div className="soft-card surface-panel radius-panel border border-[var(--color-line)] px-4 py-4 shadow-[var(--shadow-panel)] sm:px-5 sm:py-5">
            <div className="space-y-2">
              {primaryNavigation.map((item) => (
                <NavigationItem
                  key={item.href}
                  item={item}
                  active={isActiveLink(pathname, item.href, item.external)}
                  onClose={onClose}
                />
              ))}
            </div>

            <div className="section-rule my-4" />

            <div>
              <p className="meta-label px-4 text-[var(--color-sage-deep)]">
                Resident links
              </p>
              <div className="mt-3 space-y-2">
                {utilityNavigation.map((item) => (
                  <NavigationItem
                    key={item.href}
                    item={item}
                    active={isActiveLink(pathname, item.href, item.external)}
                    onClose={onClose}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
