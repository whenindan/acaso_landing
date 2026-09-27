import { whatsNext } from "@/content/site";
import { Container, Eyebrow, Heading } from "./Section";

export function WhatsNext() {
  return (
    <section id="next" aria-labelledby="next-heading" className="border-t border-ink-10 py-24 md:py-32">
      <Container>
        <Eyebrow>{whatsNext.eyebrow}</Eyebrow>
        <Heading id="next-heading">{whatsNext.heading}</Heading>
        <p className="mt-6 max-w-xl text-lg text-ink-80">{whatsNext.sub}</p>
        <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {whatsNext.items.map((item) =>
            item.status === "live" ? (
              <li
                key={item.title}
                className="flex min-h-40 flex-col justify-between rounded-2xl bg-ink p-6 text-paper"
              >
                <span className="label-mono flex items-center gap-2 text-paper/80">
                  <span className="live-dot size-2 rounded-full bg-signal" aria-hidden="true" />
                  Live
                </span>
                <span className="text-xl font-semibold tracking-[-0.02em]">{item.title}</span>
              </li>
            ) : (
              <li
                key={item.title}
                className="flex min-h-40 flex-col justify-between rounded-2xl border border-dashed border-ink/30 p-6 text-ink-60"
              >
                <span className="label-mono">Soon</span>
                <span className="text-xl font-semibold tracking-[-0.02em]">{item.title}</span>
              </li>
            ),
          )}
        </ul>
      </Container>
    </section>
  );
}
