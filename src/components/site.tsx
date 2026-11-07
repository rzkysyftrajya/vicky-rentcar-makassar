'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Check, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { business, whatsappUrl, serviceMessage } from '@/src/config/business'
import { fleet } from '@/src/data/fleet'
import { gallery } from '@/src/data/gallery'

const nav = [
  ['Beranda', '/'],
  ['Layanan', '/layanan-rental-mobil'],
  ['Armada', '/armada'],
  ['Galeri', '/galeri'],
  ['Bandara', '/layanan-bandara'],
  ['Kontak', '/kontak'],
]

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <Link
        href="/"
        className="brand"
        aria-label="VICKY RENTCAR MAKASSAR - Beranda"
        onClick={() => setOpen(false)}
      >
        <Image src="/logo-vrn.webp" alt="" width={56} height={56} priority />
        <span className="brand-copy">
          <span>VICKY</span>
          <small>RENTCAR MAKASSAR</small>
        </span>
      </Link>
      <nav className="desktop-nav">
        {nav.map(([label, href]) => (
          <Link key={label} href={href}>
            {label}
          </Link>
        ))}
        <Link
          href={whatsappUrl(
            'Halo VICKY RENTCAR MAKASSAR, saya ingin mendapatkan informasi layanan rental mobil.',
          )}
          className="nav-cta"
        >
          Reservasi <ArrowUpRight size={15} />
        </Link>
      </nav>
      <button
        className="menu-button"
        aria-label="Buka menu"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <div className="mobile-nav">
          {nav.map(([label, href]) => (
            <Link key={label} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Link
            href={whatsappUrl(
              'Halo VICKY RENTCAR MAKASSAR, saya ingin reservasi mobil.',
            )}
            className="nav-cta"
            onClick={() => setOpen(false)}
          >
            Reservasi Sekarang <ArrowUpRight size={15} />
          </Link>
        </div>
      )}
    </header>
  )
}

export function WhatsAppButton({
  label = 'Konsultasikan Perjalanan Anda',
  message = 'Halo VICKY RENTCAR MAKASSAR, saya ingin mendapatkan informasi layanan rental mobil.',
}: {
  label?: string
  message?: string
}) {
  return (
    <Link className="gold-button" href={whatsappUrl(message)}>
      {label}
      <ArrowUpRight size={16} />
    </Link>
  )
}

export function FloatingWhatsApp() {
  return (
    <Link
      className="floating-wa"
      aria-label="Hubungi melalui WhatsApp"
      href={whatsappUrl(
        'Halo VICKY RENTCAR MAKASSAR, saya ingin mendapatkan informasi layanan rental mobil.',
      )}
    >
      <Image src="/whatsapp.webp" alt="" width={56} height={56} />
    </Link>
  )
}

export function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <Link
            href="/"
            className="brand footer-brand"
            aria-label="VICKY RENTCAR MAKASSAR - Beranda"
          >
            <Image src="/logo-vrn.webp" alt="" width={68} height={68} />
            <span className="brand-copy">
              <span>VICKY</span>
              <small>RENTCAR MAKASSAR</small>
            </span>
          </Link>
          <p>
            Rental mobil Makassar dengan armada terawat dan layanan fleksibel
            untuk mobilitas yang lebih nyaman.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <strong>Layanan</strong>
            <Link href="/rental-mobil-dengan-supir">Dengan Supir</Link>
            <Link href="/rental-mobil-lepas-kunci">Lepas Kunci</Link>
            <Link href="/layanan-bandara">Antar Jemput Bandara</Link>
          </div>
          <div>
            <strong>Jelajahi</strong>
            <Link href="/armada">Armada</Link>
            <Link href="/galeri">Galeri pelanggan</Link>
            <Link href="/kontak">Kontak &amp; Reservasi</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} VICKY RENTCAR MAKASSAR</span>
        <span>Makassar, Sulawesi Selatan</span>
      </div>
    </footer>
  )
}

