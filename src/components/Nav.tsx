import { nav } from "@/content/site";
import { Logo } from "./Logo";
import { Container } from "./Section";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-10 bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/80">
      <Container className="flex h-16 items-center justify-between gap-6">
        <a href="#top" aria-label="ACASO home">
          <Logo />
        </a>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm text-ink-80">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={nav.cta.href}
          className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper transition-opacity hover:opacity-85"
        >
          {nav.cta.label}
        </a>
      </Container>
    </header>
  );
}
