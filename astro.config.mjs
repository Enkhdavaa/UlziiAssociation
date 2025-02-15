import { defineConfig } from "astro/config";
import deno from "@deno/astro-adapter";

export default defineConfig({
  adapter: deno({
    port: 8080,
    hostname: "localhost",
  }),
  site: "http://localhost:8080",
  server: {
    open: true,
    proxy: {
      "/api": "http://localhost:8080",
    },
  },
});
