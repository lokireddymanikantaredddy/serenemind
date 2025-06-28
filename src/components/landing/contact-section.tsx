import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-20 md:py-32">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Book a Free Consultation
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Take the first step towards a more serene mind. Fill out the form below to schedule your complimentary 15-minute consultation.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
