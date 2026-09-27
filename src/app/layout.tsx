import type { Metadata } from "next";
import { IBM_Plex_Mono, Sora } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    siteName: site.name,
    type: "website",
    images: [{ url: "/brand/acaso-social-avatar-800.png", width: 800, height: 800 }],
  },
  twitter: {
    card: "summary",
    title: site.title,
    description: site.description,
    images: ["/brand/acaso-social-avatar-800.png"],
  },
  icons: {
    icon: [
      { url: "/brand/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/brand/favicon/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/favicon/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/brand/favicon/apple-touch-icon-180.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sora.variable} ${plexMono.variable} antialiased`}>
      <body className="min-h-full bg-paper text-ink">{children}</body>
    </html>
  );
}
