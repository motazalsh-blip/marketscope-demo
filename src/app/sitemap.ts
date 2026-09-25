import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const latestPost = posts[0]?.updatedAt ?? "2026-09-25";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: latestPost, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/blog"), lastModified: latestPost, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/about"), lastModified: "2026-09-25", changeFrequency: "yearly", priority: 0.5 },
    { url: absoluteUrl("/contact"), lastModified: "2026-09-25", changeFrequency: "yearly", priority: 0.5 },
    { url: absoluteUrl("/privacy"), lastModified: "2026-09-25", changeFrequency: "yearly", priority: 0.2 },
    { url: absoluteUrl("/terms"), lastModified: "2026-09-25", changeFrequency: "yearly", priority: 0.2 },
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: absoluteUrl(`/blog/${p.slug}`),
    lastModified: p.updatedAt,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...postRoutes];
}
