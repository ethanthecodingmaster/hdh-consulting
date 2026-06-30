import Link from "next/link";
import {
  GraduationCap,
  School,
  BookOpen,
  ArrowLeftRight,
  Trophy,
  Laptop,
  ArrowRight,
} from "lucide-react";
import { AnimatedSection, SectionHeading } from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";

const serviceCards = [
  {
    icon: GraduationCap,
    title: "대입컨설팅",
    description: "미국·영국·아시아권 대학 지원, 에세이·추천서·학교 선정",
    href: "/services#admission",
  },
  {
    icon: School,
    title: "보딩컨설팅",
    description: "명문 기숙학교 SAO 작성, SSAT 준비, 대입 연계 계획",
    href: "/services#boarding",
  },
  {
    icon: BookOpen,
    title: "대학원컨설팅",
    description: "SOP·PHS 작성, Faculty Contact, 연구·인턴 활동 기획",
    href: "/services#graduate",
  },
  {
    icon: ArrowLeftRight,
    title: "편입컨설팅",
    description: "편입 학교 분석, Transfer Essay, 학점 인정 전략",
    href: "/services#transfer",
  },
  {
    icon: Trophy,
    title: "대외활동 컨설팅",
    description: "500+ EC DB, 대회 참가 지원, 포트폴리오 완성",
    href: "/services#extracurricular",
  },
  {
    icon: Laptop,
    title: "온라인 인턴십",
    description: "9개 분야 실무 프로젝트, 전공·직무 체험 프로그램",
    href: "/services#internship",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="services-overview-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="Consulting Services"
            title="유학컨설팅 서비스"
            description="해외 유학을 희망하는 모든 학생을 위한 맞춤형 컨설팅. 학교 선정부터 에세이, 추천서, 대외활동까지 전 과정을 함께합니다."
          />
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.08}>
              <Link
                href={service.href}
                className={cn(
                  "group flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6",
                  "transition-all duration-300 hover:border-accent-200 hover:shadow-lg hover:shadow-accent-600/5"
                )}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600 transition-colors group-hover:bg-accent-600 group-hover:text-white">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-navy-900">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-600 transition-colors group-hover:text-accent-700">
                  자세히 보기
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
