import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B1B3A",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 32 32">
          <path d="M7 22l6-7 5 4 7-9" fill="none" stroke="#34D399" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="25" cy="10" r="2.2" fill="#34D399" />
        </svg>
      </div>
    ),
    size,
  );
}
