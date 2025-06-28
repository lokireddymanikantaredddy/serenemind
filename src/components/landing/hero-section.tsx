import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { CountdownTimer } from "./countdown-timer";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full h-[80vh] min-h-[600px] md:h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url(https://www.ellieshumaker.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-b.79c9c9cd.jpg&w=1920&q=75)" }}
      data-ai-hint="stairs sky clouds"
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      <div className="relative z-10 container mx-auto max-w-4xl px-4 text-center text-primary-foreground fade-in">
        <div className="mb-8">
          <CountdownTimer targetDate="2025-01-01T00:00:00" />
        </div>
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Professional Counseling for Healing and Growth
        </h1>
        <p className="mt-6 text-lg leading-8 md:text-xl max-w-3xl mx-auto text-primary-foreground/90">
          Begin your journey towards emotional well-being, deeper connections, and lasting inner peace.
        </p>
        <div className="mt-8 text-sm text-primary-foreground/70 flex items-center justify-center gap-x-4">
          <span>Evidence-Based</span>
          <span className="text-primary/50">&bull;</span>
          <span>Client-Focused</span>
          <span className="text-primary/50">&bull;</span>
          <span>Confidential</span>
        </div>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button size="lg" asChild className="bg-slate-100 text-slate-900 hover:bg-slate-100/90 font-semibold shadow-lg">
            <Link href="#contact">
              <Sparkles className="mr-2 h-5 w-5 text-primary" />
              Start Healing Today
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
