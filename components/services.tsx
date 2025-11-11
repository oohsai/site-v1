export default function Services() {
  const services = [
    {
      icon: "📱",
      title: "Content Creation",
      description: "Professional graphics, videos, and copy tailored to your brand voice.",
    },
    {
      icon: "📊",
      title: "Strategy & Planning",
      description: "Quarterly content calendars and growth strategies for maximum reach.",
    },
    {
      icon: "✏️",
      title: "Copywriting",
      description: "Engaging captions and messaging that drive engagement and conversions.",
    },
    {
      icon: "📈",
      title: "Analytics & Reporting",
      description: "Monthly insights and performance metrics to track ROI and improvements.",
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-4 text-balance">Our Services</h2>
        <p className="text-gray-600 mb-12 max-w-2xl text-balance">
          Everything you need to build and manage a powerful social presence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg border border-gray-200 hover:border-black transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-black mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
