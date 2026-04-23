import type { APIRoute } from "astro";
import { saveBookRequest } from "../../../lib/kv.ts";

export const POST: APIRoute = async ({ request }) => {
  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { "Content-Type": "application/json" },
    });

  let body: { bookId?: string; bookTitle?: string; name?: string; email?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  const { bookId, bookTitle, name, email, message = "" } = body;
  if (!bookId || !bookTitle || !name || !email) {
    return json({ error: "Missing required fields" }, 400);
  }

  await saveBookRequest({ bookId, bookTitle, name, email, message });
  return json({ ok: true });
};
