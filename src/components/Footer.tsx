import { footer } from "@/content/site";

export function Footer() {
  return (
    <footer className="label-mono flex flex-wrap items-center justify-between gap-4 border-t border-fg/10 px-[clamp(20px,4vw,56px)] py-8 text-quiet">
      <span>{footer.copyright}</span>
      <a href={footer.privacy.href} className="text-faint transition-colors hover:text-fg">
        {footer.privacy.label}
      </a>
    </footer>
  );
}
