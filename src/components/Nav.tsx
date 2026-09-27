import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

// Overlays the hero only (position: absolute, not fixed/sticky) and scrolls
// away with the page past that point — matches the design exactly.
export function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-[clamp(20px,4vw,56px)] py-7">
      <a href="#top" aria-label="ACASO home" className="flex">
        <Logo />
      </a>
      <ThemeToggle />
    </header>
  );
}
