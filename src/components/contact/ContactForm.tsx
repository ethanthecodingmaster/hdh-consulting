"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import {
  contactFormSchema,
  type ContactFormData,
  serviceOptions,
  gradeOptions,
} from "@/lib/schemas";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      grade: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setSubmitStatus("success");
      reset();
    } catch {
      setSubmitStatus("error");
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-green-200 bg-green-50 p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-green-600" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-bold text-navy-900">상담 신청이 완료되었습니다</h3>
        <p className="mt-2 text-navy-600">
          빠른 시일 내에 연락드리겠습니다. 감사합니다.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setSubmitStatus("idle")}
        >
          새 문의 작성
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="이름" error={errors.name?.message} required>
          <input
            {...register("name")}
            type="text"
            autoComplete="name"
            placeholder="홍길동"
            className={inputClass(!!errors.name)}
            aria-invalid={!!errors.name}
          />
        </Field>

        <Field label="이메일" error={errors.email?.message} required>
          <input
            {...register("email")}
            type="email"
            autoComplete="email"
            placeholder="example@email.com"
            className={inputClass(!!errors.email)}
            aria-invalid={!!errors.email}
          />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="연락처" error={errors.phone?.message} required>
          <input
            {...register("phone")}
            type="tel"
            autoComplete="tel"
            placeholder="010-0000-0000"
            className={inputClass(!!errors.phone)}
            aria-invalid={!!errors.phone}
          />
        </Field>

        <Field label="학년 (선택)" error={errors.grade?.message}>
          <select {...register("grade")} className={inputClass(false)}>
            <option value="">선택해 주세요</option>
            {gradeOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="관심 서비스" error={errors.service?.message} required>
        <select
          {...register("service")}
          className={inputClass(!!errors.service)}
          aria-invalid={!!errors.service}
        >
          <option value="">선택해 주세요</option>
          {serviceOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </Field>

      <Field label="문의 내용" error={errors.message?.message} required>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="유학 목표, 현재 스펙, 궁금한 점 등을 자유롭게 작성해 주세요."
          className={cn(inputClass(!!errors.message), "resize-y")}
          aria-invalid={!!errors.message}
        />
      </Field>

      {submitStatus === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          전송에 실패했습니다. 잠시 후 다시 시도하거나 전화로 문의해 주세요.
        </p>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            전송 중...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" aria-hidden="true" />
            무료 상담 신청하기
          </>
        )}
      </Button>
    </form>
  );
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-navy-800">
        {label}
        {required && <span className="ml-1 text-accent-600" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full rounded-xl border bg-white px-4 py-3 text-navy-900 placeholder:text-navy-400",
    "transition-colors focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20",
    hasError ? "border-red-300" : "border-navy-200"
  );
}
