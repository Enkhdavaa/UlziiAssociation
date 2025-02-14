import { defineConfig } from "astro/config";
import deno from "@deno/astro-adapter";

export default defineConfig({
  adapter: deno({
    start: false,
  }),
  appType: "mpa",
  plugins: [],
  server: {
    open: true,
    proxy: {
      "/api/": {
        target: `http://localhost:8080`,
      },
    },
  },
  build: {
    assetsInlineLimit: 0,
    target: "esnext",
    emptyOutDir: true,
  },
  optimizeDeps: {
    exclude: ["astro"],
  },
});
