// Shared by the signup form (client) and /api/signup (server).
export type SignupInput = {
  name: string;
  company: string;
  email: string;
  notes: string;
};

export type SignupErrors = Partial<Record<keyof SignupInput, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateSignup(input: Partial<SignupInput>): SignupErrors {
  const errors: SignupErrors = {};
  if (!input.name?.trim()) errors.name = "Please enter your name.";
  if (!input.company?.trim()) errors.company = "Please enter your company.";
  if (!input.email?.trim()) errors.email = "Please enter your email.";
  else if (!EMAIL_RE.test(input.email.trim()))
    errors.email = "Please enter a valid email.";
  if (input.notes && input.notes.length > 2000)
    errors.notes = "Please keep notes under 2,000 characters.";
  return errors;
}
