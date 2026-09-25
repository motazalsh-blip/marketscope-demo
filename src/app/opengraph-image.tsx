import { renderOgImage, ogSize } from "@/lib/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = ogSize;
export const contentType = "image/png";

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Market intelligence platform",
    title: siteConfig.tagline,
    footer: "Portfolio demo · sample content",
  });
}
