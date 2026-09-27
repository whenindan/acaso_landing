import Image from "next/image";

// ACASO lockup (mark stacked above wordmark), from the acaso-6d-kit
// (public/brand/png/acaso-lockup-stacked-black.png).
export function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <Image
      src="/brand/png/acaso-lockup-stacked-black.png"
      alt="ACASO"
      width={1227}
      height={577}
      priority
      className={`w-auto ${className}`}
    />
  );
}
