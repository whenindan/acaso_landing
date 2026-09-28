import Image from "next/image";
import { whatsNext } from "@/content/site";
import { Container, Eyebrow } from "./Section";

export function WhatsNext() {
  return (
    <section
      id="next"
      aria-labelledby="next-heading"
      className="border-t border-fg/10 px-[clamp(20px,4vw,56px)] py-[clamp(80px,10vw,128px)]"
    >
      <Container className="grid items-center gap-x-24 gap-y-14 [grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr))]">
        <div className="flex flex-col gap-7">
          <Eyebrow>{whatsNext.eyebrow}</Eyebrow>
          <h2
            id="next-heading"
            className="m-0 text-balance font-serif text-[clamp(40px,4.8vw,68px)] leading-[1] font-normal tracking-[-0.02em]"
          >
            {whatsNext.heading}
            <em className="text-muted italic">{whatsNext.headingEmphasis}</em>
          </h2>
          <p className="m-0 max-w-[420px] text-pretty text-base leading-[1.6] text-muted">
            {whatsNext.body}
          </p>
          <a
            href={whatsNext.cta.href}
            className="flex w-fit items-center gap-3 border-b border-fg/40 py-2.5 text-[15px] font-medium transition-colors hover:border-fg"
          >
            {whatsNext.cta.label} <span aria-hidden="true">→</span>
          </a>
        </div>
        <div aria-hidden="true" className="w-full max-w-[480px] justify-self-end">
          <Image
            src="/brand/svg/acaso-mark-white.svg"
            alt=""
            width={441}
            height={102}
            className="invert-on-light block h-auto w-full [mask-image:linear-gradient(to_left,#000_0%,#000_30%,rgba(0,0,0,.22)_62%,rgba(0,0,0,.08)_100%)] [-webkit-mask-image:linear-gradient(to_left,#000_0%,#000_30%,rgba(0,0,0,.22)_62%,rgba(0,0,0,.08)_100%)]"
          />
        </div>
      </Container>
    </section>
  );
}
