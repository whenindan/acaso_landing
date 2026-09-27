import { audiences } from "@/content/site";
import { Container, Eyebrow } from "./Section";

export function Audiences() {
  return (
    <section aria-labelledby="audiences-heading" className="border-t border-ink-10 py-24 md:py-32">
      <Container>
        <h2 id="audiences-heading" className="sr-only">
          {audiences.eyebrow}
        </h2>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-0 md:divide-x md:divide-ink-10">
          {audiences.items.map((item, i) => (
            <article key={item.label} className={i === 0 ? "md:pr-12" : "md:pl-12"}>
              <Eyebrow>For {item.label}</Eyebrow>
              <h3 className="mt-4 text-3xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-4xl">
                {item.heading}
              </h3>
              <p className="mt-6 max-w-md leading-relaxed text-ink-80">{item.body}</p>
              <ul className="mt-8 space-y-3 text-sm">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span aria-hidden="true" className="text-ink-40">—</span>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
