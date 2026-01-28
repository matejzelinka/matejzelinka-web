import { Client } from "@notionhq/client";
import fs from "fs/promises";
import path from "path";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const DATABASE_ID = process.env.NOTION_DB_ID;
const OUTPUT_DIR = "src/content/blog";

function getText(prop) {
  if (!prop) return "";
  if (prop.type === "title")
    return prop.title.map((t) => t.plain_text).join("");
  if (prop.type === "rich_text")
    return prop.rich_text.map((t) => t.plain_text).join("");
  return "";
}

function getDate(prop) {
  return prop?.date?.start || null;
}

function getMultiSelect(prop) {
  return prop?.multi_select?.map((t) => t.name) || [];
}

function getFile(prop) {
  const file = prop?.files?.[0];
  if (!file) return null;
  return file.type === "external"
    ? file.external.url
    : file.file.url;
}

async function fetchAllPages() {
  console.log("→ resolving data source…");

  const db = await notion.databases.retrieve({
    database_id: DATABASE_ID,
  });

  const dataSourceId = db.data_sources?.[0]?.id;

  if (!dataSourceId) {
    throw new Error("Database has no data_sources");
  }

  console.log("→ data source:", dataSourceId);

  let results = [];
  let cursor;

  while (true) {
    const res = await notion.dataSources.query({
  data_source_id: dataSourceId,
  filter: {
    property: "Published",
    checkbox: { equals: true }
  },
  sorts: [
    {
      property: "Date",
      direction: "descending"
    }
  ]
});



    results.push(...res.results);

    if (!res.has_more) break;
    cursor = res.next_cursor;
  }

  return results;
}

async function main() {
  console.log("→ Fetching Notion blog posts…");

  const pages = await fetchAllPages();

  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  for (const page of pages) {
    const props = page.properties;

    const title = getText(props.Title);
    const slug = getText(props.Slug);
    const excerpt = getText(props.Excerpt);
    const date = getDate(props.Date);
    const tagArr = getMultiSelect(props.Tag);
const tag = tagArr.length ? tagArr[0] : "";

    const cover = getFile(props.Cover);
    const seoTitle = getText(props["SEO Title"]);
    const seoDescription = getText(props["SEO Description"]);

    if (!slug) {
      console.warn(`⚠️ Skipping "${title}" – missing slug`);
      continue;
    }

    const frontmatter = {
  title,
  excerpt,
  date,
  tag,
  cover,
  seoTitle,
  seoDescription,
};


  const yaml =
  "---\n" +
  Object.entries(frontmatter)
    .filter(([, v]) => v !== undefined && v !== null)
    .map(([k, v]) => {
      if (k === "date") return `${k}: ${v}`;
      return `${k}: "${String(v).replace(/"/g, '\\"')}"`;
    })
    .join("\n") +
  "\n---\n\n";



    const filePath = path.join(OUTPUT_DIR, `${slug}.md`);

    await fs.writeFile(filePath, yaml + "# " + title);

    console.log("✓ synced:", slug);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
