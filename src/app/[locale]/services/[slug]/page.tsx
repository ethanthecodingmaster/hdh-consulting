import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { JsonLd } from "@/components/seo/json-ld";
import { ServicePageContent } from "@/components/services/service-page-content";
import { getServiceBySlug } from "@/lib/content/services";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, getServiceSchema } from "@/lib/seo/structured-data";
import type { Locale } from "@/i18n/routing";
import type { ServiceSlug } from "@/lib/site-config";
import { serviceSlugs } from "@/lib/site-config";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!serviceSlugs.includes(slug as ServiceSlug)) return {};

  const t = await getTranslations({ locale, namespace: "services" });
  const tMeta = await getTranslations({ locale, namespace: "metadata" });
  const service = t.raw(slug) as { title: string; metaDescription: string };

  return createMetadata({
    title: `${service.title} | ${tMeta("serviceTitleSuffix")}`,
    description: service.metaDescription,
    path: locale === "ko" ? `/services/${slug}` : `/en/services/${slug}`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  if (!serviceSlugs.includes(slug as ServiceSlug)) notFound();

  const service = getServiceBySlug(slug as ServiceSlug);
  const t = await getTranslations({ locale, namespace: "services" });
  const tCommon = await getTranslations({ locale, namespace: "common" });
  const serviceContent = t.raw(slug) as { title: string };

  return (
    <>
      <JsonLd
        data={[
          await getServiceSchema(slug as ServiceSlug, locale as Locale),
          breadcrumbSchema([
            { name: tCommon("breadcrumbHome"), path: "/" },
            { name: serviceContent.title, path: `/services/${slug}` },
          ]),
        ]}
      />
      <ServicePageContent slug={slug as ServiceSlug} subtitle={service.subtitle} />
    </>
  );
}
