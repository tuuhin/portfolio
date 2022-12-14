import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: "https://tuuhin.github.io",
  base: "/portfolio",
  integrations: [tailwind(), svelte()],
});
