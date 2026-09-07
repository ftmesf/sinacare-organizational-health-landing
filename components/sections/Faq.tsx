import { faqItems } from "@/lib/content/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section id="faq" className="section-alt py-16 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold text-brand-fg sm:text-3xl">
            سوالات متداول درباره سیناکر
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            پاسخ پرتکرارترین سوالات سازمان‌ها درباره پرونده دیجیتال طب کار،
            اپلیکیشن کارکنان و طرح‌های سیناکر.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-brand-border/70 bg-white px-6">
          <Accordion type="single" collapsible>
            {faqItems.map((item, index) => (
              <AccordionItem key={item.question} value={`faq-${index}`}>
                <AccordionTrigger className="py-4 text-base font-bold text-brand-fg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-7 text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
