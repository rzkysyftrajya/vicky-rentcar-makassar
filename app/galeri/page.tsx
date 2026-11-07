import type { Metadata } from 'next'
import {
  Breadcrumbs,
  Footer,
  FloatingWhatsApp,
  GalleryShowcase,
  Header,
} from '@/src/components/site'

export const metadata: Metadata = {
  title: 'Galeri Pelanggan & Armada',
  description:
    'Lihat dokumentasi perjalanan pelanggan dan armada VICKY RENTCAR MAKASSAR.',
}

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        <section
          className="page-hero gallery-page-hero"
          style={{
            backgroundImage: "url('/galeri/11.webp')",
          }}
        >
          <div className="page-hero-inner" data-reveal="left">
            <span className="eyebrow">VICKY RENTCAR MAKASSAR</span>
            <h1>Galeri pelanggan<br />dan armada.</h1>
            <p>
              Dokumentasi perjalanan dan armada yang menemani berbagai agenda
              di Makassar dan sekitarnya.
            </p>
          </div>
        </section>
        <div className="page-content">
          <Breadcrumbs items={['Galeri pelanggan']} />
          <GalleryShowcase />
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
