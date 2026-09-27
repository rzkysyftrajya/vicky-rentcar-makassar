"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageCircle, Phone, CalendarIcon, MapPin, Users, Shield, Check } from "lucide-react"
import { format } from "date-fns"
import { id } from "date-fns/locale"
import { openWhatsApp } from "@/lib/whatsapp-conversion"

interface BookingFormData {
  name: string
  phone: string
  pickupDate: Date | undefined
  pickupLocation: string
  dropoffLocation: string
  passengers: string
  carPreference: string
  message: string
}

export function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    phone: "",
    pickupDate: undefined,
    pickupLocation: "",
    dropoffLocation: "",
    passengers: "",
    carPreference: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleWhatsApp = async () => {
    setLoading(true)
    const message = `Halo PT VICKY RentCar Makassar!

NAMA: ${formData.name}
HP: ${formData.phone}
TGL PICKUP: ${formData.pickupDate ? format(formData.pickupDate, "dd/MM/yyyy", { locale: id }) : "-"}
LOKASI PICKUP: ${formData.pickupLocation}
LOKASI DROP: ${formData.dropoffLocation}
PENUMPANG: ${formData.passengers}
MOBIL PILIHAN: ${formData.carPreference}
PESAN: ${formData.message}

Mohon info ketersediaan dan harga terbaik!`

    const whatsappUrl = `https://wa.me/6282363389893?text=${encodeURIComponent(message)}`
    openWhatsApp(whatsappUrl)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setLoading(false)
  }

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-lime-50 to-blue-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-lime-600 to-blue-600 bg-clip-text text-transparent">
            Booking Mudah &amp; Cepat
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Isi form di bawah, tim kami akan hubungi dalam 5 menit via WhatsApp. Harga mulai Rp 300.000/hari!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Form */}
          <div className={submitted ? "animate-pulse" : ""}>
            <div className="space-y-6 bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-lime-200">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <Label className="text-sm font-semibold text-gray-800 mb-2 block">Nama Lengkap</Label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe"
                    className="h-12"
                  />
                </div>
                <div>
                  <Label className="text-sm font-semibold text-gray-800 mb-2 block">No. WhatsApp</Label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="08xxxxxxxxx"
                    className="h-12"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <Label className="text-sm font-semibold text-gray-800 mb-2 block">Tgl. Ambil Mobil</Label>
                  <Input type="date" className="h-12" /> {/* Simplified, add full Calendar later */}
                </div>
                <div>
                  <Label className="text-sm font-semibold text-gray-800 mb-2 block">Penumpang</Label>
                  <Select value={formData.passengers} onValueChange={(v) => setFormData({...formData, passengers: v})}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Pilih jumlah penumpang" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-2">1-2 orang</SelectItem>
                      <SelectItem value="4-6">4-6 orang</SelectItem>
                      <SelectItem value="7+">7+ orang</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <Label className="text-sm font-semibold text-gray-800 mb-2 block">Ambil Di</Label>
                  <Input
                    value={formData.pickupLocation}
                    onChange={(e) => setFormData({...formData, pickupLocation: e.target.value})}
                    placeholder="Bandara/Ahmad Yani"
                    className="h-12"
                  />
                </div>
                <div>
                  <Label className="text-sm font-semibold text-gray-800 mb-2 block">Tipe Mobil</Label>
                  <Select value={formData.carPreference} onValueChange={(v) => setFormData({...formData, carPreference: v})}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="City/MPV/SUV" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="city">City Car (Rp 300rb)</SelectItem>
                      <SelectItem value="mpv">MPV Keluarga (Rp 400rb)</SelectItem>
                      <SelectItem value="suv">SUV Premium (Rp 600rb+)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label className="text-sm font-semibold text-gray-800 mb-2 block">Catatan Tambahan</Label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Keperluan: Wisata/Bisnis, Durasi sewa, dll"
                  className="w-full p-4 h-24 rounded-xl border border-gray-300 focus:border-lime-500 focus:ring-2 focus:ring-lime-200 resize-none"
                />
              </div>

              <Button
                onClick={handleWhatsApp}
                disabled={loading || submitted}
                size="lg"
                className="w-full bg-gradient-to-r from-lime-600 to-emerald-600 hover:from-lime-700 hover:to-emerald-700 h-14 text-lg font-bold shadow-xl mt-4"
              >
                {loading ? "Mengirim..." : submitted ? "✅ Dikirim ke WA!" : (
                  <>
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Kirim Booking ke WhatsApp
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-emerald-200">
              <h3 className="text-2xl font-bold text-emerald-600 mb-4 flex items-center">
                <Shield className="w-8 h-8 mr-3" /> Mengapa Booking Sekarang?
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><Check className="w-5 h-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" /><span>Respon WA <strong>5 menit</strong></span></li>
                <li className="flex items-start"><Check className="w-5 h-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" /><span>Harga spesial <strong>Rp 300.000/hari</strong></span></li>
                <li className="flex items-start"><Check className="w-5 h-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" /><span>Gratis jemput <strong>Bandar Udara Internasional Sultan Hasanuddin</strong></span></li>
                <li className="flex items-start"><Check className="w-5 h-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" /><span><strong>Driver bersertifikat</strong> 8+ tahun pengalaman</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
