import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

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
          href="/static/hero1.png"
          as="image"
        />
        <link
          rel="preload"
          href="/static/racecar.jpg"
          as="image"
        />
        <link
          rel="preload"
          href="/static/rccar.png"
          as="image"
        />
        <link
          rel="preload"
          href="/static/lego.png"
          as="image"
        />
        <link
          rel="preload"
          href="/static/kist.png"
          as="image"
        />
        <link
          rel="preload"
          href="/static/spacemap.png"
          as="image"
        />
        <link
          rel="preload"
          href="/BlackHanSans-Regular.ttf"
          as="font"
        />
        <link
          rel="preload"
          href="/DoHyeon-Regular.ttf"
          as="font"
        />
        <link
          rel="preload"
          href="/Hans-Sans-Korean-ExtraLight.otf"
          as="font"
        />
        <link
          rel="preload"
          href="/LeagueSpartan-ExtraLight.ttf"
          as="font"
        />
        <link
          rel="preload"
          href="/LeagueSpartan-Regular.ttf"
          as="font"
        />
        <link
          rel="preload"
          href="/LeagueSpartan-SemiBold.ttf"
          as="font"
        />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
