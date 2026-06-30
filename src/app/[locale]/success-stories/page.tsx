import { Link } from "@/i18n/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SectionHeading, CtaButton } from "@/components/shared/cta-button";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/seo/structured-data";
import { createMetadata } from "@/lib/seo/metadata";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type SuccessStory = {
  id: string;
  student: string;
  year: string;
  university: string;
  major: string;
  service: string;
  summary: string;
  detail: string;
  highlight: string;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "successStories" });
  return createMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: locale === "ko" ? "/success-stories" : "/en/success-stories",
  });
}

export default async function SuccessStoriesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("successStories");
  const tCommon = await getTranslations("common");
  const stories = t.raw("items") as SuccessStory[];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: tCommon("breadcrumbHome"), path: "/" },
          { name: tCommon("nav.successStories"), path: "/success-stories" },
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
          <SectionHeading title={t("sectionTitle")} description={t("sectionDescription")} />
          <div className="grid gap-6 md:grid-cols-2">
            {stories.map((story) => (
              <Card key={story.id} className="border-navy-100">
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary">{story.year}</Badge>
                    <Badge className="bg-accent-50 text-accent-700">{story.service}</Badge>
                  </div>
                  <CardTitle className="mt-2 text-xl text-navy-900">{story.summary}</CardTitle>
                  <p className="text-sm font-medium text-accent-600">{story.university} · {story.major}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-navy-600">{story.detail}</p>
                  <p className="mt-4 text-xs font-semibold text-navy-500">
                    {t("highlightLabel")}: {story.highlight}
                  </p>
                  <p className="mt-2 text-sm font-medium text-navy-800">
                    {t("studentLabel")}: {story.student}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <CtaButton />
            <p className="mt-4 text-sm text-navy-500">
              {t.rich("cta", {
                link: (chunks) => (
                  <Link href="/contact" className="text-accent-600 hover:underline">
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
