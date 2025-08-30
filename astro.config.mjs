// @ts-check
import { defineConfig } from 'astro/config';
import { visualizer } from "rollup-plugin-visualizer";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://nchaloult.com",
  trailingSlash: "never",
  integrations: [react()],

  vite: {
    plugins: [
      tailwindcss(),
      visualizer({
        emitFile: true,
        filename: "stats.html",
      }),
    ]
  }
});