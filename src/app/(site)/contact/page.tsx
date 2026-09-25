import { ContactForm } from "@/components/ContactForm";
import { PageHeader } from "@/components/PageHeader";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact Us",
  description: "Get in touch with the MarketScope team to request a product demo, pitch an article or discuss a partnership.",
  path: "/contact",
});

const channels = [
  { label: "Email", value: siteConfig.email, note: "Placeholder address (.example domain)" },
  { label: "Response time", value: "Within 1–2 business days", note: "Sample service level" },
  { label: "Office", value: "Remote-first team", note: "Fictional company" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s talk about your market"
        description="Request a walkthrough, suggest a topic for the blog or ask about partnerships."
        crumbs={[{ href: "/", label: "Home" }, { label: "Contact" }]}
      />
      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-3">
          <address className="not-italic lg:order-2">
            <ul className="space-y-4">
              {channels.map((c) => (
                <li key={c.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{c.label}</p>
                  <p className="mt-1 font-medium break-words text-navy-900">{c.value}</p>
                  <p className="mt-1 text-xs text-slate-500">{c.note}</p>
                </li>
              ))}
            </ul>
          </address>
          <div className="lg:order-1 lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
