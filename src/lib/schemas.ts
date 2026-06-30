import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "이름을 2자 이상 입력해 주세요.")
    .max(50, "이름은 50자 이내로 입력해 주세요."),
  email: z
    .string()
    .email("올바른 이메일 주소를 입력해 주세요."),
  phone: z
    .string()
    .min(10, "연락처를 올바르게 입력해 주세요.")
    .max(15, "연락처를 올바르게 입력해 주세요."),
  service: z.string().min(1, "관심 서비스를 선택해 주세요."),
  grade: z.string().optional(),
  message: z
    .string()
    .min(10, "문의 내용을 10자 이상 입력해 주세요.")
    .max(2000, "문의 내용은 2000자 이내로 입력해 주세요."),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const serviceOptions = [
  { value: "admission", label: "대입컨설팅" },
  { value: "boarding", label: "보딩컨설팅" },
  { value: "graduate", label: "대학원컨설팅" },
  { value: "transfer", label: "편입컨설팅" },
  { value: "extracurricular", label: "대외활동 컨설팅" },
  { value: "internship", label: "온라인 인턴십 프로그램" },
  { value: "other", label: "기타 / 잘 모르겠어요" },
] as const;

export const gradeOptions = [
  { value: "middle", label: "중학생" },
  { value: "high-9", label: "고1" },
  { value: "high-10", label: "고2" },
  { value: "high-11", label: "고3" },
  { value: "college", label: "대학생" },
  { value: "graduate", label: "대학원 준비생" },
  { value: "other", label: "기타" },
] as const;
