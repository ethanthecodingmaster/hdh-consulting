import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactFormSchema } from "@/lib/schemas";
import { serviceOptions, gradeOptions } from "@/lib/schemas";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "입력 정보를 확인해 주세요.", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const data = result.data;

    const serviceLabel =
      serviceOptions.find((s) => s.value === data.service)?.label ?? data.service;
    const gradeLabel = data.grade
      ? gradeOptions.find((g) => g.value === data.grade)?.label ?? data.grade
      : "미입력";

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT ?? "587");
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const contactEmail = process.env.CONTACT_EMAIL ?? "contact@hdh-consulting.com";

    if (!smtpHost || !smtpUser || !smtpPass) {
      console.log("[Contact Form Submission]", {
        ...data,
        serviceLabel,
        gradeLabel,
        timestamp: new Date().toISOString(),
      });

      return NextResponse.json({
        success: true,
        message: "문의가 접수되었습니다. (SMTP 미설정 — 로그로 저장됨)",
      });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"HDH Consulting Website" <${smtpUser}>`,
      to: contactEmail,
      replyTo: data.email,
      subject: `[HDH Consulting] ${serviceLabel} 상담 신청 — ${data.name}`,
      text: [
        `이름: ${data.name}`,
        `이메일: ${data.email}`,
        `연락처: ${data.phone}`,
        `학년: ${gradeLabel}`,
        `관심 서비스: ${serviceLabel}`,
        ``,
        `문의 내용:`,
        data.message,
      ].join("\n"),
      html: `
        <h2>HDH Consulting 상담 신청</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">이름</td><td style="padding:8px;border:1px solid #ddd;">${data.name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">이메일</td><td style="padding:8px;border:1px solid #ddd;">${data.email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">연락처</td><td style="padding:8px;border:1px solid #ddd;">${data.phone}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">학년</td><td style="padding:8px;border:1px solid #ddd;">${gradeLabel}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">관심 서비스</td><td style="padding:8px;border:1px solid #ddd;">${serviceLabel}</td></tr>
        </table>
        <h3 style="margin-top:24px;">문의 내용</h3>
        <p style="white-space:pre-wrap;">${data.message}</p>
      `,
    });

    return NextResponse.json({ success: true, message: "문의가 접수되었습니다." });
  } catch (error) {
    console.error("[Contact API Error]", error);
    return NextResponse.json(
      { error: "문의 전송에 실패했습니다. 잠시 후 다시 시도해 주세요." },
      { status: 500 }
    );
  }
}
