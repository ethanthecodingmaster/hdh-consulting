"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, GraduationCap, School, BookOpen, ArrowRightLeft, Trophy, Briefcase } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { serviceSlugs } from "@/lib/site-config";
import { SectionHeading } from "@/components/shared/cta-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const iconMap = {
  GraduationCap,
  School,
  BookOpen,
  ArrowRightLeft,
  Trophy,
  Briefcase,
} as const;

const serviceIcons: Record<string, keyof typeof iconMap> = {
  "university-consulting": "GraduationCap",
  "boarding-consulting": "School",
  "graduate-consulting": "BookOpen",
  "transfer-consulting": "ArrowRightLeft",
  "extracurricular-consulting": "Trophy",
  "other-consulting": "Briefcase",
};

export function ServicesOverview() {
  const t = useTranslations("home.services");
  const tServices = useTranslations("services");
  const tCommon = useTranslations("common");

  return (
    <section className="py-20 sm:py-28" aria-labelledby="services-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label={t("label")} title={t("title")} description={t("description")} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceSlugs.map((slug) => {
            const Icon = iconMap[serviceIcons[slug]] ?? GraduationCap;
            return (
              <Card key={slug} className="group border-navy-100 transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-lg text-navy-900">{tServices(`${slug}.title`)}</CardTitle>
                  <CardDescription>{tServices(`${slug}.cardDescription`)}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={`/services/${slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-accent-600 transition-colors hover:text-accent-700"
                  >
                    {tCommon("readMore")}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-11 gap-2 border-navy-200 px-6 text-navy-800 hover:bg-navy-50"
            )}
          >
            {t("viewAll")}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
