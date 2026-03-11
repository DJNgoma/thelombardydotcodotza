import type { ReactNode } from "react";
import clsx from "clsx";

interface SoftCardProps {
  children: ReactNode;
  className?: string;
  tone?: "feature" | "panel" | "card";
  padding?: "md" | "lg";
}

const toneClasses = {
  card: "surface-card radius-card",
  panel: "surface-panel radius-panel",
  feature: "surface-feature radius-feature",
};

const paddingClasses = {
  md: "p-5 sm:p-7",
  lg: "p-6 sm:p-10",
};

export function SoftCard({
  children,
  className,
  tone = "card",
  padding = "md",
}: SoftCardProps) {
  return (
    <div
      className={clsx(
        "soft-card",
        toneClasses[tone],
        paddingClasses[padding],
        className,
      )}
    >
      {children}
    </div>
  );
}
