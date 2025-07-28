import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://spinearz.com'),
  title: "SpinEarz - Hook the Look | Unique Fishing Lure Earrings",
  description: "Unique jewelry crafted from authentic fishing lures. Each SpinEarz piece transforms vintage fishing lures into wearable art.",
  keywords: "fishing lure earrings, unique jewelry, upcycled jewelry, fishing gifts, handmade earrings",
  openGraph: {
    title: "SpinEarz - Hook the Look",
    description: "Unique jewelry crafted from authentic fishing lures",
    type: "website",
    images: [
      {
        url: "/spinearz-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "SpinEarz - Unique Fishing Lure Earrings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SpinEarz - Hook the Look",
    description: "Unique jewelry crafted from authentic fishing lures",
    images: ["/spinearz-logo.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
