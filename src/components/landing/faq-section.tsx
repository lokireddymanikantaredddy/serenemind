import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you accept insurance?",
    answer:
      "I do not accept insurance directly, but I can provide you with a superbill (a detailed receipt of services) for you to submit to your insurance company for potential out-of-network reimbursement.",
  },
  {
    question: "Are online sessions available?",
    answer:
      "Yes, all sessions are conducted virtually via a secure and confidential Zoom platform.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "A 24-hour notice is required for all cancellations. Sessions cancelled with less than 24 hours notice will be charged the full session fee.",
  },
  {
    question: "How do I get started?",
    answer:
      "The first step is to book a free 15-minute consultation using the contact form below. This allows us to briefly discuss your needs and determine if we are a good fit to work together. There's no obligation to continue after the consultation.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="w-full bg-secondary/50 py-20 md:py-32">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Answers to common inquiries about my practice.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={faq.question}>
              <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
