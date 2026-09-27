import { comparison } from "@/content/site";
import { Container, Eyebrow, Heading } from "./Section";

export function Comparison() {
  const { old, acaso } = comparison;
  return (
    <section id="why" aria-labelledby="why-heading" className="py-24 md:py-32">
      <Container>
        <Eyebrow>{comparison.eyebrow}</Eyebrow>
        <Heading id="why-heading" className="max-w-3xl">
          {comparison.heading}
        </Heading>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-ink-10 p-7 sm:p-10">
            <h3 className="label-mono text-ink-60">{old.label}</h3>
            <p className="mt-6 text-2xl font-semibold tracking-[-0.02em] text-ink-60">
              {old.summary}
            </p>
            <ul className="mt-8 space-y-4 border-t border-ink-10 pt-6">
              {old.points.map((point) => (
                <li key={point} className="flex gap-3 text-ink-60">
                  <span aria-hidden="true">×</span>
                  <span className="line-through decoration-ink/25">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-ink p-7 text-paper sm:p-10">
            <h3 className="label-mono text-paper/60">{acaso.label}</h3>
            <p className="mt-6 text-2xl font-semibold tracking-[-0.02em]">
              {acaso.summary}
            </p>
            <ul className="mt-8 space-y-4 border-t border-paper/15 pt-6">
              {acaso.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span aria-hidden="true" className="text-paper/50">→</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
