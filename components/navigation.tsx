"use client"

import Image from "next/image"
import { scrollToSection } from "@/lib/scroll"

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Image src="/logo.svg" alt="ContentStudio Logo" width={32} height={32} className="h-8 w-auto" />
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-600 hover:text-black transition text-sm cursor-pointer bg-transparent border-none"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-600 hover:text-black transition text-sm cursor-pointer bg-transparent border-none"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("booking")}
              className="text-gray-600 hover:text-black transition text-sm cursor-pointer bg-transparent border-none"
            >
              Contact
            </button>
          </div>

          <button
            onClick={() => scrollToSection("booking")}
            className="hidden sm:block px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-900 transition"
          >
            Book a Call
          </button>

          {/* Mobile support icon */}
          <button
            onClick={() => scrollToSection("booking")}
            className="sm:hidden text-black text-2xl hover:text-gray-600 transition"
            aria-label="Customer support"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-message"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 9h8" /><path d="M8 13h6" /><path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" /></svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
