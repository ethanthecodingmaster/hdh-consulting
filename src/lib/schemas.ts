import { z } from "zod";

export function createContactFormSchema(messages: {
  nameMin: string;
  nameMax: string;
  emailInvalid: string;
  phoneInvalid: string;
  serviceRequired: string;
  messageMin: string;
  messageMax: string;
}) {
  return z.object({
    name: z.string().min(2, messages.nameMin).max(50, messages.nameMax),
    email: z.string().email(messages.emailInvalid),
    phone: z.string().min(10, messages.phoneInvalid).max(15, messages.phoneInvalid),
    messenger: z.string().max(100).optional(),
    service: z.string().min(1, messages.serviceRequired),
    grade: z.string().optional(),
    message: z.string().min(10, messages.messageMin).max(2000, messages.messageMax),
  });
}

export type ContactFormData = z.infer<ReturnType<typeof createContactFormSchema>>;
