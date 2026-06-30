import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().min(10).max(15),
  messenger: z.string().max(100).optional(),
  service: z.string().min(1),
  grade: z.string().optional(),
  message: z.string().min(10).max(2000),
});

const serviceLabels: Record<string, string> = {
  "university-consulting": "대입컨설팅",
  "boarding-consulting": "보딩스쿨컨설팅",
  "graduate-consulting": "대학원컨설팅",
  "transfer-consulting": "편입컨설팅",
  "extracurricular-consulting": "대외활동컨설팅",
  "other-consulting": "기타 컨설팅",
  other: "기타 / 잘 모르겠어요",
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid input", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const data = result.data;
    const serviceLabel = serviceLabels[data.service] ?? data.service;
    const gradeLabel = data.grade || "미입력 / Not provided";

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT ?? "587");
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const contactEmail = process.env.CONTACT_EMAIL ?? "info@hdh-consulting.com";

    if (!smtpHost || !smtpUser || !smtpPass) {
      console.log("[Contact Form Submission]", {
        ...data,
        serviceLabel,
        gradeLabel,
        timestamp: new Date().toISOString(),
      });

      return NextResponse.json({ success: true });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    await transporter.sendMail({
      from: `"HDH Consulting Website" <${smtpUser}>`,
      to: contactEmail,
      replyTo: data.email,
      subject: `[HDH Consulting] ${serviceLabel} — ${data.name}`,
      text: [
        `이름: ${data.name}`,
        `이메일: ${data.email}`,
        `연락처: ${data.phone}`,
        `카카오톡/SNS: ${data.messenger || "미입력"}`,
        `학년: ${gradeLabel}`,
        `관심 서비스: ${serviceLabel}`,
        ``,
        `문의 내용:`,
        data.message,
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Contact API Error]", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
