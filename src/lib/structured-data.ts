import { siteConfig } from "./site-config";
import { faqItems } from "@/data/faq";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    telephone: siteConfig.contact.admission.tel,
    email: siteConfig.contact.email,
    areaServed: {
      "@type": "Country",
      name: "South Korea",
    },
    knowsAbout: [
      "유학컨설팅",
      "대입컨설팅",
      "보딩컨설팅",
      "대학원컨설팅",
      "편입컨설팅",
      "대외활동 컨설팅",
    ],
    sameAs: [siteConfig.social.instagram],
  };
}

export function getServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "유학컨설팅",
    provider: {
      "@type": "EducationalOrganization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "Country",
      name: "South Korea",
    },
    description: siteConfig.description,
    offers: {
      "@type": "Offer",
      description: "무료 초기 유학컨설팅 상담",
      price: "0",
      priceCurrency: "KRW",
    },
  };
}

export function getFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "ko-KR",
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
