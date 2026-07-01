import { getTranslations } from "next-intl/server";
import { getBlogPost, type BlogSlug } from "@/lib/content/blog";
import { siteConfig, serviceSlugs } from "@/lib/site-config";
import type { ServiceSlug } from "@/lib/site-config";
import type { Locale } from "@/i18n/routing";

const SERVICE_PATHS: Record<ServiceSlug, string> = {
  "university-consulting": "/services/university-consulting",
  "transfer-consulting": "/services/transfer-consulting",
  "boarding-consulting": "/services/boarding-consulting",
  "graduate-consulting": "/services/graduate-consulting",
  "extracurricular-consulting": "/services/extracurricular-consulting",
  "other-consulting": "/services/other-consulting",
};

const SERVICE_NAMES_KO: Record<ServiceSlug, string> = {
  "university-consulting": "대입컨설팅",
  "transfer-consulting": "편입컨설팅",
  "boarding-consulting": "보딩컨설팅",
  "graduate-consulting": "대학원컨설팅",
  "extracurricular-consulting": "대외활동컨설팅",
  "other-consulting": "기타 유학컨설팅",
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "ProfessionalService"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: ["HDH Consulting 유학컨설팅", "에이치디에이치 컨설팅", "HDH 유학컨설팅"],
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    areaServed: { "@type": "Country", name: "South Korea" },
    knowsAbout: [...siteConfig.seoKeywords, "유학", "유학 추천", "입시"],
    sameAs: Object.values(siteConfig.social),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: `+82-${siteConfig.contact.admission.tel.slice(1)}`,
        contactType: "customer service",
        availableLanguage: ["Korean", "English"],
        areaServed: "KR",
        hoursAvailable: siteConfig.contact.hours,
      },
      {
        "@type": "ContactPoint",
        telephone: `+82-${siteConfig.contact.extracurricular.tel.slice(1)}`,
        contactType: "customer service",
        availableLanguage: ["Korean", "English"],
        areaServed: "KR",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "유학컨설팅 서비스",
      itemListElement: serviceSlugs.map((slug, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: SERVICE_NAMES_KO[slug],
          serviceType: SERVICE_NAMES_KO[slug],
          url: `${siteConfig.url}${SERVICE_PATHS[slug]}`,
        },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.name} 유학컨설팅`,
    alternateName: "HDH Consulting",
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: ["ko-KR", "en-US"],
    publisher: { "@id": `${siteConfig.url}/#organization` },
    about: { "@id": `${siteConfig.url}/#organization` },
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
  const url = `${siteConfig.url}${path}`;
  const articleBody = post.sections
    .flatMap((section) => section.paragraphs)
    .join("\n\n");

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: `${siteConfig.url}/opengraph-image`,
    inLanguage: locale === "ko" ? "ko-KR" : "en-US",
    keywords: ["유학컨설팅", "유학", "해외유학", post.category],
    articleBody,
  };
}

export function getBlogListSchema(
  posts: { title: string; url: string; datePublished: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "HDH Consulting 유학컨설팅 블로그",
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: post.title,
      url: post.url,
    })),
  };
}

export function getServicesListSchema(
  services: { name: string; url: string; description: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "유학컨설팅 서비스",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        url: service.url,
        provider: { "@id": `${siteConfig.url}/#organization` },
      },
    })),
  };
}

type SuccessStorySchemaInput = {
  id: string;
  summary: string;
  detail: string;
  university: string;
  major: string;
  year: string;
  service: string;
  highlight: string;
};

export function getSuccessStoriesSchema(
  stories: SuccessStorySchemaInput[],
  locale: Locale,
  pageTitle: string,
  pageDescription: string
) {
  const path = locale === "ko" ? "/success-stories" : "/en/success-stories";
  const url = `${siteConfig.url}${path}`;

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: pageTitle,
    description: pageDescription,
    url,
    inLanguage: locale === "ko" ? "ko-KR" : "en-US",
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    about: {
      "@type": "Thing",
      name: locale === "ko" ? "유학컨설팅 합격 사례" : "Study abroad consulting success stories",
    },
    mainEntity: {
      "@type": "ItemList",
      name: pageTitle,
      numberOfItems: stories.length,
      itemListElement: stories.map((story, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Article",
          "@id": `${url}#${story.id}`,
          headline: story.summary,
          description: story.detail,
          articleBody: `${story.detail} (${story.highlight})`,
          author: { "@id": `${siteConfig.url}/#organization` },
          publisher: { "@id": `${siteConfig.url}/#organization` },
          datePublished: `${story.year}-09-01`,
          about: {
            "@type": "EducationalOrganization",
            name: story.university,
          },
          keywords: [story.service, story.major, "유학컨설팅", "유학", "합격 사례"],
        },
      })),
    },
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
