// All landing-page copy lives here so it can be edited before the pitch
// without touching components.

export const site = {
  name: "ACASO",
  title: "ACASO: Your AI operating partner",
  description:
    "Consulting-grade insight from AI agents that learn your operations and stay to make them better.",
  url: "https://acasohq.com",
};

export const hero = {
  headline: "Your AI ",
  headlineEmphasis: "operating partner.",
  sub: "Consulting-grade insight from AI agents that learn your operations and stay to make them better.",
  cta: { href: "#signup", label: "Request access" },
};

export const how = {
  heading: "A loop, ",
  headingEmphasis: "not a project.",
  // In loop order; the last step leads back to the first.
  steps: [
    {
      title: "Interview",
      body: "Agents talk with every employee about how they work, what slows them down, and where their effort goes.",
    },
    {
      title: "Map",
      body: "Every interview feeds your company brain, a single map of how everything gets done.",
    },
    {
      title: "Improve",
      body: "Your company brain shows where to improve. We build the plan with you and put it in place.",
    },
    {
      title: "Adapt",
      body: "Agents stay with each employee and see what each change actually did. Your company brain learns from it and finds the next improvement.",
    },
  ],
};

export const whatsNext = {
  eyebrow: "Gets better every week",
  heading: "Consultants leave. ",
  headingEmphasis: "Agents stay.",
  body: "They keep learning long after the first fix, so the gains keep adding up.",
  cta: { href: "#signup", label: "Request access" },
};

export const signup = {
  eyebrow: "Early access",
  heading: "Be one of the first.",
  sub: "We're working with a few founding teams. Tell us about yours.",
  fields: {
    name: "Full name",
    company: "Company",
    email: "Work email",
    notes: "Anything we should know?",
  },
  notesPlaceholder: "Team size, the tools you use, where work feels slow…",
  submit: "Request access",
  submitting: "Sending…",
  success: {
    heading: "Request received.",
    body: "We'll be in touch in a few days.",
  },
  error: "Something went wrong. Please try again.",
};

export const footer = {
  copyright: "© 2026 ACASO · United States",
};
