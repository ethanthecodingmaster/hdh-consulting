import { cn } from "@/lib/utils";

export function BrandWordmark({ label, className }: { label: string; className?: string }) {
  return (
    <span
      className={cn(
        "font-brand inline-block text-xl font-semibold leading-tight tracking-[0.01em] text-[#1a0a54] sm:text-2xl",
        className
      )}
    >
      {label}
    </span>
  );
}
