import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clothes AI - Virtual Try On & AI Outfit Maker",
  description:
    "Transform your style with AI-powered virtual try-on. See yourself in any outfit instantly. Download Clothes AI and reimagine your wardrobe today.",
  keywords: [
    "AI clothes",
    "virtual try-on",
    "outfit maker",
    "AI fashion",
    "clothes changer",
    "virtual fitting room",
    "style app",
  ],
  authors: [{ name: "Ryan Egbejule" }],
  creator: "Ryan Egbejule",
  openGraph: {
    title: "Clothes AI - Virtual Try On & AI Outfit Maker",
    description:
      "Transform your style with AI-powered virtual try-on. See yourself in any outfit instantly.",
    url: "https://clothesai.app",
    siteName: "Clothes AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clothes AI - Virtual Try On & AI Outfit Maker",
    description:
      "Transform your style with AI-powered virtual try-on. See yourself in any outfit instantly.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
