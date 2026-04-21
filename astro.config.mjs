import { defineConfig } from "astro/config";
import deno from "@deno/astro-adapter";

export default defineConfig({
  output: "server",
  adapter: deno({
    port: 8080,
    hostname: "localhost",
  }),
  site: "http://localhost:8080",
  server: {
    port: 8080,
    open: true,
  },
});