export function Breadcrumbs({ items }: { items: string[] }) {
  return (
    <div className="breadcrumbs">
      <Link href="/">Beranda</Link>
      {items.map((item) => (
        <span key={item}>/ {item}</span>
      ))}
    </div>
  )
}

export function FleetShowcase({ compact = false }: { compact?: boolean }) {
  const featuredNames = [
    'Toyota Innova Zenix',
    'Toyota Alphard',
    'Toyota Hiace Premio Luxury',
    'Toyota Innova Reborn',
    'Toyota Avanza',
  ]
  const featuredFleet = featuredNames
    .map((name) => fleet.find((car) => car.name === name))
    .filter((car): car is (typeof fleet)[number] => car !== undefined)
  const list = compact ? featuredFleet : fleet

  return (
    <section
      className={`section fleet-section${compact ? ' fleet-preview' : ''}`}
      id="armada"
    >
      <div className="section-heading">
        <div data-reveal="left">
          <span className="eyebrow">Armada pilihan</span>
          <h2>
            Temukan kendaraan
            <br />
            <em>yang tepat.</em>
          </h2>
        </div>
        <p data-reveal="right">
          Setiap perjalanan punya kebutuhan berbeda. Konsultasikan pilihan
          kendaraan dan ketersediaan kepada tim kami.
        </p>
      </div>
      <div className="fleet-grid">
        {list.map((car, i) => (
          <article
            className={`fleet-card fleet-${i}`}
            data-reveal={i % 2 === 0 ? 'left' : 'right'}
            key={car.name}
          >
            <div className="image-wrap">
              <img
                src={car.image}
                alt={`Armada ${car.name} untuk rental mobil Makassar`}
                loading={i > 2 ? 'lazy' : 'eager'}
              />
            </div>
            <div className="fleet-info">
              <div>
                <span>{car.category}</span>
                <h3>{car.name}</h3>
              </div>
            </div>
            <p>{car.description}</p>
            <Link
              className="fleet-cta"
              href={whatsappUrl(
                `Halo, saya ingin menanyakan ketersediaan ${car.name}.`,
              )}
            >
              Tanyakan {car.name} <ArrowUpRight size={16} />
            </Link>
          </article>
        ))}
      </div>
      <div className="section-action" data-reveal="right">
        <Link href="/armada" className="text-link">
          Lihat seluruh armada <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  )
}

export function GalleryShowcase({ compact = false }: { compact?: boolean }) {
  const items = compact
    ? [gallery[16], gallery[0], gallery[9], gallery[6], gallery[23], gallery[24]]
    : gallery

  return (
    <section
      className={`section gallery-section${compact ? ' gallery-preview' : ''}`}
    >
      <div className="section-heading">
        <div data-reveal="left">
          <span className="eyebrow">Galeri pelanggan</span>
          <h2>
            Momen perjalanan
            <br />
            <em>bersama VICKY.</em>
          </h2>
        </div>
        <p data-reveal="right">
          Dokumentasi armada dan perjalanan pelanggan VICKY RENTCAR MAKASSAR.
        </p>
      </div>
      <div className="gallery-grid">
        {items.map((item, index) => (
          <figure
            className="gallery-card"
            data-reveal={index % 2 === 0 ? 'left' : 'right'}
            key={item.src}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading={index > 2 ? 'lazy' : 'eager'}
            />
            <figcaption>
              <span>VICKY RENTCAR</span>
              <span>MAKASSAR</span>
            </figcaption>
          </figure>
        ))}
      </div>
      {compact && (
        <div className="section-action" data-reveal="right">
          <Link href="/galeri" className="text-link">
            Lihat semua dokumentasi <ArrowUpRight size={16} />
          </Link>
        </div>
      )}
    </section>
  )
}

export function PageHero({
  eyebrow,
  title,
  text,
  image = '/hero-section.webp',
}: {
  eyebrow: string
  title: string
  text: string
  image?: string
}) {
  return (
    <section
      className="page-hero"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="page-hero-inner" data-reveal="left">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
        <WhatsAppButton />
      </div>
    </section>
  )
}

