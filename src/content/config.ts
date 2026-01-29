import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    

tags: z.array(z.object({
      name: z.string(),
      color: z.string(),
    }).optional(),


    excerpt: z.string(),
    cover: z.string(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

export const collections = {
  blog,
};