import { ContactForm } from "./contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Info } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="w-full bg-secondary/50 py-20 md:py-32">
      <div className="container mx-auto max-w-2xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Simply fill out the brief fields below and Dr. Blake will be in
            touch with you soon, usually within one business day. This form is
            safe, private, and completely free.
          </p>
        </div>
        <Card className="border-2 border-primary/30 shadow-lg">
          <CardContent className="p-8">
            <ContactForm />
          </CardContent>
        </Card>
        <div className="mt-6 flex items-start gap-2 text-sm text-muted-foreground">
          <Info className="mt-0.5 h-4 w-4 shrink-0" />
          <p>
            By clicking submit you consent to receive texts and emails from Dr.
            Serena Blake.
          </p>
        </div>
      </div>
    </section>
  );
}
