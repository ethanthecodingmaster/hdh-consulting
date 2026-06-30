import type { Metadata } from "next";
import type { Locale } from "@/i18n/routing";
import { siteConfig } from "@/lib/site-config";
import { absoluteUrl, hreflangAlternates } from "@/lib/seo/paths";

const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — ${siteConfig.tagline}`,
};

type PageMeta = {
  title: string;
  description: string;
  /** Locale-neutral path, e.g. `/`, `/about`, `/services/university-consulting` */
  pathname: string;
  locale: Locale;
  keywords?: string[];
};

export function createMetadata({
  title,
  description,
  pathname,
  locale,
  keywords,
}: PageMeta): Metadata {
  const url = absoluteUrl(pathname, locale, siteConfig.url);

  return {
    title,
    description,
    keywords: keywords ?? [...siteConfig.seoKeywords],
    alternates: {
      canonical: url,
      languages: hreflangAlternates(pathname, siteConfig.url),
    },
    openGraph: {
      type: "website",
      locale: locale === "ko" ? siteConfig.locale : "en_US",
      url,
      siteName: siteConfig.name,
      title,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
    robots: { index: true, follow: true },
  };
}

export const homeMetadata = createMetadata({
  title: "유학컨설팅 | HDH Consulting — 합리적인 비용의 유학컨설팅",
  description:
    "유학컨설팅 전문 HDH Consulting. 미국·영국·아시아권 대입, 보딩, 대학원, 편입, 대외활동 컨설팅. 명문대 출신 맞춤 상담.",
  pathname: "/",
  locale: "ko",
});

export const aboutMetadata = createMetadata({
  title: "회사 소개 | 유학컨설팅 HDH Consulting",
  description:
    "HDH Consulting은 명문대 커뮤니티에서 시작된 전문 유학컨설팅 회사입니다. 입시 데이터와 실전 경험 기반 맞춤 전략.",
  pathname: "/about",
  locale: "ko",
});

export const successStoriesMetadata = createMetadata({
  title: "합격 사례 | HDH Consulting 유학컨설팅",
  description:
    "HDH Consulting과 함께 아이비리그, QS Top 50, Oxbridge 등 명문대에 합격한 사례를 확인하세요.",
  pathname: "/success-stories",
  locale: "ko",
});

export const contactMetadata = createMetadata({
  title: "무료 상담 신청 | 유학컨설팅 HDH Consulting",
  description:
    "HDH Consulting 유학컨설팅 무료 상담 신청. 입시 010-7744-1684, 대외활동 010-7403-3510. 카카오톡·이메일 상담 가능.",
  pathname: "/contact",
  locale: "ko",
});

export function serviceMetadata(
  title: string,
  description: string,
  slug: string,
  locale: Locale = "ko"
): Metadata {
  return createMetadata({
    title: `${title} | HDH Consulting 유학컨설팅`,
    description,
    pathname: `/services/${slug}`,
    locale,
  });
}
