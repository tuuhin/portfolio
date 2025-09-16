import { defineConfig } from "astro/config";
import { sveltePreprocess } from "svelte-preprocess";

import svelte from "@astrojs/svelte";

// https://astro.build/config
import partytown from "@astrojs/partytown";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://tuhinbhowmick.in",
  integrations: [
    svelte({
      preprocess: sveltePreprocess({
        // THIS IS THE KEY PART: enable preprocessing for script tags
        script: true,
        // You can also add other preprocessors if needed, e.g., for CSS
        // style: true,
      }),
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    mdx(),
    sitemap({
      changefreq: "yearly",
      lastmod: new Date("2025-09-17"),
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
