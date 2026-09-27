import { services } from "@/content/site";
import { Container, Eyebrow, Heading } from "./Section";

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-24 md:py-32">
      <Container>
        <Eyebrow>{services.eyebrow}</Eyebrow>
        <Heading id="services-heading" className="max-w-3xl">
          {services.heading}
        </Heading>
        <ul className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink-10 bg-ink-10 md:grid-cols-2">
          {services.items.map((item, i) => (
            <li key={item.title} className="flex flex-col bg-paper p-7 sm:p-10">
              <span className="label-mono text-ink-60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.02em]">
                {item.title}
              </h3>
              <p className="mt-3 text-ink-80">{item.promise}</p>
              <ul className="mt-8 space-y-3 border-t border-ink-10 pt-6 text-sm">
                {item.tasks.map((task) => (
                  <li key={task} className="flex gap-3">
                    <span aria-hidden="true" className="text-ink-40">—</span>
                    {task}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
