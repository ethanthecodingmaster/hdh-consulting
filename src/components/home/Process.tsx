import { consultingProcess } from "@/data/content";
import { AnimatedSection, SectionHeading } from "@/components/ui/AnimatedSection";

export function Process() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="process-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="Consulting Process"
            title="유학컨설팅 진행 과정"
            description="초기 미팅부터 원서 지원, 결과 분석까지 체계적인 4단계 프로세스로 유학 준비를 함께합니다."
          />
        </AnimatedSection>

        <div className="relative">
          <div
            className="absolute left-6 top-0 hidden h-full w-px bg-navy-100 sm:block lg:left-1/2 lg:-translate-x-px"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {consultingProcess.map((step, index) => (
              <AnimatedSection key={step.step} delay={index * 0.1}>
                <div
                  className={`relative flex flex-col gap-6 sm:flex-row sm:items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="hidden lg:block lg:w-1/2" />

                  <div
                    className="absolute left-6 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent-500 bg-white sm:block lg:left-1/2"
                    aria-hidden="true"
                  />

                  <div className="sm:w-full lg:w-1/2">
                    <article className="rounded-2xl border border-navy-100 bg-white p-6 sm:ml-12 lg:ml-0">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent-600 text-sm font-bold text-white">
                        {step.step}
                      </span>
                      <h3 className="mt-3 text-lg font-bold text-navy-900">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-navy-600">
                        {step.description}
                      </p>
                    </article>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
