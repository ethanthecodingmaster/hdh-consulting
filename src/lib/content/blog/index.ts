import type { Locale } from "@/i18n/routing";
import { blogPostsEn } from "./posts-en";
import { blogPostsKo } from "./posts-ko";
import { blogSlugs, type BlogPost, type BlogSlug } from "./types";

export { blogSlugs, type BlogPost, type BlogSlug };

const postsByLocale = {
  ko: blogPostsKo,
  en: blogPostsEn,
} as const;

export function getBlogPost(slug: BlogSlug, locale: string): BlogPost {
  const posts = locale === "en" ? postsByLocale.en : postsByLocale.ko;
  const post = posts[slug];
  if (!post) throw new Error(`Unknown blog post: ${slug}`);
  return post;
}

export function getAllBlogPosts(locale: string): BlogPost[] {
  return blogSlugs
    .map((slug) => getBlogPost(slug, locale))
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function isBlogSlug(slug: string): slug is BlogSlug {
  return (blogSlugs as readonly string[]).includes(slug);
}

export function blogPath(slug: string, locale: string) {
  return locale === "ko" ? `/blog/${slug}` : `/en/blog/${slug}`;
}

export function blogIndexPath(locale: string) {
  return locale === "ko" ? "/blog" : "/en/blog";
}

export type { Locale };
