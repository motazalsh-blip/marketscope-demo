import Link from "next/link";
import { AdSlot } from "@/components/ads/AdSlot";
import { JsonLd } from "@/components/JsonLd";
import { PostCard } from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: `${siteConfig.name} — Market Intelligence for SaaS & B2B Teams`,
  description:
    "Size markets, benchmark unit economics and price with confidence. MarketScope turns scattered market data into clear, decision-ready insights.",
  path: "/",
  absoluteTitle: true,
});

const stats = [
  { value: "1,200+", label: "Market segments tracked" },
  { value: "38", label: "Countries covered" },
  { value: "4.2h", label: "Saved per analyst weekly" },
  { value: "99.9%", label: "Platform uptime" },
];

const features = [
  {
    title: "Market sizing models",
    text: "Build bottom-up TAM, SAM and SOM models with sourced inputs you can defend in any board meeting.",
    icon: "M4 19h16M6 15l4-5 4 3 5-7",
  },
  {
    title: "Competitor tracking",
    text: "Monitor pricing pages, product launches and hiring signals across your competitive set automatically.",
    icon: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm9 16-4.3-4.3",
  },
  {
    title: "Unit economics benchmarks",
    text: "Compare CAC, LTV, payback and churn against anonymised peers in your segment and stage.",
    icon: "M5 20V10m7 10V4m7 16v-7",
  },
  {
    title: "Pricing intelligence",
    text: "See how the market packages and prices similar products, and test tiers before you ship them.",
    icon: "M4 7h16M4 12h10M4 17h6",
  },
  {
    title: "Shareable reports",
    text: "Turn any analysis into a clean, branded report or slide in one click — no more copy-pasting charts.",
    icon: "M7 4h7l5 5v11H7zM14 4v5h5",
  },
  {
    title: "Secure by design",
    text: "SSO, role-based access and encryption at rest keep strategic data inside the right teams.",
    icon: "M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z",
  },
];

const steps = [
  { n: "01", title: "Connect your sources", text: "Import CRM exports, spreadsheets and public datasets in minutes." },
  { n: "02", title: "Define your market", text: "Pick segments, regions and buyer profiles with guided templates." },
  { n: "03", title: "Share the insight", text: "Publish dashboards and reports your leadership team will actually read." },
];

const faqs = [
  {
    q: "Is MarketScope a real product?",
    a: "No. MarketScope is a fictional brand built as a portfolio demo of a Next.js marketing site with a blog, SEO setup and AdSense-ready ad slots.",
  },
  {
    q: "Where does the blog content come from?",
    a: "All articles are sample content written for demonstration. Figures are illustrative and should not be treated as financial advice.",
  },
  {
    q: "Are the ads live?",
    a: "No. Ad areas are placeholders. They switch to real Google AdSense units only after a publisher ID is configured for an approved site.",
  },
];

function Icon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

function DashboardPreview() {
  const bars = [38, 52, 45, 64, 58, 76, 70, 88];
  return (
    <figure className="relative rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/40 backdrop-blur sm:p-6">
      <figcaption className="sr-only">Illustrative dashboard preview with sample data</figcaption>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-slate-400">Serviceable market (SAM)</p>
          <p className="mt-1 text-2xl font-semibold text-white">$42.3M</p>
        </div>
        <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-xs font-medium text-emerald-300">+18.4% YoY</span>
      </div>
      <div className="mt-6 flex h-36 items-end gap-2 sm:h-44">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-emerald-500/40 to-emerald-400" style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="mt-2 flex justify-between text-[10px] text-slate-500">
        <span>Q1 &apos;25</span>
        <span>Q4 &apos;26</span>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-3">
        {[
          ["LTV:CAC", "6.7x"],
          ["Payback", "7.5 mo"],
          ["Churn", "2.0%"],
        ].map(([k, v]) => (
          <div key={k} className="rounded-lg border border-white/10 bg-navy-950/60 p-3">
            <p className="text-[11px] text-slate-400">{k}</p>
            <p className="mt-1 text-sm font-semibold text-white">{v}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-[11px] text-slate-500">Sample data for illustration</p>
    </figure>
  );
}

export default function HomePage() {
  const latest = getAllPosts().slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": absoluteUrl("/#organization"),
              name: siteConfig.name,
              url: siteConfig.url,
              logo: absoluteUrl("/icon.svg"),
            },
            {
              "@type": "WebSite",
              "@id": absoluteUrl("/#website"),
              url: siteConfig.url,
              name: siteConfig.name,
              description: siteConfig.description,
              publisher: { "@id": absoluteUrl("/#organization") },
            },
          ],
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div aria-hidden="true" className="bg-grid absolute inset-0" />
        <div aria-hidden="true" className="absolute -top-32 left-1/2 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="container-page relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              New: Pricing intelligence module
            </p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Market intelligence for teams that <span className="text-emerald-400">ship</span>.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              Size markets, benchmark unit economics and price with confidence. MarketScope turns scattered data into
              clear, decision-ready insight for SaaS and B2B teams.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary px-6 py-3 text-base">
                Request a demo
              </Link>
              <Link href="/blog" className="btn-ghost-dark px-6 py-3 text-base">
                Read the insights
              </Link>
            </div>
            <p className="mt-6 text-xs text-slate-500">Fictional brand · portfolio demonstration</p>
          </div>
          <DashboardPreview />
        </div>
      </section>

      {/* Stats */}
      <section aria-label="Key figures" className="border-b border-slate-200 bg-white">
        <dl className="container-page grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <dt className="text-sm text-slate-500">{s.label}</dt>
              <dd className="mt-1 text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-20 bg-slate-50 py-20 sm:py-24">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-600">Platform</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
              Everything you need to understand your market
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              One workspace for research, finance and product teams — from the first market-size estimate to the
              pricing page.
            </p>
          </div>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <li key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-navy-900 text-emerald-400">
                  <Icon d={f.icon} />
                </span>
                <h3 className="mt-5 text-base font-semibold text-navy-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{f.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-20 py-20 sm:py-24">
        <div className="container-page">
          <h2 className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">From raw data to decision in three steps</h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n} className="relative border-t-2 border-emerald-500 pt-6">
                <span className="font-mono text-sm text-emerald-600">{s.n}</span>
                <h3 className="mt-2 text-lg font-semibold text-navy-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Ad placement — public content page */}
      <div className="container-page pb-4">
        <AdSlot placement="homeInline" />
      </div>

      {/* Latest articles */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-600">Insights</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">Latest from the blog</h2>
            </div>
            <Link href="/blog" className="text-sm font-semibold text-emerald-700 hover:text-emerald-600">
              View all articles →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latest.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-3">
          <h2 className="text-3xl font-semibold tracking-tight text-navy-900">Frequently asked questions</h2>
          <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white lg:col-span-2">
            {faqs.map((f) => (
              <details key={f.q} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-navy-900">
                  {f.q}
                  <span aria-hidden="true" className="text-slate-400 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-6 py-14 text-center sm:px-12">
            <div aria-hidden="true" className="bg-grid absolute inset-0" />
            <div className="relative">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">See your market clearly.</h2>
              <p className="mx-auto mt-4 max-w-xl text-slate-300">
                Book a 20-minute walkthrough and we will size one of your target segments live.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/contact" className="btn-primary px-6 py-3">Request a demo</Link>
                <Link href="/about" className="btn-ghost-dark px-6 py-3">Learn about us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
