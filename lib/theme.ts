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
      var media = window.matchMedia("(prefers-color-scheme: dark)");

      function isPreference(value) {
        return value === "light" || value === "dark" || value === "system";
      }

      function getPreference() {
        var preference = "system";

        try {
          var stored = window.localStorage.getItem(storageKey);
          if (isPreference(stored)) {
            preference = stored;
          }
        } catch {}

        return preference;
      }

      function resolveTheme(preference) {
        if (preference === "system") {
          return media.matches ? "dark" : "light";
        }

        return preference;
      }

      function syncToggles(preference) {
        var toggles = document.querySelectorAll("[data-theme-toggle]");

        for (var i = 0; i < toggles.length; i += 1) {
          var toggle = toggles[i];
          var buttons = toggle.querySelectorAll("[data-theme-option]");
          for (var j = 0; j < buttons.length; j += 1) {
            var button = buttons[j];
            var active = button.getAttribute("data-theme-option") === preference;
            button.setAttribute("data-active", active ? "true" : "false");
            button.setAttribute("aria-pressed", active ? "true" : "false");
          }
        }
      }

      function applyPreference(preference) {
        if (!isPreference(preference)) {
          return;
        }

        doc.setAttribute(attribute, preference);

        try {
          window.localStorage.setItem(storageKey, preference);
        } catch {}

        syncToggles(preference);
      }

      function syncPreference() {
        var preference = getPreference();
        doc.setAttribute(attribute, preference);
        syncToggles(preference);
      }

      doc.setAttribute(attribute, getPreference());

      document.addEventListener("click", function (event) {
        var target =
          event.target instanceof Element
            ? event.target.closest("[data-theme-option]")
            : null;

        if (!target) {
          return;
        }

        applyPreference(target.getAttribute("data-theme-option"));
      });

      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", syncPreference, {
          once: true,
        });
      } else {
        syncPreference();
      }

      window.addEventListener("storage", function (event) {
        if (event.key === storageKey) {
          syncPreference();
        }
      });

      var handleSystemThemeChange = function () {
        if (getPreference() === "system") {
          syncPreference();
        }
      };

      if (media.addEventListener) {
        media.addEventListener("change", handleSystemThemeChange);
      } else if (media.addListener) {
        media.addListener(handleSystemThemeChange);
      }
    })();
  `;
}
