import { Client } from "@notionhq/client";
import fs from "fs/promises";
import path from "path";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

console.log("DEBUG notion keys:", Object.keys(notion));
console.log("DEBUG notion.databases:", notion.databases);

const databaseId = process.env.NOTION_DB_ID;

const OUTPUT_DIR = "./src/content/blog";

async function fetchAllPages() {
  const pages = [];
  let cursor = undefined;

  while (true) {
    const res = await notion.dataSources.query({
  data_source_id: databaseId,
  start_cursor: cursor,
  page_size: 100,
});


    pages.push(...res.results);

    if (!res.has_more) break;
    cursor = res.next_cursor;
  }

  return pages;
}

function richTextToPlain(richText = []) {
  return richText.map(t => t.plain_text).join("");
}

async function main() {
  if (!databaseId) {
    throw new Error("Missing NOTION_DB_ID");
  }

  const pages = await fetchAllPages();

  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  for (const page of pages) {
    const props = page.properties;

    const title = richTextToPlain(props.Title.title);
    const slug = richTextToPlain(props.Slug.rich_text);
    const excerpt = richTextToPlain(props.Excerpt.rich_text);
    const cover = props.Cover?.files?.[0]?.external?.url || "";
    const date = props.Date?.date?.start;

    if (!slug || !title) continue;

    const md = `---
title: "${title}"
slug: "${slug}"
excerpt: "${excerpt}"
cover: "${cover}"
date: "${date}"
---

${excerpt}
`;

    const filePath = path.join(OUTPUT_DIR, `${slug}.md`);
    await fs.writeFile(filePath, md);

    console.log("Synced:", slug);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
