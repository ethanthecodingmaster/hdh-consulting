import { Award, Target, Heart, Users } from "lucide-react";
import { AnimatedSection, SectionHeading } from "@/components/ui/AnimatedSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbSchema } from "@/lib/structured-data";
import { aboutMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import { whyHDH } from "@/data/content";

export const metadata = aboutMetadata;

const values = [
  {
    icon: Target,
    title: "학생 중심",
    description:
      "학생 한 명 한 명의 목표, 강점, 상황에 맞는 맞춤형 유학 전략을 수립합니다. 획일적인 템플릿이 아닌, 개인화된 컨설팅을 제공합니다.",
  },
  {
    icon: Award,
    title: "데이터 기반",
    description:
      "수많은 입시 데이터와 합격 사례를 바탕으로 객관적이고 정확한 정보를 제공합니다. 감이 아닌 데이터로 학교 선정과 전략을 결정합니다.",
  },
  {
    icon: Heart,
    title: "진정성",
    description:
      "학생과 학부모 모두에게 투명하고 정직한 커뮤니케이션을 약속합니다. 무료 상담에서도 충분한 정보를 공유합니다.",
  },
  {
    icon: Users,
    title: "3:1 팀 컨설팅",
    description:
      "원서 전략, 대외활동, 에세이 전문가가 팀을 이루어 한 학생을 종합적으로 지원합니다. 제한 없는 미팅으로 깊이 있는 상담을 제공합니다.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "홈", url: siteConfig.url },
          { name: "회사 소개", url: `${siteConfig.url}/about` },
        ])}
      />

      <section className="gradient-hero pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent-300">
              About Us
            </p>
            <h1 className="text-balance text-4xl font-bold text-white sm:text-5xl">
              유학컨설팅 전문가,
              <br />
              HDH Consulting
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-200">
              명문대 커뮤니티에서 시작된 HDH Consulting은 해외 유학을 준비하는
              학생들에게 데이터와 경험 기반의 맞춤형 유학 컨설팅을 제공합니다.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
                우리의 이야기
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-navy-600">
                <p>
                  HDH Consulting은 &ldquo;We Thrive To Excellence&rdquo;라는 모토 아래,
                  해외 유학을 꿈꾸는 학생들에게 전문적이면서도 따뜻한 유학컨설팅을
                  제공하고 있습니다.
                </p>
                <p>
                  명문대 커뮤니티에서 시작된 저희는 수많은 입시 데이터와 실전
                  합격 경험을 축적해 왔습니다. 미국 아이vy리그, 영국 Oxbridge,
                  아시아 Top 대학까지 다양한 합격 사례를 보유하고 있으며, 이를
                  바탕으로 학생 개개인에게 최적의 유학 전략을 제안합니다.
                </p>
                <p>
                  대형 유학원과 달리 최소한의 인건비와 유지비로 운영하여, 합리적인
                  비용으로 높은 퀄리티의 컨설팅을 제공합니다. 3:1 컨설팅 시스템을
                  통해 원서, 대외활동, 에세이 전문가가 한 팀이 되어 학생을
                  지원합니다.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="rounded-2xl border border-navy-100 bg-warm-50 p-8">
                <h3 className="text-lg font-bold text-navy-900">컨설턴트 배경</h3>
                <ul className="mt-4 space-y-3 text-sm text-navy-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                    미국·영국 명문대 출신 컨설턴트
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                    10년 이상 유학컨설팅 경력
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                    Ivy League, QS Top 50 다수 합격 실적
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                    500+ 대외활동 데이터베이스 보유
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                    학생·학부모 맞춤 1:1 상담 전문
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="gradient-subtle py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              label="Our Values"
              title="HDH Consulting의 가치"
              description="유학컨설팅의 본질은 학생의 성장과 성공입니다. 우리는 다음 가치를 핵심으로 합니다."
            />
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.08}>
                <article className="rounded-2xl border border-navy-100 bg-white p-6">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                    <value.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">
                    {value.description}
                  </p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              label="Why Choose Us"
              title="신뢰할 수 있는 유학컨설팅"
            />
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2">
            {whyHDH.map((item, index) => (
              <AnimatedSection key={item.number} delay={index * 0.08}>
                <article className="flex gap-4 rounded-2xl border border-navy-100 p-6">
                  <span className="text-2xl font-bold text-accent-300">{item.number}</span>
                  <div>
                    <h3 className="font-bold text-navy-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-600">
                      {item.description}
                    </p>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
