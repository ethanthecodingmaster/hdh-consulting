# HDH Consulting Website

유학컨설팅 전문 **HDH Consulting** 공식 웹사이트. Next.js 15, TypeScript, Tailwind CSS로 구축되었습니다.

## Tech Stack

- **Next.js 15** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — subtle scroll animations
- **Lucide React** — icons
- **react-hook-form + zod** — contact form validation
- **Crisp.chat** — real-time messenger
- **Pretendard** + Inter fonts

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Production site URL (SEO) |
| `NEXT_PUBLIC_CRISP_WEBSITE_ID` | Crisp.chat website ID |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` | Email delivery for contact form |
| `CONTACT_EMAIL` | Recipient email for form submissions |

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, services, why HDH, process, FAQ |
| `/about` | Company story, values, consultant background |
| `/services` | All consulting services with tabs |
| `/contact` | Contact form, phone, Kakao, Crisp chat |

## Customization

- **Colors & contact info:** `src/lib/site-config.ts`
- **Content:** `src/data/` directory
- **SEO metadata:** `src/lib/metadata.ts`
- **Structured data:** `src/lib/structured-data.ts`

## SEO Features

- Korean-first meta titles and descriptions
- JSON-LD: Organization, Service, FAQ, WebSite, Breadcrumb
- `sitemap.xml` and `robots.txt`
- Semantic HTML, accessible navigation
- Performance-focused: no heavy images, minimal scripts

## Deploy

Recommended: [Vercel](https://vercel.com)

```bash
npm run build
npm start
```
