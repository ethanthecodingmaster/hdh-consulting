import { Phone, Mail, MessageCircle } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ContactForm } from "@/components/contact/contact-form";
import { JsonLd } from "@/components/seo/json-ld";
import { SectionHeading } from "@/components/shared/cta-button";
import { breadcrumbSchema } from "@/lib/seo/structured-data";
import { createMetadata } from "@/lib/seo/metadata";
import type { Locale } from "@/i18n/routing";
import { siteConfig } from "@/lib/site-config";
import { getContactPhone } from "@/lib/contact-phone";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return createMetadata({
    title: t("contact.title"),
    description: t("contact.description"),
    pathname: "/contact",
    locale: locale as Locale,
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("contact");
  const tCommon = await getTranslations("common");

  const methods = [
    {
      key: "admission",
      ...getContactPhone("admission", locale),
      icon: Phone,
    },
    {
      key: "extracurricular",
      ...getContactPhone("extracurricular", locale),
      icon: Phone,
    },
    {
      key: "kakao",
      display: t("methods.kakao.value"),
      href: siteConfig.contact.kakao,
      icon: MessageCircle,
    },
    {
      key: "email",
      display: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
      icon: Mail,
    },
  ] as const;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: tCommon("breadcrumbHome"), path: "/" },
          { name: t("breadcrumb"), path: "/contact" },
        ])}
      />

      <section className="gradient-hero pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-300">{t("heroLabel")}</p>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">{t("heroTitle")}</h1>
          <p className="mt-6 max-w-2xl text-lg text-navy-200">{t("heroDescription")}</p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <SectionHeading align="left" title={t("methodsTitle")} description={t("methodsDescription")} />
              <div className="space-y-4">
                {methods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <Card key={method.key} className="border-navy-100">
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-base text-navy-900">
                          <Icon className="h-4 w-4 text-accent-500" aria-hidden="true" />
                          {t(`methods.${method.key}.title`)}
                        </CardTitle>
                        <CardDescription>{t(`methods.${method.key}.description`)}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <a href={method.href} target={method.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="font-semibold text-accent-600 hover:underline">
                          {method.display}
                        </a>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              <p className="mt-4 text-xs text-navy-400">{t("hours")}</p>
            </div>

            <div className="lg:col-span-3">
              <SectionHeading align="left" title={t("formTitle")} description={t("formDescription")} />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
