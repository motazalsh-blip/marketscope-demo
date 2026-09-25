"use client";

import { useEffect, useRef } from "react";
import { adSlots, adsenseConfig, isAdPlacementActive, type AdPlacement } from "@/lib/adsense";

type AdSlotProps = {
  placement: AdPlacement;
  /** "horizontal" for in-content banners, "rectangle" for sidebars. */
  shape?: "horizontal" | "rectangle";
  className?: string;
};

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

const sizeClasses = {
  horizontal: "min-h-[120px] sm:min-h-[100px]",
  rectangle: "min-h-[250px]",
} as const;

/**
 * Reusable ad container.
 * - Without a valid publisher ID it renders a labelled placeholder
 *   (same footprint as the real unit, so layout does not shift later).
 * - With NEXT_PUBLIC_ADSENSE_PUBLISHER_ID set, it renders a real
 *   responsive AdSense unit and requests an ad once on mount. If the
 *   placement has no valid slot ID configured, it renders nothing.
 *
 * Only use this on public content pages (home, blog, articles).
 */
export function AdSlot({ placement, shape = "horizontal", className = "" }: AdSlotProps) {
  const pushed = useRef(false);
  const slotId = adSlots[placement];
  const active = isAdPlacementActive(placement);

  useEffect(() => {
    if (!adsenseConfig.enabled || !active || pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // AdSense can throw if blocked by an extension; fail silently.
    }
  }, [active]);

  if (!active) return null;

  if (!adsenseConfig.enabled) {
    return (
      <aside
        aria-label="Advertisement placeholder"
        data-ad-placement={placement}
        className={`flex w-full flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-6 text-center ${sizeClasses[shape]} ${className}`}
      >
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
          Advertisement
        </span>
        <span className="text-sm text-slate-500">
          Ad placeholder · <code className="font-mono text-xs">{placement}</code>
        </span>
        <span className="text-xs text-slate-400">
          Set NEXT_PUBLIC_ADSENSE_PUBLISHER_ID to activate
        </span>
      </aside>
    );
  }

  return (
    <aside aria-label="Advertisement" className={`w-full ${sizeClasses[shape]} ${className}`}>
      <span className="mb-1 block text-center text-[11px] uppercase tracking-[0.14em] text-slate-400">
        Advertisement
      </span>
      <ins
        className="adsbygoogle block"
        style={{ display: "block" }}
        data-ad-client={adsenseConfig.publisherId}
        data-ad-slot={slotId}
        data-ad-format={shape === "rectangle" ? "rectangle" : "auto"}
        data-full-width-responsive="true"
      />
    </aside>
  );
}
