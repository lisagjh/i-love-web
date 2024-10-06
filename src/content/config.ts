// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// multiple collections: https://docs.astro.build/en/guides/content-collections/#defining-multiple-collections
// 2. Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
