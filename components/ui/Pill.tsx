import type { ReactNode } from "react";
import clsx from "clsx";

interface PillProps {
  children: ReactNode;
  className?: string;
}

export function Pill({ children, className }: PillProps) {
  return (
    <span
      className={clsx(
        "meta-label inline-flex items-center rounded-full border border-[var(--color-line)] bg-white/72 px-3.5 py-1.5 text-[var(--color-sage-deep)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
