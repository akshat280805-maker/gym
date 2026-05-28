import { ImageResponse } from "next/og";

export const alt = "GymnexAI — The Operating System for Modern Fitness Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#faf9f6",
          padding: 80,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        {/* lime glow */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -180,
            width: 700,
            height: 700,
            borderRadius: 9999,
            background: "rgba(212, 255, 58, 0.35)",
            filter: "blur(120px)",
          }}
        />

        {/* Brand mark + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg viewBox="0 0 40 40" width="56" height="56">
            <path
              d="M 32 13 A 14 14 0 1 0 32 27 L 32 21 L 23 21"
              fill="none"
              stroke="#0a0a0a"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="23" cy="21" r="1.7" fill="#0a0a0a" />
          </svg>
          <div style={{ display: "flex", alignItems: "baseline", color: "#0a0a0a" }}>
            <span style={{ fontSize: 48, letterSpacing: "-0.02em" }}>Gymnex</span>
            <span style={{ fontSize: 48, fontStyle: "italic", letterSpacing: "-0.02em" }}>ai</span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 112,
              lineHeight: 1,
              color: "#0a0a0a",
              letterSpacing: "-0.035em",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>The Operating System</span>
            <span>
              for <span style={{ fontStyle: "italic", color: "#6b6b66" }}>Modern</span> Fitness.
            </span>
          </div>
          <div
            style={{
              marginTop: 30,
              fontSize: 26,
              color: "#6b6b66",
              fontFamily: "system-ui, sans-serif",
              letterSpacing: "-0.005em",
            }}
          >
            Retain more members. Convert more leads. Run your gym with AI.
          </div>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #e6e3da",
            paddingTop: 28,
            fontFamily: "system-ui, sans-serif",
            fontSize: 18,
            color: "#6b6b66",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}
        >
          <span>gymnex.ai</span>
          <span style={{ color: "#0a0a0a" }}>Book a Demo →</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
