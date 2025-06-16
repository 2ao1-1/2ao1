// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://2ao1.space",
  base: "/",
  outDir: "./dist",

  integrations: [react(), sitemap(), tailwind()],

  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["react", "react-dom"],
            gsap: ["gsap"],
          },
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "src/styles/variables.scss";',
        },
      },
    },
  },
  // build: {
  //   assets: "assets",
  //   inlineStylesheets: "auto",
  // },
  //  output: "static",
  // image: {
  //   service: {
  //     entrypoint: "astro/assets/services/sharp",
  //   },
  // },
  // server: {
  //   port: 3000,
  //   host: true,
  // },
  // compressHTML: true,

  // markdown: {
  //   shikiConfig: {
  //     theme: "github-dark",
  //     wrap: true,
  //   },
  // },
});
