"use client";

import { useEffect } from "react";

// Animates every in-page "#id" link (Get started, Suggest a loop, the logo's
// #top, ...) on click, instead of relying solely on the CSS `scroll-behavior:
// smooth` in globals.css. That CSS approach is correct in most browsers, but
// clicking straight into an anchor link is deliberate, primary navigation
// here (not decorative motion), so this drives it explicitly via
// scrollIntoView for consistent timing everywhere.
export function SmoothAnchorScroll() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0) return;
      const link = (event.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link) return;

      const id = link.getAttribute("href")?.slice(1);
      const target = id ? document.getElementById(id) : null;
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", `#${id}`);
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
