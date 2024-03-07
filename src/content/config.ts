// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    layout: z.string(),
    title: z.string(),
    date: z.date(),
    author: z.string().default('Anonymus'),
    image: z.object({
      src: z.string(),
      alt: z.string()
    }),
    description: z.string(),
    isDraft: z.boolean(),
    category: z.string(),
  })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  blog: blogCollection,
};