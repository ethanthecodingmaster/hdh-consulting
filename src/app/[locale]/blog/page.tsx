import { Link } from "@/i18n/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SectionHeading, CtaButton } from "@/components/shared/cta-button";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/seo/structured-data";
import { createMetadata } from "@/lib/seo/metadata";
import type { Locale } from "@/i18n/routing";
import { getAllBlogPosts } from "@/lib/content/blog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  return createMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    pathname: "/blog",
    locale: locale as Locale,
  });
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("blog");
  const tCommon = await getTranslations("common");
  const posts = getAllBlogPosts(locale);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: tCommon("breadcrumbHome"), path: "/" },
          { name: tCommon("nav.blog"), path: "/blog" },
        ])}
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
            {posts.map((post) => (
              <Card key={post.slug} className="flex flex-col border-navy-100 transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary">{post.publishedAt}</Badge>
                    <Badge className="bg-accent-50 text-accent-700">{t(`categories.${post.category}`)}</Badge>
                  </div>
                  <CardTitle className="mt-2 line-clamp-2 text-lg text-navy-900">
                    <Link href={`/blog/${post.slug}`} className="hover:text-accent-600">
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="mt-auto flex flex-1 flex-col">
                  <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-navy-600">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 text-sm font-semibold text-accent-600 hover:text-accent-700"
                  >
                    {t("readMore")} →
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
