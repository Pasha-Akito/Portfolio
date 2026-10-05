export type Project = {
  name: string;
  eyebrow: string;
  description: string;
  href: string;
  tags: string[];
  visual: "quartertrace" | "arla" | "bongard" | "blackjack" | "aia";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Quartertrace",
    eyebrow: "First SaaS product · Private repository",
    description:
      "An API for AI agents to query source-linked, SEC-derived quarterly financials by ticker and calendar quarter, with OpenAPI 3.1 and x402 payments on Base.",
    href: "https://www.quartertrace.com",
    tags: ["Agentic SaaS", "OpenAPI 3.1", "x402 · Base"],
    visual: "quartertrace",
    featured: true,
  },
  {
    name: "Arla",
    eyebrow: "Full-stack alumni network",
    description:
      "A social platform built for ATU alumni, with profiles, posts, friend feeds, communities, and course-based discovery.",
    href: "https://github.com/Pasha-Akito/Arla-Frontend",
    tags: ["React", "GraphQL", "Neo4j", "Auth0"],
    visual: "arla",
  },
  {
    name: "Bongard Problem Generator",
    eyebrow: "Master’s thesis",
    description:
      "A text-to-image transformer for exploring concept learning through generated Bongard Problem pairs.",
    href: "https://github.com/Pasha-Akito/Bongard-Problem-Image-Generator",
    tags: ["Python", "Deep Learning", "Research"],
    visual: "bongard",
  },
  {
    name: "aia",
    eyebrow: "Harness engineering",
    description:
      "A focused terminal assistant that makes local Ollama models easy to discover, run, unload, and manage.",
    href: "https://github.com/Pasha-Akito/aia",
    tags: ["Python", "Ollama", "AI Tooling"],
    visual: "aia",
  },
  {
    name: "Blackjack in C",
    eyebrow: "Where it started",
    description:
      "A tough first-year assignment that pushed the limits of my knowledge, accompanied by a detailed YouTube video with just under 3,000 views.",
    href: "https://github.com/Pasha-Akito/BlackJack-C",
    tags: ["C", "Game Logic", "YouTube"],
    visual: "blackjack",
  },
];
