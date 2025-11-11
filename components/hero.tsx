"use client"

import Image from "next/image"
import { scrollToSection } from "@/lib/scroll"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight text-balance">
          Create Content That Resonates
        </h1>
        <p className="text-lg text-neutral-300 mb-8 max-w-2xl leading-relaxed text-balance">
          We transform your brand vision into compelling social media content. From strategy to execution, we handle it
          all.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => scrollToSection("services")}
            className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-neutral-100 transition"
          >
            Get Started
          </button>
          <button
            onClick={() => scrollToSection("footer")}
            className="px-8 py-3 border border-white text-white rounded-full font-medium hover:bg-white hover:text-black transition"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
