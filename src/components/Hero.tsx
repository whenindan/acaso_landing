import { hero } from "@/content/site";
import { Container } from "./Section";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="overflow-hidden">
      <Container className="flex flex-col items-center pt-12 pb-20 text-center md:pt-24 md:pb-32">
        <p className="label-mono text-ink-60">{hero.microline}</p>
        <h1
          id="hero-heading"
          className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.045em] text-balance sm:text-7xl lg:text-8xl"
        >
          {hero.headline}
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-80 sm:text-xl">
          {hero.sub}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={hero.primaryCta.href}
            className="rounded-full bg-ink px-6 py-3.5 font-semibold text-paper transition-opacity hover:opacity-85"
          >
            {hero.primaryCta.label}
          </a>
        </div>
      </Container>
    </section>
  );
}
