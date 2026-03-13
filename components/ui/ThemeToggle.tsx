"use client";

import clsx from "clsx";
import {
  useEffect,
  useEffectEvent,
  useState,
  type ButtonHTMLAttributes,
} from "react";
import {
  THEME_ATTRIBUTE,
  THEME_CHANGE_EVENT,
  THEME_STORAGE_KEY,
  type ResolvedTheme,
  type ThemePreference,
  isThemePreference,
  resolveThemePreference,
} from "@/lib/theme";

interface ThemeToggleProps {
  className?: string;
  tone?: "surface" | "overlay";
}

interface ThemeState {
  preference: ThemePreference;
  resolvedTheme: ResolvedTheme;
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

function readThemeState(): ThemeState {
  const fallbackTheme: ThemeState = {
    preference: "system",
    resolvedTheme: "light",
  };

  if (typeof window === "undefined") {
    return fallbackTheme;
  }

  let preference: ThemePreference = "system";

  try {
    const storedPreference = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (isThemePreference(storedPreference)) {
      preference = storedPreference;
    }
  } catch {}

  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  const domTheme = document.documentElement.getAttribute(
    THEME_ATTRIBUTE,
  ) as ResolvedTheme | null;
  const resolvedTheme =
    domTheme === "light" || domTheme === "dark"
      ? domTheme
      : resolveThemePreference(preference, systemPrefersDark);

  return {
    preference,
    resolvedTheme,
  };
}

function applyThemePreference(preference: ThemePreference): ThemeState {
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  const resolvedTheme = resolveThemePreference(preference, systemPrefersDark);

  document.documentElement.setAttribute(THEME_ATTRIBUTE, preference);

  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, preference);
  } catch {}

  window.dispatchEvent(new CustomEvent(THEME_CHANGE_EVENT));

  return {
    preference,
    resolvedTheme,
  };
}

function ThemeToggleButton({
  active,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  active: boolean;
}) {
  return (
    <button
      type="button"
      data-active={active}
      aria-pressed={active}
      className="theme-toggle-button"
      {...props}
    >
      {children}
    </button>
  );
}

export function ThemeToggle({
  className,
  tone = "surface",
}: ThemeToggleProps) {
  const [state, setState] = useState<ThemeState>({
    preference: "system",
    resolvedTheme: "light",
  });
  const [ready, setReady] = useState(false);

  const syncThemeState = useEffectEvent(() => {
    setState(readThemeState());
    setReady(true);
  });

  useEffect(() => {
    syncThemeState();

    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = () => {
      const currentTheme = readThemeState();
      if (currentTheme.preference === "system") {
        setState(currentTheme);
      }
    };

    const handleStorage = (event: StorageEvent) => {
      if (event.key === THEME_STORAGE_KEY) {
        syncThemeState();
      }
    };

    const handleThemeChange = () => {
      syncThemeState();
    };

    media.addEventListener("change", handleSystemThemeChange);
    window.addEventListener("storage", handleStorage);
    window.addEventListener(THEME_CHANGE_EVENT, handleThemeChange);

    return () => {
      media.removeEventListener("change", handleSystemThemeChange);
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener(THEME_CHANGE_EVENT, handleThemeChange);
    };
  }, []);

  return (
    <div
      className={clsx("theme-toggle", !ready && "theme-toggle-pending", className)}
      data-tone={tone}
      data-resolved-theme={state.resolvedTheme}
      role="group"
      aria-label="Theme preference"
    >
      {themeOptions.map((option) => (
        <ThemeToggleButton
          key={option.value}
          active={state.preference === option.value}
          title={option.title}
          onClick={() => {
            setState(applyThemePreference(option.value));
            setReady(true);
          }}
        >
          {option.label}
        </ThemeToggleButton>
      ))}
    </div>
  );
}
