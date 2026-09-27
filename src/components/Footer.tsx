import { footer, site } from "@/content/site";
import { Logo } from "./Logo";
import { Container } from "./Section";

export function Footer() {
  return (
    <footer className="border-t border-ink-10 py-12">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Logo className="h-10" />
          <p className="mt-4 text-sm text-ink-60">
            {/* PLACEHOLDER contact address, see src/content/site.ts */}
            <a href={`mailto:${site.email}`} className="hover:text-ink">
              {site.email}
            </a>
          </p>
        </div>
        <div className="label-mono flex flex-wrap gap-6 text-ink-60">
          <span>{footer.copyright}</span>
          <a href={footer.privacy.href} className="hover:text-ink">
            {footer.privacy.label}
          </a>
        </div>
      </Container>
    </footer>
  );
}
