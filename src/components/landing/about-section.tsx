import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="w-full bg-secondary/50 py-20 md:py-32">
      <div className="container mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 px-4 md:grid-cols-3 md:gap-12">
        <div className="md:col-span-1">
          <Image
            src="https://placehold.co/400x400.png"
            alt="Portrait of Dr. Serena Blake"
            width={400}
            height={400}
            className="aspect-square w-full max-w-xs mx-auto rounded-full object-cover shadow-lg"
            data-ai-hint="professional portrait woman"
          />
        </div>
        <div className="space-y-4 text-center md:col-span-2 md:text-left">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Meet Dr. Serena Blake
          </h2>
          <p className="text-lg text-muted-foreground">
            Dr. Serena Blake is a licensed clinical psychologist with over 15 years of experience helping individuals navigate life's challenges. Her approach is rooted in compassion, evidence-based practices, and a deep commitment to her clients' well-being.
          </p>
          <p className="text-muted-foreground">
            She specializes in Cognitive Behavioral Therapy (CBT) and mindfulness techniques, creating a safe and supportive space for growth and healing. Dr. Blake believes in a collaborative process, working with you to develop personalized strategies for a healthier, more fulfilling life.
          </p>
        </div>
      </div>
    </section>
  );
}
