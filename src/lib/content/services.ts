import type { ServiceSlug } from "@/lib/site-config";

export type ServiceMeta = {
  slug: ServiceSlug;
  subtitle: string;
  icon: string;
};

export const services: ServiceMeta[] = [
  { slug: "university-consulting", subtitle: "University Application · Grades 9–12", icon: "GraduationCap" },
  { slug: "boarding-consulting", subtitle: "Boarding School Application · Grades 5–8", icon: "School" },
  { slug: "graduate-consulting", subtitle: "Graduate School Application", icon: "BookOpen" },
  { slug: "transfer-consulting", subtitle: "Transfer Application", icon: "ArrowRightLeft" },
  { slug: "extracurricular-consulting", subtitle: "Extracurricular Activities & Portfolio", icon: "Trophy" },
  { slug: "other-consulting", subtitle: "Online Internship & Custom Programs", icon: "Briefcase" },
];

export function getServiceBySlug(slug: ServiceSlug) {
  const service = services.find((s) => s.slug === slug);
  if (!service) throw new Error(`Unknown service: ${slug}`);
  return service;
}
