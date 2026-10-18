import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Browser-tab icon, generated at build time.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0e1320",
          color: "#8aa6d9",
          fontSize: 24,
          fontWeight: 700,
          borderRadius: 6,
        }}
      >
        Z
      </div>
    ),
    size,
  );
}
