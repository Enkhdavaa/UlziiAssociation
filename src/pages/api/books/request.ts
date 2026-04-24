import type { APIRoute } from "astro";
import { saveBookRequest } from "../../../lib/kv.ts";

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

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
  if (bookId.length > 200 || bookTitle.length > 200) {
    return json({ error: "Invalid book data" }, 400);
  }
  if (name.length > 100) {
    return json({ error: "Name is too long" }, 400);
  }
  if (!isEmail(email) || email.length > 254) {
    return json({ error: "Invalid email address" }, 400);
  }
  if (message.length > 1000) {
    return json({ error: "Message is too long (max 1000 characters)" }, 400);
  }

  await saveBookRequest({ bookId, bookTitle, name, email, message });
  return json({ ok: true });
};
