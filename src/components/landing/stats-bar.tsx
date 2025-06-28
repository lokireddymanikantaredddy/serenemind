import { AnimatedNumber } from "./animated-number";

export function StatsBar() {
  return (
    <div className="bg-primary/10 py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-2">
          <div>
            <p className="font-headline text-5xl font-bold text-primary sm:text-6xl">
              <AnimatedNumber finalValue={8} />+
            </p>
            <p className="mt-2 text-lg font-medium text-muted-foreground">
              Years of Practice
            </p>
          </div>
          <div>
            <p className="font-headline text-5xl font-bold text-primary sm:text-6xl">
              <AnimatedNumber finalValue={500} />+
            </p>
            <p className="mt-2 text-lg font-medium text-muted-foreground">
              Client Sessions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
