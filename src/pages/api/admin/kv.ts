import type { APIRoute } from "astro";
import {
  saveEvent,
  deleteEvent,
  saveBook,
  deleteBook,
  saveLead,
  deleteLead,
  updateLead,
  deleteBookRequest,
} from "../../../lib/kv.ts";
import type { Event, Book, LeadRegistration } from "../../../lib/kv.ts";

const BOOK_STATUSES = ["available", "reserved", "given", "using"] as const;

function isAdmin(cookies: {
  get: (name: string) => { json: () => unknown } | undefined;
}): boolean {
  const userCookie = cookies.get("user");
  if (!userCookie) return false;
  try {
    const user = userCookie.json() as { email?: string };
    const adminEmails = (import.meta.env.ADMIN_EMAIL ?? "")
      .split(",")
      .map((e: string) => e.trim())
      .filter(Boolean);
    return !!user.email && adminEmails.includes(user.email);
  } catch {
    return false;
  }
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export const POST: APIRoute = async ({ request, cookies }) => {
  if (!isAdmin(cookies)) return json({ error: "Forbidden" }, 403);

  let body: {
    action: string;
    collection: string;
    data?: unknown;
    id?: string;
    eventId?: string;
  };
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  const { action, collection, data, id, eventId } = body;

  try {
    if (action === "upsert") {
      if (collection === "events") await saveEvent(data as Event);
      else if (collection === "books") {
        const book = data as Book;
        if (!BOOK_STATUSES.includes(book.status))
          return json({ error: `Invalid status: ${book.status}` }, 400);
        await saveBook(book);
      } else if (collection === "leads") {
        const lead = data as LeadRegistration;
        if (lead.id) await updateLead(lead);
        else await saveLead(lead);
      } else return json({ error: "Unknown collection" }, 400);
    } else if (action === "delete") {
      if (!id) return json({ error: "Missing id" }, 400);
      if (collection === "events") await deleteEvent(id);
      else if (collection === "books") await deleteBook(id);
      else if (collection === "book-requests") await deleteBookRequest(id);
      else if (collection === "leads") {
        if (!eventId)
          return json({ error: "Missing eventId for lead delete" }, 400);
        await deleteLead(eventId, id);
      } else return json({ error: "Unknown collection" }, 400);
    } else {
      return json({ error: "Unknown action" }, 400);
    }
    return json({ ok: true });
  } catch (err) {
    return json({ error: String(err) }, 500);
  }
};
