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
};

export function BrandLogo({ className, priority = false }: BrandLogoProps) {
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
