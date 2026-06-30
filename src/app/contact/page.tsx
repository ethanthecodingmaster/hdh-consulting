import { Phone, Mail, MessageCircle, Clock, MessageSquare } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { AnimatedSection, SectionHeading } from "@/components/ui/AnimatedSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbSchema } from "@/lib/structured-data";
import { contactMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = contactMetadata;

const contactMethods = [
  {
    icon: Phone,
    title: siteConfig.contact.admission.label,
    value: siteConfig.contact.admission.phone,
    href: `tel:${siteConfig.contact.admission.tel}`,
    description: "대입·보딩·대학원·편입 컨설팅 문의",
  },
  {
    icon: Phone,
    title: siteConfig.contact.extracurricular.label,
    value: siteConfig.contact.extracurricular.phone,
    href: `tel:${siteConfig.contact.extracurricular.tel}`,
    description: "대외활동·인턴십 프로그램 문의",
  },
  {
    icon: MessageCircle,
    title: "카카오톡 상담",
    value: "카카오톡 채널 바로가기",
    href: siteConfig.contact.kakao,
    description: "편리한 메시지 상담",
    external: true,
  },
  {
    icon: MessageSquare,
    title: "실시간 채팅",
    value: "화면 우측 하단 채팅 버튼",
    description: "Crisp 실시간 상담 (영업시간 내)",
  },
  {
    icon: Mail,
    title: "이메일",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    description: "서류·상세 문의",
  },
  {
    icon: Clock,
    title: "상담 시간",
    value: siteConfig.contact.hours,
    href: undefined,
    description: "전화·카카오·채팅 모두 가능",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "홈", url: siteConfig.url },
          { name: "문의하기", url: `${siteConfig.url}/contact` },
        ])}
      />

      <section className="gradient-hero pt-28 pb-12 sm:pt-36 sm:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent-300">
              Contact Us
            </p>
            <h1 className="text-balance text-4xl font-bold text-white sm:text-5xl">
              무료 유학컨설팅 상담 신청
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-navy-200">
              유학 준비에 대한 궁금한 점을 편하게 문의해 주세요. 모든 초기 상담은
              무료이며, 전화·카카오톡·실시간 채팅·이메일로 상담 가능합니다.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <SectionHeading
                  align="left"
                  title="연락 방법"
                  description="가장 편한 방법으로 HDH Consulting 유학컨설팅 팀에 연락해 주세요."
                />
              </AnimatedSection>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <AnimatedSection key={method.title} delay={index * 0.05}>
                    <div className="flex gap-4 rounded-xl border border-navy-100 p-5 transition-shadow hover:shadow-sm">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                        <method.icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-navy-900">{method.title}</h3>
                        {method.href ? (
                          <a
                            href={method.href}
                            {...(method.external
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                            className="mt-0.5 block text-sm font-medium text-accent-600 hover:text-accent-700"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <p className="mt-0.5 text-sm font-medium text-navy-800">{method.value}</p>
                        )}
                        <p className="mt-1 text-xs text-navy-500">{method.description}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <AnimatedSection delay={0.1}>
                <div className="rounded-2xl border border-navy-100 bg-white p-8 shadow-sm">
                  <h2 className="text-xl font-bold text-navy-900">상담 신청서</h2>
                  <p className="mt-2 text-sm text-navy-600">
                    아래 양식을 작성해 주시면 24시간 이내에 연락드리겠습니다.
                  </p>
                  <div className="mt-8">
                    <ContactForm />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
