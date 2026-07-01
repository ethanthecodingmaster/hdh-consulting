"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { CtaButton } from "@/components/shared/cta-button";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  const t = useTranslations("home");
  const tCommon = useTranslations("common");
  const stats = t.raw("stats") as { value: string; label: string }[];
  const trustPoints = t.raw("trustPoints") as string[];

  return (
    <section className="gradient-hero relative overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(34,81,255,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(34,81,255,0.08) 0%, transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t("headlineLine1")}
            <br className="hidden lg:block" />
            <span className="lg:hidden"> </span>
            {t("headlineLine2")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-200 sm:text-xl">{t("description")}</p>
          <ul className="mt-8 grid gap-2 sm:grid-cols-2">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-navy-100">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <CtaButton>{tCommon("freeConsultation")}</CtaButton>
            <Link
              href="/services/university-consulting"
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "h-11 gap-2 border-2 border-white bg-white px-6 text-navy-900 shadow-md hover:bg-navy-50"
              )}
            >
              {tCommon("learnMore")}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
        <dl className="mt-16 grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-3xl font-bold text-white sm:text-4xl">{stat.value}</dd>
              <dd className="mt-1 text-xs text-navy-300 sm:text-sm">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
