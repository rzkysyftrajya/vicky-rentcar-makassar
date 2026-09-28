"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Phone, Shield, Award, Clock, ChevronLeft, ChevronRight, ArrowDown } from "lucide-react"
import { openWhatsApp } from "@/lib/whatsapp-conversion"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  // GAMBAR SLIDESHOW - Real armada images optimized for hero
  const heroSlides = [
{
  image: "/armada/avanza.webp",
  title: "Toyota Avanza",
  subtitle: "MPV Keluarga Terpopuler di Makassar",
      features: ["7 Penumpang", "AC Dingin", "Supir Profesional"],
      gradient: "from-blue-600/80 to-blue-800/90",
    },
    {
      image: "/armada/innova-reborn.webp",
      title: "Toyota Innova Reborn",
      subtitle: "MPV Executive Premium",
      features: ["Captain Seat", "Interior Mewah", "8 Penumpang"],
      gradient: "from-gray-600/80 to-gray-800/90",
    },
    {
      image: "/armada/fortuner.webp", 
      title: "Toyota Fortuner",
      subtitle: "SUV Tangguh 4x4",
      features: ["4WD", "Luxury", "7 Penumpang"],
      gradient: "from-slate-700/80 to-slate-900/90",
    },
    {
      image: "/armada/toyota-alphard.webp",
      title: "Toyota Alphard",
      subtitle: "MPV Luxury Executive",
      features: ["VIP Lounge", "Full Premium", "8 Penumpang"],
      gradient: "from-purple-600/80 to-purple-800/90",
    },
  ]

  useEffect(() => {
    setIsVisible(true)

    // Auto slideshow - gambar berganti otomatis setiap 5 detik
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const handleWhatsAppBooking = () => {
    const message = `Halo PT VICKY RentCar Makassar! Saya penasaran harga sewa ${heroSlides[currentSlide].title}. Mohon kirim penawaran sesuai tanggal dan kebutuhan saya, sekaligus info ketersediaannya ya.`

    const whatsappUrl = `https://wa.me/6282363389893?text=${encodeURIComponent(message)}`
    openWhatsApp(whatsappUrl)
  }

  const currentSlideData = heroSlides[currentSlide]

  return (
    <>
      {/* HERO SECTION - Clean tanpa CTA buttons */}
      <section className="relative pt-[50vh] pb-[30vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        {/* BACKGROUND SLIDESHOW - Ini yang di belakang, gambar mobil berganti-ganti */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* GAMBAR MOBIL - Ini gambar utama yang jadi background */}
              <img
                src={slide.image}
                alt={`Rental ${slide.title} Makassar`}
                className="w-full h-full object-contain object-center md:object-cover"
                loading="eager"
              />
              {/* OVERLAY GRADIENT - Layer warna di atas gambar biar text keliatan */}
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`}></div>
            </div>
          ))}
        </div>

        {/* TOMBOL NAVIGASI KIRI - Untuk ganti gambar manual */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all hover:scale-110"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </button>

        {/* TOMBOL NAVIGASI KANAN - Untuk ganti gambar manual */}
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all hover:scale-110"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </button>

        {/* INDIKATOR SLIDE - Titik-titik di bawah untuk tahu slide ke berapa */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 md:space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>

        {/* KONTEN UTAMA - Text dan info mobil di atas background */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-5xl mx-auto">
            {/* BRAND TITLE */}
            <div
              className={`mb-8 md:mb-12 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-tight">
                  <span className="text-lime-400">Jemput Bandara</span> <span className="text-blue-300">Gratis!</span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl font-semibold text-blue-200 mb-2">
                  Rental Mobil Nyaman & Terpercaya di Makassar
                </p>
                <p className="text-base md:text-lg text-lime-300">
                  Udah siapin mobilnya, kami yang antar jemput—tinggal berangkat. 
                </p>
            </div>

            {/* INFO MOBIL SAAT INI - Sync dengan gambar yang tampil */}
            <div
              className={`mb-8 md:mb-12 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: "300ms" }}
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white max-w-2xl mx-auto">
                <CardContent className="p-4 md:p-6">
                  <div className="flex flex-col md:flex-row items-center justify-between mb-4">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                      <h3 className="text-xl md:text-2xl font-bold">{currentSlideData.title}</h3>
                      <p className="text-blue-200 text-sm md:text-base">{currentSlideData.subtitle}</p>
                    </div>
                    <div className="text-center md:text-right">
                      <p className="text-sm md:text-base font-semibold text-lime-300 mb-2">
                        Penasaran harganya?
                      </p>
                      <Button
                        onClick={handleWhatsAppBooking}
                        className="bg-green-600 hover:bg-green-700 text-white"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Tanya via WhatsApp
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                    {currentSlideData.features.map((feature, index) => (
                      <Badge key={index} className="bg-white/20 text-white border-white/30 text-xs md:text-sm">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* HAPUS BAGIAN INI SEPENUHNYA:
            {/* STATISTIK TRUST */}
          </div>
        </div>

        {/* SCROLL INDICATOR - Sekarang tidak tertimpa */}
        <div
          className={`absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="flex flex-col items-center space-y-2 text-white/80">
            <span className="text-xs md:text-sm">Scroll untuk melihat lebih banyak</span>
            <ArrowDown className="w-4 h-4 md:w-5 md:h-5 animate-bounce" />
          </div>
        </div>
      </section>

      {/* CTA SECTION - Dipindah ke bawah hero, jadi section terpisah */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-lime-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white max-w-4xl mx-auto">
            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 md:mb-12">
              <Button
                onClick={handleWhatsAppBooking}
                size="lg"
                className="bg-white text-lime-600 hover:bg-gray-100 font-semibold px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all text-sm md:text-base w-full sm:w-auto ring-2 ring-white/30"
              >
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                TANYA HARGA VIA WHATSAPP
              </Button>
              <Button
                onClick={() => window.open("tel:+6282363389893")}
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-lime-600 font-semibold px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all text-sm md:text-base w-full sm:w-auto bg-transparent"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                HUBUNGI LANGSUNG
              </Button>
            </div>

            {/* TRUST BADGES */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
              {[
                { icon: Shield, text: "Asuransi Lengkap", desc: "Semua kendaraan diasuransikan" },
                { icon: Award, text: "Driver Bersertifikat", desc: "Driver berpengalaman & profesional" },
                { icon: Clock, text: "Layanan 24/7", desc: "Siap melayani kapan saja" },
              ].map((badge, index) => (
                <div
                  key={index}
                  className="bg-white/95 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center shadow-lg hover:shadow-xl transition-all hover:scale-105 text-gray-900"
                >
                  <badge.icon className="w-6 h-6 md:w-8 md:h-8 text-lime-600 mx-auto mb-3" />
                  <h3 className="text-sm md:text-base font-bold mb-2">{badge.text}</h3>
                  <p className="text-xs md:text-sm text-gray-600">{badge.desc}</p>
                </div>
              ))}
            </div>

            {/* CONTACT INFO */}
            <div className="mt-8 md:mt-12 text-center">
              <p className="text-white/90 mb-2 text-sm md:text-base">Hubungi Kami Sekarang</p>
              <p className="text-xl md:text-2xl font-bold text-white">+62 823 6338 9893</p>
              <p className="text-white/80 text-xs md:text-sm mt-2">WhatsApp • Telepon • SMS</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
