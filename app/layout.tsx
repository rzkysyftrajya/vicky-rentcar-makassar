import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./client-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PT.VRN MAKASSAR 2025 | Rental Mobil Terpercaya & Murah di Makassar",
  description:
    "Jasa rental mobil terpercaya di Makassar 2025 dengan pengalaman 8+ tahun. Armada lengkap, driver bersertifikat, layanan 24/7. Tanya harga dan ketersediaan langsung via WhatsApp.",
  keywords: [
    "rental mobil makassar 2025",
    "sewa mobil makassar murah",
    "rental mobil driver makassar",
    "sewa mobil lepas kunci makassar",
  ].join(", "),
  authors: [{ name: "PT.VRN MAKASSAR" }],
  creator: "PT.VRN MAKASSAR",
  publisher: "PT.VRN MAKASSAR",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://vickyrentcarmakassar.com",
    siteName: "PT.VRN MAKASSAR",
    title: "PT.VRN MAKASSAR 2025 | Rental Mobil Terpercaya & Murah",
    description:
      "Jasa rental mobil terpercaya di Makassar dengan pengalaman 8+ tahun. Armada lengkap, driver bersertifikat, layanan 24/7. Tanya harga dan ketersediaan langsung via WhatsApp.",
    images: [
      {
        url: "/logoVRN.png",
        width: 1200,
        height: 630,
        alt: "PT.VRN MAKASSAR - Rental Mobil Terpercaya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PT.VRN MAKASSAR 2025 | Rental Mobil Terpercaya",
    description:
      "Jasa rental mobil terpercaya di Makassar dengan pengalaman 8+ tahun. Tanya harga dan ketersediaan langsung via WhatsApp.",
    images: ["/logoVRN.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://vickyrentcarmakassar.com",
  },
  category: "business",
  generator: "v0.dev",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "PT.VRN MAKASSAR",
  alternateName: "PT.VRN MAKASSAR",
  description:
    "Jasa rental mobil terpercaya di Makassar dengan pengalaman 8+ tahun.",
  url: "https://vickyrentcarmakassar.com",
  telephone: "+6282363389893",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Pringgan no 11 gg Bung Boniran",
    addressLocality: "Makassar",
    addressRegion: "Sulawesi Selatan",
    postalCode: "90000",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-5.1476",
    longitude: "119.4327",
  },
  openingHours: "Mo-Su 00:00-23:59",
  image: "/logoVRN.png",
  sameAs: [
    "https://instagram.com/vickyrentalnusantara",
    "https://wa.me/6282363389893",
  ],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: "-5.1476",
      longitude: "119.4327",
    },
    geoRadius: "200000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Rental Mobil Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Rental Mobil Lepas Kunci",
          description: "Sewa mobil tanpa driver untuk kebebasan berkendara",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Rental Mobil dengan Driver",
          description:
            "Sewa mobil dengan driver berpengalaman dan bersertifikat",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1000",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        {/* Google Ads Global Site Tag */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18095006448"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-18095006448');
            `,
          }}
        />

        <link
          rel="canonical"
          href="https://vickyrentcarmakassar.com"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta name="theme-color" content="#7CB342" />
      </head>

      <body
        className={`${inter.className} bg-white text-gray-900 min-h-screen`}
        suppressHydrationWarning
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