export function ServiceCards() {
  const services = [
    {
      number: '01',
      title: 'Rental Mobil dengan Supir',
      label: 'Perjalanan ditemani pengemudi',
      text: 'Perjalanan lebih praktis untuk agenda keluarga, bisnis, dan perjalanan dinas.',
      image: '/layanan/dengan-driver.webp',
      href: '/rental-mobil-dengan-supir',
    },
    {
      number: '02',
      title: 'Rental Mobil Lepas Kunci',
      label: 'Fleksibel atur perjalanan',
      text: 'Pilih kendaraan dan jelajahi Makassar mengikuti waktu serta rencana Anda.',
      image: '/layanan/lepas-kunci.webp',
      href: '/rental-mobil-lepas-kunci',
    },
    {
      number: '03',
      title: 'Antar Jemput Bandara',
      label: 'Dari dan ke bandara',
      text: 'Atur perjalanan dari Bandara Sultan Hasanuddin ke tujuan Anda di Makassar.',
      image: '/layanan/antar-jemput-bandara.webp',
      href: '/layanan-bandara',
    },
  ]

  return (
    <div className="service-cards">
      {services.map((service, index) => (
        <article
          className="service-card"
          data-reveal={index % 2 === 0 ? 'left' : 'right'}
          key={service.number}
        >
          <Link
            className={`service-card-image${
              index === 1 ? ' service-card-vehicle' : ''
            }`}
            href={service.href}
            aria-label={`Lihat ${service.title}`}
          >
            <img src={service.image} alt={service.title} loading="lazy" />
            <span className="service-card-number">{service.number}</span>
          </Link>
          <div className="service-card-content">
            <span className="service-card-label">{service.label}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <Link href={service.href} className="service-card-cta">
              Lihat detail layanan <ArrowUpRight size={16} />
            </Link>
          </div>
        </article>
      ))}
    </div>
  )
}

export function Benefits() {
  const items = [
    'Profesional dan komunikatif',
    'Kendaraan nyaman untuk berbagai kebutuhan',
    'Pilihan layanan yang fleksibel',
    'Reservasi mudah melalui WhatsApp',
  ]
  return (
    <div className="benefit-grid">
      {items.map((item) => (
        <div className="benefit" key={item}>
          <Check size={16} />
          <span>{item}</span>
        </div>
      ))}
    </div>
  )
}

export function ContactBlock({
  title = 'Perjalanan yang baik dimulai dari percakapan.',
}: {
  title?: string
}) {
  return (
    <section className="contact-block" id="kontak">
      <span className="eyebrow">Mulai perjalanan Anda</span>
      <h2>{title}</h2>
      <p>
        Ceritakan kebutuhan perjalanan Anda. Tim VICKY RENTCAR MAKASSAR siap
        membantu memberikan informasi layanan dan ketersediaan armada.
      </p>
      <WhatsAppButton label="Hubungi Tim Kami" />
    </section>
  )
}

export function BookingSteps() {
  const steps = [
    [
      '01',
      'Pilih layanan',
      'Tentukan jenis kendaraan dan layanan yang paling sesuai dengan kebutuhan Anda.',
    ],
    [
      '02',
      'Hubungi tim kami',
      'Kirim detail perjalanan melalui WhatsApp untuk mendapatkan informasi lebih lanjut.',
    ],
    [
      '03',
      'Konfirmasi reservasi',
      'Setelah kebutuhan disepakati, tim kami membantu menyiapkan perjalanan Anda.',
    ],
  ]
  return (
    <div className="steps">
      {steps.map(([n, t, d], i) => (
        <div
          className="step"
          data-reveal={i % 2 === 0 ? 'left' : 'right'}
          key={n}
        >
          <span>{n}</span>
          <h3>{t}</h3>
          <p>{d}</p>
        </div>
      ))}
    </div>
  )
}
