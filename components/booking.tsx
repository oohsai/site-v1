"use client"

import type React from "react"

import { useState } from "react"
import { sendEmail } from "@/lib/scroll"

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const recipientEmail = "your-email@example.com" // Replace with your email
    const subject = `Call Request from ${formData.name}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nProject Details:\n${formData.message}`

    sendEmail(recipientEmail, subject, body)

    // Reset form after sending
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <section id="booking" className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-balance">Let&apos;s Work Together</h2>
        <p className="text-gray-300 mb-10 text-balance">
          Ready to elevate your social media game? Schedule a call with our team to discuss your project.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition text-white"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition text-white"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Tell Us About Your Project</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition text-white h-32 resize-none"
              placeholder="Share your goals and vision..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Schedule a Call"}
          </button>
        </form>
      </div>
    </section>
  )
}
