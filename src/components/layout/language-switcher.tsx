"use client";

import { useLocale, useTranslations } from "next-intl";
import { Globe } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const localeLabels: Record<Locale, string> = {
  ko: "한국어",
  en: "English",
};

export function LanguageSwitcher() {
  const t = useTranslations("common");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (next: Locale) => {
    router.replace(pathname, { locale: next });
  };

  return (
    <div
      className="flex items-center gap-1 rounded-lg border border-navy-200 bg-navy-50 p-0.5"
      role="group"
      aria-label={t("language")}
    >
      <Globe className="ml-2 h-4 w-4 shrink-0 text-navy-500" aria-hidden="true" />
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => switchLocale(loc)}
          className={cn(
            "rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors sm:px-3 sm:text-sm",
            locale === loc
              ? "bg-white text-accent-600 shadow-sm"
              : "text-navy-600 hover:text-navy-900"
          )}
          aria-current={locale === loc ? "true" : undefined}
        >
          {localeLabels[loc]}
        </button>
      ))}
    </div>
  );
}
