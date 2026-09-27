// All landing-page copy lives here so it can be edited before the pitch
// without touching components.

export const site = {
  name: "ACASO",
  title: "ACASO: The AI-native accounting firm",
  description:
    "ACASO is the AI-native accounting firm for US startups and SMBs. Agents do the work, a licensed CPA signs off. Your books close every day, not every month.",
  // PLACEHOLDER: replace with the real domain before launch.
  url: "https://acaso.ai",
  // PLACEHOLDER: replace with the real contact address before launch.
  email: "hello@acaso.ai",
};

export const nav = {
  links: [
    { href: "#how", label: "How it works" },
    { href: "#services", label: "Services" },
    { href: "#why", label: "Why ACASO" },
    { href: "#next", label: "What's next" },
  ],
  cta: { href: "#signup", label: "Get started" },
};

export const hero = {
  headline: "Let ACASO handle it",
  // Alternates (swap into `headline`):
  // "Fire your accounting firm. Keep the CPA."
  // "The accounting firm, minus the firm."
  // "Your accountant is an agent now."
  sub: "ACASO is the AI-native accounting firm. Agents do the work, a licensed CPA signs off. Your books close every day, not every month.",
  primaryCta: { href: "#signup", label: "Get started" },
  microline: "Agents do the work · A CPA signs off",
};

export const trust = [
  "Signed off by a licensed US CPA",
  "Reconciled daily",
  "Built for US startups & SMBs",
];

export const services = {
  eyebrow: "Services",
  heading: "Everything your finance team would do. Without the team.",
  items: [
    {
      title: "Bookkeeping & reconciliation",
      promise: "Books that are right every morning, not once a month.",
      tasks: [
        "Transaction categorization",
        "Bank, card & Stripe reconciliation",
        "Monthly close, signed off",
      ],
    },
    {
      title: "AP / AR & invoice auditing",
      promise: "Every dollar in and out, checked before it moves.",
      tasks: [
        "Bill pay",
        "Invoicing & collections",
        "Invoices checked against contracts",
      ],
    },
    {
      title: "Payroll & 1099s",
      promise: "Your people and contractors paid on time, every time.",
      tasks: [
        "Payroll runs",
        "Contractor payments",
        "Year-end 1099s",
      ],
    },
    {
      title: "Tax & reporting",
      promise: "No surprise tax bills. No guessing at runway.",
      tasks: [
        "Sales tax",
        "Income tax prep & filing",
        "Financial statements",
        "Burn & runway",
      ],
    },
  ],
};

export const how = {
  eyebrow: "How it works",
  heading: "One loop. Running every day.",
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
  closing: "The loop closes without you touching it.",
};

export const comparison = {
  eyebrow: "Why ACASO",
  heading: "The old way needs you in the middle.",
  old: {
    label: "The old way",
    summary: "A firm, a stack of software, and you as the glue.",
    points: [
      "Books close once a month, weeks late",
      "Email threads chasing receipts and answers",
      "Five tools that don't talk to each other",
      "Surprise tax bills at year end",
    ],
  },
  acaso: {
    label: "ACASO",
    summary: "One operating layer that does the work.",
    points: [
      "Books updated and reconciled daily",
      "Questions answered in minutes, not days",
      "One place for bookkeeping, bills, payroll and tax",
      "Every close signed off by a licensed CPA",
    ],
  },
};

export const audiences = {
  eyebrow: "Who it's for",
  items: [
    {
      label: "Startups",
      heading: "Skip the finance hire.",
      body: "You're building product, not reconciling Stripe payouts. ACASO gives founders investor-ready books, runway you can trust and clean taxes from day one, without hiring a bookkeeper, a controller and an outside firm.",
      points: [
        "Investor-ready monthly financials",
        "Burn & runway, always current",
        "Delaware franchise tax & 1099s handled",
      ],
    },
    {
      label: "SMBs",
      heading: "Replace the firm and the software.",
      body: "Stop paying a firm to type into software you also pay for. ACASO runs bookkeeping, bills, payroll and sales tax as one layer, and a licensed CPA still signs off.",
      points: [
        "Sales tax across states",
        "Bills paid and invoices collected",
        "Payroll & contractor payments",
      ],
    },
  ],
};

export const whatsNext = {
  eyebrow: "What's next",
  heading: "Accounting is the first loop.",
  sub: "We're building the AI-native back office, one department at a time.",
  items: [
    { title: "Accounting", status: "live" as const },
    { title: "Tax & compliance / Legal", status: "soon" as const },
    { title: "Insurance", status: "soon" as const },
    { title: "Marketing & SEO", status: "soon" as const },
    { title: "Sales & HR", status: "soon" as const },
  ],
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
