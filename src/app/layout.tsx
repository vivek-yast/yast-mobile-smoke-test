import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yast Mobile Smoke Test",
  description:
    "A compact mobile QA status page for Yast Agency release checks.",
  applicationName: "Yast Mobile Smoke Test",
  keywords: ["Yast Agency", "mobile QA", "smoke test"],
  openGraph: {
    title: "Yast Mobile Smoke Test",
    description: "Three essential mobile QA checks. One clear result.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Yast Mobile Smoke Test",
    description: "Three essential mobile QA checks. One clear result.",
  },
};

export const viewport: Viewport = {
  themeColor: "#f3f1e9",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
