import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const pageId =
  "2f14ce806d3880b0a6e1f32344f5cc25";

async function run() {
  const page = await notion.pages.retrieve({
    page_id: pageId,
  });

  console.log("PAGE:", page);

  const children = await notion.blocks.children.list({
    block_id: pageId,
  });

  console.log("CHILDREN:", children);
}

run();
