import { trust } from "@/content/site";
import { Container } from "./Section";

export function TrustStrip() {
  return (
    <section aria-label="At a glance" className="border-y border-ink-10">
      <Container>
        <ul className="grid grid-cols-1 divide-y divide-ink-10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {trust.map((fact) => (
            <li
              key={fact}
              className="label-mono py-5 text-ink-80 sm:px-6 sm:py-6 sm:first:pl-0"
            >
              {fact}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
