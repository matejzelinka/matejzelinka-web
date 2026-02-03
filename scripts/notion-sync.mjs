import { Client } from "@notionhq/client";
import fs from "fs/promises";
import path from "path";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const IMAGE_DIR = "public/images/blog";
const COVER_DIR = "public/images/blog/covers";
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

function getMultiSelect(prop) {
  if (!prop?.multi_select) return [];

  return prop.multi_select.map((t) => ({
    name: t.name,
    color: t.color,
  }));
}

function getFile(prop) {
  const file = prop?.files?.[0];
  if (!file) return null;
  return file.type === "external"
    ? file.external.url
    : file.file.url;
}

/* ---------- Rich text renderer ---------- */

function renderRichText(rich) {
  return rich
    .map((t) => {
      let txt = t.plain_text;

      if (t.annotations?.bold) txt = `**${txt}**`;
      if (t.annotations?.italic) txt = `*${txt}*`;
      if (t.annotations?.code) txt = `\`${txt}\``;
      if (t.annotations?.strikethrough) txt = `~~${txt}~~`;

      if (t.href) {
        txt = `[${txt}](${t.href})`;
      }

      return txt;
    })
    .join("");
}

/* ================= CONTENT ================= */

async function fetchBlockTree(blockId) {
  const blocks = [];
  let cursor;

  while (true) {
    const res = await notion.blocks.children.list({
      block_id: blockId,
      start_cursor: cursor,
    });

    for (const block of res.results) {
      if (block.has_children) {
        block.children = await fetchBlockTree(block.id);
      }

      blocks.push(block);
    }

    if (!res.has_more) break;
    cursor = res.next_cursor;
  }

  return blocks;
}

async function downloadImage(url, outDir, filenameBase) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Image download failed: ${url}`);
  }

  const buffer = Buffer.from(await res.arrayBuffer());

  const ext = path.extname(new URL(url).pathname) || ".jpg";

  const filename = `${filenameBase}${ext}`;
  const fullPath = path.join(outDir, filename);

  await fs.mkdir(outDir, { recursive: true });
  await fs.writeFile(fullPath, buffer);

  return "/" + fullPath.replace(/^public\//, "");
}

/* ================= MARKDOWN BUILDER ================= */

async function blocksToMarkdown(
  blocks,
  slug,
  depth = 0,
  imageIndex = { i: 0 }
) {
  const parts = [];

  for (const block of blocks) {
    let md = "";

    switch (block.type) {
      case "paragraph":
        md = renderRichText(block.paragraph.rich_text);
        break;

      case "image": {
        const url =
          block.image.type === "external"
            ? block.image.external.url
            : block.image.file.url;

        const localPath = await downloadImage(
          url,
          IMAGE_DIR,
          `${slug}-${imageIndex.i++}`
        );

        md = `![](${localPath})`;
        break;
      }

      case "heading_1":
        md = "# " + renderRichText(block.heading_1.rich_text);
        break;

      case "heading_2":
        md = "## " + renderRichText(block.heading_2.rich_text);
        break;

      case "heading_3":
        md = "### " + renderRichText(block.heading_3.rich_text);
        break;

      case "bulleted_list_item":
        md =
          "  ".repeat(depth) +
          "- " +
          renderRichText(block.bulleted_list_item.rich_text);
        break;

      case "numbered_list_item":
        md =
          "  ".repeat(depth) +
          "1. " +
          renderRichText(block.numbered_list_item.rich_text);
        break;

      case "quote":
        md = "> " + renderRichText(block.quote.rich_text);
        break;

      case "callout": {
        const emoji = block.callout.icon?.emoji ?? "💡";
        const text = renderRichText(block.callout.rich_text);

        md = `
<div class="notion-callout notion-${block.callout.color}">
  <span class="notion-callout-icon">${emoji}</span>
  <div class="notion-callout-content">${text}</div>
</div>
`.trim();

        break;
      }

      case "code": {
        const lang = block.code.language || "";
        const code = block.code.rich_text
          .map((t) => t.plain_text)
          .join("");

        md = `\n\`\`\`${lang}\n${code}\n\`\`\``;
        break;
      }
    }

    if (block.children?.length) {
      const childMd = await blocksToMarkdown(
        block.children,
        slug,
        depth + 1,
        imageIndex
      );

      md += "\n\n" + childMd;
    }

    if (md) parts.push(md);
  }

  return parts.join("\n\n");
}

/* ================= DATA SOURCE ================= */

async function fetchAllPages() {
  const db = await notion.databases.retrieve({
    database_id: DATABASE_ID,
  });

  const dataSourceId = db.data_sources?.[0]?.id;

  if (!dataSourceId) {
    throw new Error("Database has no data_sources");
  }

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
    const tags = getMultiSelect(props.Tag);

    let cover = null;

    const coverUrl = getFile(props.Cover);

    if (coverUrl && slug) {
      cover = await downloadImage(coverUrl, COVER_DIR, slug);
    }

    const seoTitle = getText(props["SEO Title"]);
    const seoDescription = getText(props["SEO Description"]);

    if (!slug) continue;

    const blocks = await fetchBlockTree(page.id);

    const content = await blocksToMarkdown(blocks, slug);

    const frontmatter = {
      title,
      excerpt,
      date,
      tags,
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

          if (Array.isArray(v)) {
            if (typeof v[0] === "object") {
              return (
                `${k}:\n` +
                v
                  .map(
                    (item) =>
                      `  - name: "${item.name.replace(/"/g, '\\"')}"\n` +
                      `    color: "${item.color}"`
                  )
                  .join("\n")
              );
            }

            return `${k}: [${v.map((x) => `"${x}"`).join(", ")}]`;
          }

          return `${k}: "${String(v).replace(/"/g, '\\"')}"`;
        })
        .join("\n") +
      "\n---\n\n";

    const filePath = path.join(OUTPUT_DIR, `${slug}.md`);

    await fs.writeFile(filePath, yaml + content);

    console.log("✓ synced:", slug);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
