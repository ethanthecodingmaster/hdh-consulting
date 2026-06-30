import { setRequestLocale, getTranslations } from "next-intl/server";
import { Hero } from "@/components/home/hero";
import { ServicesOverview } from "@/components/home/services-overview";
import { WhyChoose } from "@/components/home/why-choose";
import { Process } from "@/components/home/process";
import { FAQ } from "@/components/home/faq";
import { SeoContent, FinalCTA } from "@/components/home/seo-content";
import { JsonLd } from "@/components/seo/json-ld";
import { getFAQSchema } from "@/lib/seo/structured-data";
import { createMetadata } from "@/lib/seo/metadata";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return createMetadata({
    title: t("home.title"),
    description: t("home.description"),
    path: locale === "ko" ? "/" : "/en",
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <JsonLd data={await getFAQSchema(locale as Locale)} />
      <Hero />
      <ServicesOverview />
      <WhyChoose />
      <Process />
      <FAQ />
      <SeoContent />
      <FinalCTA />
    </>
  );
}
