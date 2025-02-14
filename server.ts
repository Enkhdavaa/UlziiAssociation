import { handle } from "./dist/server/entry.mjs";

Deno.serve((req: Request) => {
  // Check the request, maybe do static file handling here.

  console.log("111");
  return handle(req);
});
