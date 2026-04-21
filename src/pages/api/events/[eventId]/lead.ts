import type { APIRoute } from "astro";
import { saveLead } from "../../../../lib/kv.ts";

export const POST: APIRoute = async ({ request, params, redirect }) => {
  const eventId = params.eventId!;

  const formData = await request.formData();
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const phone = formData.get("phone")?.toString();
  const countryCode = formData.get("countryCode")?.toString() ?? "+31";
  const message = formData.get("message")?.toString() ?? "";
  const book = formData.get("book")?.toString() ?? "";
  const date = formData.get("date")?.toString() ?? "";
  const time = formData.get("time")?.toString() ?? "";

  if (!name || !email || !phone) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  await saveLead({ eventId, name, email, phone, countryCode, message, book, date, time });

  return redirect("/event/monthly-book-reading?success=1");
};
