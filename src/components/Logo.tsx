import Image from "next/image";

// ACASO lockup (mark beside wordmark), from the acaso-6d-kit
// (public/brand/png/acaso-lockup-white.png). The whole site is dark, so the
// light lockup is the only variant this landing page needs.
export function Logo({ className = "h-4" }: { className?: string }) {
  return (
    <Image
      src="/brand/png/acaso-lockup-white.png"
      alt="ACASO"
      width={2637}
      height={279}
      priority
      className={`w-auto ${className}`}
    />
  );
}
