import Link from "next/link";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/site-config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-100 bg-navy-950 text-navy-200">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-white">HDH Consulting</span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-navy-300">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              바로가기
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              연락처
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${siteConfig.contact.admission.tel}`}
                  className="flex items-center gap-2 text-navy-300 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>
                    {siteConfig.contact.admission.label}:{" "}
                    {siteConfig.contact.admission.phone}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.extracurricular.tel}`}
                  className="flex items-center gap-2 text-navy-300 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>
                    {siteConfig.contact.extracurricular.label}:{" "}
                    {siteConfig.contact.extracurricular.phone}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 text-navy-300 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.kakao}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-navy-300 transition-colors hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  카카오톡 상담
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs text-navy-400">{siteConfig.contact.hours}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-navy-800 pt-8 sm:flex-row">
          <p className="text-xs text-navy-400">
            © {currentYear} HDH Consulting. All rights reserved.
          </p>
          <p className="text-xs text-navy-500">
            유학컨설팅 · 유학 컨설팅 · 해외유학 전문
          </p>
        </div>
      </div>
    </footer>
  );
}
