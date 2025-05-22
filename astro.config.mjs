import { defineConfig } from "astro/config";
import { sveltePreprocess } from "svelte-preprocess";

import svelte from "@astrojs/svelte";

// https://astro.build/config
import partytown from "@astrojs/partytown";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte({
    preprocess: sveltePreprocess({
      // THIS IS THE KEY PART: enable preprocessing for script tags
      script: true,
      // You can also add other preprocessors if needed, e.g., for CSS
      // style: true,
    }),
  }), partytown({
    config: {
      forward: ["dataLayer.push"],
    },
  }), mdx()],

  vite: {
    plugins: [tailwindcss()],
  },
});