 "use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Phone, Clock, Shield, MapPin, DollarSign, Users, Car } from 'lucide-react'
import { openWhatsApp } from "@/lib/whatsapp-conversion"

const faqs = [
  {
    id: 'harga',
    question: 'Berapa harga sewa mobil termurah?',
    answer: 'Mulai Rp 300.000/hari untuk City Car (Ayla, Agya, Brio) + supir 12 jam. MPV keluarga Rp 350.000+, SUV premium Rp 600.000+, Luxury Rp 1.3jt+. Harga all-in tanpa biaya tersembunyi.',
  },
  {
    id: 'supir',
    question: 'Apakah termasuk supir?',
    answer: 'Ya! Semua harga sudah include supir profesional bersertifikat + BBM 12 jam / 200km. Overtime Rp 75.000/jam, tol & parkir ditanggung customer.',
  },
  {
    id: 'jemput',
    question: 'Apakah ada layanan jemput gratis?',
    answer: 'Gratis jemput bandara Ahmad Yani (max 4 orang, 1x trip). Area Semarang kota gratis. Luar kota biaya tambahan nego. Order WA aja ya!',
  },
  {
    id: 'jaminan',
    question: 'Apa syarat sewa dan jaminan?',
    answer: 'KTP asli + NPWP/surat nikah untuk lepas kunci. Sewa + supir cukup data WA + DP 50%. Asuransi full cover semua kendaraan.',
  },
  {
    id: 'armada',
    question: 'Armada apa saja yang tersedia?',
    answer: 'City Car (5-7 kursi), MPV (Avanza, Ertiga, Xpander), SUV (Rush, Terios, Fortuner), Luxury (Alphard, Premio, Elf 20 kursi). Lihat lengkap di /armada.',
  },
  {
    id: 'waktu',
    question: 'Jam operasional dan booking kapan?',
    answer: '24/7 sepanjang tahun! Booking minimal H-1, urgent same day OK. Konfirmasi via WA dalam 5 menit.',
  },
]

export function FAQSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-lime-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent">
Rental Mobil Makassar
          </h2>
          <p className="text-xl text-gray-600">
            Pertanyaan umum pelanggan tentang harga, syarat, dan layanan
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <AccordionTrigger className="px-8 py-6 hover:no-underline h-auto">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-lime-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    {faq.id === 'harga' && <DollarSign className="w-6 h-6 text-white" />}
                    {faq.id === 'supir' && <Users className="w-6 h-6 text-white" />}
                    {faq.id === 'jemput' && <MapPin className="w-6 h-6 text-white" />}
                    {faq.id === 'jaminan' && <Shield className="w-6 h-6 text-white" />}
                    {faq.id === 'armada' && <Car className="w-6 h-6 text-white" />}
                    {faq.id === 'waktu' && <Clock className="w-6 h-6 text-white" />}
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-bold text-xl text-gray-900 mb-1">{faq.question}</h3>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-8 pt-0 border-t border-gray-100">
                <p className="text-gray-700 leading-relaxed text-lg">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Quick CTA */}
        <div className="text-center mt-16 p-8 bg-white rounded-2xl shadow-xl border-2 border-lime-200">
          <h3 className="text-2xl font-bold text-emerald-600 mb-4">Masih Ragu?</h3>
          <p className="text-gray-600 mb-6 text-lg">Chat WA sekarang dapatkan <strong>penawaran spesial + promo hari ini</strong></p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-lime-600 to-emerald-600 hover:from-lime-700 text-xl px-12 py-6 font-bold shadow-xl"
            onClick={() => {
              const message = 'Halo, saya mau booking rental mobil Makassar. Tolong info promo dan ketersediaan ya!'
              openWhatsApp(`https://wa.me/6282363389893?text=${encodeURIComponent(message)}`)
            }}
          >
            <Phone className="w-6 h-6 mr-2" />
            Chat WhatsApp Sekarang
          </Button>
        </div>
      </div>
    </section>
  )
}
