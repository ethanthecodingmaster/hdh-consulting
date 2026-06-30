import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function createMetadata({ title, description, path, keywords }: PageMeta): Metadata {
  const url = `${siteConfig.url}${path === "/" ? "" : path}`;

  return {
    title,
    description,
    keywords: keywords ?? [...siteConfig.seoKeywords],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: { index: true, follow: true },
  };
}

export const homeMetadata = createMetadata({
  title: "유학컨설팅 | HDH Consulting — 합리적인 비용의 유학컨설팅",
  description:
    "유학컨설팅 전문 HDH Consulting. 미국·영국·아시아권 대입, 보딩, 대학원, 편입, 대외활동 컨설팅. 명문대 출신 맞춤 상담.",
  path: "/",
});

export const aboutMetadata = createMetadata({
  title: "회사 소개 | 유학컨설팅 HDH Consulting",
  description:
    "HDH Consulting은 명문대 커뮤니티에서 시작된 전문 유학컨설팅 회사입니다. 입시 데이터와 실전 경험 기반 맞춤 전략.",
  path: "/about",
});

export const successStoriesMetadata = createMetadata({
  title: "합격 사례 | HDH Consulting 유학컨설팅",
  description:
    "HDH Consulting과 함께 아이비리그, QS Top 50, Oxbridge 등 명문대에 합격한 사례를 확인하세요.",
  path: "/success-stories",
});

export const contactMetadata = createMetadata({
  title: "무료 상담 신청 | 유학컨설팅 HDH Consulting",
  description:
    "HDH Consulting 유학컨설팅 무료 상담 신청. 입시 010-7744-1684, 대외활동 010-7512-5725. 카카오톡·이메일 상담 가능.",
  path: "/contact",
});

export function serviceMetadata(
  title: string,
  description: string,
  slug: string
): Metadata {
  return createMetadata({
    title: `${title} | HDH Consulting 유학컨설팅`,
    description,
    path: `/services/${slug}`,
  });
}
