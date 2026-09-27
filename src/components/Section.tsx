import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="label-mono text-ink-60">{children}</p>;
}

export function Heading({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      id={id}
      className={`mt-4 text-3xl font-semibold leading-[1.05] tracking-[-0.03em] text-balance sm:text-5xl ${className}`}
    >
      {children}
    </h2>
  );
}
