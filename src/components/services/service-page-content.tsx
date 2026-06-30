"use client";

import { Link } from "@/i18n/navigation";
import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";
import type { ServiceSlug } from "@/lib/site-config";
import { CtaButton, KakaoCta } from "@/components/shared/cta-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ServiceCategory = {
  title: string;
  subtitle: string;
  description: string;
  steps?: string[];
};

type InfoItem = {
  number: string;
  title: string;
  description: string;
  note?: string;
};

type InfoSection = {
  title: string;
  items: InfoItem[];
};

type ServiceTranslation = {
  title: string;
  description: string;
  target: string;
  included: string[];
  process: string[];
  highlights: string[];
  intro?: string;
  serviceListTitle?: string;
  additionalInfoTitle?: string;
  serviceCategories?: ServiceCategory[];
  infoSections?: InfoSection[];
};

export function ServicePageContent({ slug, subtitle }: { slug: ServiceSlug; subtitle: string }) {
  const t = useTranslations("common");
  const tServices = useTranslations("services");
  const service = tServices.raw(slug) as ServiceTranslation;

  return (
    <>
      <section className="gradient-hero pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-300">{subtitle}</p>
          <h1 className="mt-3 max-w-3xl text-balance text-4xl font-bold text-white sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-200">{service.description}</p>
          {service.intro && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-300">{service.intro}</p>
          )}
          <p className="mt-4 text-sm text-navy-300">
            <strong className="text-navy-100">{t("target")}:</strong> {service.target}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <CtaButton variant="white" />
            <KakaoCta variant="onDark" />
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="border-navy-100">
              <CardHeader>
                <CardTitle className="text-navy-900">{t("included")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.included.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-navy-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-navy-100">
              <CardHeader>
                <CardTitle className="text-navy-900">{t("process")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  {service.process.map((step, index) => (
                    <li key={step} className="flex gap-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy-100 text-xs font-bold text-navy-700">
                        {index + 1}
                      </span>
                      <span className="text-sm text-navy-700">{step}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-8 rounded-xl bg-accent-50 p-5">
                  <h2 className="text-sm font-bold text-accent-800">{t("highlights")}</h2>
                  <ul className="mt-2 space-y-1">
                    {service.highlights.map((h) => (
                      <li key={h} className="text-sm text-accent-700">
                        · {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {service.serviceCategories && service.serviceCategories.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
                {service.serviceListTitle}
              </h2>
              <div className="mt-10 space-y-10">
                {service.serviceCategories.map((category) => (
                  <Card key={category.title} className="border-navy-100">
                    <CardHeader>
                      <p className="text-sm font-semibold text-accent-600">{category.title}</p>
                      <CardTitle className="text-xl text-navy-900">{category.subtitle}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm leading-relaxed text-navy-700">{category.description}</p>
                      {category.steps && category.steps.length > 0 && (
                        <ol className="space-y-3 border-t border-navy-100 pt-4">
                          {category.steps.map((step) => (
                            <li key={step} className="text-sm leading-relaxed text-navy-700">
                              {step}
                            </li>
                          ))}
                        </ol>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {service.infoSections && service.infoSections.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
                {service.additionalInfoTitle}
              </h2>
              <div className="mt-10 space-y-12">
                {service.infoSections.map((section) => (
                  <div key={section.title}>
                    <h3 className="text-xl font-bold text-navy-900">{section.title}</h3>
                    <div className="mt-6 space-y-6">
                      {section.items.map((item) => (
                        <div
                          key={item.number}
                          className="rounded-xl border border-navy-100 bg-white p-6"
                        >
                          <div className="flex gap-4">
                            <span className="text-lg font-bold text-accent-600">{item.number}</span>
                            <div>
                              <h4 className="font-semibold text-navy-900">{item.title}</h4>
                              <p className="mt-2 text-sm leading-relaxed text-navy-700">
                                {item.description}
                              </p>
                              {item.note && (
                                <p className="mt-2 text-sm text-navy-500">{item.note}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 text-center">
            <p className="text-navy-600">
              {tServices.rich("pageCta", {
                service: service.title,
                link: (chunks) => (
                  <Link href="/contact" className="font-semibold text-accent-600 hover:underline">
                    {chunks}
                  </Link>
                ),
              })}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
