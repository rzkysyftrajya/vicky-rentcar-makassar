import Link from 'next/link'
import Image from 'next/image'
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react'
import {
  Header,
  Footer,
  FloatingWhatsApp,
  WhatsAppButton,
  ServiceCards,
  FleetShowcase,
  GalleryShowcase,
  Benefits,
  BookingSteps,
} from '@/src/components/site'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-bg" />
          <div className="hero-content" data-reveal="left">
            <span className="eyebrow">Rental mobil Makassar</span>
            <h1>
              Jelajahi Makassar
              <br />
              <em>dengan cara Anda.</em>
            </h1>
            <p>
              Armada terawat dan layanan fleksibel untuk perjalanan keluarga,
              bisnis, antar jemput bandara, dan agenda penting Anda.
            </p>
            <div className="hero-actions">
              <WhatsAppButton label="Tanyakan Ketersediaan" />
              <Link href="/armada" className="outline-button">
                Jelajahi Armada <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
          <aside className="hero-note" data-reveal="right">
            <span className="hero-note-icon"><MapPin size={18} /></span>
            <span className="hero-note-label">Area layanan</span>
            <strong>Makassar<br />dan sekitarnya</strong>
            <Image
              className="hero-note-map"
              src="/makassar-siluet.webp"
              alt="Peta Makassar dan wilayah sekitarnya"
              width={1536}
              height={1024}
            />
            <span className="hero-note-footer">Bandara · Kota · Bisnis</span>
          </aside>
          <a className="hero-scroll" href="#layanan">
            <ArrowDown size={16} /> Jelajahi layanan
          </a>
          <div className="hero-meta">
            <span>VICKY RENTCAR</span>
            <span className="line" />
            <span>MAKASSAR</span>
          </div>
        </section>

        <section className="service-ribbon" aria-label="Pilihan layanan" data-reveal="right">
          <span className="ribbon-label">Pilih perjalanan Anda</span>
          <Link href="/rental-mobil-dengan-supir">Dengan supir <ArrowUpRight size={15} /></Link>
          <Link href="/rental-mobil-lepas-kunci">Lepas kunci <ArrowUpRight size={15} /></Link>
          <Link href="/layanan-bandara">Antar jemput bandara <ArrowUpRight size={15} /></Link>
        </section>

        <section className="intro section">
          <Image
            className="intro-photo"
            data-reveal="left"
            src="/perjalanan-kami.webp"
            alt="Deretan armada VICKY RENTCAR untuk perjalanan di Makassar"
            width={620}
            height={348}
            sizes="(max-width: 760px) 100vw, 40vw"
          />
          <div data-reveal="right">
            <span className="eyebrow">Mobilitas, sesuai kebutuhan</span>
            <h2>Rencana Anda,<br /><em>perjalanan kami.</em></h2>
            <p className="lead">
              Pilih layanan yang cocok untuk agenda Anda. Tim kami membantu
              menyiapkan perjalanan dari penjemputan hingga tujuan.
            </p>
            <Link href="/layanan-rental-mobil" className="text-link">
              Kenali layanan kami <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>

        <section className="services section" id="layanan">
          <div className="section-heading">
            <div data-reveal="left">
              <span className="eyebrow">Pilihan layanan</span>
              <h2>Satu perjalanan,<br /><em>banyak cara.</em></h2>
            </div>
            <p data-reveal="right">
              Tentukan cara bepergian yang paling pas. Tim kami siap membantu
              menjelaskan layanan dan ketersediaan armada.
            </p>
          </div>
          <ServiceCards />
        </section>

        <FleetShowcase compact />
        <GalleryShowcase compact />

        <section className="editorial section" id="tentang">
          <div className="editorial-image" data-reveal="left">
            <img
              src="/tentang-armada.png"
              alt="Kendaraan untuk perjalanan bersama VICKY Rentcar Makassar"
              loading="lazy"
            />
            <span className="image-caption">Berangkat dengan lebih tenang</span>
          </div>
          <div className="editorial-copy" data-reveal="right">
            <span className="eyebrow">Tentang VICKY RENTCAR</span>
            <h2>Detail perjalanan<br /><em>lebih terurus.</em></h2>
            <p>
              Komunikasi yang jelas dan pilihan layanan fleksibel membantu Anda
              merencanakan perjalanan dengan lebih nyaman.
            </p>
            <Benefits />
          </div>
        </section>

        <section className="legal section" aria-labelledby="legal-heading">
          <div className="section-heading">
            <div data-reveal="left">
              <span className="eyebrow">Legalitas &amp; Kredibilitas</span>
              <h2 id="legal-heading">Mitra perjalanan<br /><em>yang terdaftar resmi.</em></h2>
            </div>
            <p data-reveal="right">
              Terdaftar resmi di Kemenkumham RI atas nama <strong>PT. Vicky Rental
              Makassar</strong>. Mendukung sewa mobil perusahaan Makassar dengan
              invoice resmi.
            </p>
          </div>
          <dl className="legal-details" data-reveal="up">
            <div>
              <dt>Akta Pendirian</dt>
              <dd>AHU-006180.AH.01.30.TAHUN 2025</dd>
            </div>
            <div>
              <dt>KBLI</dt>
              <dd>79121 - Aktivitas Penyewaan Kendaraan Bermotor Roda Empat</dd>
            </div>
            <div>
              <dt>NPWP</dt>
              <dd>Terdaftar</dd>
            </div>
            <div>
              <dt>Perizinan</dt>
              <dd>Berizin Resmi NIB/OSS</dd>
            </div>
          </dl>
        </section>

        <section className="coverage section">
          <div data-reveal="left">
            <span className="eyebrow">Area layanan</span>
            <h2>Berangkat dari Makassar,<br /><em>jelajahi lebih jauh.</em></h2>
          </div>
          <div className="coverage-copy" data-reveal="right">
            <MapPin size={20} />
            <p>
              Kami melayani perjalanan di Makassar, termasuk Bandara Sultan
              Hasanuddin, Pantai Losari, Center Point of Indonesia, Fort
              Rotterdam, Trans Studio Makassar, serta area bisnis di sekitarnya.
            </p>
            <Link href="/layanan-bandara" className="text-link">
              Lihat layanan bandara <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>

        <section className="process section">
          <div className="section-heading">
            <div data-reveal="left">
              <span className="eyebrow">Cara reservasi</span>
              <h2>Mulai dari<br /><em>percakapan.</em></h2>
            </div>
            <p data-reveal="right">
              Ceritakan tujuan dan kebutuhan Anda. Tim kami akan membantu
              menyiapkan detail perjalanan sebelum reservasi dikonfirmasi.
            </p>
          </div>
          <BookingSteps />
        </section>

        <section className="final-cta" id="kontak">
          <div data-reveal="left">
            <span className="eyebrow">VICKY RENTCAR MAKASSAR</span>
            <h2>Ke mana perjalanan<br /><em>membawa Anda?</em></h2>
            <p>Konsultasikan kebutuhan perjalanan dan pilihan armada Anda.</p>
            <WhatsAppButton label="Mulai Konsultasi" />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
