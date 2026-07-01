/**
 * HDH Consulting — site configuration
 */
export const siteConfig = {
  name: "HDH Consulting",
  tagline: "합리적인 비용의 온라인 유학컨설팅",
  description:
    "미국 영국 아시아권 입시컨설팅 | 편입컨설팅 | 보딩컨설팅 | 인턴십 | 대외활동. HDH Consulting 유학컨설팅.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hdh-consulting.com",
  locale: "ko_KR",
  language: "ko",
  contact: {
    admission: { label: "입시·원서 컨설팅", phone: "010-7744-1684", tel: "01077441684" },
    extracurricular: { label: "대외활동 컨설팅", phone: "010-7403-3510", tel: "01074033510" },
    email: "info@hdh-consulting.com",
    kakao: "http://pf.kakao.com/_ePyjb/chat",
    hours: "KST 09:00 – 22:00 (연중무휴 상담 가능)",
  },
  social: { instagram: "https://instagram.com/hdhconsulting" },
  seoKeywords: [
    "유학컨설팅",
    "유학 컨설팅",
    "유학",
    "유학 상담",
    "해외유학",
    "해외유학 컨설팅",
    "대입컨설팅",
    "보딩컨설팅",
    "대학원컨설팅",
    "편입컨설팅",
    "대외활동컨설팅",
    "입시 컨설팅",
  ],
} as const;

export type ServiceSlug =
  | "university-consulting"
  | "transfer-consulting"
  | "boarding-consulting"
  | "graduate-consulting"
  | "extracurricular-consulting"
  | "other-consulting";

export const serviceSlugs: ServiceSlug[] = [
  "university-consulting",
  "transfer-consulting",
  "boarding-consulting",
  "graduate-consulting",
  "extracurricular-consulting",
  "other-consulting",
];
