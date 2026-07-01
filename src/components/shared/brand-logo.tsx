import Image from "next/image";
import { cn } from "@/lib/utils";

/** Trimmed HDH Consulting wordmark (516×190). */
export const brandLogoAsset = {
  src: "/hdh-logo.png",
  width: 516,
  height: 190,
} as const;

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  /** White image logo for dark backgrounds (e.g. footer). */
  variant?: "default" | "footer";
};

export function BrandLogo({ className, priority = false, variant = "default" }: BrandLogoProps) {
  return (
    <Image
      src={brandLogoAsset.src}
      alt="HDH Consulting"
      width={brandLogoAsset.width}
      height={brandLogoAsset.height}
      priority={priority}
      className={cn(
        "w-auto object-contain object-left",
        variant === "footer" ? "h-8 brightness-0 invert" : "h-9 sm:h-10",
        className
      )}
    />
  );
}
