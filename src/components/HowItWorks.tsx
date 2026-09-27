import { how } from "@/content/site";
import { Container, Heading } from "./Section";

export function HowItWorks() {
  const last = how.steps.length - 1;
  return (
    <section
      id="how"
      aria-labelledby="how-heading"
      className="bg-ink py-24 text-paper md:py-32"
    >
      <Container>
        <p className="label-mono text-paper/60">{how.eyebrow}</p>
        <Heading id="how-heading" className="max-w-3xl">
          {how.heading}
        </Heading>
        <ol className="relative mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {/* The loop: a hairline running through every step. */}
          <span
            aria-hidden="true"
            className="absolute top-5 right-0 left-5 hidden h-px bg-paper/20 md:block"
          />
          {how.steps.map((step, i) => (
            <li key={step.title} className="relative">
              <span
                className={`relative flex size-10 items-center justify-center rounded-full border ${
                  i === last
                    ? "border-paper bg-paper text-ink"
                    : "border-paper/30 bg-ink text-paper"
                }`}
              >
                {i === last ? (
                  <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 text-signal">
                    <path
                      d="M3 8.5l3.2 3L13 4.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <span className="font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>
                )}
              </span>
              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.02em]">
                {step.title}
              </h3>
              <p className="mt-3 max-w-xs leading-relaxed text-paper/70">{step.body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-20 border-t border-paper/15 pt-8 text-xl font-semibold tracking-[-0.02em] sm:text-2xl">
          {how.closing}
        </p>
      </Container>
    </section>
  );
}
