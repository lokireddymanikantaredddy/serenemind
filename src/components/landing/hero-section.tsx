import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="hero" className="w-full py-20 md:py-32 lg:py-40">
      <div className="container mx-auto max-w-3xl px-4 text-center fade-in">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Find Your Path to a Serene Mind
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground md:text-xl">
          Compassionate and professional online therapy with Dr. Serena Blake.
          Start your journey towards mental well-being and a more balanced life today.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button size="lg" asChild>
            <Link href="#contact">Book a Free Consult</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
