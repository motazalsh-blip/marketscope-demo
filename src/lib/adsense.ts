/**
 * Google AdSense configuration.
 *
 * ─── HOW TO ENABLE REAL ADS ────────────────────────────────────────────
 * 1. Get approved by Google AdSense for your production domain.
 * 2. Set the environment variable (e.g. in Vercel → Project → Settings → Env):
 *      NEXT_PUBLIC_ADSENSE_PUBLISHER_ID=ca-pub-XXXXXXXXXXXXXXXX
 * 3. Create ad units in the AdSense dashboard and set their slot IDs via the
 *    NEXT_PUBLIC_ADSENSE_SLOT_* env variables. A placement without a slot ID
 *    renders nothing once ads are enabled.
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

const slotEnv = (value: string | undefined) => value?.trim() ?? "";

/** Named ad placements used across public pages. Empty string = slot not configured. */
export const adSlots = {
  homeInline: slotEnv(process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOME),
  blogIndex: slotEnv(process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG),
  articleInline: slotEnv(process.env.NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE),
  articleSidebar: slotEnv(process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR),
} as const;

export type AdPlacement = keyof typeof adSlots;

/**
 * Whether a placement should render anything. Without a publisher ID it shows
 * a placeholder; once ads are enabled, a placement without a valid slot ID is
 * skipped so no invalid ad request is sent and no empty box is left behind.
 */
export function isAdPlacementActive(placement: AdPlacement): boolean {
  return !adsenseConfig.enabled || /^\d{8,12}$/.test(adSlots[placement]);
}

/** Publisher ID without the "ca-" prefix, as required by ads.txt. */
export function adsTxtPublisherId(): string | null {
  return adsenseConfig.enabled ? adsenseConfig.publisherId.replace(/^ca-/, "") : null;
}
