import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json().catch(() => null);

  if (!body || !body.email || !body.question) {
    return new Response(JSON.stringify({ error: "Missing fields" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const email = String(body.email).trim();
  const question = String(body.question).trim();

  if (!email || !question) {
    return new Response(JSON.stringify({ error: "Missing fields" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const apiKey = import.meta.env.RESEND_API_KEY;
  const toEmail = import.meta.env.CONTACT_EMAIL;

  if (!apiKey || !toEmail) {
    console.error("RESEND_API_KEY or CONTACT_EMAIL not configured");
    return new Response(JSON.stringify({ error: "Server misconfiguration" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Contact Form <onboarding@resend.dev>",
      to: [toEmail],
      reply_to: email,
      subject: `New contact message from ${email}`,
      html: `<p><strong>From:</strong> ${email}</p><p><strong>Message:</strong></p><p>${question.replace(/\n/g, "<br>")}</p>`,
    }),
  });

  if (!res.ok) {
    const error = await res.text();
    console.error("Resend error:", res.status, error);
    return new Response(JSON.stringify({ error: "Failed to send email", detail: error }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
