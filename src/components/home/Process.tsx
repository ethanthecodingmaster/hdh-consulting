"use client";

import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/shared/cta-button";

export function Process() {
  const t = useTranslations("home.process");
  const tHome = useTranslations("home");
  const steps = tHome.raw("processSteps") as { title: string; description: string }[];

  return (
    <section className="py-20 sm:py-28" aria-labelledby="process-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label={t("label")} title={t("title")} description={t("description")} />
        <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="relative">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-600 text-sm font-bold text-white">
                {index + 1}
              </span>
              <h3 className="mt-4 text-lg font-bold text-navy-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
