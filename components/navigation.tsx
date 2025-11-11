"use client"

import Image from "next/image"
import { scrollToSection } from "@/lib/scroll"

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-black border-b border-neutral-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              {/* Play icon */}
              <div className="w-6 h-6 bg-white flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 1L10 6L2 11V1Z" fill="black" stroke="black" strokeWidth="0.5"/>
                </svg>
              </div>
              {/* Pause icon */}
              <div className="w-6 h-6 bg-white flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <rect x="3" y="2" width="2" height="8" fill="black"/>
                  <rect x="7" y="2" width="2" height="8" fill="black"/>
                </svg>
              </div>
              {/* Fast forward icon */}
              <div className="w-6 h-6 bg-white flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 1L6 6L1 11V1Z" fill="black" stroke="black" strokeWidth="0.5"/>
                  <path d="M6 1L11 6L6 11V1Z" fill="black" stroke="black" strokeWidth="0.5"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-neutral-400 hover:text-white hover:bg-neutral-800 px-3 py-2 rounded-md transition-all duration-200 text-sm cursor-pointer bg-transparent border-none"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-neutral-400 hover:text-white hover:bg-neutral-800 px-3 py-2 rounded-md transition-all duration-200 text-sm cursor-pointer bg-transparent border-none"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("booking")}
              className="text-neutral-400 hover:text-white hover:bg-neutral-800 px-3 py-2 rounded-md transition-all duration-200 text-sm cursor-pointer bg-transparent border-none"
            >
              Contact
            </button>
          </div>

          <button
            onClick={() => scrollToSection("booking")}
            className="hidden sm:block px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-neutral-100 transition"
          >
            Book a Call
          </button>

          {/* Mobile support icon */}
          <button
            onClick={() => scrollToSection("booking")}
            className="sm:hidden text-white text-2xl hover:text-neutral-300 transition"
            aria-label="Customer support"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-message"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 9h8" /><path d="M8 13h6" /><path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" /></svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
