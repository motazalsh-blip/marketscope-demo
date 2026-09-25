import { renderOgImage } from "@/lib/og";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

/**
 * Per-article Open Graph card at a stable URL (/blog/<slug>/og.png).
 * A route handler is used instead of the opengraph-image file convention
 * because that convention appends a content hash to the URL, which cannot
 * be referenced from the article's JSON-LD.
 */
export async function GET(_req: Request, { params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return renderOgImage({
    eyebrow: post?.category ?? "Insights",
    title: post?.title ?? "MarketScope Insights",
    footer: post ? `${post.author} · ${post.readingMinutes} min read · sample content` : "Sample content",
  });
}
