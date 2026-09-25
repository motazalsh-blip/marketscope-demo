/**
 * Central site configuration.
 * Set NEXT_PUBLIC_SITE_URL in production so canonical URLs, the sitemap,
 * robots.txt and Open Graph tags all point to the real domain.
 */
const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://marketscope-demo.vercel.app";

export const siteConfig = {
  name: "MarketScope",
  shortName: "MarketScope",
  tagline: "Market intelligence for teams that ship.",
  description:
    "MarketScope is a demo market-intelligence platform and publication: practical guides on market sizing, unit economics and pricing for SaaS and B2B teams.",
  url: rawUrl.replace(/\/$/, ""),
  locale: "en_US",
  twitter: "@marketscope_demo",
  email: "hello@marketscope.example",
  author: {
    name: "MarketScope Editorial (Demo)",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Insights" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  legalNav: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Use" },
  ],
} as const;

export function absoluteUrl(path = "/"): string {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
