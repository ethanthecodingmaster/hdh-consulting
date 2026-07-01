import { ImageResponse } from "next/og";

export const alt = "HDH Consulting — Study Abroad Consulting";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const subtitle =
    locale === "en"
      ? "Affordable Study Abroad Consulting"
      : "합리적인 비용의 맞춤형 유학컨설팅";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: "80px",
          background: "linear-gradient(135deg, #051c2c 0%, #0a3d62 55%, #1a0a54 100%)",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: "-0.02em" }}>
          HDH Consulting
        </div>
        <div style={{ fontSize: 36, marginTop: 28, color: "#bfdbfe", maxWidth: 900 }}>
          {subtitle}
        </div>
        <div style={{ fontSize: 22, marginTop: 40, color: "#94a3b8" }}>
          hdh-consulting.com
        </div>
      </div>
    ),
    { ...size }
  );
}
