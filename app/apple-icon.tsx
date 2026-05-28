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
          background: "#0a0a0a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 40,
        }}
      >
        <svg viewBox="0 0 40 40" width="120" height="120">
          <path
            d="M 32 13 A 14 14 0 1 0 32 27 L 32 21 L 23 21"
            fill="none"
            stroke="#faf9f6"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="23" cy="21" r="1.9" fill="#d4ff3a" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
