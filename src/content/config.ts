import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});

const talkCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    tags: z.array(z.string()),
  }),
});

const portfolioCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    text: z.string().optional(),
    live: z.string().url().optional(), // Optional live URL
    repo: z.string().url().optional(), // Optional repo URL
    image: z.object({
      url: z.string(),
      alt: z.string()
    }),
    tags: z.array(z.string()).optional(), // Optional tags array
  })
});


export const collections = {
  posts: postsCollection,
  talks: talkCollection,
  portfolio: portfolioCollection,
};
