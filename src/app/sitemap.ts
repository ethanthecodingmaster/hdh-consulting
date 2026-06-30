import type { MetadataRoute } from "next";
import { siteConfig, serviceSlugs } from "@/lib/site-config";
import { blogSlugs } from "@/lib/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/en`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/en/about`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/success-stories`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/en/success-stories`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/en/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/en/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
  ];

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.flatMap((slug) => [
    {
      url: `${base}/services/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${base}/en/services/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ]);

  const blogPages: MetadataRoute.Sitemap = blogSlugs.flatMap((slug) => [
    {
      url: `${base}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${base}/en/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
  ]);

  return [...staticPages, ...servicePages, ...blogPages];
}
