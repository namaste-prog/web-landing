import './Services.css'

const Services = () => {
  const services = [
    {
      icon: "📱",
      title: "Cross-Platform Custom App Development",
      description: "Cross-platform iOS, Android, and PWA builds for seamless user experiences. Customer-facing apps with intuitive UI and conversion-focused UX flows.",
      features: ["iOS & Android Native Apps", "Progressive Web Apps", "Agile Development Process", "Rapid Prototyping"]
    },
    {
      icon: "📦",
      title: "Inventory And Catalog Sync",
      description: "Real-time inventory updates across channels to prevent oversells and stockouts. Unified admin dashboard for catalogs, pricing, and analytics.",
      features: ["Real-time Sync", "Unified Dashboard", "Automated Updates", "Data Integrity Protection"]
    },
    {
      icon: "🔗",
      title: "API Development and Integration",
      description: "Secure payment integrations supporting subscriptions, COD, refunds. Seamless microservice integration for inventory, logistics, and analytics.",
      features: ["Payment Gateway Integration", "Microservice Architecture", "Future-proof APIs", "Third-party Connections"]
    },
    {
      icon: "🛠️",
      title: "Maintenance And Post-Launch Support",
      description: "App Store compliance monitoring, submissions, and updates. Constant health checks and rapid-response systems for uninterrupted service.",
      features: ["Store Compliance", "24/7 Monitoring", "Performance Optimization", "Rapid Response Support"]
    },
    {
      icon: "🎨",
      title: "White-Label App Trio Development",
      description: "Ready-made consumer, store, and driver apps, customizable and brand-ready out-of-box. Launch twice as fast with prebuilt modules.",
      features: ["Consumer App", "Store Management App", "Driver App", "Customizable Branding"]
    },
    {
      icon: "📊",
      title: "Analytics & Customer Governance",
      description: "Demand forecasting predicts buying patterns, reducing stockouts. Customer support automation with AI chatbots and compliance controls.",
      features: ["Demand Forecasting", "AI Chatbot Support", "Compliance Management", "Customer Analytics"]
    },
    {
      icon: "🚚",
      title: "Hyperlocal Logistics & Delivery",
      description: "Dark store and micro-fulfillment operations for instant local order processing. Intelligent delivery routing with live tracking.",
      features: ["Dark Store Operations", "Smart Routing", "Live Tracking", "Multi-vendor Management"]
    },
    {
      icon: "🤖",
      title: "Advanced AI & ML Integrations",
      description: "AI-powered recommendations, dynamic deals, and intelligent reordering prompts. Scalable cloud-native backend for traffic surges.",
      features: ["AI Recommendations", "Dynamic Pricing", "Smart Reordering", "Cloud-native Backend"]
    },
    {
      icon: "🔒",
      title: "Enterprise Security & Fraud Prevention",
      description: "Proactive security auditing to protect user data and transaction integrity. Advanced fraud detection and built-in compliance frameworks.",
      features: ["Security Auditing", "Fraud Detection", "Data Protection", "Compliance Frameworks"]
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
            🏆 Complete Solution Suite
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Quick Commerce Development Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As a leading Quick Commerce Development Company, we build platforms that drive revenue. 
            Our custom solutions unify your entire operation, from inventory and delivery to customer experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center group-hover:translate-x-2 transition-transform duration-300">
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services