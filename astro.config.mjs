import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vercel from '@astrojs/vercel';
import { unified } from "@astrojs/markdown-remark";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default defineConfig({
  output: 'static',
  integrations: [react()],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
