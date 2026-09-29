import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif, Newsreader } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable} ${newsreader.variable} antialiased`}
    >
      <body className="min-h-full bg-bg text-fg">{children}</body>
    </html>
  );
}
