import Link from "next/link";
import { formatDate, type Post } from "@/lib/posts";

const categoryStyles: Record<Post["category"], string> = {
  "Market Research": "bg-sky-50 text-sky-700 ring-sky-600/20",
  "Unit Economics": "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  Pricing: "bg-violet-50 text-violet-700 ring-violet-600/20",
};

const coverGradients: Record<Post["category"], string> = {
  "Market Research": "from-sky-500/90 to-navy-900",
  "Unit Economics": "from-emerald-500/90 to-navy-900",
  Pricing: "from-violet-500/90 to-navy-900",
};

export function CategoryBadge({ category }: { category: Post["category"] }) {
  return (
    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${categoryStyles[category]}`}>
      {category}
    </span>
  );
}

export function PostCover({ post, className = "" }: { post: Post; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden bg-gradient-to-br ${coverGradients[post.category]} ${className}`}
    >
      <svg viewBox="0 0 400 200" preserveAspectRatio="none" className="absolute inset-0 h-full w-full opacity-40">
        <path d="M0 160 L60 130 L120 145 L180 90 L240 110 L300 60 L360 75 L400 40" fill="none" stroke="white" strokeWidth="3" />
        <path d="M0 160 L60 130 L120 145 L180 90 L240 110 L300 60 L360 75 L400 40 L400 200 L0 200Z" fill="white" opacity="0.12" />
      </svg>
      <span className="absolute bottom-3 left-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/80">
        {post.category}
      </span>
    </div>
  );
}

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <PostCover post={post} className="h-40" />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-xs text-slate-500">
          <CategoryBadge category={post.category} />
          <span>{post.readingMinutes} min read</span>
        </div>
        <h3 className="mt-4 text-lg font-semibold leading-snug text-navy-900">
          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 focus:outline-none">
            <span className="relative">{post.title}</span>
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{post.excerpt}</p>
        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500">
          <span>{post.author}</span>
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
        </div>
      </div>
    </article>
  );
}
