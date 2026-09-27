import type { ReactNode } from "react";

// Sections apply their own clamp()-based padding (it varies per section), so
// Container only centers content within the page's 1280px measure.
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-[1280px] ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="label-mono text-faint">{children}</span>;
}
