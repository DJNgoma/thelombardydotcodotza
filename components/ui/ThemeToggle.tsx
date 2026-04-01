import clsx from "clsx";
import type { ThemePreference } from "@/lib/theme";

interface ThemeToggleProps {
  className?: string;
  tone?: "surface" | "overlay";
}

const themeOptions: Array<{
  value: ThemePreference;
  label: string;
  title: string;
}> = [
  {
    value: "system",
    label: "Auto",
    title: "Follow your device theme",
  },
  {
    value: "light",
    label: "Light",
    title: "Always use the light theme",
  },
  {
    value: "dark",
    label: "Dark",
    title: "Always use the dark theme",
  },
];

export function ThemeToggle({
  className,
  tone = "surface",
}: ThemeToggleProps) {
  return (
    <div
      className={clsx("theme-toggle", className)}
      data-tone={tone}
      data-theme-toggle
      role="group"
      aria-label="Theme preference"
    >
      {themeOptions.map((option) => (
        <button
          key={option.value}
          type="button"
          suppressHydrationWarning
          data-theme-option={option.value}
          data-active={option.value === "system"}
          aria-pressed={option.value === "system"}
          title={option.title}
          className="theme-toggle-button"
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
