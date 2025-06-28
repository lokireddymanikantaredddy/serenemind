import Image from "next/image";
import Link from "next/link";
import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Anxiety & Stress Management",
    description: "Learn effective coping mechanisms to manage anxiety and reduce stress in your daily life.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "woman praying sunset"
  },
  {
    title: "Relationship Counseling",
    description: "Improve communication and build stronger, healthier connections with your partner or loved ones.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "couple talking"
  },
  {
    title: "Trauma Recovery",
    description: "A safe and supportive space to process traumatic experiences and move towards healing.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "hope sunrise"
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="w-full bg-background py-20 md:py-32">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-12 text-left">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How I Help
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col space-y-4 rounded-lg border-2 border-accent/30 bg-secondary/30 p-6 text-left transition-all duration-300 hover:border-accent hover:shadow-xl">
              <Image
                src={service.imageUrl}
                alt={service.title}
                width={600}
                height={400}
                className="aspect-[3/2] w-full rounded-md object-cover"
                data-ai-hint={service.imageHint}
              />
              <div className="flex flex-1 flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <CardTitle className="font-headline text-xl font-bold">
                    {service.title}
                  </CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
                <Button asChild variant="outline" className="mt-auto w-full border-accent/60 text-foreground hover:bg-accent hover:text-accent-foreground">
                  <Link href="#contact">Learn More</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
