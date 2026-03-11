import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { StructuredData } from "@/components/layout/StructuredData";
import { siteConfig } from "@/content/site";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "The Lombardy Lifestyle Estate",
    "The Lombardy",
    "South Africa residential estate",
    "estate governance",
    "Landsdowne Property Group",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Residential Estate",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.shortName,
    locale: "en_ZA",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1600,
        height: 900,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en-ZA">
      <body className={`${manrope.variable} ${cormorant.variable} antialiased`}>
        <StructuredData data={[organizationSchema(), websiteSchema()]} />
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="site-main flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
