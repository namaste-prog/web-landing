import './Benefits.css'

const Benefits = () => {
  const benefits = [
    {
      icon: "🚀",
      title: "Quickly Enter & Dominate the Market",
      description: "Launch your delivery business 85% faster with our proven platform. Capitalize on a sector that already makes up 15%+ of India's e-retail GMV and secure your leadership position.",
      image: "📊"
    },
    {
      icon: "❤️",
      title: "Convert & Retain the Customer",
      description: "Achieve higher conversion rates with a seamless app experience. Our app's user experience creates loyal customers who order 3x more frequently, driving repeat business.",
      image: "⏱️"
    },
    {
      icon: "⚡",
      title: "Save Cost Using Automation",
      description: "Automate complex delivery and inventory tasks to simplify operations. Our technology cuts costs by preventing overstocking and optimizing your workflow for maximum efficiency.",
      image: "🚨"
    },
    {
      icon: "📏",
      title: "Scale Without the Overhead",
      description: "The quick commerce market processes 25 million+ monthly transactions. Expand into new cities and handle user surges without technical debt with our app.",
      image: "🔧"
    },
    {
      icon: "📊",
      title: "Know Your Market with Data",
      description: "Make smarter decisions with live business dashboards. Focus your strategy precisely; metros drive 80%+ of GMV, while non-metros represent a growing 15%+ opportunity.",
      image: "🚁"
    },
    {
      icon: "🏆",
      title: "Build a Lasting Competitive Advantage",
      description: "Stay ahead with an evolving platform. Integrated features like automated chat support and predictive analytics ensure you offer the most modern and efficient service.",
      image: "💼"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-4">
            ✨ Strategic Advantages
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Smart Entrepreneurs Are Using Q-Commerce to Win the Market
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            By leveraging the power of instant delivery, they are solving the biggest challenges in modern retail: 
            boosting customer lifetime value, maximizing operational efficiency, and creating competitive service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start space-x-6 bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex-shrink-0">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {benefit.image}
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-3">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {benefit.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>

                <div className="mt-4">
                  <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Profit Report Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <div className="text-6xl mb-4">📈</div>
          <h3 className="text-2xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Join hundreds of successful businesses that have revolutionized their operations with our quick commerce platform.
          </p>
          <button className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
            Get Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  )
}

export default Benefits