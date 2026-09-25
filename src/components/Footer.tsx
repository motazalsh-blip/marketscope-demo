import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Logo } from "./Logo";

const columns = [
  {
    title: "Product",
    links: [
      { href: "/#features", label: "Features" },
      { href: "/#how-it-works", label: "How it works" },
      { href: "/contact", label: "Request a demo" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/blog", label: "Insights blog" },
      { href: "/blog/tam-sam-som-market-sizing-guide", label: "Market sizing guide" },
      { href: "/blog/saas-unit-economics-cac-ltv", label: "Unit economics" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      ...siteConfig.legalNav,
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-navy-950 text-slate-300">
      <div className="container-page grid gap-10 py-14 md:grid-cols-5">
        <div className="md:col-span-2">
          <Logo inverted />
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">{siteConfig.description}</p>
          <p className="mt-4 inline-flex rounded-md border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-xs font-medium text-amber-300">
            Portfolio demo · fictional brand &amp; sample content
          </p>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="text-sm font-semibold text-white">{col.title}</h2>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.href + l.label}>
                  <Link href={l.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.name} (demo). All rights reserved.</p>
          <p>Content is for educational purposes only and is not financial advice.</p>
        </div>
      </div>
    </footer>
  );
}
