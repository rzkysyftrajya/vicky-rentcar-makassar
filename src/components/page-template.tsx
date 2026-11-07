import {
  Header,
  Footer,
  FloatingWhatsApp,
  PageHero,
  ServiceCards,
  FleetShowcase,
  Benefits,
  BookingSteps,
  ContactBlock,
  Breadcrumbs,
} from '@/src/components/site'
import { whatsappUrl } from '@/src/config/business'
import { ArrowUpRight, Check } from 'lucide-react'
import Link from 'next/link'

export function ServicePage({ type }: { type: 'supir' | 'lepas' | 'bandara' | 'overview' }) {
  const data =
    type === 'supir'
      ? {
          eyebrow: 'Layanan chauffeur',
          title: 'Rental mobil dengan supir\nyang lebih tenang.',
          text: 'Perjalanan lebih praktis dengan dukungan pengemudi untuk agenda personal, bisnis, dan keluarga.',
          image: '/hero-section.webp',
          heading: 'Fokus pada perjalanan Anda.',
        }
      : type === 'lepas'
        ? {
            eyebrow: 'Self-drive rental',
            title: 'Bebas menentukan\nritme perjalanan.',
            text: 'Rental mobil lepas kunci untuk Anda yang ingin menjelajah Makassar dengan cara sendiri.',
            image: '/hero-section.webp',
            heading: 'Ruang untuk rencana Anda.',
          }
        : type === 'bandara'
          ? {
              eyebrow: 'Airport transfer',
              title: 'Sambutan pertama\nyang lebih nyaman.',
              text: 'Antar jemput dari dan menuju Bandara Sultan Hasanuddin untuk kedatangan yang lebih lancar.',
              image: '/hero-section.webp',
              heading: 'Dari bandara, melangkah lebih jauh.',
            }
          : {
              eyebrow: 'Layanan rental mobil',
              title: 'Solusi mobilitas\nuntuk setiap agenda.',
              text: 'Pilihan rental mobil di Makassar dengan layanan yang dapat disesuaikan untuk kebutuhan pribadi, bisnis, keluarga, dan wisata.',
              image: '/hero-section.webp',
              heading: 'Satu tujuan, banyak kemungkinan.',
            }

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow={data.eyebrow}
          title={data.title}
          text={data.text}
          image={data.image}
        />
        <div className="page-content">
          <Breadcrumbs items={[data.eyebrow]} />
          {type === 'overview' ? (
            <>
              <section className="service-intro">
                <div data-reveal="left">
                  <span className="eyebrow">Perjalanan Anda, pilihan Anda</span>
                  <h2>
                    Pilih layanan yang
                    <br />
                    <em>pas untuk agenda.</em>
                  </h2>
                </div>
                <div data-reveal="right">
                  <p className="lead">
                    Perlu pengemudi, ingin menyetir sendiri, atau butuh jemputan
                    bandara? Pilih layanan, lalu konsultasikan detail perjalanan
                    Anda dengan tim kami.
                  </p>
                  <Benefits />
                </div>
              </section>
              <section className="service-options">
                <div className="section-heading">
                  <div data-reveal="left">
                    <span className="eyebrow">Layanan VICKY RENTCAR</span>
                    <h2>
                      Temukan cara
                      <br />
                      <em>terbaik untuk berangkat.</em>
                    </h2>
                  </div>
                  <p data-reveal="right">
                    Lihat detail setiap pilihan dan tentukan yang cocok untuk
                    rencana perjalanan Anda.
                  </p>
                </div>
                <ServiceCards />
              </section>
              <section className="service-booking section">
                <div className="section-heading">
                  <div data-reveal="left">
                    <span className="eyebrow">Langkah reservasi</span>
                    <h2>
                      Rencanakan dengan
                      <br />
                      <em>lebih mudah.</em>
                    </h2>
                  </div>
                  <p data-reveal="right">
                    Sampaikan kebutuhan perjalanan. Tim kami membantu mengecek
                    pilihan layanan dan ketersediaan armada.
                  </p>
                </div>
                <BookingSteps />
              </section>
            </>
          ) : (
            <>
              <section className="split-intro">
                <div>
                  <span className="eyebrow">{data.eyebrow}</span>
                  <h2>{data.heading}</h2>
                </div>
                <div>
                  <p className="lead">
                    Kami memahami bahwa setiap perjalanan punya konteks berbeda.
                    Karena itu, layanan kami dirancang agar Anda dapat memilih
                    pengalaman yang paling sesuai.
                  </p>
                  <Benefits />
                </div>
              </section>
              <section className="feature-band">
                <div>
                  <span className="eyebrow">Yang bisa Anda harapkan</span>
                  <h2>
                    Praktis, nyaman,
                    <br />
                    <em>dan komunikatif.</em>
                  </h2>
                </div>
                <div className="feature-list">
                  {[
                    'Pilihan armada sesuai kebutuhan',
                    'Informasi layanan yang jelas',
                    'Koordinasi reservasi melalui WhatsApp',
                    'Dukungan untuk agenda personal maupun korporat',
                  ].map((x) => (
                    <div key={x}>
                      <Check size={16} />
                      {x}
                    </div>
                  ))}
                </div>
              </section>
              <FleetShowcase compact />
            </>
          )}
          <ContactBlock />
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

export function FleetPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Armada pilihan"
          title={'Temukan kendaraan\nyang tepat.'}
          text="Pilihan kendaraan untuk perjalanan personal, bisnis, keluarga, hingga kebutuhan rombongan di Makassar."
          image="/hero-section.webp"
        />
        <div className="page-content">
          <Breadcrumbs items={['Armada']} />
          <FleetShowcase />
          <ContactBlock title="Butuh rekomendasi kendaraan?" />
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

export function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Kontak & reservasi"
          title={'Mari rencanakan\nperjalanan Anda.'}
          text="Sampaikan kebutuhan perjalanan Anda kepada tim VICKY RENTCAR MAKASSAR."
          image="/hero-section.webp"
        />
        <div className="page-content">
          <Breadcrumbs items={['Kontak']} />
          <section className="contact-layout">
            <div>
              <span className="eyebrow">Reservasi</span>
              <h2>
                Awali dengan
                <br />
                <em>percakapan.</em>
              </h2>
              <p className="lead">
                Untuk informasi ketersediaan armada dan detail layanan, silakan
                hubungi kami melalui WhatsApp. Tim kami akan membantu memahami
                kebutuhan perjalanan Anda.
              </p>
              <Link className="gold-button" href="#kontak">
                Lihat kanal kontak <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="contact-card" id="kontak">
              <span className="eyebrow">Hubungi kami</span>
              <h3>
                VICKY RENTCAR
                <br />
                MAKASSAR
              </h3>
              <p>
                Hubungi tim kami melalui WhatsApp untuk informasi layanan dan
                reservasi.
              </p>
              <Link
                className="outline-button dark"
                href={whatsappUrl(
                  'Saya ingin mendapatkan informasi layanan rental mobil.',
                )}
              >
                WhatsApp <ArrowUpRight size={16} />
              </Link>
            </div>
          </section>
          <ContactBlock title="Siap melangkah bersama kami?" />
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
