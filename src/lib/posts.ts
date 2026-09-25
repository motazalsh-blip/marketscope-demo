/**
 * Demo blog content. Stored as typed data (no database needed).
 * All articles are SAMPLE CONTENT written for a portfolio demonstration.
 * Figures are illustrative and must not be treated as financial advice.
 */

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title: string; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "table"; headers: string[]; rows: string[][]; caption?: string };

export type Post = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: "Market Research" | "Unit Economics" | "Pricing";
  tags: string[];
  author: string;
  authorRole: string;
  publishedAt: string; // ISO date
  updatedAt: string; // ISO date
  readingMinutes: number;
  content: ContentBlock[];
};

export const posts: Post[] = [
  {
    slug: "tam-sam-som-market-sizing-guide",
    title: "TAM, SAM and SOM: A Practical Guide to Sizing Your Market",
    description:
      "Learn how to calculate TAM, SAM and SOM with top-down and bottom-up methods, avoid common sizing mistakes and present credible numbers to investors.",
    excerpt:
      "Most market-size slides are either wildly optimistic or impossible to verify. Here is a repeatable, bottom-up method you can defend in any board meeting.",
    category: "Market Research",
    tags: ["market sizing", "TAM", "go-to-market", "fundraising"],
    author: "Lina Farouk",
    authorRole: "Market Analyst (sample author)",
    publishedAt: "2026-08-04",
    updatedAt: "2026-09-10",
    readingMinutes: 7,
    content: [
      {
        type: "p",
        text: "Every pitch deck has a market-size slide, and most of them share the same weakness: a huge number pulled from an analyst report, with no clear link to the product being sold. Investors have seen thousands of these slides. What earns credibility is not a bigger number, but a number you can explain line by line.",
      },
      { type: "h2", id: "definitions", text: "The three layers, in plain language" },
      {
        type: "ul",
        items: [
          "TAM (Total Addressable Market): total annual revenue if every possible customer bought your product category.",
          "SAM (Serviceable Available Market): the part of TAM your product and business model can actually serve today — the right segment, geography and channel.",
          "SOM (Serviceable Obtainable Market): the share of SAM you can realistically win in the next 3–5 years given competition and sales capacity.",
        ],
      },
      {
        type: "callout",
        title: "Rule of thumb",
        text: "If your SOM is more than 5–10% of SAM within three years, be ready to justify it with a clear distribution advantage.",
      },
      { type: "h2", id: "top-down-vs-bottom-up", text: "Top-down vs. bottom-up sizing" },
      {
        type: "p",
        text: "A top-down estimate starts from a published industry figure and narrows it with percentages. It is fast, but every percentage is an assumption that is hard to verify. A bottom-up estimate starts from the unit you sell — a seat, a location, a transaction — and multiplies by the number of buyers and the price they pay.",
      },
      {
        type: "table",
        caption: "Illustrative bottom-up calculation for a B2B analytics tool (sample numbers)",
        headers: ["Input", "Value", "Source / assumption"],
        rows: [
          ["Target companies (50–500 staff) in region", "42,000", "Business registry export"],
          ["Share with a dedicated analytics team", "35%", "Customer interviews (n = 40)"],
          ["Average seats per account", "6", "Pilot customers"],
          ["Price per seat per year", "$480", "Current price list"],
          ["SAM", "≈ $42.3M", "42,000 × 35% × 6 × $480"],
        ],
      },
      { type: "h2", id: "step-by-step", text: "A step-by-step bottom-up method" },
      {
        type: "ol",
        items: [
          "Define the buying unit precisely (company, team, location or user).",
          "Count buying units in your reachable segment using registries, directories or platform data.",
          "Apply qualifying filters you can evidence — tools used, team size, budget ownership.",
          "Multiply by realistic annual contract value from your current pricing, not a future plan.",
          "Model SOM as a pipeline: leads per month × conversion rate × months, capped by sales capacity.",
        ],
      },
      { type: "h2", id: "mistakes", text: "Common mistakes to avoid" },
      {
        type: "ul",
        items: [
          "Using global TAM for a product that only sells in one country or language.",
          "Mixing one-time and recurring revenue in the same figure.",
          "Treating SOM as a percentage of TAM instead of an output of your go-to-market plan.",
          "Citing a report without the year, scope and definition it used.",
        ],
      },
      {
        type: "quote",
        text: "A smaller number with visible logic beats a bigger number with none.",
        cite: "Common investor feedback",
      },
      { type: "h2", id: "takeaway", text: "Key takeaway" },
      {
        type: "p",
        text: "Treat market sizing as a model, not a slide. Keep every input in a spreadsheet with its source, update it when you learn something from customers, and present the bottom-up figure first. The top-down number becomes a sanity check rather than the headline.",
      },
    ],
  },
  {
    slug: "saas-unit-economics-cac-ltv",
    title: "SaaS Unit Economics: CAC, LTV and the Payback Period Explained",
    description:
      "A clear explanation of customer acquisition cost, lifetime value and CAC payback for SaaS businesses, with worked examples and healthy benchmark ranges.",
    excerpt:
      "Growth is only good if each new customer eventually pays for itself. These three metrics tell you whether yours do — and how fast.",
    category: "Unit Economics",
    tags: ["SaaS metrics", "CAC", "LTV", "payback period"],
    author: "Omar Haddad",
    authorRole: "Finance Lead (sample author)",
    publishedAt: "2026-08-21",
    updatedAt: "2026-08-21",
    readingMinutes: 6,
    content: [
      {
        type: "p",
        text: "Unit economics answer a simple question: when you win one more customer, do you make or lose money over the life of that relationship? For subscription businesses, three metrics carry most of the answer — CAC, LTV and CAC payback.",
      },
      { type: "h2", id: "cac", text: "Customer Acquisition Cost (CAC)" },
      {
        type: "p",
        text: "CAC is the total sales and marketing spend in a period divided by the number of new customers acquired in that period. Include salaries, tools, ad spend and agency fees. Excluding people costs is the most common way CAC gets understated.",
      },
      {
        type: "callout",
        title: "Formula",
        text: "CAC = (Sales + Marketing spend in period) ÷ New customers in period",
      },
      { type: "h2", id: "ltv", text: "Customer Lifetime Value (LTV)" },
      {
        type: "p",
        text: "LTV estimates the gross profit a customer generates before they churn. Use gross margin, not revenue — a customer who pays $100 a month but costs $40 to serve is worth $60 a month to the business.",
      },
      {
        type: "callout",
        title: "Formula",
        text: "LTV = (ARPA × Gross margin %) ÷ Monthly churn rate",
      },
      { type: "h2", id: "worked-example", text: "A worked example" },
      {
        type: "table",
        caption: "Sample SaaS company, monthly figures (illustrative only)",
        headers: ["Metric", "Value"],
        rows: [
          ["Average revenue per account (ARPA)", "$250 / month"],
          ["Gross margin", "80%"],
          ["Monthly logo churn", "2%"],
          ["Sales & marketing spend", "$90,000 / month"],
          ["New customers", "60 / month"],
          ["CAC", "$1,500"],
          ["LTV", "$10,000"],
          ["LTV : CAC", "6.7 : 1"],
          ["CAC payback", "7.5 months"],
        ],
      },
      { type: "h2", id: "payback", text: "CAC payback period" },
      {
        type: "p",
        text: "Payback measures how many months of gross profit it takes to recover the cost of acquiring a customer: CAC ÷ (ARPA × gross margin). It matters more than LTV for cash planning, because LTV depends on churn assumptions that may take years to prove.",
      },
      { type: "h2", id: "benchmarks", text: "Healthy ranges (general guidance)" },
      {
        type: "ul",
        items: [
          "LTV : CAC of 3 : 1 or better is widely considered healthy.",
          "CAC payback under 12 months for SMB products; up to 18–24 months can be acceptable in enterprise.",
          "Gross margin of 70–85% is typical for software-only products.",
        ],
      },
      {
        type: "p",
        text: "Benchmarks vary by segment, stage and sales motion. Use them as a starting point for discussion, and track your own trend month over month — the direction of travel matters more than a single snapshot.",
      },
    ],
  },
  {
    slug: "b2b-pricing-strategy-value-based",
    title: "Value-Based Pricing for B2B Products: A Framework That Works",
    description:
      "Move beyond cost-plus and competitor pricing. A five-step value-based pricing framework for B2B and SaaS teams, including tier design and price testing.",
    excerpt:
      "Pricing is the fastest lever on revenue, yet most teams set it once and forget it. A structured value-based approach changes that.",
    category: "Pricing",
    tags: ["pricing", "B2B", "packaging", "SaaS"],
    author: "Sara Mansour",
    authorRole: "Product Strategist (sample author)",
    publishedAt: "2026-09-12",
    updatedAt: "2026-09-12",
    readingMinutes: 8,
    content: [
      {
        type: "p",
        text: "Many B2B companies price by adding a margin to cost or by copying the nearest competitor. Both approaches ignore the most important input: how much measurable value the product creates for the customer. Value-based pricing starts there and works backward.",
      },
      { type: "h2", id: "why-value", text: "Why value-based pricing" },
      {
        type: "ul",
        items: [
          "It links price to outcomes customers already measure — hours saved, revenue gained, risk reduced.",
          "It makes sales conversations about ROI instead of discounts.",
          "It creates natural room for tiered packaging as customers grow.",
        ],
      },
      { type: "h2", id: "framework", text: "A five-step framework" },
      { type: "h3", text: "1. Identify the value driver" },
      {
        type: "p",
        text: "Interview 10–20 customers and ask what changed after adopting the product. Look for one metric that moves consistently, such as reporting time or conversion rate.",
      },
      { type: "h3", text: "2. Quantify the economic value" },
      {
        type: "p",
        text: "Translate the driver into money. If the product saves an analyst eight hours a week at a loaded cost of $50 an hour, that is roughly $20,000 of value per analyst per year.",
      },
      { type: "h3", text: "3. Choose a value metric" },
      {
        type: "p",
        text: "The value metric is the unit you charge for — seats, reports, tracked companies, API calls. The best metric grows as the customer gets more value and is easy for the buyer to predict.",
      },
      { type: "h3", text: "4. Capture a fair share" },
      {
        type: "p",
        text: "Customers need a clear return. Pricing at 10–25% of the quantified value is a common starting range, leaving the buyer with an obvious ROI.",
      },
      { type: "h3", text: "5. Test and iterate" },
      {
        type: "p",
        text: "Run pricing changes on new customers first, compare win rates and deal sizes by cohort, and revisit pricing at least once a year.",
      },
      { type: "h2", id: "tiers", text: "Designing good–better–best tiers" },
      {
        type: "table",
        caption: "Example tier structure for a market-intelligence product (sample)",
        headers: ["Tier", "Who it is for", "Value metric", "Sample price"],
        rows: [
          ["Starter", "Founders and solo analysts", "Up to 5 tracked markets", "$49 / month"],
          ["Growth", "Product & strategy teams", "Up to 25 tracked markets", "$199 / month"],
          ["Enterprise", "Multi-team organisations", "Unlimited + API access", "Custom"],
        ],
      },
      {
        type: "callout",
        title: "Tip",
        text: "Put your most popular plan in the middle and make the step up to it feel like the obvious choice. Most buyers anchor on the middle option.",
      },
      { type: "h2", id: "takeaway", text: "Key takeaway" },
      {
        type: "p",
        text: "Value-based pricing is not a one-time project. Treat price as a product feature: research it, ship changes deliberately, measure the outcome and keep improving.",
      },
    ],
  },
];

export function getAllPosts(): Post[] {
  return [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 2): Post[] {
  return getAllPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, limit);
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
