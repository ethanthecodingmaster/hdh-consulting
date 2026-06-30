import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function FinalCTA() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="gradient-hero relative overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-20"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 70% 30%, rgba(59,130,246,0.3) 0%, transparent 60%)",
              }}
            />

            <div className="relative">
              <h2
                id="cta-heading"
                className="text-balance text-3xl font-bold text-white sm:text-4xl"
              >
                유학의 첫걸음, 무료 상담으로 시작하세요
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-navy-200">
                HDH Consulting의 전문 유학컨설팅 팀이 학생의 목표와 스펙에 맞는
                맞춤 전략을 무료로 안내해 드립니다.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/contact" size="lg" className="group">
                  무료 상담 신청
                  <ArrowRight
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Button>
                <a
                  href={`tel:${siteConfig.contact.admission.tel}`}
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  {siteConfig.contact.admission.phone}
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
