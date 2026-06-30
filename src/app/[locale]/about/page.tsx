import { Link } from "@/i18n/navigation";
import { CheckCircle2 } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SectionHeading, CtaButton } from "@/components/shared/cta-button";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/seo/structured-data";
import { createMetadata } from "@/lib/seo/metadata";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return createMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: locale === "ko" ? "/about" : "/en/about",
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("about");
  const tCommon = await getTranslations("common");
  const storyParagraphs = t.raw("storyParagraphs") as string[];
  const consultantItems = t.raw("consultantItems") as string[];
  const valuesItems = t.raw("valuesItems") as { title: string; description: string }[];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: tCommon("breadcrumbHome"), path: "/" },
          { name: tCommon("nav.about"), path: "/about" },
        ])}
      />

      <section className="gradient-hero pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-300">{t("heroLabel")}</p>
          <h1 className="mt-3 max-w-3xl text-balance text-4xl font-bold text-white sm:text-5xl">
            {t("heroTitle")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-200">{t("heroDescription")}</p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-navy-900">{t("storyTitle")}</h2>
              <div className="mt-6 space-y-4 leading-relaxed text-navy-600">
                {storyParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <Card className="border-navy-100">
              <CardHeader>
                <CardTitle className="text-navy-900">{t("consultantTitle")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {consultantItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-navy-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="gradient-subtle py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label={t("valuesLabel")} title={t("valuesTitle")} description={t("valuesDescription")} />
          <div className="grid gap-6 sm:grid-cols-2">
            {valuesItems.map((value) => (
              <article key={value.title} className="rounded-2xl border border-navy-100 bg-white p-8">
                <h3 className="text-lg font-bold text-navy-900">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-600">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy-900">{t("ctaTitle")}</h2>
          <p className="mx-auto mt-4 max-w-xl text-navy-600">{t("ctaDescription")}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CtaButton />
            <Link href="/success-stories" className="text-sm font-semibold text-accent-600 hover:text-accent-700">
              {t("viewStories")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
