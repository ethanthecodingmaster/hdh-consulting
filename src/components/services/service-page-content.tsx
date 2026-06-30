"use client";

import { Link } from "@/i18n/navigation";
import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";
import type { ServiceSlug } from "@/lib/site-config";
import { CtaButton, KakaoCta } from "@/components/shared/cta-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ServiceTranslation = {
  title: string;
  description: string;
  target: string;
  included: string[];
  process: string[];
  highlights: string[];
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
                      <li key={h} className="text-sm text-accent-700">· {h}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

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
