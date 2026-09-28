// All landing-page copy lives here so it can be edited before the pitch
// without touching components.

export const site = {
  name: "ACASO",
  title: "ACASO: AI agents that run your back office",
  description:
    "ACASO agents run finance, ops, sales and support for your company, inside the tools you already use.",
  // PLACEHOLDER: replace with the real domain before launch.
  url: "https://acaso.ai",
};

export const hero = {
  headline: "Your next hire ",
  headlineEmphasis: "is an agent.",
  sub: "ACASO agents run finance, ops, sales and support for your company. Right inside the tools you already use.",
  cta: { href: "#signup", label: "Get started" },
};

export const how = {
  heading: "Connect once. ",
  headingEmphasis: "Agents take it from there.",
  steps: [
    {
      title: "Connect",
      body: "Give our agents access to your inbox, bank, CRM and the rest of your stack. That's the whole onboarding.",
    },
    {
      title: "Agents work",
      body: "They close the books, answer customers, chase invoices and follow up on leads. Every day, without being asked.",
    },
    {
      title: "They learn",
      body: "Your customers, your vendors, your rules. Agents pick up how your company works and get sharper every week.",
    },
  ],
};

export const whatsNext = {
  eyebrow: "One team of agents",
  heading: "Finance, ops, sales, support. ",
  headingEmphasis: "More every month.",
  body: "Every company we work with makes our agents better at the job. Tell us what you'd hand off first.",
  cta: { href: "#signup", label: "Tell us" },
};

export const signup = {
  eyebrow: "Get started",
  heading: "Put ACASO to work.",
  sub: "Tell us a little about your company. We'll reach out within a day.",
  fields: {
    name: "Full name",
    company: "Company",
    email: "Work email",
    phone: "Phone",
    notes: "Anything we should know?",
  },
  notesPlaceholder: "What you'd hand off first, the tools you use, what's painful…",
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
};
