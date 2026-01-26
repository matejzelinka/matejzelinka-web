import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const databaseId = "2f14ce806d3880b0a6e1f32344f5cc25";

async function run() {
  const db = await notion.databases.retrieve({
    database_id: databaseId,
  });

  console.log("DATABASE OBJECT:");
  console.log(JSON.stringify(db, null, 2));
}

run();
