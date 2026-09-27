"use client"

import Link from "next/link"
import { Car, Phone, MessageCircle, Instagram, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { openWhatsApp } from "@/lib/whatsapp-conversion"

export function Footer() {
  const handleWhatsAppContact = () => {
    openWhatsApp("https://wa.me/6282363389893")
  }

  return (
    <footer className="bg-gray-900 text-white border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-emerald-600">
                <Car className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-white">PT VRN RentCar</div>
                <div className="text-sm text-emerald-400">PT VICKY RENTAL NUSANTARA</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Jasa rental mobil terbaik dan murah di Makassar dengan pengalaman 8+ tahun. Melayani Makassar, Maros, Gowa, Malino, dan sekitarnya dengan armada premium dan driver bersertifikat.
            </p>
            <div className="flex space-x-4">
              <Button onClick={handleWhatsAppContact} size="sm" className="bg-green-600 hover:bg-green-700">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
              <Button
                onClick={() => window.open("https://instagram.com")}
                size="sm"
                variant="outline"
                className="border-pink-500 text-pink-400 hover:bg-pink-500/20"
              >
                <Instagram className="w-4 h-4 mr-2" />
                Instagram
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-emerald-400 mb-6">Menu Utama</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Beranda" },
                { href: "/tentang", label: "Tentang Kami" },
                { href: "/armada", label: "Armada" },
                { href: "/layanan", label: "Layanan" },
                { href: "/galeri", label: "Galeri" },
                { href: "/testimoni", label: "Testimoni" },
                { href: "/kontak", label: "Kontak" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-blue-400 mb-6">Kontak Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">+62 823 6338 9893</div>
                  <div className="text-gray-400 text-xs">Telepon & WhatsApp</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Jl. Minasa Upa No.9 Komp m1, Gn. Sari</div>
                  <div className="text-gray-400 text-xs">Kec. Rappocini, Kota Makassar, Sulawesi Selatan 90233</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">24/7 Service</div>
                  <div className="text-gray-400 text-xs">Selalu siap melayani</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="text-lg font-bold text-emerald-400 mb-6">Metode Pembayaran</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-medium mb-2">Transfer Bank</h4>
                <div className="text-gray-400 text-sm space-y-1">
                  <div>• BCA</div>
                  <div>• Mandiri</div>
                  <div>• BRI</div>
                </div>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">Digital Payment</h4>
                <div className="text-gray-400 text-sm space-y-1">
                  <div>• GoPay</div>
                  <div>• OVO</div>
                  <div>• DANA</div>
                </div>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">Tunai</h4>
                <div className="text-gray-400 text-sm">Pembayaran cash saat pengambilan</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2019 PT VRN RentCar - PT VICKY RENTAL NUSANTARA. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Pengalaman 8+ Tahun</span>
              <span>•</span>
              <span>1000+ Pelanggan Puas</span>
              <span>•</span>
              <span>Layanan 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
