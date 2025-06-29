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
    <section id="faq" className="w-full bg-secondary/50 py-24 md:py-36">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-16 text-left">
          <h2 className="font-headline text-6xl font-bold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="border-b-2 border-muted-foreground/40 py-6">
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="text-left font-headline font-bold text-3xl py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-xl text-muted-foreground pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
