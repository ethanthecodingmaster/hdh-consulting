import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { wordpressRedirects } from "./src/lib/seo/wordpress-redirects";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },
      ...wordpressRedirects,
    ];
  },
};

export default withNextIntl(nextConfig);
