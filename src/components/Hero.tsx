import { hero } from "@/content/site";

// --- Background rings ---
// RING_SCALE sizes the whole formation; the design exposes this as an
// editable 0.8-1.8 range with 1.1 as the default we ship. Each entry in
// RINGS is one ring: `scale` sizes it against --s (min(92vh,78vw) *
// RING_SCALE), `offset` pushes it further off the right edge as it shrinks
// so the rings nest concentrically, and `opacity` fades it out with
// distance. Add, remove or edit entries here to change the formation.
const RING_SCALE = 1.25;
const RING_STRIPES = "repeating-linear-gradient(to bottom, var(--color-fg) 0 3px, transparent 3px 14px)";
const RINGS = [
  { scale: 1, offset: 0, opacity: 0.16 },
  { scale: 0.54, offset: 0.76, opacity: 0.12 },
  { scale: 0.3, offset: 1.18, opacity: 0.08 },
];

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative box-border flex min-h-screen flex-col justify-end overflow-hidden px-[clamp(20px,4vw,56px)] pt-36 pb-16"
      style={{ "--s": `calc(min(92vh, 78vw) * ${RING_SCALE})` } as React.CSSProperties}
    >
      {RINGS.map((ring) => (
        <div
          key={ring.scale}
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 aspect-square -translate-y-[58%] rounded-full"
          style={{
            width: `calc(var(--s) * ${ring.scale})`,
            right: `calc(-8vw + var(--s) * ${ring.offset})`,
            opacity: ring.opacity,
            backgroundImage: RING_STRIPES,
          }}
        />
      ))}

      <div className="relative grid grid-cols-1 items-end gap-y-6 md:grid-cols-12 md:gap-6">
        <h1
          id="hero-heading"
          className="m-0 max-w-[1180px] text-balance font-serif text-[clamp(52px,8.4vw,140px)] leading-[0.96] font-normal tracking-[-0.03em] md:col-span-12"
        >
          {hero.headline}
          <em className="font-normal italic">{hero.headlineEmphasis}</em>
        </h1>
        <p className="mt-6 max-w-2xl text-pretty font-reader text-[clamp(22px,2vw,28px)] leading-[1.35] font-light text-muted italic md:col-span-6">
          {hero.sub}
        </p>
        <div className="flex md:col-span-4 md:col-start-9 md:justify-end">
          <a
            href={hero.cta.href}
            className="flex min-w-[240px] items-center justify-between gap-14 border border-fg/40 px-[28px] py-[20px] text-base font-medium transition-colors hover:bg-fg hover:text-bg"
          >
            {hero.cta.label} <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
