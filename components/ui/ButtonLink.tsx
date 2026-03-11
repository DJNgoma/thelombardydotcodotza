import type { ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "compact";
  className?: string;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "default",
  className,
}: ButtonLinkProps) {
  const externalLinkProps = href.startsWith("http")
    ? { target: "_blank", rel: "noreferrer" }
    : {};
  const classes = clsx(
    "inline-flex items-center justify-center rounded-full border border-transparent font-semibold uppercase tracking-[var(--tracking-ui)] transition duration-300",
    size === "default" && "min-h-12 px-5 text-[0.78rem] sm:text-sm",
    size === "compact" && "min-h-10 px-4 text-[0.72rem]",
    variant === "primary" &&
      "accent-surface !text-white visited:!text-white hover:-translate-y-px hover:bg-[#3e4b3f] hover:!text-white focus-visible:!text-white active:!text-white",
    variant === "secondary" &&
      "border-[var(--color-line)] bg-white/90 text-on-light hover:-translate-y-px hover:bg-white hover:text-[var(--color-on-light)]",
    variant === "ghost" &&
      "border-transparent px-0 text-on-light-muted hover:text-[var(--color-on-light)]",
    className,
  );
  const isExternal =
    href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  if (isExternal) {
    return (
      <a href={href} className={classes} {...externalLinkProps}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
