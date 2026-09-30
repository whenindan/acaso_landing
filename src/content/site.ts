// All landing-page copy lives here so it can be edited before the pitch
// without touching components.

export const site = {
  name: "ACASO",
  title: "ACASO: The consulting firm without consultants",
  description:
    "AI-native consulting. ACASO finds where your business loses time and puts AI agents on the job.",
  // PLACEHOLDER: replace with the real domain before launch.
  url: "https://acaso.ai",
};

export const hero = {
  headline: "The consulting firm ",
  headlineEmphasis: "without consultants.",
  sub: "ACASO finds where your business loses time, then puts AI agents on the job. Right inside the tools you already use.",
  cta: { href: "#signup", label: "Work with us" },
};

export const how = {
  heading: "No slide decks. ",
  headingEmphasis: "Just agents at work.",
  steps: [
    {
      title: "Diagnose",
      body: "We learn how your company runs and find where AI saves the most time.",
    },
    {
      title: "Build",
      body: "We put agents in your inbox, bank, CRM and the rest of your stack. Live in weeks.",
    },
    {
      title: "Run",
      body: "Agents close the books, answer customers and chase invoices. Every day, getting sharper.",
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
  eyebrow: "Work with us",
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
  submit: "Talk to us",
  submitting: "Sending…",
  success: {
    heading: "Thanks, we're on it.",
    body: "We'll be in touch within a day.",
  },
  error: "Something went wrong. Please try again.",
};

export const footer = {
  copyright: "© 2026 ACASO · United States",
};
