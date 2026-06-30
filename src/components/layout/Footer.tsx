"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { getContactPhone } from "@/lib/contact-phone";

const footerLinkKeys = [
  { href: "/about", key: "about" as const },
  { href: "/success-stories", key: "successStories" as const },
  { href: "/blog", key: "blog" as const },
  { href: "/contact", key: "contact" as const },
];

export function Footer() {
  const t = useTranslations("common");
  const locale = useLocale();
  const year = new Date().getFullYear();
  const admissionPhone = getContactPhone("admission", locale);
  const extracurricularPhone = getContactPhone("extracurricular", locale);

  return (
    <footer className="border-t border-navy-800 bg-navy-950 text-navy-200">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block text-xl font-bold tracking-tight text-white">
              {t("brand")}
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-navy-300">{t("footer.tagline")}</p>
          </div>
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">{t("footer.shortcuts")}</h2>
            <ul className="space-y-2">
              {footerLinkKeys.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-navy-300 transition-colors hover:text-white">
                    {t(`nav.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">{t("footer.contact")}</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={admissionPhone.href} className="flex items-center gap-2 text-navy-300 hover:text-white">
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {t("footer.admission")}: {admissionPhone.display}
                </a>
              </li>
              <li>
                <a href={extracurricularPhone.href} className="flex items-center gap-2 text-navy-300 hover:text-white">
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {t("footer.extracurricular")}: {extracurricularPhone.display}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 text-navy-300 hover:text-white">
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a href={siteConfig.contact.kakao} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-navy-300 hover:text-white">
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {t("footer.kakao")}
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs text-navy-400">{t("footer.hours")}</p>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-navy-800 pt-8 sm:flex-row">
          <p className="text-xs text-navy-400">{t("footer.copyright", { year })}</p>
          <p className="text-xs text-navy-500">{t("footer.seoKeywords")}</p>
        </div>
      </div>
    </footer>
  );
}
