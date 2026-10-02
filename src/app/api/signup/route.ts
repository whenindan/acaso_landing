import { Resend } from "resend";
import { validateSignup, type SignupInput } from "@/lib/signup";

export async function POST(request: Request) {
  let body: Partial<SignupInput> & { website?: unknown };
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }
  if (typeof body !== "object" || body === null) {
    return Response.json({ ok: false, error: "Invalid body" }, { status: 400 });
  }
  // Honeypot: the "website" field is hidden from people, so only bots fill
  // it. Pretend it worked so they don't retry.
  if (body.website) return Response.json({ ok: true });

  const lead: Partial<SignupInput> = {};
  for (const key of ["name", "company", "email", "notes"] as const) {
    const value = body[key];
    if (typeof value === "string") lead[key] = value.trim();
  }

  const errors = validateSignup(lead);
  if (Object.keys(errors).length > 0) {
    return Response.json({ ok: false, errors }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.SIGNUP_TO_EMAIL;
  const from = process.env.SIGNUP_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error("Signup email not configured: set RESEND_API_KEY, SIGNUP_TO_EMAIL, SIGNUP_FROM_EMAIL");
    return Response.json({ ok: false, error: "Server misconfigured" }, { status: 500 });
  }

  const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ");
  const { error } = await new Resend(apiKey).emails.send({
    from,
    to,
    replyTo: lead.email!,
    subject: `New lead: ${oneLine(lead.name!)} (${oneLine(lead.company!)})`,
    text: [
      `Name: ${lead.name}`,
      `Company: ${lead.company}`,
      `Email: ${lead.email}`,
      "",
      "Notes:",
      lead.notes || "-",
    ].join("\n"),
  });
  if (error) {
    console.error(`Resend failed: ${error.name}: ${error.message}`);
    return Response.json({ ok: false, error: "Failed to send" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
