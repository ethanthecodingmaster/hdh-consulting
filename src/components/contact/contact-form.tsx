"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { createContactFormSchema, type ContactFormData } from "@/lib/schemas";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type SelectOption = { value: string; label: string };

export function ContactForm() {
  const t = useTranslations("form");
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const serviceOptions = t.raw("serviceOptions") as SelectOption[];
  const gradeOptions = t.raw("gradeOptions") as SelectOption[];

  const schema = useMemo(
    () =>
      createContactFormSchema({
        nameMin: t("validation.nameMin"),
        nameMax: t("validation.nameMax"),
        emailInvalid: t("validation.emailInvalid"),
        phoneInvalid: t("validation.phoneInvalid"),
        serviceRequired: t("validation.serviceRequired"),
        messageMin: t("validation.messageMin"),
        messageMax: t("validation.messageMax"),
      }),
    [t]
  );

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", messenger: "", service: "", grade: "", message: "" },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("idle");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed");
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
        <h3 className="mt-4 text-xl font-bold text-navy-900">{t("successTitle")}</h3>
        <p className="mt-2 text-navy-600">{t("successMessage")}</p>
        <button type="button" onClick={() => setSubmitStatus("idle")} className={cn(buttonVariants({ variant: "outline" }), "mt-6")}>
          {t("newInquiry")}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label={t("name")} error={errors.name?.message} required>
          <Input {...register("name")} type="text" autoComplete="name" aria-invalid={!!errors.name} />
        </Field>
        <Field label={t("email")} error={errors.email?.message} required>
          <Input {...register("email")} type="email" autoComplete="email" aria-invalid={!!errors.email} />
        </Field>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label={t("phone")} error={errors.phone?.message} required>
          <Input {...register("phone")} type="tel" autoComplete="tel" placeholder={t("phonePlaceholder")} aria-invalid={!!errors.phone} />
        </Field>
        <Field label={t("messengerLabel")} error={errors.messenger?.message}>
          <Input {...register("messenger")} type="text" placeholder={t("messengerPlaceholder")} />
        </Field>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label={t("grade")} error={errors.grade?.message}>
          <Select value={watch("grade") ?? ""} onValueChange={(v) => setValue("grade", v as string)}>
            <SelectTrigger><SelectValue placeholder={t("selectGrade")} /></SelectTrigger>
            <SelectContent>
              {gradeOptions.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <Field label={t("serviceLabel")} error={errors.service?.message} required>
          <input type="hidden" {...register("service")} />
          <Select value={watch("service")} onValueChange={(v) => setValue("service", v as string, { shouldValidate: true })}>
            <SelectTrigger aria-invalid={!!errors.service}><SelectValue placeholder={t("selectService")} /></SelectTrigger>
            <SelectContent>
              {serviceOptions.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      </div>
      <Field label={t("message")} error={errors.message?.message} required>
        <Textarea {...register("message")} rows={5} aria-invalid={!!errors.message} />
      </Field>
      {submitStatus === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {t("sendError")}
        </p>
      )}
      <button type="submit" disabled={isSubmitting} className={cn(buttonVariants({ size: "lg" }), "h-11 w-full gap-2 bg-accent-500 hover:bg-accent-600 sm:w-auto")}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            {t("submitting")}
          </>
        ) : (
          <>
            <Send className="h-5 w-5" aria-hidden="true" />
            {t("submit")}
          </>
        )}
      </button>
    </form>
  );
}

function Field({ label, error, required, children }: { label: string; error?: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <Label className="mb-2 block text-navy-800">
        {label}
        {required && <span className="ml-1 text-accent-600">*</span>}
      </Label>
      {children}
      {error && <p className="mt-1.5 text-sm text-red-600">{error}</p>}
    </div>
  );
}
