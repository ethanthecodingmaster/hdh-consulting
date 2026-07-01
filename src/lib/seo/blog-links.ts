import { blogSlugs, getBlogPost, type BlogSlug } from "@/lib/content/blog";
import type { ServiceSlug } from "@/lib/site-config";

export const blogRelatedServices: Partial<Record<BlogSlug, ServiceSlug[]>> = {
  "boarding-school-essay-guide": ["boarding-consulting"],
  "high-school-essay-guide": ["boarding-consulting", "university-consulting"],
  "college-essay-guide": ["university-consulting"],
  "transfer-essay-guide": ["transfer-consulting"],
  "graduate-sop-guide": ["graduate-consulting"],
  "ivy-league-admission-stats-2026": ["university-consulting"],
  "uk-university-admission-stats-2026": ["university-consulting"],
  "singapore-hongkong-admission-stats-2026": ["university-consulting"],
  "study-abroad-trends-2026": ["university-consulting", "boarding-consulting", "graduate-consulting"],
  "study-abroad-consulting-guide-2026": [
    "university-consulting",
    "boarding-consulting",
    "graduate-consulting",
    "transfer-consulting",
  ],
  "agency-vs-consulting": ["university-consulting", "boarding-consulting"],
  "study-abroad-consultation-guide": ["university-consulting", "extracurricular-consulting"],
  "us-university-consulting-cost-2026": ["university-consulting"],
  "boarding-school-consulting-guide": ["boarding-consulting"],
  "parents-study-abroad-consulting-checklist": ["university-consulting", "boarding-consulting"],
  "study-abroad-prep-timeline-2026": ["university-consulting", "graduate-consulting", "boarding-consulting"],
};

export function getRelatedBlogSlugs(slug: BlogSlug, locale: string, limit = 3): BlogSlug[] {
  const current = getBlogPost(slug, locale);

  return blogSlugs
    .filter((candidate) => candidate !== slug)
    .map((candidate) => ({
      slug: candidate,
      post: getBlogPost(candidate, locale),
    }))
    .sort((a, b) => {
      const aGuide = a.post.category === "guide" && current.category === "guide" ? 1 : 0;
      const bGuide = b.post.category === "guide" && current.category === "guide" ? 1 : 0;
      if (aGuide !== bGuide) return bGuide - aGuide;
      const aCat = a.post.category === current.category ? 1 : 0;
      const bCat = b.post.category === current.category ? 1 : 0;
      if (aCat !== bCat) return bCat - aCat;
      return b.post.publishedAt.localeCompare(a.post.publishedAt);
    })
    .slice(0, limit)
    .map(({ slug: relatedSlug }) => relatedSlug);
}
