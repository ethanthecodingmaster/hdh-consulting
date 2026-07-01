import type { MetadataRoute } from "next";
import { siteConfig, serviceSlugs } from "@/lib/site-config";
import { blogSlugs, getBlogPost } from "@/lib/content/blog";

const STATIC_LAST_MODIFIED = new Date("2026-07-01");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: STATIC_LAST_MODIFIED, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/en`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/services`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: "monthly", priority: 0.92 },
    { url: `${base}/en/services`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/about`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/en/about`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/success-stories`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/en/success-stories`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/blog`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/en/blog`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/contact`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/en/contact`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: "monthly", priority: 0.85 },
  ];

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.flatMap((slug) => [
    {
      url: `${base}/services/${slug}`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${base}/en/services/${slug}`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ]);

  const blogPages: MetadataRoute.Sitemap = blogSlugs.flatMap((slug) => {
    const publishedAt = new Date(getBlogPost(slug, "ko").publishedAt);
    return [
      {
        url: `${base}/blog/${slug}`,
        lastModified: publishedAt,
        changeFrequency: "monthly" as const,
        priority: slug.includes("consulting") || slug.includes("consultation") || slug === "agency-vs-consulting" ? 0.85 : 0.8,
      },
      {
        url: `${base}/en/blog/${slug}`,
        lastModified: publishedAt,
        changeFrequency: "monthly" as const,
        priority: 0.75,
      },
    ];
  });

  return [...staticPages, ...servicePages, ...blogPages];
}
