import type { ServiceSlug } from "@/lib/site-config";

export type ServiceMeta = {
  slug: ServiceSlug;
  subtitle: string;
  icon: string;
};

export const services: ServiceMeta[] = [
  { slug: "university-consulting", subtitle: "College Application · Grades 9–12", icon: "GraduationCap" },
  { slug: "transfer-consulting", subtitle: "Transfer Application", icon: "ArrowRightLeft" },
  { slug: "boarding-consulting", subtitle: "Boarding School Application", icon: "School" },
  { slug: "graduate-consulting", subtitle: "Graduate School Application", icon: "BookOpen" },
  { slug: "extracurricular-consulting", subtitle: "Extracurricular Activities & Portfolio", icon: "Trophy" },
  { slug: "other-consulting", subtitle: "Essay · Application Support · Resume", icon: "Briefcase" },
];

export function getServiceBySlug(slug: ServiceSlug) {
  const service = services.find((s) => s.slug === slug);
  if (!service) throw new Error(`Unknown service: ${slug}`);
  return service;
}
