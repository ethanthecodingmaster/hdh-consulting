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
  /** White wordmark for dark backgrounds (e.g. footer). */
  variant?: "default" | "footer";
};

export function BrandLogo({ className, priority = false, variant = "default" }: BrandLogoProps) {
  if (variant === "footer") {
    return (
      <span
        className={cn(
          "font-brand inline-block leading-none text-white",
          className
        )}
        aria-label="HDH Consulting"
      >
        <span className="block text-lg font-semibold tracking-[0.02em]">HDH</span>
        <span className="block text-base font-medium tracking-[0.01em]">Consulting</span>
      </span>
    );
  }

  return (
    <Image
      src={brandLogoAsset.src}
      alt="HDH Consulting"
      width={brandLogoAsset.width}
      height={brandLogoAsset.height}
      priority={priority}
      className={cn("h-9 w-auto object-contain object-left sm:h-10", className)}
    />
  );
}
