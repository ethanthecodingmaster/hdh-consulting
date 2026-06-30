import { siteConfig } from "@/lib/site-config";

export type ContactPhoneLine = "admission" | "extracurricular";

export function getContactPhone(line: ContactPhoneLine, locale: string) {
  const { phone, tel } = siteConfig.contact[line];

  if (locale === "en") {
    return {
      display: phone.replace(/^010-/, "+8210-"),
      href: `tel:+82${tel.slice(1)}`,
    };
  }

  return {
    display: phone,
    href: `tel:${tel}`,
  };
}
