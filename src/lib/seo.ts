import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "./site";

type BuildMetadataInput = {
  title: string;
  description: string;
  /** Route path, e.g. "/blog". Used for the canonical URL and og:url. */
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
  /** Set to true for pages that should not be indexed. */
  noIndex?: boolean;
  /** Skip the "%s | MarketScope" title template (used by the home page). */
  absoluteTitle?: boolean;
};

/**
 * Builds consistent per-page metadata: title, description, canonical,
 * Open Graph and Twitter cards. OG images are generated with the
 * file-based `opengraph-image.tsx` convention.
 */
export function buildMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  tags,
  noIndex = false,
  absoluteTitle = false,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  // Articles get a per-post image from their own opengraph-image.tsx;
  // every other page reuses the site-wide card generated at /opengraph-image.
  const images = type === "article" ? undefined : [{ url: "/opengraph-image", width: 1200, height: 630, alt: siteConfig.name }];

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      ...(images ? { images } : {}),
      ...(type === "article" ? { publishedTime, modifiedTime, authors, tags } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: siteConfig.twitter,
      ...(images ? { images: images.map((i) => i.url) } : {}),
    },
    robots: noIndex ? { index: false, follow: true } : { index: true, follow: true },
  };
}
