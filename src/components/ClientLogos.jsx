import './ClientLogos.css'

const ClientLogos = () => {
  const clients = [
    { name: "Motherson", logo: "🏢" },
    { name: "Relaxo", logo: "👟" },
    { name: "DTDC", logo: "📦" },
    { name: "Panasonic", logo: "🔌" },
    { name: "Hero", logo: "🏍️" },
    { name: "TVS", logo: "🏍️" },
    { name: "Microsoft", logo: "💻" },
    { name: "Google", logo: "🔍" }
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
            Trusted By Industry Leaders
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            Brands That Cracked the Winning Formula Thanks to Our Platform
          </h2>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {client.logo}
              </div>
              <span className="text-sm font-medium text-gray-600 text-center">
                {client.name}
              </span>
            </div>
          ))}
        </div>

        {/* Achievement Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Why Fund Their R&D? Inherit Our 20-Year Playbook
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">24+</div>
              <div className="text-sm opacity-90">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">40%</div>
              <div className="text-sm opacity-90">Average Cost Saving</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">85%</div>
              <div className="text-sm opacity-90">Faster Time-to-Market</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">98%</div>
              <div className="text-sm opacity-90">Client Retention Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientLogos