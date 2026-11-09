import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import type { Metadata, Viewport } from 'next'
import { RevealObserver } from '@/src/components/reveal-observer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://pt.vrnrentcarmakassar.com'),
  title: {
    default: 'VICKY RENTCAR MAKASSAR | Rental Mobil Makassar',
    template: '%s | VICKY RENTCAR MAKASSAR',
  },
  description:
    'Rental mobil Makassar untuk kebutuhan personal, bisnis, keluarga, dan perjalanan wisata. Armada terawat, layanan fleksibel.',
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    siteName: 'VICKY RENTCAR MAKASSAR',
    locale: 'id_ID',
    title: 'VICKY RENTCAR MAKASSAR | Rental Mobil Makassar',
    description:
      'Rental mobil Makassar untuk setiap perjalanan.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VICKY RENTCAR MAKASSAR',
    description:
      'Rental mobil Makassar untuk setiap perjalanan.',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f5f0e8',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K4RS37FF"
            height="0"
            width="0"
            title="Google Tag Manager"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K4RS37FF');`,
          }}
        />
        {children}
        <RevealObserver />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
