import { whyHDH } from "@/data/content";
import { AnimatedSection, SectionHeading } from "@/components/ui/AnimatedSection";

export function WhyHDH() {
  return (
    <section className="gradient-subtle py-20 sm:py-28" aria-labelledby="why-hdh-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="Why HDH Consulting"
            title="HDH Consulting을 선택하는 이유"
            description="We Thrive To Excellence — 명문대 커뮤니티에서 시작된 유학컨설팅, 학생 한 명 한 명의 성공을 위해 최선을 다합니다."
          />
        </AnimatedSection>

        <div className="grid gap-8 sm:grid-cols-2">
          {whyHDH.map((item, index) => (
            <AnimatedSection key={item.number} delay={index * 0.1}>
              <article className="rounded-2xl border border-navy-100 bg-white p-8 transition-shadow hover:shadow-md">
                <span className="text-3xl font-bold text-accent-200">{item.number}</span>
                <h3 className="mt-3 text-xl font-bold text-navy-900">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-navy-600">{item.description}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
