"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Phone, X } from "lucide-react"
import { openWhatsApp } from "@/lib/whatsapp-conversion"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setIsScrolled(currentScrollY > 20)
      setLastScrollY(currentScrollY)
    }

    let ticking = false
    const scrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", scrollHandler, { passive: true })
    return () => window.removeEventListener("scroll", scrollHandler)
  }, [lastScrollY])

  // Scroll to top when pathname changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [pathname])

  const navItems = [
    { href: "/", label: "Beranda" },
    { href: "/tentang", label: "Tentang Kami" },
    { href: "/armada", label: "Armada" },
    { href: "/layanan", label: "Layanan" },
    { href: "/galeri", label: "Galeri" },
    { href: "/testimoni", label: "Testimoni" },
    { href: "/kontak", label: "Kontak" },
  ]

  const handleWhatsAppCall = () => {
    openWhatsApp("https://wa.me/6282363389893")
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const handleNavClick = () => {
    closeMenu()
    // Small delay to ensure navigation happens first
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo Section */}
            <Link href="/" onClick={handleNavClick} className="flex items-center flex-shrink-0 z-50 group">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img
src="/logoVRN.png"
                    alt="PT VRN RentCar Logo"
                    className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg object-cover shadow-md group-hover:shadow-lg transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-500/20 to-blue-800/20 rounded-lg"></div>
                </div>
                <div className="flex flex-col">
                  <div className="text-lg lg:text-xl font-bold text-gray-900 leading-tight">PT VRN</div>
                  <div className="text-xs lg:text-sm text-lime-600 font-medium -mt-1">Rental Mobil Terpercaya</div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                    pathname === item.href
                      ? "text-lime-600 bg-lime-50"
                      : "text-gray-700 hover:text-lime-600 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                  <div
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-lime-600 transition-all duration-300 ${
                      pathname === item.href ? "w-6" : "w-0 group-hover:w-6"
                    }`}
                  ></div>
                </Link>
              ))}
            </div>

            {/* Desktop CTA Section */}
            <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
              <div className="text-right text-sm">
                <div className="text-gray-600 font-medium">Hubungi Kami</div>
                <div className="text-blue-800 font-bold">0823-6338-9893</div>
              </div>
              <Button
                onClick={handleWhatsAppCall}
                className="bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-900 hover:to-blue-800 text-white font-semibold px-6 py-2.5 rounded-lg flex items-center space-x-2 transition-all duration-300 hover:shadow-lg hover:scale-105 shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp</span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden relative z-50 p-2 rounded-lg transition-all duration-300 hover:bg-gray-100 ${
                isOpen ? "bg-gray-100" : ""
              }`}
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out ${
                    isOpen ? "rotate-45 top-3" : "top-1.5"
                  }`}
                />
                <span
                  className={`absolute block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out top-3 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out ${
                    isOpen ? "-rotate-45 top-3" : "top-4.5"
                  }`}
                />
              </div>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-500 ${isOpen ? "opacity-50" : "opacity-0"}`}
          onClick={closeMenu}
        />

        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50">
              <div className="flex items-center space-x-3">
                <img
src="/logoVRN.png"
                  alt="PT VRN RentCar Logo"
                  className="w-8 h-8 rounded-lg object-cover shadow-md"
                />
                <div>
                  <div className="text-lg font-bold text-gray-900">PT VRN</div>
                  <div className="text-xs text-lime-600 font-medium">Rental Mobil Jakarta</div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeMenu}
                className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex-1 py-6">
              <nav className="space-y-1 px-6">
                {navItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleNavClick}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 transform ${
                      pathname === item.href
                        ? "text-lime-600 bg-lime-50 border-l-4 border-lime-600 translate-x-2"
                        : "text-gray-800 hover:text-lime-600 hover:bg-gray-50 hover:translate-x-1"
                    }`}
                    style={{
                      animationDelay: isOpen ? `${index * 50}ms` : "0ms",
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <div className="text-center mb-4">
                <div className="text-sm text-gray-600 mb-1">Hubungi Kami Sekarang</div>
                <div className="text-lg font-bold text-blue-800">0823-6338-9893</div>
              </div>
              <Button
                onClick={() => {
                  handleWhatsAppCall()
                  closeMenu()
                }}
                className="w-full bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-900 hover:to-blue-800 text-white font-semibold py-4 rounded-lg flex items-center justify-center space-x-3 transition-all duration-300 hover:shadow-lg shadow-md"
              >
                <Phone className="w-5 h-5" />
                <span>WhatsApp Sekarang</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
