import { Audiences } from "@/components/Audiences";
import { Comparison } from "@/components/Comparison";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Nav } from "@/components/Nav";
import { Services } from "@/components/Services";
import { SignupForm } from "@/components/SignupForm";
import { TrustStrip } from "@/components/TrustStrip";
import { WhatsNext } from "@/components/WhatsNext";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded bg-ink px-4 py-2 text-paper focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <TrustStrip />
        <Services />
        <HowItWorks />
        <Comparison />
        <Audiences />
        <WhatsNext />
        <SignupForm />
      </main>
      <Footer />
    </>
  );
}
