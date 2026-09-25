import Link from "next/link";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/ads/AdSlot";
import { ArticleBody } from "@/components/ArticleBody";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/PageHeader";
import { CategoryBadge, PostCard } from "@/components/PostCard";
import { formatDate, getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/posts";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl, siteConfig } from "@/lib/site";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
    authors: [post.author],
    tags: post.tags,
  });
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = absoluteUrl(`/blog/${post.slug}`);
  const toc = post.content.filter((b) => b.type === "h2");
  const related = getRelatedPosts(post.slug, 2);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BlogPosting",
              headline: post.title,
              description: post.description,
              image: `${url}/opengraph-image`,
              datePublished: post.publishedAt,
              dateModified: post.updatedAt,
              author: { "@type": "Person", name: post.author },
              publisher: { "@type": "Organization", name: siteConfig.name, logo: absoluteUrl("/icon.svg") },
              mainEntityOfPage: url,
              keywords: post.tags.join(", "),
              articleSection: post.category,
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
                { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
                { "@type": "ListItem", position: 3, name: post.title, item: url },
              ],
            },
          ],
        }}
      />

      <article>
        <header className="relative overflow-hidden bg-navy-950 text-white">
          <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-60" />
          <div className="container-page relative max-w-4xl py-14 sm:py-20">
            <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/blog", label: "Blog" }, { label: post.category }]} />
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-400">
              <CategoryBadge category={post.category} />
              <span>{post.readingMinutes} min read</span>
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">{post.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{post.description}</p>
            <div className="mt-8 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-sm font-semibold text-navy-950"
              >
                {post.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
              <div className="text-sm">
                <p className="font-medium text-white">{post.author}</p>
                <p className="text-slate-400">
                  {post.authorRole} · <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                  {post.updatedAt !== post.publishedAt && (
                    <>
                      {" "}
                      · Updated <time dateTime={post.updatedAt}>{formatDate(post.updatedAt)}</time>
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </header>

        <div className="container-page grid gap-12 py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="min-w-0 max-w-3xl">
            <p
              role="note"
              className="mb-10 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-900"
            >
              <strong>Sample content:</strong> this article was written for a portfolio demo. Figures are illustrative
              and this is not financial or investment advice.
            </p>

            <ArticleBody blocks={post.content} insert={<AdSlot placement="articleInline" />} />

            <footer className="mt-12 border-t border-slate-200 pt-6">
              <h2 className="sr-only">Tags</h2>
              <ul className="flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <li key={t} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    #{t}
                  </li>
                ))}
              </ul>
            </footer>
          </div>

          <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
            <nav aria-label="Table of contents" className="rounded-2xl border border-slate-200 p-5">
              <h2 className="text-sm font-semibold text-navy-900">On this page</h2>
              <ol className="mt-3 space-y-2 text-sm">
                {toc.map((h) =>
                  h.type === "h2" ? (
                    <li key={h.id}>
                      <a href={`#${h.id}`} className="text-slate-600 hover:text-emerald-700">
                        {h.text}
                      </a>
                    </li>
                  ) : null,
                )}
              </ol>
            </nav>
            <AdSlot placement="articleSidebar" shape="rectangle" />
          </aside>
        </div>
      </article>

      {related.length > 0 && (
        <section aria-labelledby="related-heading" className="border-t border-slate-200 bg-slate-50 py-16">
          <div className="container-page">
            <div className="flex items-end justify-between gap-4">
              <h2 id="related-heading" className="text-2xl font-semibold tracking-tight text-navy-900">
                Keep reading
              </h2>
              <Link href="/blog" className="text-sm font-semibold text-emerald-700 hover:text-emerald-600">
                All articles →
              </Link>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
