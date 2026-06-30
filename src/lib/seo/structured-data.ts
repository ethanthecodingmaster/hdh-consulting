import { getTranslations } from "next-intl/server";
import { getBlogPost, type BlogSlug } from "@/lib/content/blog";
import { siteConfig } from "@/lib/site-config";
import type { ServiceSlug } from "@/lib/site-config";
import type { Locale } from "@/i18n/routing";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    telephone: siteConfig.contact.admission.tel,
    email: siteConfig.contact.email,
    areaServed: { "@type": "Country", name: "South Korea" },
    knowsAbout: siteConfig.seoKeywords,
    sameAs: [siteConfig.social.instagram],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "ko-KR",
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}

export async function getServiceSchema(slug: ServiceSlug, locale: Locale) {
  const t = await getTranslations({ locale, namespace: "services" });
  const service = t.raw(slug) as { title: string; description: string };

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.description,
    provider: {
      "@type": "EducationalOrganization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: { "@type": "Country", name: "South Korea" },
    url: `${siteConfig.url}/services/${slug}`,
  };
}

export async function getFAQSchema(locale: Locale) {
  const t = await getTranslations({ locale, namespace: "faq" });
  const items = t.raw("items") as { question: string; answer: string }[];

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export async function getArticleSchema(slug: BlogSlug, locale: Locale) {
  const post = getBlogPost(slug, locale);
  const path = locale === "ko" ? `/blog/${slug}` : `/en/blog/${slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    url: `${siteConfig.url}${path}`,
    inLanguage: locale === "ko" ? "ko-KR" : "en-US",
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}
