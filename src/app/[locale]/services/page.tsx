import { Link } from "@/i18n/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SectionHeading, CtaButton } from "@/components/shared/cta-button";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, getServicesListSchema } from "@/lib/seo/structured-data";
import { createMetadata } from "@/lib/seo/metadata";
import { siteConfig, serviceSlugs } from "@/lib/site-config";
import type { Locale } from "@/i18n/routing";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "servicesPage" });
  return createMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    pathname: "/services",
    locale: locale as Locale,
  });
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("servicesPage");
  const tServices = await getTranslations("services");
  const tCommon = await getTranslations("common");

  const services = serviceSlugs.map((slug) => {
    const service = tServices.raw(slug) as { title: string; cardDescription: string; metaDescription: string };
    const path = `/services/${slug}`;
    return {
      slug,
      title: service.title,
      description: service.cardDescription,
      metaDescription: service.metaDescription,
      path,
      url: `${siteConfig.url}${locale === "en" ? "/en" : ""}${path}`,
    };
  });

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: tCommon("breadcrumbHome"), path: "/" },
            { name: tCommon("nav.services"), path: "/services" },
          ]),
          getServicesListSchema(
            services.map((service) => ({
              name: service.title,
              url: service.url,
              description: service.metaDescription,
            }))
          ),
        ]}
      />

      <section className="gradient-hero pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-300">{t("heroLabel")}</p>
          <h1 className="mt-3 max-w-3xl text-balance text-4xl font-bold text-white sm:text-5xl">{t("heroTitle")}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-200">{t("heroDescription")}</p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t("sectionTitle")} description={t("sectionDescription")} />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.slug} className="flex flex-col border-navy-100 transition-shadow hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-navy-900">
                    <Link href={service.path} className="hover:text-accent-600">
                      {service.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="mt-auto flex flex-1 flex-col">
                  <p className="flex-1 text-sm leading-relaxed text-navy-600">{service.description}</p>
                  <Link
                    href={service.path}
                    className="mt-4 text-sm font-semibold text-accent-600 hover:text-accent-700"
                  >
                    {tCommon("readMore")} →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <CtaButton />
          </div>
        </div>
      </section>
    </>
  );
}
