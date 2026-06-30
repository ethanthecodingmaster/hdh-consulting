import type { Redirect } from "next/dist/lib/load-custom-routes";

/**
 * 301 redirects from legacy WordPress URLs (hdh-consulting.com) to the Next.js site.
 * Trailing slashes are normalized by next.config before these run.
 */
export const wordpressRedirects: Redirect[] = [
  // Service pages
  {
    source: "/university-consulting",
    destination: "/services/university-consulting",
    permanent: true,
  },
  {
    source: "/boarding-consulting",
    destination: "/services/boarding-consulting",
    permanent: true,
  },
  {
    source: "/graduate-consulting",
    destination: "/services/graduate-consulting",
    permanent: true,
  },
  {
    source: "/transfer-consulting",
    destination: "/services/transfer-consulting",
    permanent: true,
  },
  {
    source: "/extracurricular-activities",
    destination: "/services/extracurricular-consulting",
    permanent: true,
  },
  {
    source: "/other-consulting-service",
    destination: "/services/other-consulting",
    permanent: true,
  },
  {
    source: "/virtual-internship-program",
    destination: "/services/extracurricular-consulting",
    permanent: true,
  },

  // Legacy blog posts → closest new article (or blog index)
  {
    source: "/명문대-합격을-위한-에세이-작성-팁",
    destination: "/blog/college-essay-guide",
    permanent: true,
  },
  {
    source: "/명문대-합격을-위한-미국-입시-트렌드-분석",
    destination: "/blog/study-abroad-trends-2026",
    permanent: true,
  },
  {
    source: "/계획-변경-해외대학-편입-과정-탐색",
    destination: "/blog/transfer-essay-guide",
    permanent: true,
  },
  {
    source: "/해외-명문대-입시를-위한-초보자-안내서",
    destination: "/blog/college-essay-guide",
    permanent: true,
  },
  {
    source: "/유학-컨설팅-찾기-맞서비스-안내서",
    destination: "/contact",
    permanent: true,
  },
  {
    source: "/유학-컨설팅-최고의-대학에-갈-수-있는-방법",
    destination: "/blog/college-essay-guide",
    permanent: true,
  },
  {
    source: "/미국-대학-재정-지원-팁",
    destination: "/blog/college-essay-guide",
    permanent: true,
  },
  {
    source: "/u-s-computer-science-programs",
    destination: "/blog/study-abroad-trends-2026",
    permanent: true,
  },
  {
    source: "/미국의-affirmative-action-철폐에-대하여",
    destination: "/blog/ivy-league-admission-stats-2026",
    permanent: true,
  },
  {
    source: "/새로운-정상에-적응하기-코로나19가-미국-대학-입시에",
    destination: "/blog/study-abroad-trends-2026",
    permanent: true,
  },
  {
    source: "/미국-최고의-경영대학원-top-10-mba-programs-in-the-u-s",
    destination: "/blog/graduate-sop-guide",
    permanent: true,
  },
];
