"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { openWhatsApp } from "@/lib/whatsapp-conversion"

export function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const message =
      "Halo VRN Makassar! Saya tertarik dengan layanan rental mobil Anda. Mohon informasi lebih lanjut."

    const whatsappUrl = `https://wa.me/6282363389893?text=${encodeURIComponent(message)}`

    openWhatsApp(whatsappUrl)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="bg-green-600 hover:bg-green-700 text-white rounded-full w-16 h-16 shadow-2xl pulse-glow floating-animation"
        size="icon"
      >
        <MessageCircle className="w-8 h-8" />
      </Button>

      <div className="absolute -top-12 right-0 bg-green-600 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-90">
        Chat WhatsApp
      </div>
    </div>
  )
}
