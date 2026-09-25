import { renderOgImage, ogSize } from "@/lib/og";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "MarketScope article";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default async function ArticleOgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return renderOgImage({
    eyebrow: post?.category ?? "Insights",
    title: post?.title ?? "MarketScope Insights",
    footer: post ? `${post.author} · ${post.readingMinutes} min read · sample content` : "Sample content",
  });
}
