import type { ReactNode } from "react";
import clsx from "clsx";

interface PillProps {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
}

export function Pill({ children, className, tone = "light" }: PillProps) {
  return (
    <span
      className={clsx(
        "meta-label inline-flex items-center rounded-full px-3.5 py-1.5",
        tone === "light" &&
          "control-surface border text-[var(--color-pill-light-fg)]",
        tone === "dark" &&
          "border border-[var(--color-pill-dark-border)] bg-[var(--color-pill-dark-bg)] text-on-dark-label",
        className,
      )}
    >
      {children}
    </span>
  );
}
