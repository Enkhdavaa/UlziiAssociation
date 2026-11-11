import { defineConfig } from "astro/config";
import deno from "@deno/astro-adapter";

export default defineConfig({
  output: "server",
  adapter: deno({
    port: 8080,
    hostname: "localhost",
  }),
  site: "http://localhost:8080",
  // Astro 7 changed the default to "jsx", which strips whitespace between
  // inline elements. Keep the Astro 6 behavior so text doesn't run together.
  compressHTML: true,
  server: {
    port: 8080,
    open: true,
  },
});
