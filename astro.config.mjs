import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "static",
  build: {
    format: "directory",
  },
  site: "https://www.zachuy.com",
  integrations: [tailwind()],
});
