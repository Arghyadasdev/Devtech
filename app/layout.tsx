import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dev Technology — Technology. Innovation. Digital Transformation.",
  description:
    "Dev Technology builds modern software, cloud infrastructure, AI solutions, and DevOps pipelines for businesses ready to grow.",
  keywords:
    "software development, cloud solutions, AI, DevOps, IT consulting, web development, mobile apps",
  authors: [{ name: "Dev Technology" }],
  openGraph: {
    title: "Dev Technology",
    description:
      "Technology Solutions Built for the Next Generation. Software, Cloud, AI, DevOps.",
    url: "https://devtech.live",
    siteName: "Dev Technology",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Technology",
    description: "Technology Solutions Built for the Next Generation.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
