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
    maticPrice: car.maticPrice,
    manualPrice: car.manualPrice,
    seats: `${car.seats} kursi`,
    fuel: car.fuel,
    year: car.year,
    features: car.features,
    allInPrice: car.allInPrice,
    lepasKunci: car.lepasKunci,
  }));

  const handleWhatsAppBooking = (carName: string) => {
    const message = `Halo PT VICKY RentCar Makassar! Saya tertarik menyewa ${carName}. Info ketersediaan, harga + supir, dan booking ya. Terima kasih!`;
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
            Pilihan kendaraan favorit pelanggan dengan kualitas terbaik dan
            harga kompetitif
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

                {/* Pricing Display */}
                <div className="bg-gray-800/50 rounded-lg p-4 mb-4 border border-emerald-500/30">
                  {car.allInPrice ? (
                    <div className="text-center">
                      <div className="text-sm text-yellow-600 font-semibold mb-1">
                        PAKET ALL IN
                      </div>
                      <div className="text-lg font-bold text-gray-900 mb-2">
                        {car.allInPrice}
                      </div>
                      <div className="text-sm text-blue-600 font-semibold mb-1">
                        LEPAS KUNCI
                      </div>
                      <div className="text-sm font-bold text-gray-900">
                        {car.lepasKunci}
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="border-r border-gray-600 pr-2">
                        <div className="text-sm text-emerald-600 font-semibold mb-1">
                          MATIC
                        </div>
                        <div className="text-lg font-bold text-gray-900">
                          {car.maticPrice}
                        </div>
                      </div>
                      <div className="pl-2">
                        <div className="text-sm text-blue-600 font-semibold mb-1">
                          MANUAL
                        </div>
                        <div className="text-lg font-bold text-gray-900">
                          {car.manualPrice}
                        </div>
                      </div>
                    </div>
                  )}

                <div className="text-center mt-4 pt-4 border-t border-gray-600">
                    <div className="text-sm font-bold text-yellow-600 mb-2">
                      MOBIL + SUPIR 12 JAM
                    </div>
                    <div className="text-xs text-emerald-600 font-semibold">
                      GRATIS JEMPUT AHY
                    </div>
                  </div>
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
                    <span>PESAN VIA WHATSAPP</span>
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
