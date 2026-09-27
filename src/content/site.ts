// All landing-page copy lives here so it can be edited before the pitch
// without touching components.

export const site = {
  name: "ACASO",
  title: "ACASO: The AI-native accounting firm",
  description:
    "ACASO is the AI-native accounting firm for US startups and SMBs. Agents do the work, a licensed CPA signs off. Your books close every day, not every month.",
  // PLACEHOLDER: replace with the real domain before launch.
  url: "https://acaso.ai",
};

export const hero = {
  headline: "The accounting firm, ",
  headlineEmphasis: "minus the firm.",
  sub: "Agents do the work, a licensed CPA signs off. Your books close every day, not every month.",
  cta: { href: "#signup", label: "Get started" },
};

export const how = {
  heading: "One loop. ",
  headingEmphasis: "Running every day.",
  steps: [
    {
      title: "Connect",
      body: "Link your bank, cards, Stripe, payroll and inbox once. That's the whole onboarding.",
    },
    {
      title: "Agents work",
      body: "ACASO agents categorize, reconcile, pay, invoice and chase. Continuously, every day.",
    },
    {
      title: "CPA signs off",
      body: "A licensed US CPA reviews and signs off on every close and every filing.",
    },
  ],
};

export const whatsNext = {
  eyebrow: "What's next",
  heading: "Accounting is the first loop. ",
  headingEmphasis: "What should we close next?",
  body: "If there's work in your back office you want off your plate, tell us.",
  cta: { href: "#signup", label: "Suggest a loop" },
};

export const signup = {
  eyebrow: "Get started",
  heading: "Close the loop on your books.",
  sub: "Tell us a little about your company. We'll reach out within a day.",
  fields: {
    name: "Full name",
    company: "Company",
    email: "Work email",
    phone: "Phone",
    notes: "Anything we should know?",
  },
  notesPlaceholder: "Current setup, monthly transactions, what's painful…",
  submit: "Get started",
  submitting: "Sending…",
  success: {
    heading: "You're on the list.",
    body: "We'll be in touch within a day.",
  },
  error: "Something went wrong. Please try again.",
};

export const footer = {
  copyright: "© 2026 ACASO · United States",
  // PLACEHOLDER: point at a real privacy policy before launch.
  privacy: { href: "#", label: "Privacy" },
};
