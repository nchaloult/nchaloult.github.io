// @ts-check
import { defineConfig } from "astro/config";
import { visualizer } from "rollup-plugin-visualizer";
import rehypeExternalLinks from "rehype-external-links";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://nchaloult.com",
  trailingSlash: "never",
  integrations: [react()],

  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        { target: "_blank", rel: ["noopener", "noreferrer"] },
      ],
    ],
  },

  vite: {
    plugins: [
      tailwindcss(),
      visualizer({
        emitFile: true,
        filename: "stats.html",
      }),
    ],
  },
});
