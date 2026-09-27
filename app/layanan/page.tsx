"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Car, UserCheck, MapPin, Mountain, Shield, Clock, CreditCard, CheckCircle, MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"
import { openWhatsApp } from "@/lib/whatsapp-conversion"

export default function LayananPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleWhatsAppContact = () => {
    const message = "Halo PT VRN RentCar! Saya ingin mengetahui lebih lanjut tentang layanan rental mobil Anda."
    const whatsappUrl = `https://wa.me/6282363389893?text=${encodeURIComponent(message)}`
    openWhatsApp(whatsappUrl)
  }

  const serviceTypes = [
    {
      title: "Sewa Harian",
      icon: Car,
      description: "Buat kamu yang butuh mobil nyaman untuk harian—urusan rute dan jadwal lebih simpel, layanan tetap rapi dan tepat waktu.",
      features: [
        "Unit bersih & terawat",
        "Respon cepat sebelum berangkat",
        "Driver (opsional) biar perjalanan makin santai",
        "Cocok untuk kerja, kuliner, dan acara",
      ],
      color: "emerald",
    },
    {
      title: "Sewa Bulanan",
      icon: UserCheck,
      description: "Tenang, aktivitas satu bulan jadi lebih praktis. Mobil siap dipakai dengan standar layanan yang konsisten—tanpa ribet.",
      features: [
        "Harga lebih hemat per periode",
        "Fleksibel untuk kebutuhan bulanan",
        "Performa armada tetap terjaga",
        "Support 24/7 saat ada kebutuhan",
      ],
      color: "blue",
    },
    {
      title: "Wedding Car",
      icon: MapPin,
      description: "Mau hari bahagia terasa lebih lancar? Kami siapkan kendaraan yang nyaman, rapi, dan driver profesional supaya kamu fokus ke momen.",
      features: [
        "Kendaraan nyaman untuk acara spesial",
        "Driver profesional & berpengalaman",
        "Tepat waktu dan komunikasi jelas",
        "Bisa disesuaikan kebutuhan acara",
      ],
      color: "emerald",
    },
    {
      title: "Paket Wisata",
      icon: Mountain,
      description: "Paket lengkap destinasi populer Makassar—dibantu driver dan all-in biar kamu tinggal menikmati perjalanan.",
      features: [
        "Pantai Losari dan Anjungan Pantai",
        "Pulau Samalona dan Pulau Kodingareng Keke",
        "Benteng Rotterdam dan wisata sejarah",
        "Malino Highlands dan Air Terjun Takapala",
        "Paket custom sesuai keinginan",
      ],
      color: "blue",
    },
  ]

  return (
    <div className="min-h-screen pt-20 pb-16 overflow-x-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="orbitron text-4xl md:text-6xl font-bold mb-6 gradient-text">Layanan Kami</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Berbagai pilihan layanan rental mobil yang fleksibel sesuai kebutuhan perjalanan Anda
          </p>
        </div>

        {/* Service Types */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {[...serviceTypes].map((service, index) => (
            <Card
              key={index}
              className={`glass-dark border-${service.color}-500/30 hover:border-${service.color}-400/50 transition-all car-card transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
                transitionDuration: "800ms",
              }}
            >
              <CardHeader>
                <div
                  className={`p-4 rounded-full bg-${service.color}-500/20 w-16 h-16 mx-auto mb-4 flex items-center justify-center`}
                >
                  <service.icon className={`w-8 h-8 text-${service.color}-600`} />
                </div>
                <CardTitle className={`orbitron text-2xl text-center text-${service.color}-600`}>
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-center">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className={`w-5 h-5 text-${service.color}-600 flex-shrink-0`} />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Terms & Conditions */}
        <div className="glass-dark rounded-2xl p-8 mb-16">
          <h2 className="orbitron text-3xl font-bold text-center mb-8 gradient-text">Syarat & Ketentuan</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-emerald-600 mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-2" />
                Persyaratan Umum
              </h3>
              <ul className="space-y-3">
                {[
                  "KTP/SIM yang masih berlaku",
                  "Deposit sesuai kategori mobil",
                  "Minimal sewa 1 hari",
                  "Area coverage Makassar dan sekitarnya",
                  "Usia minimal 21 tahun untuk lepas kunci",
                ].map((requirement, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-600">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
                <CreditCard className="w-6 h-6 mr-2" />
                Ketentuan Pembayaran
              </h3>
              <ul className="space-y-3">
                {[
                  "DP minimal 50% untuk booking",
                  "Pelunasan sebelum pengambilan mobil",
                  "Deposit dikembalikan setelah mobil kembali",
                  "Pembayaran cash atau transfer",
                  "Biaya BBM ditanggung penyewa",
                ].map((payment, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-600">{payment}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Service Guarantees */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: Shield,
              title: "Asuransi Lengkap",
              description: "Semua kendaraan dilengkapi asuransi comprehensive untuk keamanan perjalanan Anda",
            },
            {
              icon: Clock,
              title: "Layanan 24/7",
              description: "Tim customer service kami siap melayani Anda kapan saja, termasuk hari libur",
            },
            {
              icon: Car,
              title: "Armada Terawat",
              description: "Perawatan rutin dan pengecekan berkala memastikan kondisi kendaraan prima",
            },
          ].map((guarantee, index) => (
            <Card
              key={index}
              className="glass-effect border-emerald-500/30 text-center hover:border-emerald-400/50 transition-all"
            >
              <CardContent className="p-6">
                <div className="p-4 rounded-full bg-emerald-500/20 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <guarantee.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{guarantee.title}</h3>
                <p className="text-gray-600 text-sm">{guarantee.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Paket Destinasi Populer Makassar */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="orbitron text-3xl font-bold mb-4 gradient-text">Paket Destinasi Populer Makassar</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All-in (Mobil + Driver + BBM) biar liburan lebih nyaman dan minim drama.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: "Malino Highlands",
                highlight: "View pegunungan & udara segar",
                price: "Rp 1.800.000 /paket",
                bullets: ["Include Mobil + Driver + BBM", "Rute wisata Malino & sekitarnya", "Komunikasi sebelum keberangkatan"],
              },
              {
                name: "Rammang-Rammang",
                highlight: "Spot alam & perahu",
                price: "Rp 2.200.000 /paket",
                bullets: ["Include Mobil + Driver + BBM", "Penjemputan & pengantaran", "Driver membantu arah lokasi"],
              },
              {
                name: "City Tour Makassar",
                highlight: "Kota, kuliner, dan ikon Makassar",
                price: "Rp 1.350.000 /paket",
                bullets: ["Include Mobil + Driver + BBM", "Cocok untuk keluarga & rombongan", "Tersedia pilihan durasi"],
              },
            ].map((pkg, idx) => (
              <Card
                key={idx}
                className="glass-dark border-emerald-500/30 hover:border-emerald-400/50 transition-all car-card"
              >
                <CardContent className="p-7">
                  <div className="mb-3">
                    <div className="inline-flex items-center rounded-full bg-emerald-500/20 px-4 py-1 text-emerald-600 font-semibold text-sm">
                      Paket All-in
                    </div>
                  </div>
                  <h3 className="orbitron text-2xl font-bold mb-2 text-gray-900">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.highlight}</p>
                  <div className="text-3xl font-bold text-emerald-600 mb-4">{pkg.price}</div>
                  <ul className="space-y-2">
                    {pkg.bullets.map((b, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button
                      onClick={() => {
                        const message = `Halo PT VRN RentCar! Saya tertarik booking paket destinasi: ${pkg.name}. Mohon estimasi jadwal, ketersediaan, dan detail all-in (Mobil + Driver + BBM).`;
                        const whatsappUrl = `https://wa.me/6282363389893?text=${encodeURIComponent(message)}`;
                        openWhatsApp(whatsappUrl);
                      }}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg"
                    >
                      Booking via WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="glass-dark rounded-2xl p-8 text-center">
          <h2 className="orbitron text-3xl font-bold mb-4 gradient-text">Siap Memulai Perjalanan Anda?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran terbaik untuk kebutuhan rental mobil
            Anda
          </p>
          <Button
            onClick={handleWhatsAppContact}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg flex items-center space-x-3 mx-auto pulse-glow"
          >
            <MessageCircle className="w-6 h-6" />
            <span>KONSULTASI GRATIS VIA WHATSAPP</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
