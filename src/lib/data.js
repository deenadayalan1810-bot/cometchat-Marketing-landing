// ─── Navigation ────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Developers", href: "#developers" },
  { label: "Resources", href: "#resources" },
  { label: "Pricing", href: "#pricing" },
];

export const SOCIAL_LINKS = [
  { label: "Twitter", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Discord", href: "#" },
];

// ─── Hero ──────────────────────────────────────────────────────────────────

export const HERO = {
  badge: "Full Stack AI Agent Platform",
  headline: "Ship the",
  headspan: "agent.",
  headlineSub: "Skip the plumbing.",
  body: "Why are you still stitching together chat UI, retries, multiplexing, notification pipelines, and analytics? CometChat gives you the extra frontend + infra layer. Simple. Scalable. Production-ready.",
  trustNote: "500+",
  primaryCta: { label: "Schedule a Demo", href: "/demo" },
  secondaryCta: { label: "Try the Agent Builder", href: "/signup" },
};

export const HERO_CHAT_MESSAGES = [
  { role: "agent", text: "How can I help?" },
  { role: "user", text: "Book a meeting with Sarah tomorrow at 3pm" },
  {
    role: "agent",
    text: "Done! Meeting scheduled for tomorrow at 3 PM with Sarah. ✓",
  },
];

// ─── Customer Logos ────────────────────────────────────────────────────────

export const CUSTOMER_LOGOS = [
  "FALEON",
  "Kahoot!",
  "stulla.com",
  "endeavor",
  "NOOM",
];

// ─── Features ──────────────────────────────────────────────────────────────

export const FEATURES = [
  {
    icon: "chat",
    title: "Instant capabilities",
    desc: "Drop-in UI for chat, voice, video, and agents — built and battle-tested.",
  },
  {
    icon: "brain",
    title: "Your AI, your logic",
    desc: "Plug in any LLM or agent brain. We wire the plumbing so you own the intelligence.",
  },
  {
    icon: "chart",
    title: "Real-time insights",
    desc: "Understand agent performance, user sentiment, and conversation quality at scale.",
  },
  {
    icon: "shield",
    title: "Trusted in production",
    desc: "Each of these is battle-tested, used and trusted in production by real companies, across real user scenarios.",
  },
];

export const ALREADY_DONE_ITEMS = [
  "A complete frontend and system layer for AI agents",
  "Plug in your LLM backend or build the brain with ours",
  "CometChat is the only full-stack agent platform that combines real-time data and LLM features with deeper agent insights — without glue code",
  "Each of these is battle-tested, used and trusted in production by real companies, across real user scenarios",
];

// ─── Platform Overview ─────────────────────────────────────────────────────

export const PLATFORM_POINTS = [
  "The AI layer is purpose-built for LLM-native agents. Our UX chat layer is prepared for new agents that start and continue human-agent interaction.",
  "No mandatory pipelines with Semantic + many custom loggers",
  "Contextually-loaded, multi-modal and context-driven triggers",
  "Real time event detection, retry, context and function triggers.",
  "Multi-channel capable: rich, native and style agnostic, with custom notifications + preferences settings.",
  "Watch real-time data and UX LLM that reinforces UX layer behavior, and makes your agent flow",
];

export const PLATFORM_UI_TABS = [
  { label: "Chat UI", colorClass: "bg-brand-purple" },
  { label: "Voice", colorClass: "bg-violet-500" },
  { label: "Notifications", colorClass: "bg-indigo-500" },
  { label: "Analytics", colorClass: "bg-purple-600" },
];

export const PLATFORM_CHAT_MESSAGES = [
  { role: "agent", text: "How can I help?" },
  { role: "user", text: "Show me this week's sales report" },
  { role: "agent", text: "Here's your weekly summary: Revenue up 14% 📈" },
];

export const PLATFORM_INFRA_PILLS = [
  "Message routing",
  "Retry logic",
  "Context store",
  "Function calls",
];

// ─── Product Showcase (Notifications) ─────────────────────────────────────

export const NOTIFICATION_CHANNELS = [
  { name: "Twilio", icon: "📱" },
  { name: "Slack", icon: "💬" },
  { name: "Email", icon: "📧" },
  { name: "Webhooks", icon: "🔗" },
];

export const NOTIFICATION_BAR_HEIGHTS = [
  30, 50, 40, 70, 55, 80, 65, 90, 75, 100, 85, 95,
];

export const NOTIFICATION_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const NOTIFICATION_FEATURES = [
  "More agents use per quota and tracking across all channels.",
  "CometChat is the only full-stack platform that combines LLM-native and real-time data features.",
  "Integrates with SendGrid, Twilio, or your current system.",
  "Understand frequency, retry logic, user engagement.",
  "Notifications push at growth. Track by UX or pull from any system.",
];

// ─── Integrations / Analytics ──────────────────────────────────────────────

export const SHIPPING_POINTS = [
  "From day one, you get built-in visibility into how your agent is doing and how people are responding.",
  "Full message delivery, parsed and ranking stats",
  "Manage conversations, prompt quality and campaign engagement",
  "Automate retries, prompts and custom user engagement",
  "Pluggable webhooks, and telemetry hooks",
  "Exportable, filterable, and privacy respecting.",
];

export const ANALYTICS_STATS = [
  { label: "Messages", value: "124K", change: "+18%" },
  { label: "Sessions", value: "8.4K", change: "+11%" },
  { label: "Resolution", value: "91%", change: "+4%" },
  { label: "Satisfaction", value: "4.8/5", change: "+0.3" },
];

export const INTEGRATIONS = [
  { name: "OpenAI", category: "LLM" },
  { name: "Anthropic", category: "LLM" },
  { name: "Gemini", category: "LLM" },
  { name: "Twilio", category: "Notifications" },
  { name: "SendGrid", category: "Email" },
  { name: "Slack", category: "Messaging" },
  { name: "Segment", category: "Analytics" },
  { name: "Mixpanel", category: "Analytics" },
  { name: "AWS", category: "Cloud" },
  { name: "Stripe", category: "Payments" },
  { name: "Zapier", category: "Automation" },
  { name: "HubSpot", category: "CRM" },
];

// ─── Insights (BYOB / Build Inside) ───────────────────────────────────────

export const INTEGRATION_PATHS = [
  {
    icon: "hexagon",
    title: "BYOB — Bring Your Own (Agent) Brain",
    items: [
      "Plug into CometChat's full UI, chat infrastructure, and analytics",
      "Maintain your full LLM and agent logic responsibility, and brain control",
    ],
  },
  {
    icon: "plus-box",
    title: "Build Inside CometChat",
    items: [
      "Integrated Agent Builder, memory, tools, and RAG",
      "One setup, one drop — all from a single platform",
    ],
  },
];

// ─── Developer Tools ───────────────────────────────────────────────────────

export const DEV_TOOLS = [
  {
    icon: "file-code",
    title: "Chat Builder",
    desc: "The fastest way to get into production. A low-code builder that you can use with your agent base.",
    link: { label: "Try Builder →", href: "#" },
  },
  {
    icon: "layers",
    title: "UI Kits",
    desc: "Prebuilt React, iOS, Android components with LLM-native functionality built-in.",
    link: { label: "View UI Kit →", href: "#" },
  },
  {
    icon: "code",
    title: "SDKs & APIs",
    desc: "Deep access to every layer. Build completely custom experiences with full control.",
    link: { label: "View Docs →", href: "#" },
  },
];

export const CODE_SNIPPET = `import { CometChat } from '@cometchat/chat-sdk';

const agent = await CometChat.createAgent({
  model: 'gpt-4o',
  notifications: true,
  analytics: true,
  channels: ['web', 'mobile', 'slack'],
});

// Agent is live. Ship it. 🚀`;

// ─── CTA ───────────────────────────────────────────────────────────────────

export const CTA_TRUST_SIGNALS = [
  "No credit card required",
  "Free tier forever",
  "Production-ready in minutes",
];

// ─── Footer ────────────────────────────────────────────────────────────────

export const FOOTER_LINKS = {
  Product: [
    "Chat UI Kit",
    "Agent Builder",
    "Notifications",
    "Analytics",
    "Voice & Video",
    "Real-time DB",
  ],
  Solutions: [
    "Customer Support",
    "Health Apps",
    "Education",
    "E-commerce",
    "Enterprise",
    "Startups",
  ],
  Developers: [
    "Documentation",
    "API Reference",
    "SDK Downloads",
    "Changelog",
    "Status",
    "Community",
  ],
  Company: ["About", "Blog", "Careers", "Press", "Partners", "Contact"],
};

export const LEGAL_LINKS = [
  "Privacy Policy",
  "Terms of Service",
  "Cookie Policy",
  "GDPR",
];
