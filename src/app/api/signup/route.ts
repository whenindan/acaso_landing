import { validateSignup, type SignupInput } from "@/lib/signup";

export async function POST(request: Request) {
  let body: Partial<SignupInput>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }
  if (typeof body !== "object" || body === null) {
    return Response.json({ ok: false, error: "Invalid body" }, { status: 400 });
  }

  const lead: Partial<SignupInput> = {};
  for (const key of ["name", "company", "email", "phone", "notes"] as const) {
    const value = body[key];
    if (typeof value === "string") lead[key] = value.trim();
  }

  const errors = validateSignup(lead);
  if (Object.keys(errors).length > 0) {
    return Response.json({ ok: false, errors }, { status: 400 });
  }

  // TODO: persist lead (Supabase/Resend)

  return Response.json({ ok: true });
}
