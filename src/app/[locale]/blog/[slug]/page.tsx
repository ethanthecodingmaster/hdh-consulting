import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { BlogPostContent } from "@/components/blog/blog-post-content";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, getArticleSchema } from "@/lib/seo/structured-data";
import { createMetadata } from "@/lib/seo/metadata";
import { blogSlugs, getBlogPost, isBlogSlug } from "@/lib/content/blog";
import type { Locale } from "@/i18n/routing";

export function generateStaticParams() {
  return blogSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isBlogSlug(slug)) return {};

  const post = getBlogPost(slug, locale);
  return createMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    pathname: `/blog/${slug}`,
    locale: locale as Locale,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  if (!isBlogSlug(slug)) notFound();

  const post = getBlogPost(slug, locale);
  const tCommon = await getTranslations("common");

  return (
    <>
      <JsonLd
        data={[
          await getArticleSchema(slug, locale as Locale),
          breadcrumbSchema([
            { name: tCommon("breadcrumbHome"), path: "/" },
            { name: tCommon("nav.blog"), path: "/blog" },
            { name: post.title, path: `/blog/${slug}` },
          ]),
        ]}
      />

      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <BlogPostContent post={post} />
        </div>
      </section>
    </>
  );
}
