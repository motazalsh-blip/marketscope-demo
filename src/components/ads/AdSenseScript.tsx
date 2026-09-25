import Script from "next/script";
import { adsenseConfig } from "@/lib/adsense";

/**
 * Loads the AdSense library once per page — but only when a valid
 * publisher ID is configured. Mounted in the public (site) layout only.
 */
export function AdSenseScript() {
  if (!adsenseConfig.enabled) return null;

  return (
    <Script
      id="adsbygoogle-init"
      async
      strategy="afterInteractive"
      crossOrigin="anonymous"
      src={`${adsenseConfig.scriptSrc}?client=${adsenseConfig.publisherId}`}
    />
  );
}
