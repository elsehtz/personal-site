import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.enum(["tech", "political", "other"])).default(["other"]),
    draft: z.boolean().default(false),
  }),
});

const software = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/software" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    github: z.string().url().optional(),
    live: z.string().url().optional(),
    date: z.coerce.date(),
    featured: z.boolean().default(false),
  }),
});

const builds = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/builds" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(["EDA", "3dprint", "circuit", "DIY", "woodworking"]),
    date: z.coerce.date(),
    images: z.array(z.string()).default([]),
    status: z.enum(["completed", "in-progress", "planned"]).default("completed"),
  }),
});

const recipes = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/recipes" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    servings: z.number(),
    prepTime: z.string(),
    cookTime: z.string(),
    ingredients: z.array(z.string()),
  }),
});

export const collections = { blog, software, builds, recipes };
