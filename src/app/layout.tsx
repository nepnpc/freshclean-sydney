import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FreshClean Sydney – Clinical Grade Cleaning Services",
  description:
    "Sydney's #1 rated professional cleaning service. End of lease, residential, deep cleaning, and more. 100% bond-back guarantee. Call 0493 597 634.",
  keywords: "cleaning sydney, end of lease cleaning, bond back cleaning, deep cleaning sydney, residential cleaning",
  openGraph: {
    title: "FreshClean Sydney – Clinical Grade Cleaning Services",
    description: "Pure Clean. Pure Peace of Mind. Clinical-grade cleaning for Sydney's premium homes and offices.",
    siteName: "FreshClean Sydney",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className="antialiased" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
