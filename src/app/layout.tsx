import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CrispChat } from "@/components/layout/CrispChat";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  getOrganizationSchema,
  getServiceSchema,
  getWebSiteSchema,
} from "@/lib/structured-data";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "유학컨설팅 HDH Consulting",
    template: "%s | HDH Consulting",
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1929",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent-600 focus:px-4 focus:py-2 focus:text-white"
        >
          본문으로 바로가기
        </a>
        <JsonLd
          data={[getOrganizationSchema(), getServiceSchema(), getWebSiteSchema()]}
        />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <CrispChat />
      </body>
    </html>
  );
}
