import { ImageResponse } from "next/og";

export const alt = "Dev Technology — Technology. Innovation. Digital Transformation.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background: "#09090b",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(132,204,22,0.25), transparent 50%), radial-gradient(circle at 80% 80%, rgba(22,163,74,0.18), transparent 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: 4,
            color: "#a3e635",
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          Dev Technology
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: -2,
            color: "#ffffff",
            lineHeight: 1.08,
            marginBottom: 24,
          }}
        >
          Technology. Innovation.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: -2,
            color: "#84cc16",
            lineHeight: 1.08,
            marginBottom: 32,
          }}
        >
          Digital Transformation.
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#a1a1aa" }}>devtech.live</div>
      </div>
    ),
    { ...size }
  );
}
