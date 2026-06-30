import type { Locale } from "@/i18n/routing";

/** Locale-neutral path (no `/en` prefix). Home is `/`. */
export function toLocalizedPath(pathname: string, locale: Locale): string {
  const normalized = pathname === "/" ? "" : pathname;
  if (locale === "ko") return normalized || "/";
  return `/en${normalized}`;
}

export function absoluteUrl(pathname: string, locale: Locale, siteUrl: string): string {
  const localized = toLocalizedPath(pathname, locale);
  const base = siteUrl.replace(/\/$/, "");
  if (localized === "/") return base;
  return `${base}${localized}`;
}

export function hreflangAlternates(pathname: string, siteUrl: string) {
  return {
    "ko-KR": absoluteUrl(pathname, "ko", siteUrl),
    en: absoluteUrl(pathname, "en", siteUrl),
    "x-default": absoluteUrl(pathname, "ko", siteUrl),
  };
}
