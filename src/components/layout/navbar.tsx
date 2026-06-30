"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { serviceSlugs } from "@/lib/site-config";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinkKeys = [
  { href: "/about", key: "about" as const },
  { href: "/success-stories", key: "successStories" as const },
  { href: "/blog", key: "blog" as const },
  { href: "/contact", key: "contact" as const },
];

function BrandWordmark({ label, className }: { label: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-block text-xl font-bold leading-tight tracking-tight text-[#1a0a54] sm:text-2xl",
        className
      )}
    >
      {label}
    </span>
  );
}

export function Navbar() {
  const t = useTranslations("common");
  const tServices = useTranslations("services");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClass = (active: boolean) =>
    cn(
      "rounded-lg px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap",
      active
        ? "bg-accent-50 text-accent-600"
        : "text-navy-700 hover:bg-navy-50 hover:text-accent-600"
    );

  return (
    <header className="fixed top-0 z-50 w-full border-b border-navy-100 bg-white transition-all duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 flex-1 items-center gap-1 sm:gap-2 lg:gap-4">
          <Link href="/" className="shrink-0" aria-label={t("brand")}>
            <BrandWordmark label={t("brand")} />
          </Link>

          <nav className="hidden items-center lg:flex" aria-label={t("nav.services")}>
            <div className="group relative">
              <button
                type="button"
                className={linkClass(pathname.startsWith("/services"))}
              >
                {t("nav.services")}
              </button>
              <div className="invisible absolute left-0 top-full z-50 min-w-[240px] rounded-xl border border-navy-100 bg-white py-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                {serviceSlugs.map((slug) => (
                  <Link
                    key={slug}
                    href={`/services/${slug}`}
                    className="block px-4 py-2.5 text-sm text-navy-700 hover:bg-navy-50 hover:text-accent-600"
                  >
                    {tServices(`${slug}.title`)}
                  </Link>
                ))}
              </div>
            </div>

            {navLinkKeys.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(pathname === link.href)}>
                {t(`nav.${link.key}`)}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden bg-accent-500 text-white hover:bg-accent-600 sm:inline-flex"
            )}
          >
            {t("freeConsultation")}
          </Link>
          <LanguageSwitcher />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="rounded-lg p-2 text-navy-800 hover:bg-navy-50 lg:hidden"
              aria-label="Menu"
            >
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" onClick={() => setOpen(false)} className="inline-block">
                    <BrandWordmark label={t("brand")} />
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1" aria-label="Mobile menu">
                <p className="px-4 text-xs font-semibold uppercase tracking-wider text-navy-400">{t("nav.services")}</p>
                {serviceSlugs.map((slug) => (
                  <Link
                    key={slug}
                    href={`/services/${slug}`}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-4 py-2.5 text-sm text-navy-700 hover:bg-navy-50"
                  >
                    {tServices(`${slug}.title`)}
                  </Link>
                ))}
                {navLinkKeys.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-lg px-4 py-3 text-base font-medium",
                      pathname === link.href ? "bg-accent-50 text-accent-600" : "text-navy-800 hover:bg-navy-50"
                    )}
                  >
                    {t(`nav.${link.key}`)}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className={cn(buttonVariants(), "mx-4 mt-4 bg-accent-500 text-white hover:bg-accent-600")}
                >
                  {t("freeConsultation")}
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
