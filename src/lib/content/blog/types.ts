export const blogSlugs = [
  "boarding-school-essay-guide",
  "high-school-essay-guide",
  "college-essay-guide",
  "transfer-essay-guide",
  "graduate-sop-guide",
  "ivy-league-admission-stats-2026",
  "uk-university-admission-stats-2026",
  "singapore-hongkong-admission-stats-2026",
  "study-abroad-trends-2026",
  "study-abroad-consulting-guide-2026",
  "agency-vs-consulting",
  "study-abroad-consultation-guide",
  "us-university-consulting-cost-2026",
  "boarding-school-consulting-guide",
  "parents-study-abroad-consulting-checklist",
  "study-abroad-prep-timeline-2026",
] as const;

export type BlogSlug = (typeof blogSlugs)[number];

export type BlogCategory = "essay" | "graduate" | "statistics" | "trends" | "guide";

export type BlogSection = {
  heading?: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: BlogSlug;
  publishedAt: string;
  category: BlogCategory;
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  sections: BlogSection[];
};
