/**
 * HDH Consulting — Central design & site configuration
 * Edit colors, fonts, and contact info here.
 */

export const siteConfig = {
  name: "HDH Consulting",
  tagline: "합리적인 비용의 유학컨설팅",
  description:
    "HDH Consulting은 미국·영국·아시아권 대입, 보딩, 대학원, 편입 및 대외활동 컨설팅을 제공하는 전문 유학컨설팅 회사입니다. 명문대 출신 컨설턴트의 3:1 맞춤 상담과 무료 초기 상담을 제공합니다.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hdh-consulting.com",
  locale: "ko_KR",
  language: "ko",

  contact: {
    admission: {
      label: "입시·원서 컨설팅",
      phone: "010-7744-1684",
      tel: "01077441684",
    },
    extracurricular: {
      label: "대외활동 컨설팅",
      phone: "010-7512-5725",
      tel: "01075125725",
    },
    email: "contact@hdh-consulting.com",
    kakao: "https://pf.kakao.com/_hdhconsulting",
    hours: "KST 09:00 – 22:00 (연중무휴 상담 가능)",
  },

  social: {
    instagram: "https://instagram.com/hdhconsulting",
  },

  crisp: {
    websiteId: process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID ?? "",
  },
} as const;

/** Brand color palette — customize here */
export const colors = {
  navy: {
    50: "#f0f4f8",
    100: "#d9e2ec",
    200: "#bcccdc",
    300: "#9fb3c8",
    400: "#829ab1",
    500: "#627d98",
    600: "#486581",
    700: "#334e68",
    800: "#243b53",
    900: "#102a43",
    950: "#0a1929",
  },
  accent: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
  },
  warm: {
    50: "#faf9f7",
    100: "#f5f3ef",
  },
} as const;

export const navLinks = [
  { href: "/", label: "홈" },
  { href: "/about", label: "회사 소개" },
  { href: "/services", label: "서비스" },
  { href: "/contact", label: "문의하기" },
] as const;

export const stats = [
  { value: "10+", label: "년간 컨설팅 경력" },
  { value: "500+", label: "대외활동 DB" },
  { value: "85%", label: "QS Top 50 합격률" },
] as const;
