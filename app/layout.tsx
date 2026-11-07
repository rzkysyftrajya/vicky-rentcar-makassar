import { Analytics } from '@vercel/analytics/next'
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
        {children}
        <RevealObserver />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
