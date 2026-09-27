"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import {
  Car,
  Users,
  Fuel,
  Settings,
  MessageCircle,
  Search,
  Filter,
  ContrastIcon as Compare,
  Star,
  Heart,
} from "lucide-react"
import { fleetData } from "@/lib/fleet-data"
import { openWhatsApp } from "@/lib/whatsapp-conversion"

// Fallback image helper
const getCarImageFallback = (carName: string) => {
  const filename = carName
    .toLowerCase()
    .replace(/\\s+/g, '-')
    .replace(/[^\\w-]/g, '');
  return `/armada/${filename}.webp`;
};

export default function ArmadaPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedTransmission, setSelectedTransmission] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [priceRange, setPriceRange] = useState([0, 3000000])
  const [showFilters, setShowFilters] = useState(false)
  const [compareList, setCompareList] = useState<string[]>([])
  const [favorites, setFavorites] = useState<string[]>([])
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("name")
  const [isVisible, setIsVisible] = useState(false)

  // Tambahkan state untuk smooth transitions
  const [isLoading, setIsLoading] = useState(false)
  const [filterAnimation, setFilterAnimation] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Tambahkan smooth filter transition
  useEffect(() => {
    setFilterAnimation(true)
    const timer = setTimeout(() => setFilterAnimation(false), 300)
    return () => clearTimeout(timer)
  }, [selectedCategory, selectedTransmission, searchQuery])

  const categories = [
    { id: "all", name: "Semua Kategori", count: fleetData.length },
    { id: "city", name: "City Car", count: fleetData.filter((car) => car.category === "city").length },
    { id: "mpv", name: "MPV Keluarga", count: fleetData.filter((car) => car.category === "mpv").length },
    { id: "suv", name: "SUV Compact", count: fleetData.filter((car) => car.category === "suv").length },
    { id: "executive", name: "Executive MPV", count: fleetData.filter((car) => car.category === "executive").length },
    { id: "premium", name: "Premium SUV", count: fleetData.filter((car) => car.category === "premium").length },
    { id: "luxury", name: "Luxury & Commercial", count: fleetData.filter((car) => car.category === "luxury").length },
  ]

  // Advanced filtering
  const filteredFleet = fleetData
    .filter((car) => {
      const categoryMatch = selectedCategory === "all" || car.category === selectedCategory
      const transmissionMatch =
        selectedTransmission === "all" ||
        (selectedTransmission === "matic" && car.maticPrice) ||
        (selectedTransmission === "manual" && car.manualPrice)
      const searchMatch = car.name.toLowerCase().includes(searchQuery.toLowerCase())

      // Price filtering
      const carPrice = car.maticPrice
        ? Number.parseInt(car.maticPrice.replace(/[^\d]/g, ""))
        : car.allInPrice
          ? Number.parseInt(car.allInPrice.replace(/[^\d]/g, ""))
          : 0
      const priceMatch = carPrice >= priceRange[0] && carPrice <= priceRange[1]

      return categoryMatch && transmissionMatch && searchMatch && priceMatch
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          const priceA = a.maticPrice ? Number.parseInt(a.maticPrice.replace(/[^\d]/g, "")) : 0
          const priceB = b.maticPrice ? Number.parseInt(b.maticPrice.replace(/[^\d]/g, "")) : 0
          return priceA - priceB
        case "price-high":
          const priceA2 = a.maticPrice ? Number.parseInt(a.maticPrice.replace(/[^\d]/g, "")) : 0
          const priceB2 = b.maticPrice ? Number.parseInt(b.maticPrice.replace(/[^\d]/g, "")) : 0
          return priceB2 - priceA2
        case "seats":
          return Number.parseInt(b.seats) - Number.parseInt(a.seats)
        default:
          return a.name.localeCompare(b.name)
      }
    })

  const handleWhatsAppBooking = (carName: string) => {
    const message = `Halo PT VICKY RentCar Makassar! Saya tertarik untuk menyewa ${carName}. Mohon informasi lebih lanjut mengenai ketersediaan dan prosedur booking.`;
    const whatsappUrl = `https://wa.me/6282363389893?text=${encodeURIComponent(message)}`;
    openWhatsApp(whatsappUrl);
  }

  const toggleCompare = (carName: string) => {
    setCompareList((prev) =>
      prev.includes(carName) ? prev.filter((name) => name !== carName) : [...prev.slice(0, 2), carName],
    )
  }

  const toggleFavorite = (carName: string) => {
    setFavorites((prev) => (prev.includes(carName) ? prev.filter((name) => name !== carName) : [...prev, carName]))
  }

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* ENHANCED HEADER */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <Badge className="bg-lime-100 text-lime-800 px-6 py-2 text-lg mb-6">Armada Premium</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Armada <span className="text-lime-600">Premium</span> Kami
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pilihan lengkap kendaraan berkualitas untuk setiap kebutuhan perjalanan Anda
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <Badge className="bg-blue-100 text-blue-800">{filteredFleet.length} Mobil Tersedia</Badge>
            <Badge className="bg-green-100 text-green-800">Harga Mulai Rp 300K</Badge>
            <Badge className="bg-purple-100 text-purple-800">Booking 24/7</Badge>
          </div>
        </div>

        {/* ADVANCED SEARCH & FILTERS */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-12 border">
          {/* Search Bar */}
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Cari mobil (contoh: Avanza, Innova, Fortuner...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-lg text-gray-900"
              />
            </div>
            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
              className="h-12 px-6 border-2 border-lime-300 text-lime-600 hover:bg-lime-50"
            >
              <Filter className="w-5 h-5 mr-2" />
              Filter {showFilters ? "Tutup" : "Buka"}
            </Button>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="grid lg:grid-cols-4 gap-6 p-6 bg-gray-50 rounded-xl">
              {/* Category Filter */}
              <div>
                <h3 className="font-semibold mb-3 text-lime-600">Kategori</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                        selectedCategory === category.id
                          ? "bg-lime-500 text-white"
                          : "bg-white hover:bg-lime-50 text-gray-700"
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Transmission Filter */}
              <div>
                <h3 className="font-semibold mb-3 text-blue-600">Transmisi</h3>
                <div className="space-y-2">
                  {[
                    { id: "all", name: "Semua" },
                    { id: "matic", name: "Matic" },
                    { id: "manual", name: "Manual" },
                  ].map((transmission) => (
                    <button
                      key={transmission.id}
                      onClick={() => setSelectedTransmission(transmission.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                        selectedTransmission === transmission.id
                          ? "bg-blue-500 text-white"
                          : "bg-white hover:bg-blue-50 text-gray-700"
                      }`}
                    >
                      {transmission.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-semibold mb-3 text-purple-600">Rentang Harga</h3>
                <div className="space-y-3">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={3000000}
                    min={0}
                    step={100000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Rp {priceRange[0].toLocaleString()}</span>
                    <span>Rp {priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Sort Options */}
              <div>
                <h3 className="font-semibold mb-3 text-gray-600">Urutkan</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-2 border rounded-lg bg-white text-gray-900"
                >
                  <option value="name">Nama A-Z</option>
                  <option value="price-low">Harga Terendah</option>
                  <option value="price-high">Harga Tertinggi</option>
                  <option value="seats">Jumlah Kursi</option>
                </select>
              </div>
            </div>
          )}

          {/* View Mode & Compare */}
          <div className="flex justify-between items-center mt-6">
            <div className="flex space-x-2">
              <Button
                onClick={() => setViewMode("grid")}
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
              >
                Grid
              </Button>
              <Button
                onClick={() => setViewMode("list")}
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
              >
                List
              </Button>
            </div>

            {compareList.length > 0 && (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Bandingkan ({compareList.length})</span>
                <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                  <Compare className="w-4 h-4 mr-1" />
                  Bandingkan
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* FLEET GRID/LIST */}
        <div
          className={`${
            viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-6"
          } transition-all duration-500`}
        >
          {filteredFleet.map((car, index) => (
            <Card
              key={index}
              className={`car-card glass-dark border-emerald-500/30 hover:border-emerald-400/50 overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:scale-105 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              } ${filterAnimation ? "animate-pulse" : ""}
              ${viewMode === "list" ? "flex flex-col md:flex-row items-center md:items-start" : ""}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`relative ${viewMode === "list" ? "w-full md:w-64 h-48 md:h-auto flex-shrink-0" : ""}`}>
                {/* GAMBAR MOBIL */}
                <img
                  src={car.image || getCarImageFallback(car.name)}
                  alt={car.name}
                  className={`${viewMode === "list" ? "h-full w-full object-cover" : "h-48 w-full object-cover"} group-hover:scale-110 transition-transform duration-500`}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `/placeholder.jpg`;
                  }}
                />

                {/* Overlay Actions */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button
                    onClick={() => toggleFavorite(car.name)}
                    className={`p-2 rounded-full backdrop-blur-sm transition-all ${
                      favorites.includes(car.name)
                        ? "bg-red-500 text-white"
                        : "bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white"
                    }`}
                  >
                    <Heart className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => toggleCompare(car.name)}
                    className={`p-2 rounded-full backdrop-blur-sm transition-all ${
                      compareList.includes(car.name)
                        ? "bg-orange-500 text-white"
                        : "bg-white/80 text-gray-600 hover:bg-orange-500 hover:text-white"
                    }`}
                  >
                    <Compare className="w-4 h-4" />
                  </button>
                </div>

                <Badge className="absolute top-4 left-4 bg-emerald-600 text-white">{car.year}</Badge>
              </div>

              <CardContent className={`p-6 ${viewMode === "list" ? "flex-1 w-full" : ""}`}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{car.name}</h3>
                  <div className="flex text-yellow-600">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Pricing Display */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 mb-4 border">
                  {car.allInPrice ? (
                    <div className="text-center">
                      <div className="text-sm text-yellow-600 font-semibold mb-1">PAKET ALL IN</div>
                      <div className="text-2xl font-bold text-gray-900 mb-2">{car.allInPrice}</div>
                      <div className="text-sm text-blue-600 font-semibold mb-1">LEPAS KUNCI</div>
                      <div className="text-sm font-bold text-gray-900">{car.lepasKunci}</div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="border-r border-gray-200 pr-2">
                        {" "}
                        {/* Kotak 1: MATIC */}
                        <div className="text-sm text-emerald-600 font-semibold mb-1">MATIC</div>
                        <div className="text-lg font-bold text-gray-900">{car.maticPrice || "N/A"}</div>
                      </div>
                      <div className="pl-2">
                        {" "}
                        {/* Kotak 2: MANUAL */}
                        <div className="text-sm text-blue-600 font-semibold mb-1">MANUAL</div>
                        <div className="text-lg font-bold text-gray-900">{car.manualPrice || "N/A"}</div>
                      </div>
                    </div>
                  )}

                  <div className="text-center mt-4 pt-4 border-t border-gray-200">
                    {" "}
                    {/* Kotak 3: SEWA MOBIL + SUPIR */}
                    <div className="text-sm font-bold text-yellow-600 mb-2">SEWA MOBIL + SUPIR</div>
                    <div className="text-xs text-emerald-600 font-semibold">HUBUNGI KAMI SEKARANG</div>
                  </div>
                </div>

                {/* Specifications */}
                <div
                  className={`grid gap-4 mb-6 text-sm ${viewMode === "list" ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-2"}`}
                >
                  <div className="flex items-center space-x-2">
                    <Fuel className="w-4 h-4 text-emerald-600" />
                    <span className="text-gray-600">{car.fuel}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-600">{car.seats} kursi</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Settings className="w-4 h-4 text-emerald-600" />
                    <span className="text-gray-600">AC</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Car className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-600">{car.features}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button
                    onClick={() => handleWhatsAppBooking(car.name)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center space-x-2 transform hover:scale-105 transition-all"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>PESAN VIA WHATSAPP</span>
                  </Button>

                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm" className="text-xs bg-transparent">
                      Detail Lengkap
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs bg-transparent">
                      Cek Ketersediaan
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* NO RESULTS */}
        {filteredFleet.length === 0 && (
          <div className="text-center py-16">
            <Car className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Tidak ada mobil yang ditemukan</h3>
            <p className="text-gray-500 mb-6">Coba ubah filter atau kata kunci pencarian Anda</p>
            <Button
              onClick={() => {
                setSelectedCategory("all")
                setSelectedTransmission("all")
                setSearchQuery("")
                setPriceRange([0, 3000000])
              }}
              className="bg-lime-600 hover:bg-lime-700"
            >
              Reset Filter
            </Button>
          </div>
        )}

        {/* CATEGORY INFORMATION */}
        <div className="mt-20 bg-gradient-to-r from-lime-50 to-blue-50 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Kategori <span className="text-lime-600">Armada</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "City Car & MPV",
                price: "Rp 300k - 750k",
                description: "Sempurna untuk perjalanan keluarga dan dalam kota dengan efisiensi terbaik",
                icon: "🚗",
                features: ["Hemat BBM", "Parkir Mudah", "Nyaman Keluarga"],
              },
              {
                category: "Executive & Premium",
                price: "Rp 600k - 1.3M",
                description: "Kendaraan mewah untuk perjalanan bisnis dan acara khusus",
                icon: "🚙",
                features: ["Interior Premium", "Captain Seat", "Business Class"],
              },
              {
                category: "Luxury & Commercial",
                price: "Rp 1.3M - 2.5M",
                description: "Armada mewah untuk group travel dan keperluan VIP",
                icon: "🚐",
                features: ["Executive Lounge", "Group Travel", "VIP Service"],
              },
            ].map((info, index) => (
              <Card key={index} className="bg-white border hover:shadow-xl transition-all duration-500 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-4">{info.icon}</div>
                  <h3 className="font-bold text-lime-600 mb-2 text-lg">{info.category}</h3>
                  <Badge className="bg-blue-100 text-blue-800 mb-4">{info.price}</Badge>
                  <p className="text-gray-600 text-sm mb-4">{info.description}</p>
                  <div className="space-y-2">
                    {info.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-lime-500 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
