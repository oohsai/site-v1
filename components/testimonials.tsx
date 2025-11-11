"use client"

import { useEffect, useRef } from "react"

export default function Testimonials() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee) return

    let animationId: number
    let scrollPosition = 0

    const animate = () => {
      scrollPosition += 1
      if (marquee.scrollLeft >= marquee.scrollWidth - marquee.clientWidth) {
        scrollPosition = 0
        marquee.scrollLeft = 0
      } else {
        marquee.scrollLeft = scrollPosition
      }
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [])

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Founder, StyleCo",
      content:
        "ContentStudio transformed our social media presence. Our engagement increased by 300% in just three months.",
    },
    {
      name: "Alex Chen",
      role: "Marketing Director, TechStart",
      content:
        "Professional, reliable, and creative. The team understood our vision immediately and delivered beyond expectations.",
    },
    {
      name: "Emma Davis",
      role: "CEO, GrowthLabs",
      content: "The content strategy has been instrumental in our growth. Highly recommended for any serious brand.",
    },
  ]

  const mediaItems = [
    { id: 1, type: "image", url: "/social-media-content.png" },
    { id: 2, type: "image", url: "/instagram-feed-design.jpg" },
    { id: 3, type: "image", url: "/tiktok-content.png" },
    { id: 4, type: "image", url: "/youtube-thumbnail.png" },
    { id: 5, type: "image", url: "/content-strategy-brainstorm.png" },
    { id: 6, type: "image", url: "/digital-marketing-strategy.png" },
  ]

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-balance">What Our Clients Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-white text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-neutral-300 mb-6 leading-relaxed flex-grow">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-neutral-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Our Latest Work</h3>
          <div className="overflow-hidden rounded-lg">
            <div
              ref={marqueeRef}
              className="flex gap-4 pb-4 overflow-x-auto scrollbar-hide"
              style={{
                scrollBehavior: "auto",
              }}
            >
              {[...mediaItems, ...mediaItems].map((item, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-72 h-48 bg-neutral-900 rounded-lg overflow-hidden border border-neutral-700 hover:bg-neutral-800 hover:border-neutral-600 transition-all duration-300"
                >
                  <img
                    src={item.url || "/placeholder.svg"}
                    alt={`Portfolio item ${item.id}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
