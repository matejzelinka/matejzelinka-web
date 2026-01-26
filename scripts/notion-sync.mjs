import { Client } from "@notionhq/client";
import fs from "fs";
import path from "path";


const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const databaseId = process.env.NOTION_DB_ID;

const OUTPUT_DIR = path.join(process.cwd(), "src/content/blog");

async function fetchAllPages() {
  const pages = [];
  let cursor;

  do {
    const res = await notion.databases.query({
      database_id: databaseId,
      start_cursor: cursor,
      filter: {
        property: "Published",
        checkbox: { equals: true },
      },
    });

    pages.push(...res.results);
    cursor = res.next_cursor;
  } while (cursor);

  return pages;
}

function getText(prop) {
  return prop?.rich_text?.[0]?.plain_text || "";
}

function getTitle(prop) {
  return prop?.title?.[0]?.plain_text || "";
}

function frontmatter(page) {
  const p = page.properties;

  return `---
title: "${getTitle(p.Title)}"
date: "${p.Date?.date?.start}"
tag: "${p.Tag?.select?.name || ""}"
excerpt: "${getText(p.Excerpt)}"
cover: "${p.Cover?.files?.[0]?.file?.url || ""}"
---

`;
}

async function main() {
  const pages = await fetchAllPages();

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  for (const page of pages) {
    const slug = getText(page.properties.Slug);

    if (!slug) continue;

    const fm = frontmatter(page);

    const filePath = path.join(OUTPUT_DIR, `${slug}.md`);

    fs.writeFileSync(filePath, fm);
    console.log("✔ wrote", slug);
  }
}

main();
