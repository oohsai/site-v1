"use client"

import { scrollToSection } from "@/lib/scroll"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight text-balance">
          Create Content That Resonates
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed text-balance">
          We transform your brand vision into compelling social media content. From strategy to execution, we handle it
          all.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => scrollToSection("services")}
            className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition"
          >
            Get Started
          </button>
          <button
            onClick={() => scrollToSection("footer")}
            className="px-8 py-3 border border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
