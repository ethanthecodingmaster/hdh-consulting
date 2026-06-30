"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/content";
import { AnimatedSection, SectionHeading } from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="gradient-subtle py-20 sm:py-28" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="Testimonials"
            title="유학컨설팅 후기"
            description="HDH Consulting과 함께 유학의 꿈을 이룬 학생들의 실제 후기입니다."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="relative mx-auto max-w-3xl">
            <Quote
              className="absolute -top-4 left-0 h-10 w-10 text-accent-200"
              aria-hidden="true"
            />

            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-navy-100 bg-white p-8 pt-10 shadow-sm"
              >
                <p className="text-lg leading-relaxed text-navy-700">
                  &ldquo;{testimonials[active].quote}&rdquo;
                </p>
                <footer className="mt-6 border-t border-navy-100 pt-6">
                  <cite className="not-italic">
                    <span className="font-bold text-navy-900">{testimonials[active].name}</span>
                    <span className="mt-1 block text-sm text-navy-500">
                      {testimonials[active].result} | {testimonials[active].service}
                    </span>
                  </cite>
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            <div className="mt-6 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActive(index)}
                  className={cn(
                    "h-2.5 rounded-full transition-all duration-300",
                    active === index ? "w-8 bg-accent-600" : "w-2.5 bg-navy-200 hover:bg-navy-300"
                  )}
                  aria-label={`후기 ${index + 1}번 보기`}
                  aria-current={active === index ? "true" : undefined}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
