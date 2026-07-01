"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { CtaButton } from "@/components/shared/cta-button";
import type { BlogPost } from "@/lib/content/blog";

type RelatedLink = { href: string; label: string };

export function BlogPostContent({
  post,
  relatedServices = [],
  relatedPosts = [],
}: {
  post: BlogPost;
  relatedServices?: RelatedLink[];
  relatedPosts?: RelatedLink[];
}) {
  const t = useTranslations("blog");
  const tCommon = useTranslations("common");

  return (
    <article className="mx-auto max-w-3xl">
      <header className="mb-10 border-b border-navy-100 pb-8">
        <p className="text-sm text-navy-500">
          <time dateTime={post.publishedAt}>{t("published")}: {post.publishedAt}</time>
          <span className="mx-2">·</span>
          <span>{t(`categories.${post.category}`)}</span>
        </p>
        <h1 className="mt-3 text-balance text-3xl font-bold text-navy-900 sm:text-4xl">{post.title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-navy-600">{post.excerpt}</p>
      </header>

      <div className="space-y-8">
        {post.sections.map((section, index) => (
          <section key={index}>
            {section.heading && (
              <h2 className="text-xl font-bold text-navy-900 sm:text-2xl">{section.heading}</h2>
            )}
            <div className={section.heading ? "mt-4 space-y-4" : "space-y-4"}>
              {section.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex} className="leading-relaxed text-navy-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      {(relatedServices.length > 0 || relatedPosts.length > 0) && (
        <div className="mt-12 grid gap-8 border-t border-navy-100 pt-10 sm:grid-cols-2">
          {relatedServices.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-navy-900">{t("relatedServices")}</h2>
              <ul className="mt-4 space-y-2">
                {relatedServices.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm font-medium text-accent-600 hover:underline">
                      {link.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {relatedPosts.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-navy-900">{t("relatedPosts")}</h2>
              <ul className="mt-4 space-y-2">
                {relatedPosts.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm font-medium text-accent-600 hover:underline">
                      {link.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <div className="mt-12 rounded-2xl border border-navy-100 bg-navy-50 p-8 text-center">
        <p className="text-navy-700">{t("postCta")}</p>
        <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CtaButton />
          <Link href="/contact" className="text-sm font-semibold text-accent-600 hover:underline">
            {tCommon("freeConsultation")} →
          </Link>
        </div>
      </div>
    </article>
  );
}
