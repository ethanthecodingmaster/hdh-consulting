import { ServicesPageContent } from "@/components/services/ServiceTabs";
import { FinalCTA } from "@/components/home/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbSchema } from "@/lib/structured-data";
import { servicesMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = servicesMetadata;

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "홈", url: siteConfig.url },
          { name: "서비스", url: `${siteConfig.url}/services` },
        ])}
      />

      <section className="gradient-hero pt-28 pb-12 sm:pt-36 sm:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent-300">
            Consulting Services
          </p>
          <h1 className="text-balance text-4xl font-bold text-white sm:text-5xl">
            유학컨설팅 서비스
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-navy-200">
            대입, 보딩, 대학원, 편입, 대외활동, 온라인 인턴십까지. HDH Consulting의
            전문 유학 컨설팅 서비스를 확인하세요.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ServicesPageContent />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
