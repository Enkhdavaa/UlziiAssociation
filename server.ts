import { serveDir } from "https://deno.land/std@0.224.0/http/file_server.ts";
import { handle } from "./dist/server/entry.mjs";

Deno.serve((req: Request) => {
  const url = new URL(req.url);

  console.log("Incoming request:", url.pathname); // Debugging

  if (url.pathname.startsWith("/api")) {
    console.log("Forwarding API request to Astro");
    return handle(req); // Ensure API requests are properly handled
  }

  // Serve Astro frontend from "dist/"
  return serveDir(req, { fsRoot: "dist", urlRoot: "/" });
});
