const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Uber-type On-Demand App for Diverse Services",
      description: "This was an innovative mobile and web application to match the needs of an evolving on-demand business. The solution included the entire spectrum of everything that a modern on-demand business could expect from technology.",
      image: "🚗",
      results: ["Multi-service platform", "Seamless user experience", "Scalable architecture", "Real-time matching"],
      category: "On-Demand Services"
    },
    {
      title: "Online Grocery App for a UK-Based FMCG Retailer",
      description: "Developed a creative and competitive grocery app for a network of grocery shops. The main aim was to build a cross-platform app that helps users request grocery items in real-time.",
      image: "🛒",
      results: ["Cross-platform solution", "Real-time ordering", "Admin interface", "Inventory management"],
      category: "Grocery Delivery"
    },
    {
      title: "Rapid eCommerce Mobile App Development for Gulf-based FMCG Retailer",
      description: "This efficient mobile app for both iOS and Android enabled the client to operate business during COVID-19 lockdowns. Delivered in just four days using the RAD model.",
      image: "📱",
      results: ["4-day delivery", "COVID-19 solution", "iOS & Android", "Business continuity"],
      category: "eCommerce"
    }
  ]

  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-4">
            📈 Proven Results
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Don't Take Our Word for it - Explore our Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide powerful quick commerce solutions for a diverse range of clients. 
            Our expertise has helped everyone from local businesses to major platforms launch successful operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image Section */}
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
                  {study.image}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 mb-4">
                  {study.category}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {study.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {study.description}
                </p>

                {/* Results */}
                <div className="space-y-2 mb-6">
                  {study.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {result}
                    </div>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                  View Case Study
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Main CTA Section */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="text-6xl mb-6">🚀</div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Deliver in Minutes, Grow in No Time!
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's Build Your Quick Commerce Success Story Together
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-12 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg">
            Connect Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies