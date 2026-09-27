import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Nav } from "@/components/Nav";
import { SignupForm } from "@/components/SignupForm";
import { SmoothAnchorScroll } from "@/components/SmoothAnchorScroll";
import { WhatsNext } from "@/components/WhatsNext";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-bg">
      <SmoothAnchorScroll />
      <a
        href="#main"
        className="sr-only z-[60] rounded bg-fg px-4 py-2 text-bg focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <HowItWorks />
        <WhatsNext />
        <SignupForm />
      </main>
      <Footer />
    </div>
  );
}
