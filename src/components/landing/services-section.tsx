import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Anxiety & Stress Management",
    description: "Learn effective coping mechanisms to manage anxiety and reduce stress in your daily life.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "calm nature"
  },
  {
    title: "Relationship Counseling",
    description: "Improve communication and build stronger, healthier connections with your partner or loved ones.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "couple hands"
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
    <section id="services" className="w-full py-20 md:py-32">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Specialized care tailored to your unique needs.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="overflow-hidden border-border/60 bg-white/50 shadow-sm transition-shadow hover:shadow-md">
              <CardHeader className="p-0">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="aspect-[3/2] w-full object-cover"
                  data-ai-hint={service.imageHint}
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-xl font-bold">
                  {service.title}
                </CardTitle>
                <p className="mt-2 text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
