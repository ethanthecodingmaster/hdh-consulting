# Vercel 배포 & WordPress → Next.js 마이그레이션 가이드

현재 WordPress 사이트(`hdh-consulting.com`)를 이 Next.js 프로젝트로 교체하고 Vercel에 호스팅하는 절차입니다.

---

## 전체 흐름 (약 30분~24시간)

```
GitHub 저장소 생성 → Vercel 배포 → 도메인 연결 → DNS 변경 → WordPress 해제
```

---

## Step 1: GitHub에 코드 올리기

터미널에서:

```bash
cd ~/Projects/hdh-consulting
git init
git add .
git commit -m "Initial HDH Consulting Next.js site"
```

GitHub에서 **새 private/public 저장소** 생성 (예: `hdh-consulting`) 후:

```bash
git remote add origin https://github.com/YOUR_USERNAME/hdh-consulting.git
git branch -M main
git push -u origin main
```

---

## Step 2: Vercel에 배포

1. [vercel.com](https://vercel.com) 로그인 (GitHub 계정 연동 권장)
2. **Add New → Project**
3. GitHub 저장소 `hdh-consulting` 선택 → **Import**
4. Framework Preset: **Next.js** (자동 감지)
5. **Environment Variables** 추가:

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_SITE_URL` | `https://hdh-consulting.com` |
| `NEXT_PUBLIC_CRISP_WEBSITE_ID` | Crisp 대시보드 Website ID |
| `SMTP_HOST` | `smtp.gmail.com` (또는 사용 중인 SMTP) |
| `SMTP_PORT` | `587` |
| `SMTP_USER` | 발신 이메일 |
| `SMTP_PASS` | 앱 비밀번호 |
| `CONTACT_EMAIL` | 문의 수신 이메일 |

6. **Deploy** 클릭

배포 완료 후 `https://hdh-consulting.vercel.app` 같은 임시 URL에서 사이트 확인.

---

## Step 3: 커스텀 도메인 연결

Vercel 프로젝트 → **Settings → Domains**:

1. `hdh-consulting.com` 추가
2. `www.hdh-consulting.com` 추가 (권장)
3. Vercel이 표시하는 **DNS 레코드**를 복사

### DNS 설정 (도메인 등록업체에서)

기존 WordPress 호스팅 DNS를 **Vercel로 교체**:

| Type | Name | Value |
|------|------|-------|
| **A** | `@` | `76.76.21.21` |
| **CNAME** | `www` | `cname.vercel-dns.com` |

> WordPress 호스팅에 연결된 **기존 A/CNAME 레코드는 삭제**하거나 Vercel 값으로 교체하세요.

DNS 전파: 보통 **몇 분~48시간** (대부분 1~2시간 이내).

Vercel Domains 탭에서 ✅ **Valid Configuration** 확인 후 HTTPS 자동 발급.

---

## Step 4: WordPress 사이트 해제

DNS가 Vercel을 가리키고 `https://hdh-consulting.com`에서 새 사이트가 보이면:

1. **WordPress 호스팅** — 구독 해지 또는 사이트 삭제 (백업 원하면 먼저 export)
2. **Google Search Console** — 동일 도메인 property 유지, 새 sitemap 제출:
   - `https://hdh-consulting.com/sitemap.xml`
3. **Google Analytics / Crisp** — 기존 추적 ID를 Vercel 환경변수·Crisp에 연결
4. **이메일** — `@hdh-consulting.com` 메일을 WordPress 호스팅과 함께 쓰던 경우, MX 레코드는 **별도 유지** (Google Workspace 등)

---

## Step 5: SEO 유지 체크리스트

- [ ] `NEXT_PUBLIC_SITE_URL=https://hdh-consulting.com` 설정됨
- [ ] Search Console에 sitemap 제출
- [ ] `hdh-consulting.com` 및 `www` 모두 Vercel에 연결
- [ ] www → non-www (또는 반대) 리다이렉트 — Vercel Domains에서 설정
- [ ] 문의 폼 SMTP 테스트
- [ ] Crisp 채팅 위젯 동작 확인

---

## CLI로 빠르게 배포 (선택)

```bash
npm i -g vercel
cd ~/Projects/hdh-consulting
vercel login
vercel          # 프리뷰 배포
vercel --prod   # 프로덕션 배포
```

도메인은 Vercel 대시보드에서 연결.

---

## WordPress URL 리다이렉트 (필요 시)

예전 WordPress URL과 새 URL이 다르면 `next.config.ts`의 `redirects()`에 추가:

```ts
{ source: "/old-wordpress-path", destination: "/services", permanent: true },
```

현재 사이트는 4페이지 구조(`/`, `/about`, `/services`, `/contact`)로 단순화되어 있어 대부분 추가 리다이렉트 없이 동작합니다.

---

## 문제 해결

| 증상 | 해결 |
|------|------|
| 도메인이 예전 WordPress 보임 | DNS 캐시/전파 대기, `dig hdh-consulting.com`으로 A레코드 확인 |
| 문의 폼 실패 | Vercel → Settings → Environment Variables SMTP 확인 |
| Crisp 안 보임 | `NEXT_PUBLIC_CRISP_WEBSITE_ID` 설정 후 **Redeploy** |
| 404 on www | Domains에 www 추가 + CNAME 설정 |

---

## 연락처 (사이트에 반영된 정보)

- 입시·원서: 010-7744-1684
- 대외활동: 010-7512-5725
- 이메일: contact@hdh-consulting.com

배포 후 위 정보가 맞는지 `/contact` 페이지에서 최종 확인하세요.
