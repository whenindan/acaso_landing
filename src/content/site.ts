// All landing-page copy lives here so it can be edited before the pitch
// without touching components.

export const site = {
  name: "ACASO",
  title: "ACASO: The AI-native consulting firm",
  description:
    "ACASO finds where your business loses time, then builds and runs the AI agents that fix it, inside the tools you already use.",
  // PLACEHOLDER: replace with the real domain before launch.
  url: "https://acaso.ai",
};

export const hero = {
  headline: "Consulting that ships ",
  headlineEmphasis: "agents, not decks.",
  sub: "ACASO is an AI-native consulting firm. We find where your business loses time and money, then build and run the agents that fix it. Right inside the tools you already use.",
  cta: { href: "#signup", label: "Work with us" },
};

export const how = {
  heading: "We don't hand you a report. ",
  headingEmphasis: "We make the change.",
  steps: [
    {
      title: "Diagnose",
      body: "We sit with your team and map how work really moves through finance, ops, sales and support. Then we find where AI pays back fastest.",
    },
    {
      title: "Build",
      body: "We deploy agents into your inbox, bank, CRM and the rest of your stack. Live in weeks, not a year-long transformation program.",
    },
    {
      title: "Run",
      body: "We don't leave. Agents close the books, answer customers and chase invoices every day, and get sharper as they learn how your company works.",
    },
  ],
};

export const whatsNext = {
  eyebrow: "Consulting, rebuilt for AI",
  heading: "Advice is the easy part. ",
  headingEmphasis: "We do the work.",
  body: "Traditional firms bill for slides and leave the implementation to you. We're operators and engineers who stay until the work runs itself, and every company we work with makes our agents better at the job.",
  cta: { href: "#signup", label: "Tell us where it hurts" },
};

export const signup = {
  eyebrow: "Work with us",
  heading: "Run your company on AI.",
  sub: "Tell us a little about your company. We'll reach out within a day to find where AI can make the biggest difference.",
  fields: {
    name: "Full name",
    company: "Company",
    email: "Work email",
    phone: "Phone",
    notes: "Anything we should know?",
  },
  notesPlaceholder: "Where your team loses the most time, the tools you use, what you've tried…",
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
