"use client";

import { useTranslations } from "next-intl";
import { CtaButton, KakaoCta } from "@/components/shared/cta-button";

export function SeoContent() {
  const t = useTranslations("home.seo");

  return (
    <section className="border-t border-navy-100 bg-white py-16" aria-labelledby="seo-content-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 id="seo-content-heading" className="text-2xl font-bold text-navy-900">{t("title")}</h2>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-navy-600">
          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
          <p>{t("p3")}</p>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  const t = useTranslations("home.cta");
  const tCommon = useTranslations("common");

  return (
    <section className="py-20 sm:py-28" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="gradient-hero relative overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-16">
          <h2 id="cta-heading" className="text-balance text-3xl font-bold text-white sm:text-4xl">{t("title")}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-navy-200">{t("description")}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CtaButton variant="white">{tCommon("freeConsultation")}</CtaButton>
            <KakaoCta variant="onDark">{tCommon("kakaoConsult")}</KakaoCta>
          </div>
        </div>
      </div>
    </section>
  );
}
