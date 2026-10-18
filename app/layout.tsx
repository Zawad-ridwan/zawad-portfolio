import type { Metadata } from "next";
import { Inter, Josefin_Sans, Limelight } from "next/font/google";
import { site } from "@/lib/data";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-josefin",
});

const limelight = Limelight({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-limelight",
});

const title = `${site.name} | ${site.role}`;
const description = `${site.name} is a ${site.role.toLowerCase()} based in ${site.location}.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  openGraph: { title, description, type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

// Applies a saved theme choice before the first paint, so the page doesn't flash.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${josefin.variable} ${limelight.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      {/* suppressHydrationWarning: browser extensions such as Grammarly add attributes to <body>
          before React loads, which would otherwise show a harmless hydration warning in dev. */}
      <body suppressHydrationWarning className="font-sans text-base leading-relaxed antialiased">
        {children}
      </body>
    </html>
  );
}
