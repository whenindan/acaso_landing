import { footer } from "@/content/site";

export function Footer() {
  return (
    <footer className="label-mono border-t border-fg/10 px-[clamp(20px,4vw,56px)] py-8 text-quiet">
      {footer.copyright}
    </footer>
  );
}
