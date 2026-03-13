export const THEME_STORAGE_KEY = "thelombardy-theme";
export const THEME_ATTRIBUTE = "data-theme";
export const THEME_CHANGE_EVENT = "thelombardy-theme-change";

export type ThemePreference = "system" | "light" | "dark";
export type ResolvedTheme = "light" | "dark";

export const themePreferences: readonly ThemePreference[] = [
  "system",
  "light",
  "dark",
];

export function isThemePreference(value: unknown): value is ThemePreference {
  return (
    typeof value === "string" &&
    themePreferences.includes(value as ThemePreference)
  );
}

export function resolveThemePreference(
  preference: ThemePreference,
  systemPrefersDark: boolean,
): ResolvedTheme {
  if (preference === "system") {
    return systemPrefersDark ? "dark" : "light";
  }

  return preference;
}

export function createThemeBootstrapScript() {
  return `
    (function () {
      var storageKey = ${JSON.stringify(THEME_STORAGE_KEY)};
      var attribute = ${JSON.stringify(THEME_ATTRIBUTE)};
      var doc = document.documentElement;
      var preference = "system";

      try {
        var stored = window.localStorage.getItem(storageKey);
        if (stored === "light" || stored === "dark" || stored === "system") {
          preference = stored;
        }
      } catch {}

      var systemPrefersDark = false;

      try {
        systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      } catch {}

      var resolved =
        preference === "system"
          ? systemPrefersDark
            ? "dark"
            : "light"
          : preference;

      doc.setAttribute(attribute, resolved);
    })();
  `;
}
