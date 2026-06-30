"use client";

import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/shared/cta-button";

export function WhyChoose() {
  const t = useTranslations("home.why");
  const tHome = useTranslations("home");
  const items = tHome.raw("whyItems") as { number: string; title: string; description: string }[];

  return (
    <section className="gradient-subtle py-20 sm:py-28" aria-labelledby="why-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label={t("label")} title={t("title")} description={t("description")} />
        <div className="grid gap-8 sm:grid-cols-2">
          {items.map((item) => (
            <article key={item.number} className="rounded-2xl border border-navy-100 bg-white p-8 shadow-sm">
              <p className="text-sm font-bold text-accent-600">{item.number}</p>
              <h3 className="mt-2 text-xl font-bold text-navy-900">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-navy-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
