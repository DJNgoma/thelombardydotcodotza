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
          "border border-[var(--color-line)] bg-white/72 text-[var(--color-sage-deep)]",
        tone === "dark" &&
          "border border-white/16 bg-white/8 text-on-dark-label",
        className,
      )}
    >
      {children}
    </span>
  );
}
