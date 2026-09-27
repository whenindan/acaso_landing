// Animated ACASO mark. Geometry matches brand/svg/acaso-mark-black.svg.
// Motion is CSS-only (see globals.css) and falls back to the static mark
// under prefers-reduced-motion.
export function LoopMark({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="8 8 84 84"
        role="img"
        aria-label="ACASO mark: a loop closing"
        className="h-full w-full overflow-visible text-ink"
      >
        <g className="loop-mark">
          <path
            className="loop-arc"
            d="M67 20.55A34 34 0 1 1 33 20.55"
            fill="none"
            stroke="currentColor"
            strokeWidth="12"
            pathLength={1}
          />
          <circle
            className="loop-dot"
            cx="50"
            cy="16"
            r="7"
            fill="currentColor"
          />
        </g>
      </svg>
      <p
        aria-hidden="true"
        className="loop-signal label-mono absolute inset-x-0 -bottom-8 flex items-center justify-center gap-2 text-ink-60"
      >
        <span className="size-2 rounded-full bg-signal" />
        Loop closed · Signed off
      </p>
    </div>
  );
}
