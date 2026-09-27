"use client";

import { THEME_STORAGE_KEY } from "@/lib/theme";

// Dark is this site's brand default (see the inline script in layout.tsx
// that applies a saved choice before paint); this button is the only way to
// opt into light mode, and it persists the choice. Both labels always
// render — which one shows is decided by CSS off data-theme (see
// .theme-label-* in globals.css), so there's no DOM-read-into-state effect
// and nothing that can mismatch during hydration.
function toggleTheme() {
  const root = document.documentElement;
  const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
  root.setAttribute("data-theme", next);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, next);
  } catch {
    // Private browsing / storage disabled — theme just won't persist.
  }
}

export function ThemeToggle() {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="label-mono border-b border-fg/30 py-2.5 text-faint transition-colors hover:border-fg hover:text-fg"
    >
      <span className="theme-label-dark">Light mode</span>
      <span className="theme-label-light">Dark mode</span>
    </button>
  );
}
