import Link from "next/link";
import { AdSlot } from "@/components/ads/AdSlot";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { CategoryBadge, PostCard, PostCover } from "@/components/PostCard";
import { formatDate, getAllPosts } from "@/lib/posts";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Insights Blog — Market Sizing, SaaS Metrics & Pricing",
  description:
    "Practical guides on market sizing, SaaS unit economics and B2B pricing strategy from the MarketScope editorial team (sample content).",
  path: "/blog",
});

export default function BlogIndexPage() {
  const [featured, ...rest] = getAllPosts();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: `${siteConfig.name} Insights`,
          url: absoluteUrl("/blog"),
          blogPost: getAllPosts().map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            url: absoluteUrl(`/blog/${p.slug}`),
            datePublished: p.publishedAt,
          })),
        }}
      />

      <PageHeader
        eyebrow="Insights"
        title="Research-backed guides for growth teams"
        description="Practical, no-fluff articles on market sizing, unit economics and pricing. All posts on this demo site are sample content."
        crumbs={[{ href: "/", label: "Home" }, { label: "Blog" }]}
      />

      <section className="py-14 sm:py-20">
        <div className="container-page">
          {/* Featured post */}
          <article className="relative grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:grid-cols-2">
            <PostCover post={featured} className="h-52 lg:h-full lg:min-h-72" />
            <div className="p-6 sm:p-10">
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                <span className="font-semibold uppercase tracking-[0.14em] text-emerald-600">Featured</span>
                <CategoryBadge category={featured.category} />
                <span>{featured.readingMinutes} min read</span>
              </div>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl">
                <Link href={`/blog/${featured.slug}`} className="after:absolute after:inset-0 hover:text-navy-700">
                  {featured.title}
                </Link>
              </h2>
              <p className="mt-4 leading-7 text-slate-600">{featured.excerpt}</p>
              <p className="mt-6 text-sm text-slate-500">
                {featured.author} · <time dateTime={featured.publishedAt}>{formatDate(featured.publishedAt)}</time>
              </p>
            </div>
          </article>

          <div className="my-12">
            <AdSlot placement="blogIndex" />
          </div>

          <h2 className="text-xl font-semibold text-navy-900">All articles</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
