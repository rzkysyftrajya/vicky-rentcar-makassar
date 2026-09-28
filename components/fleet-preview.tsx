"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Fuel, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { fleetData } from "@/lib/fleet-data";
import { openWhatsApp } from "@/lib/whatsapp-conversion";

// Fallback image helper
const getCarImageFallback = (carName: string) => {
  const filename = carName
    .toLowerCase()
    .replace(/\\s+/g, '-')
    .replace(/[^\\w-]/g, '');
  return `/armada/${filename}.webp`;
};

export function FleetPreview() {
  const popularCars = fleetData.slice(0, 6).map(car => ({
    name: car.name,
    image: car.image,
    category: car.category,
    seats: `${car.seats} kursi`,
    fuel: car.fuel,
    year: car.year,
    features: car.features,
  }));

  const handleWhatsAppBooking = (carName: string) => {
    const message = `Halo PT VICKY RentCar Makassar! Saya penasaran harga sewa ${carName}. Mohon kirim penawaran sesuai tanggal dan kebutuhan saya, sekaligus info ketersediaannya ya.`;
    const whatsappUrl = `https://wa.me/6282363389893?text=${encodeURIComponent(message)}`;
    openWhatsApp(whatsappUrl);
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="orbitron text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Rental Mobil Makassar - Armada Terlengkap
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Belum tahu mobil yang cocok? Lihat armada favorit, lalu chat kami untuk
            penawaran yang pas dengan rencana perjalananmu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {popularCars.map((car, index) => (
            <Card
              key={index}
              className="car-card glass-dark border-emerald-500/30 hover:border-emerald-400/50 overflow-hidden flex flex-col h-full"
            >
              <div className="relative">
                <img
                  src={car.image || getCarImageFallback(car.name)}
                  alt={car.name}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `/placeholder.jpg`;
                  }}
                />
                <Badge className="absolute top-4 left-4 bg-emerald-500">
                  {car.year}
                </Badge>
                <Badge className="absolute top-4 right-4 bg-blue-500">
                  {car.category}
                </Badge>
              </div>

              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="orbitron text-xl font-bold text-center mb-4 text-gray-900">
                  {car.name}
                </h3>

                  <div className="text-center rounded-lg p-4 mb-4 border border-emerald-500/30 bg-emerald-50">
                    <p className="font-semibold text-gray-900">Setiap perjalanan punya kebutuhan berbeda.</p>
                    <p className="text-sm text-gray-600 mt-1">Tanya penawaran sesuai tanggal, durasi, dan layanan yang kamu pilih.</p>
                  </div>

                {/* Specifications */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <Fuel className="w-4 h-4 text-emerald-600" />
                    <span className="text-gray-600">{car.fuel}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-600">{car.seats}</span>
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-auto">
                  <Button
                    onClick={() => handleWhatsAppBooking(car.name)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>TANYA HARGA VIA WHATSAPP</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Fleet Button */}
        <div className="text-center">
          <Link href="/armada">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-lg flex items-center space-x-3 mx-auto"
            >
              <span>LIHAT SEMUA ARMADA</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
