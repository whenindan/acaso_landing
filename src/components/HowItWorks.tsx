import { how } from "@/content/site";
import { Container } from "./Section";

export function HowItWorks() {
  return (
    <section
      id="how"
      aria-labelledby="how-heading"
      className="border-t border-fg/10 px-[clamp(20px,4vw,56px)] py-[clamp(96px,14vw,180px)]"
    >
      <Container className="flex flex-col gap-[clamp(64px,8vw,112px)]">
        <h2
          id="how-heading"
          className="m-0 max-w-[900px] text-balance font-reader text-[clamp(38px,5vw,72px)] leading-[1.02] font-light tracking-[-0.02em]"
        >
          {how.heading}
          <em className="text-muted italic">{how.headingEmphasis}</em>
        </h2>
        <div className="grid gap-x-10 gap-y-12 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
          {how.steps.map((step, i) => (
            <div key={step.title} className="flex flex-col gap-4 border-t border-fg/[0.18] pt-5">
              <span className="label-mono text-quiet">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="m-0 text-xl font-medium tracking-[-0.01em]">{step.title}</h3>
              <p className="m-0 text-pretty text-[15px] leading-[1.6] text-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
