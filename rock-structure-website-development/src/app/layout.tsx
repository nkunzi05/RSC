import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { company, openGraphImage } from "@/lib/content";

const siteUrl = "https://rockstructure.construction";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} | ${company.tagline}`,
    template: `%s | ${company.shortName}`,
  },
  description: "Building, roads, driveways, dams, irrigation, reticulation and architectural designs from Rock Structure Construction in Zimbabwe.",
  icons: {
    icon: company.favicon,
    shortcut: company.favicon,
  },
  openGraph: {
    type: "website",
    siteName: company.name,
    title: `${company.name} | ${company.tagline}`,
    description: "Construction work across Zimbabwe, from building and roads to service stations, renovations and infrastructure.",
    url: siteUrl,
    images: [{ url: openGraphImage, width: 1200, height: 800, alt: "Rock Structure Construction project work" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [openGraphImage],
  },
};

export const viewport: Viewport = {
  themeColor: "#f2f0eb",
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.name,
  description: company.mission,
  url: siteUrl,
  telephone: company.phone,
  email: company.email,
  image: company.logo,
  sameAs: [company.facebook, company.instagram, company.maps],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "17032 Carlton Road, Granitesite",
      addressLocality: "Harare",
      addressCountry: "ZW",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "5429 Glassgow Road, Industrial site",
      addressLocality: "Chinhoyi",
      addressCountry: "ZW",
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="site-body">
        <Header />
        <main>{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
