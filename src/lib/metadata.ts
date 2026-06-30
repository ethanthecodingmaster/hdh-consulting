import type { Metadata } from "next";
import { siteConfig } from "./site-config";

const defaultOgImage = "/og-default.png";

export function createMetadata({
  title,
  description,
  path = "",
  keywords,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    keywords: keywords ?? [
      "유학컨설팅",
      "유학 컨설팅",
      "유학",
      "해외유학",
      "대입컨설팅",
      "보딩컨설팅",
      "대학원컨설팅",
      "HDH Consulting",
    ],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title,
      description,
      images: [{ url: defaultOgImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export const homeMetadata = createMetadata({
  title: "유학컨설팅 HDH Consulting | 합리적인 비용의 전문 유학 컨설팅",
  description:
    "유학컨설팅 전문 HDH Consulting. 미국·영국·아시아권 대입, 보딩, 대학원, 편입, 대외활동 컨설팅. 명문대 출신 3:1 맞춤 상담, 무료 초기 상담. 합리적인 비용으로 유학 성공을 돕습니다.",
  path: "/",
});

export const aboutMetadata = createMetadata({
  title: "회사 소개 | 유학컨설팅 HDH Consulting",
  description:
    "HDH Consulting은 명문대 커뮤니티에서 시작된 전문 유학컨설팅 회사입니다. 입시 데이터와 실전 경험을 바탕으로 학생 한 명 한 명에게 맞춤형 유학 전략을 제공합니다.",
  path: "/about",
});

export const servicesMetadata = createMetadata({
  title: "서비스 | 대입·보딩·대학원·편입·대외활동 유학컨설팅",
  description:
    "대입컨설팅, 보딩컨설팅, 대학원컨설팅, 편입컨설팅, 대외활동 컨설팅, 온라인 인턴십 프로그램. HDH Consulting의 전문 유학 컨설팅 서비스를 확인하세요.",
  path: "/services",
});

export const contactMetadata = createMetadata({
  title: "문의하기 | 무료 유학컨설팅 상담 신청",
  description:
    "HDH Consulting 무료 유학컨설팅 상담을 신청하세요. 입시·원서 컨설팅 010-7744-1684, 대외활동 컨설팅 010-7512-5725. 카카오톡 및 실시간 채팅 상담 가능.",
  path: "/contact",
});
