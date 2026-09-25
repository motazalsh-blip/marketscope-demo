import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About MarketScope",
  description:
    "Learn about MarketScope, a demo market-intelligence brand, our editorial principles and the technology behind this portfolio website.",
  path: "/about",
});

const values = [
  { title: "Show the working", text: "Every number we publish comes with its inputs and assumptions, so readers can check and adapt it." },
  { title: "Practical over theoretical", text: "We write for operators who need to make a decision this week, not for a textbook." },
  { title: "Independent", text: "Editorial content is kept separate from advertising. Ads are always clearly labelled." },
];

const stack = [
  ["Framework", "Next.js (App Router) with static generation"],
  ["Language", "TypeScript, strict mode"],
  ["Styling", "Tailwind CSS"],
  ["SEO", "Metadata API, canonical URLs, Open Graph images, JSON-LD, sitemap & robots"],
  ["Monetisation", "AdSense-ready ad component, environment-based configuration, ads.txt route"],
  ["Data", "Typed content files — no database required"],
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Helping teams make better market decisions"
        description="MarketScope is a fictional brand created for a portfolio project. The site demonstrates how a modern SaaS company might run its marketing website and content hub."
        crumbs={[{ href: "/", label: "Home" }, { label: "About" }]}
      />

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div className="prose-content">
            <h2 className="!mt-0">Our story (sample)</h2>
            <p>
              Strategy and finance teams spend too much time assembling market data by hand — exporting spreadsheets,
              copying numbers from reports and rebuilding the same models every quarter. MarketScope imagines a single
              workspace where that research becomes repeatable and shareable.
            </p>
            <p>
              Alongside the product, our <Link href="/blog">Insights blog</Link> publishes practical guides on market
              sizing, unit economics and pricing, written for operators rather than academics.
            </p>
          </div>
          <ul className="grid gap-4">
            {values.map((v) => (
              <li key={v.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-semibold text-navy-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="container-page">
          <h2 className="text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl">How this demo is built</h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            The technical choices behind this website, which is built as a portfolio example.
          </p>
          <dl className="mt-8 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            {stack.map(([k, v]) => (
              <div key={k} className="grid gap-1 px-6 py-4 sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-semibold text-navy-900">{k}</dt>
                <dd className="text-sm text-slate-600 sm:col-span-2">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
