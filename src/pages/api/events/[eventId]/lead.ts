import type { APIRoute } from "astro";
import { saveLead } from "../../../../lib/kv.ts";

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

const err = (msg: string) =>
  new Response(JSON.stringify({ error: msg }), {
    status: 400,
    headers: { "Content-Type": "application/json" },
  });

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

  if (!name || !email || !phone) return err("Missing required fields");
  if (name.length > 100) return err("Name is too long");
  if (!isEmail(email) || email.length > 254) return err("Invalid email address");
  if (phone.length > 30 || countryCode.length > 10) return err("Invalid phone number");
  if (message.length > 1000) return err("Message is too long (max 1000 characters)");

  await saveLead({ eventId, name, email, phone, countryCode, message, book, date, time });

  return redirect("/event?success=1");
};
