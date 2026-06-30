"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function CtaButton({
  href = "/contact",
  children,
  className,
  variant = "primary",
}: {
  href?: string;
  children?: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline" | "white";
}) {
  const t = useTranslations("common");
  const label = children ?? t("freeConsultation");

  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ size: "lg" }),
        "h-11 gap-2 px-6",
        variant === "primary" && "bg-accent-500 text-white hover:bg-accent-600",
        variant === "white" && "bg-white text-navy-900 hover:bg-navy-50",
        variant === "outline" && "border-2 border-white/30 bg-transparent text-white hover:bg-white/10",
        className
      )}
    >
      {label}
      <ArrowRight className="h-5 w-5" aria-hidden="true" />
    </Link>
  );
}

export function KakaoCta({
  className,
  children,
  variant = "light",
}: {
  className?: string;
  children?: React.ReactNode;
  variant?: "light" | "onDark";
}) {
  const t = useTranslations("common");
  const label = children ?? t("kakaoConsult");

  return (
    <a
      href={siteConfig.contact.kakao}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        buttonVariants({ variant: variant === "light" ? "outline" : "ghost", size: "lg" }),
        "h-11 px-6",
        variant === "onDark" &&
          "border-2 border-white/50 bg-transparent text-white hover:bg-white/10 hover:text-white",
        className
      )}
    >
      {label}
    </a>
  );
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  as: Tag = "h2",
}: {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn("mb-12 max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      {label && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent-600">{label}</p>
      )}
      <Tag className="text-balance text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">{title}</Tag>
      {description && <p className="mt-4 text-lg leading-relaxed text-navy-600">{description}</p>}
    </div>
  );
}
