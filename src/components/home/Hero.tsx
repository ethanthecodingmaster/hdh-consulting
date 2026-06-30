"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { stats } from "@/lib/site-config";

const trustPoints = [
  "명문대 출신 전문 컨설턴트",
  "3:1 맞춤 컨설팅 시스템",
  "무료 초기 상담 제공",
  "합리적인 비용, 높은 퀄리티",
];

export function Hero() {
  return (
    <section className="gradient-hero relative overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(59,130,246,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59,130,246,0.1) 0%, transparent 40%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-accent-200 backdrop-blur-sm">
            합리적인 비용의 전문 유학컨설팅
          </p>

          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            성공적인 유학을 위한
            <br />
            <span className="text-accent-300">유학컨설팅</span> HDH Consulting
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-200 sm:text-xl">
            미국·영국·아시아권 대입, 보딩, 대학원, 편입 및 대외활동까지.
            입시 데이터와 실전 경험을 바탕으로, 학생 한 명 한 명에게 맞춤형
            유학 전략을 제공합니다.
          </p>

          <ul className="mt-8 grid gap-2 sm:grid-cols-2">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-navy-100">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" size="lg" className="group">
              무료 상담 신청
              <ArrowRight
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Button>
            <Button
              href="/services"
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:border-white hover:bg-white/10 hover:text-white"
            >
              서비스 알아보기
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-3 gap-6 border-t border-white/10 pt-10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="text-3xl font-bold text-white sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-xs text-navy-300 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
