"use client";

import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/shared/cta-button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQ() {
  const t = useTranslations("home.faq");
  const tFaq = useTranslations("faq");
  const items = tFaq.raw("items") as { question: string; answer: string }[];

  return (
    <section className="py-20 sm:py-28" id="faq" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label={t("label")} title={t("title")} description={t("description")} />
        <Accordion defaultValue={["item-0"]} className="w-full">
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold text-navy-900">{item.question}</AccordionTrigger>
              <AccordionContent className="text-navy-600">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
