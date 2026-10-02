import { how } from "@/content/site";
import { Container } from "./Section";

// --- Loop track ---
// The steps sit inside a rounded outline that reads as the loop. Each step's
// number sits on the track: along the top edge on md+ (steps run left to
// right), along the left edge on mobile (steps run top to bottom). A lone
// chevron on the bottom edge marks the way back to the start. Node offsets are
// derived from --pad, the track's inner padding, so they always land on the
// border line; keep the corner radius below --pad so nodes sit on a
// straight stretch of it.
const NODE = 32;

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 8 8" className={`size-2 text-fg/45 ${className}`} aria-hidden="true">
      <path d="M2 1 L5.5 4 L2 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HowItWorks() {
  return (
    <section
      id="how"
      aria-labelledby="how-heading"
      className="border-t border-fg/10 px-[clamp(20px,4vw,56px)] py-[clamp(80px,10vw,136px)]"
    >
      <Container className="flex flex-col gap-[clamp(48px,6vw,80px)]">
        <h2
          id="how-heading"
          className="m-0 max-w-[900px] text-balance font-reader text-[clamp(38px,4.4vw,64px)] leading-[1.02] font-light tracking-[-0.02em]"
        >
          {how.heading}
          <em className="text-muted italic">{how.headingEmphasis}</em>
        </h2>

        <div
          className="relative rounded-[22px] border border-fg/20 p-[var(--pad)] pl-[calc(var(--pad)+8px)] [--pad:28px] md:rounded-[30px] md:pl-[var(--pad)] md:[--pad:40px]"
          style={{ "--node": `${NODE}px` } as React.CSSProperties}
        >
          <ol className="m-0 grid list-none gap-x-10 gap-y-9 p-0 md:grid-cols-4">
            {how.steps.map((step, i) => (
              <li key={step.title} className="relative flex flex-col gap-2 pt-1 md:pt-5">
                {/* Node on the track: left edge on mobile, top edge on md+. */}
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-[calc(-1*var(--pad)-8px-var(--node)/2-0.5px)] flex size-[var(--node)] items-center justify-center rounded-full border border-fg/50 bg-bg font-mono text-[12px] font-medium text-fg tabular-nums md:top-[calc(-1*var(--pad)-var(--node)/2-0.5px)] md:left-0"
                >
                  {pad(i + 1)}
                </span>
                {/* Arrow along the track to the next step. */}
                {i < how.steps.length - 1 && (
                  <Chevron className="absolute -bottom-[22px] left-[calc(-1*var(--pad)-8px-4.5px)] rotate-90 md:top-[calc(-1*var(--pad)-4.5px)] md:bottom-auto md:left-auto md:-right-[24px] md:rotate-0" />
                )}
                <h3 className="m-0 text-xl font-medium tracking-[-0.01em]">{step.title}</h3>
                <p className="m-0 max-w-[30ch] text-pretty text-[15px] leading-[1.6] text-muted">{step.body}</p>
              </li>
            ))}
          </ol>

          {/* The return leg: bottom edge, heading back to step 01. */}
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
            <Chevron className="block md:rotate-180" />
          </span>
        </div>
      </Container>
    </section>
  );
}
