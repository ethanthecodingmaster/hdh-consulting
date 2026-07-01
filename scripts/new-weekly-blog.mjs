#!/usr/bin/env node
/**
 * Scaffold a weekly blog post with the next scheduled publish date.
 *
 * Usage:
 *   npm run blog:new -- my-post-slug
 *   npm run blog:new -- my-post-slug --date 2026-04-12
 *
 * Then edit the stub in posts-ko.ts / posts-en.ts, commit, and push.
 * The schedule advances automatically unless you pass --date.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const schedulePath = path.join(root, "src/lib/content/blog/schedule.json");
const typesPath = path.join(root, "src/lib/content/blog/types.ts");
const postsKoPath = path.join(root, "src/lib/content/blog/posts-ko.ts");
const postsEnPath = path.join(root, "src/lib/content/blog/posts-en.ts");

function addDays(isoDate, days) {
  const d = new Date(isoDate + "T12:00:00Z");
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

function slugify(input) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const args = process.argv.slice(2).filter((a) => a !== "--");
const slugArg = args.find((a) => !a.startsWith("--"));
const dateFlagIndex = args.indexOf("--date");
const overrideDate = dateFlagIndex >= 0 ? args[dateFlagIndex + 1] : null;

if (!slugArg) {
  console.error("Usage: npm run blog:new -- <slug> [--date YYYY-MM-DD]");
  process.exit(1);
}

const slug = slugify(slugArg);
if (!slug) {
  console.error("Invalid slug.");
  process.exit(1);
}

const schedule = JSON.parse(fs.readFileSync(schedulePath, "utf8"));
const publishDate = overrideDate ?? schedule.nextPublishDate;

for (const file of [typesPath, postsKoPath, postsEnPath]) {
  const text = fs.readFileSync(file, "utf8");
  if (text.includes(`"${slug}"`)) {
    console.error(`Slug "${slug}" already exists in ${path.basename(file)}`);
    process.exit(1);
  }
}

const koStub = `
  "${slug}": {
    slug: "${slug}",
    publishedAt: "${publishDate}",
    category: "guide",
    title: "제목을 입력하세요",
    excerpt: "한 줄 요약을 입력하세요.",
    metaTitle: "메타 제목 | 유학컨설팅 HDH Consulting",
    metaDescription: "유학컨설팅 관련 메타 설명을 입력하세요.",
    sections: [
      {
        paragraphs: [
          "본문 첫 문단을 입력하세요. '유학컨설팅', '유학' 키워드를 자연스럽게 포함하세요.",
        ],
      },
    ],
  },`;

const enStub = `
  "${slug}": {
    slug: "${slug}",
    publishedAt: "${publishDate}",
    category: "guide",
    title: "Enter title",
    excerpt: "Enter one-line excerpt.",
    metaTitle: "Meta title | HDH Consulting",
    metaDescription: "Enter meta description for study abroad consulting.",
    sections: [
      {
        paragraphs: ["Enter opening paragraph."],
      },
    ],
  },`;

function insertBeforeClosingBrace(filePath, insert) {
  let text = fs.readFileSync(filePath, "utf8");
  const marker = "\n};\n";
  const idx = text.lastIndexOf(marker);
  if (idx === -1) {
    console.error(`Could not find insertion point in ${filePath}`);
    process.exit(1);
  }
  text = text.slice(0, idx) + insert + text.slice(idx);
  fs.writeFileSync(filePath, text);
}

function addSlugToTypes() {
  let text = fs.readFileSync(typesPath, "utf8");
  text = text.replace(
    /(\n] as const;)/,
    `\n  "${slug}",$1`
  );
  fs.writeFileSync(typesPath, text);
}

insertBeforeClosingBrace(postsKoPath, koStub);
insertBeforeClosingBrace(postsEnPath, enStub);
addSlugToTypes();

if (!overrideDate) {
  schedule.nextPublishDate = addDays(publishDate, schedule.intervalDays ?? 7);
  fs.writeFileSync(schedulePath, JSON.stringify(schedule, null, 2) + "\n");
}

console.log(`
✓ Created blog stub: ${slug}
✓ Publish date: ${publishDate}
✓ Next scheduled date: ${schedule.nextPublishDate}

Edit:
  - src/lib/content/blog/posts-ko.ts
  - src/lib/content/blog/posts-en.ts

Then: npm run build && git commit && git push
`);
