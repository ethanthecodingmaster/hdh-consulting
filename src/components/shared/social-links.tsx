import { Facebook, Globe, Instagram } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const SOCIAL_PROFILES = [
  {
    id: "instagram",
    href: siteConfig.social.instagram,
    label: "Instagram",
    Icon: Instagram,
  },
  {
    id: "facebook",
    href: siteConfig.social.facebook,
    label: "Facebook",
    Icon: Facebook,
  },
  {
    id: "soomgo",
    href: siteConfig.social.soomgo,
    label: "숨고",
    Icon: Globe,
  },
] as const;

type SocialLinksProps = {
  className?: string;
  variant?: "footer" | "default";
  showLabels?: boolean;
};

export function SocialLinks({ className, variant = "footer", showLabels = false }: SocialLinksProps) {
  const iconClass =
    variant === "footer"
      ? "text-navy-300 transition-colors hover:text-white"
      : "text-accent-500 transition-colors hover:text-accent-700";

  return (
    <ul className={cn(showLabels ? "space-y-2" : "flex gap-3", className)}>
      {SOCIAL_PROFILES.map(({ id, href, label, Icon }) => (
        <li key={id}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              showLabels ? "inline-flex items-center gap-2 text-sm font-medium text-accent-600 hover:underline" : "inline-flex",
              !showLabels && iconClass
            )}
          >
            <Icon className={cn("shrink-0", showLabels ? "h-4 w-4" : "h-5 w-5")} aria-hidden="true" />
            {showLabels ? label : <span className="sr-only">{label}</span>}
          </a>
        </li>
      ))}
    </ul>
  );
}
