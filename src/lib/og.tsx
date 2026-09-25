import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

/** Shared 1200×630 Open Graph card used by the site and each article. */
export function renderOgImage({ eyebrow, title, footer }: { eyebrow: string; title: string; footer: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #071228 0%, #0B1B3A 60%, #0f3b3a 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <svg width="64" height="64" viewBox="0 0 32 32">
            <rect width="32" height="32" rx="8" fill="#132a55" />
            <path d="M7 22l6-7 5 4 7-9" fill="none" stroke="#34D399" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="25" cy="10" r="2.2" fill="#34D399" />
          </svg>
          <div style={{ fontSize: 36, fontWeight: 700, display: "flex" }}>
            Market<span style={{ color: "#34D399" }}>Scope</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ fontSize: 26, color: "#34D399", textTransform: "uppercase", letterSpacing: "4px" }}>{eyebrow}</div>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1, maxWidth: "1000px" }}>{title}</div>
        </div>
        <div style={{ fontSize: 24, color: "#94a3b8" }}>{footer}</div>
      </div>
    ),
    ogSize,
  );
}
