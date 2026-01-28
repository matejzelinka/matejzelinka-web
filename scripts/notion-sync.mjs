import { Client } from "@notionhq/client";
import fs from "fs/promises";
import path from "path";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const DATABASE_ID = process.env.NOTION_DB_ID;
const OUTPUT_DIR = "src/content/blog";

/* ================= HELPERS ================= */

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

function getSelect(prop) {
  return prop?.select?.name || "";
}

function getFile(prop) {
  const file = prop?.files?.[0];
  if (!file) return null;
  return file.type === "external"
    ? file.external.url
    : file.file.url;
}

/* ================= CONTENT ================= */

// stáhne bloky (obsah článku)
async function fetchPageContent(pageId) {
  const blocks = [];
  let cursor;

  while (true) {
    const res = await notion.blocks.children.list({
      block_id: pageId,
      start_cursor: cursor,
    });

    blocks.push(...res.results);

    if (!res.has_more) break;
    cursor = res.next_cursor;
  }

  return blocks;
}

// základní převod Notion bloků → Markdown
function blocksToMarkdown(blocks) {
  return blocks
    .map((block) => {
      if (block.type === "paragraph") {
        return block.paragraph.rich_text
          .map((t) => t.plain_text)
          .join("");
      }

      if (block.type === "heading_1") {
        return "# " + block.heading_1.rich_text.map(t => t.plain_text).join("");
      }

      if (block.type === "heading_2") {
        return "## " + block.heading_2.rich_text.map(t => t.plain_text).join("");
      }

      if (block.type === "heading_3") {
        return "### " + block.heading_3.rich_text.map(t => t.plain_text).join("");
      }

      if (block.type === "bulleted_list_item") {
        return "- " + block.bulleted_list_item.rich_text.map(t => t.plain_text).join("");
      }

      if (block.type === "numbered_list_item") {
        return "1. " + block.numbered_list_item.rich_text.map(t => t.plain_text).join("");
      }

      return "";
    })
    .filter(Boolean)
    .join("\n\n");
}

/* ================= DATA SOURCE ================= */

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

  while (true) {
    const res = await notion.dataSources.query({
      data_source_id: dataSourceId,
      filter: {
        property: "Published",
        checkbox: { equals: true },
      },
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
    });

    results.push(...res.results);

    if (!res.has_more) break;
  }

  return results;
}

/* ================= MAIN ================= */

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
    const tag = getSelect(props.Tag);
    const cover = getFile(props.Cover);
    const seoTitle = getText(props["SEO Title"]);
    const seoDescription = getText(props["SEO Description"]);

    if (!slug) {
      console.warn(`⚠️ Skipping "${title}" – missing slug`);
      continue;
    }

    // 👉 TADY SE TAHA OBSAH
    const blocks = await fetchPageContent(page.id);
    const content = blocksToMarkdown(blocks);

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
        .filter(([, v]) => v !== undefined && v !== null && v !== "")
        .map(([k, v]) => {
          if (k === "date") return `${k}: ${v}`;
          return `${k}: "${String(v).replace(/"/g, '\\"')}"`;
        })
        .join("\n") +
      "\n---\n\n";

    const filePath = path.join(OUTPUT_DIR, `${slug}.md`);

    // 👉 TADY SE ZAPISUJE CONTENT
    await fs.writeFile(filePath, yaml + content);

    console.log("✓ synced:", slug);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
