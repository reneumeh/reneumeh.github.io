import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RENE UMEH",
  description: "Rene Umeh's Portfolio",
  icons: [
    {
      "url": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "url": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "url": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <link
          rel="preload"
          href="/static/hero.png"
          as="image"
        />
      <body className={inter.className}>
        {children} 
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
