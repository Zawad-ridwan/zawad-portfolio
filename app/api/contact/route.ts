import { links } from "@/lib/data";

// Sends contact-form messages to your inbox through Resend (resend.com).
// Setup: create a free Resend account, make an API key, and put it in
// .env.local as RESEND_API_KEY=... (and in your host's environment variables).
// With the shared "onboarding@resend.dev" sender, Resend only delivers to the
// email address you signed up with, so links.email must be that address.

const LIMITS = { name: 100, email: 200, message: 5000 };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never see this field; spam bots fill it in.
  if (data.company) {
    return Response.json({ ok: true });
  }

  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const message = String(data.message ?? "").trim();

  const valid =
    name &&
    message &&
    EMAIL_PATTERN.test(email) &&
    name.length <= LIMITS.name &&
    email.length <= LIMITS.email &&
    message.length <= LIMITS.message;

  if (!valid) {
    return Response.json({ error: "Please fill in every field." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not set.");
    return Response.json({ error: "Contact form is not configured." }, { status: 500 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Portfolio <onboarding@resend.dev>",
      to: [links.email],
      reply_to: email,
      subject: `Portfolio message from ${name}`,
      text: `${message}\n\n— ${name} <${email}>`,
    }),
  });

  if (!res.ok) {
    console.error("Contact form: Resend returned", res.status, await res.text());
    return Response.json({ error: "Could not send the message." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
