import { ImageResponse } from "next/og";
import { site } from "@/lib/data";

export const alt = `${site.name} | ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Preview image shown when the site is shared on LinkedIn, WhatsApp, etc.
// The image renderer needs every <div> with more than one child to use display: flex,
// so each line below is built as a single string.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 90,
          background: "#0e1320",
          color: "#e6e9f0",
        }}
      >
        <div style={{ display: "flex", fontSize: 40, color: "#8aa6d9" }}>{"Hi, I'm"}</div>
        <div style={{ display: "flex", fontSize: 160, fontWeight: 700, letterSpacing: 6, lineHeight: 1.1 }}>
          {site.name.toUpperCase()}
        </div>
        <div style={{ display: "flex", fontSize: 48, color: "#9aa4b8" }}>{`A ${site.role}.`}</div>
      </div>
    ),
    size,
  );
}