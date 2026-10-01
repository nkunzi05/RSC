import { NextResponse } from "next/server";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Please send the form again." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ message: "The enquiry could not be read." }, { status: 400 });
  }

  const input = body as Record<string, unknown>;
  const name = clean(input.name, 120);
  const phone = clean(input.phone, 60);
  const email = clean(input.email, 160);
  const service = clean(input.service, 120);
  const message = clean(input.message, 4000);
  const honeypot = clean(input.company, 120);

  if (honeypot) {
    return NextResponse.json({ message: "Thank you. Your enquiry has been sent." });
  }

  if (!name || !phone || !email || !message || !emailPattern.test(email)) {
    return NextResponse.json({ message: "Please complete the required fields with a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_TO_EMAIL || "sales@rockstructure.construction";
  const sender = process.env.RESEND_FROM_EMAIL || "Rock Structure website <onboarding@resend.dev>";

  if (!apiKey) {
    return NextResponse.json({ message: "The enquiry service is not configured yet. Please email sales@rockstructure.construction directly." }, { status: 503 });
  }

  const subject = service ? `Website enquiry: ${service}` : "Website enquiry";
  const plainText = [
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Service of interest: ${service || "Not specified"}`,
    "",
    message,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email,
        subject,
        text: plainText,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ message: "The enquiry could not be sent. Please email the sales team directly." }, { status: 502 });
    }

    return NextResponse.json({ message: "Thank you. Your enquiry has been sent." });
  } catch {
    return NextResponse.json({ message: "The enquiry could not be sent. Please email the sales team directly." }, { status: 502 });
  }
}
