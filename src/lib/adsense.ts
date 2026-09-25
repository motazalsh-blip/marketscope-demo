/**
 * Google AdSense configuration.
 *
 * ─── HOW TO ENABLE REAL ADS ────────────────────────────────────────────
 * 1. Get approved by Google AdSense for your production domain.
 * 2. Set the environment variable (e.g. in Vercel → Project → Settings → Env):
 *      NEXT_PUBLIC_ADSENSE_PUBLISHER_ID=ca-pub-XXXXXXXXXXXXXXXX
 * 3. Create ad units in the AdSense dashboard and paste their slot IDs
 *    into `adSlots` below (or set the matching env variables).
 * 4. Redeploy. /ads.txt is generated automatically from the publisher ID.
 *
 * While the publisher ID is missing, no Google script is loaded and every
 * <AdSlot /> renders a clearly labelled placeholder instead.
 * ───────────────────────────────────────────────────────────────────────
 */

const publisherId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID?.trim() ?? "";

export const adsenseConfig = {
  /** Format: "ca-pub-XXXXXXXXXXXXXXXX". Empty string = ads disabled. */
  publisherId,
  /** True only when a correctly formatted publisher ID is configured. */
  enabled: /^ca-pub-\d{10,20}$/.test(publisherId),
  scriptSrc: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
} as const;

/** Named ad placements used across public pages. Replace with real slot IDs. */
export const adSlots = {
  homeInline: process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOME ?? "0000000001",
  blogIndex: process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG ?? "0000000002",
  articleInline: process.env.NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE ?? "0000000003",
  articleSidebar: process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR ?? "0000000004",
} as const;

export type AdPlacement = keyof typeof adSlots;

/** Publisher ID without the "ca-" prefix, as required by ads.txt. */
export function adsTxtPublisherId(): string | null {
  return adsenseConfig.enabled ? adsenseConfig.publisherId.replace(/^ca-/, "") : null;
}
