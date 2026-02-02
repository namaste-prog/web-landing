import { useState } from 'react'
import './Industries.css'

const Industries = () => {
  const [activeTab, setActiveTab] = useState(0)

  const industries = [
    {
      name: "Online Grocery Store",
      icon: "🛒",
      color: "from-green-500 to-emerald-600",
      description: "Complete grocery delivery platform with inventory management, real-time tracking, and subscription services.",
      features: [
        "Fresh produce handling",
        "Inventory optimization",
        "Subscription management",
        "Multi-store integration"
      ]
    },
    {
      name: "Q-Commerce",
      icon: "⚡",
      color: "from-blue-500 to-cyan-600",
      description: "Ultra-fast delivery platform for instant commerce with 10-30 minute delivery promise across categories.",
      features: [
        "10-minute delivery",
        "Dark store network",
        "AI demand forecasting",
        "Dynamic pricing"
      ]
    },
    {
      name: "Food Delivery App",
      icon: "🍕",
      color: "from-blue-500 to-purple-600",
      description: "Comprehensive food delivery ecosystem with restaurant partnerships, rider management, and real-time tracking.",
      features: [
        "Multi-restaurant platform",
        "Live order tracking",
        "Rider optimization",
        "Customer reviews"
      ]
    },
    {
      name: "Pharmacy & Health",
      icon: "💊",
      color: "from-purple-500 to-pink-600",
      description: "Healthcare delivery platform with prescription management, medicine verification, and health tracking.",
      features: [
        "Prescription verification",
        "Medicine authenticity",
        "Health monitoring",
        "Emergency delivery"
      ]
    },
    {
      name: "E-commerce & Retail",
      icon: "🛍️",
      color: "from-indigo-500 to-blue-600",
      description: "Complete retail platform with catalog management, payment processing, and customer analytics.",
      features: [
        "Product catalog",
        "Payment gateway",
        "Customer analytics",
        "Inventory sync"
      ]
    },
    {
      name: "Home Maintenance & Repair",
      icon: "🔧",
      color: "from-cyan-500 to-blue-600",
      description: "On-demand service platform connecting customers with verified professionals for home services.",
      features: [
        "Service booking",
        "Professional verification",
        "Job tracking",
        "Quality assurance"
      ]
    }
  ]

  const promiseTypes = [
    {
      title: "Online Grocery Store",
      icon: "🛒",
      image: "🥬"
    },
    {
      title: "Q-Commerce",
      icon: "⚡",
      image: "📱"
    },
    {
      title: "Food Delivery App",
      icon: "🍕",
      image: "🚚"
    },
    {
      title: "Transport & Logistics",
      icon: "🚛",
      image: "📦"
    },
    {
      title: "Pet Care Brand",
      icon: "🐕",
      image: "🦴"
    },
    {
      title: "Online Pharmacy",
      icon: "💊",
      image: "🏥"
    }
  ]

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Promise Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What's Your "10-Minute" Promise?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Are You the Next Success Story?
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {promiseTypes.map((type, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group cursor-pointer"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {type.image}
                </div>
                <div className="text-2xl mb-2">{type.icon}</div>
                <h3 className="text-sm font-semibold text-gray-800">
                  {type.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Industries Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 mb-4">
              🎯 Industry Expertise
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tailor-Made Solutions That Actually Work for Your Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've already solved the unique Q-Commerce challenges for leaders in your industry. 
              Deploy a proven framework tailored to your specific operations.
            </p>
          </div>

          {/* Industry Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {industries.map((industry, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-xl mr-2">{industry.icon}</span>
                {industry.name}
              </button>
            ))}
          </div>

          {/* Active Industry Content */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${industries[activeTab].color} text-white text-3xl mb-6`}>
                  {industries[activeTab].icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {industries[activeTab].name}
                </h3>
                
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {industries[activeTab].description}
                </p>

                <ul className="space-y-3 mb-8">
                  {industries[activeTab].features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`bg-gradient-to-r ${industries[activeTab].color} text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg`}>
                  Get Industry Solution
                </button>
              </div>

              <div className="relative">
                <div className="bg-white rounded-xl p-8 shadow-xl">
                  <div className="text-center">
                    <div className="text-8xl mb-6 animate-float">
                      {industries[activeTab].icon}
                    </div>
                    <div className="space-y-4">
                      <div className="h-4 bg-gray-200 rounded-full animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded-full w-3/4 mx-auto animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded-full w-1/2 mx-auto animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Industries