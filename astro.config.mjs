import { defineConfig } from "astro/config";

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
    svelte(),
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
