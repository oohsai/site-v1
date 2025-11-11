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
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4 text-balance">Our Services</h2>
        <p className="text-neutral-300 mb-12 max-w-2xl text-balance">
          Everything you need to build and manage a powerful social presence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-black p-8 rounded-lg border border-neutral-800 hover:bg-neutral-900 hover:border-neutral-600 transition-all duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-neutral-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
