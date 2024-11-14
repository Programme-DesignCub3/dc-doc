import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";

export default defineConfig({
  site: "https://Programme-DesignCub3.github.io",
  base: "/dc-doc/",
  build: {
    format: "file",
  },
  integrations: [tailwind(), mdx(), react(), sitemap(), pagefind()],
});
