"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { services, internshipFields, ecPackages } from "@/data/services";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function ServiceTabs() {
  const [activeId, setActiveId] = useState(services[0].id);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && services.some((s) => s.id === hash)) {
      setActiveId(hash);
    }
  }, []);

  const active = services.find((s) => s.id === activeId) ?? services[0];

  return (
    <div>
      <div
        className="flex flex-wrap gap-2 border-b border-navy-100 pb-4"
        role="tablist"
        aria-label="서비스 선택"
      >
        {services.map((service) => (
          <button
            key={service.id}
            type="button"
            role="tab"
            id={`tab-${service.id}`}
            aria-selected={activeId === service.id}
            aria-controls={`panel-${service.id}`}
            onClick={() => {
              setActiveId(service.id);
              window.history.replaceState(null, "", `#${service.id}`);
            }}
            className={cn(
              "rounded-xl px-4 py-2.5 text-sm font-medium transition-all",
              activeId === service.id
                ? "bg-accent-600 text-white shadow-sm"
                : "bg-navy-50 text-navy-700 hover:bg-navy-100"
            )}
          >
            {service.title}
          </button>
        ))}
      </div>

      <motion.div
        key={active.id}
        id={`panel-${active.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${active.id}`}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="pt-10"
      >
        <div className="mb-2 text-sm font-medium text-accent-600">{active.subtitle}</div>
        <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">{active.title}</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-navy-600">{active.description}</p>
        <p className="mt-2 text-sm text-navy-500">
          <strong className="text-navy-700">대상:</strong> {active.target}
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 text-lg font-bold text-navy-900">포함 내용</h3>
            <ul className="space-y-3">
              {active.included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-navy-700">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent-500"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-navy-900">진행 과정</h3>
            <ol className="space-y-4">
              {active.process.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy-100 text-xs font-bold text-navy-700">
                    {index + 1}
                  </span>
                  <span className="text-sm text-navy-700">{step}</span>
                </li>
              ))}
            </ol>

            <div className="mt-8 rounded-xl bg-accent-50 p-5">
              <h4 className="text-sm font-bold text-accent-800">핵심 강점</h4>
              <ul className="mt-2 space-y-1">
                {active.highlights.map((h) => (
                  <li key={h} className="text-sm text-accent-700">
                    · {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {active.id === "extracurricular" && (
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {ecPackages.map((pkg) => (
              <article
                key={pkg.title}
                className="rounded-2xl border border-navy-100 bg-warm-50 p-6"
              >
                <h4 className="font-bold text-navy-900">{pkg.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{pkg.description}</p>
              </article>
            ))}
          </div>
        )}

        {active.id === "internship" && (
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {internshipFields.map((field) => (
              <article
                key={field.title}
                className="rounded-2xl border border-navy-100 p-5 transition-shadow hover:shadow-md"
              >
                <h4 className="font-bold text-navy-900">{field.title}</h4>
                <p className="mt-1 text-xs text-navy-500">{field.topics}</p>
                <p className="mt-3 text-sm text-navy-600">{field.projects}</p>
              </article>
            ))}
          </div>
        )}

        <div className="mt-10">
          <Button href="/contact">무료 상담 신청</Button>
        </div>
      </motion.div>
    </div>
  );
}

export function ServicesPageContent() {
  return (
    <AnimatedSection delay={0.1}>
      <ServiceTabs />
    </AnimatedSection>
  );
}
