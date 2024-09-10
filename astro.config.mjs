import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import svelte from "@astrojs/svelte";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    svelte(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
