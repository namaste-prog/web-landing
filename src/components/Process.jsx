const Process = () => {
  const steps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We understand your vision and objectives, laying the strategic foundation for a successful Q-Commerce app.",
      icon: "🔍",
      color: "from-blue-500 to-blue-600"
    },
    {
      step: "02", 
      title: "Design. Engineer. Integrate.",
      description: "We craft the user experience, then engineer the complete application frontend, backend, and all critical services.",
      icon: "⚙️",
      color: "from-purple-500 to-purple-600"
    },
    {
      step: "03",
      title: "Testing & Quality Assurance", 
      description: "Through comprehensive Q&A testing, we validate the app's stability, security, and performance before launch.",
      icon: "🧪",
      color: "from-green-500 to-green-600"
    },
    {
      step: "04",
      title: "Launch & Deployment",
      description: "We ensure a successful launch on all platforms and deliver it into the hands of your real-world users.",
      icon: "🚀",
      color: "from-blue-500 to-purple-600"
    },
    {
      step: "05",
      title: "Post-Launch Support & Evolution",
      description: "We monitor live performance and feedback, using data-driven insights to fix issues and guide your app's evolution.",
      icon: "📈",
      color: "from-indigo-500 to-purple-600"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 mb-4">
            🛠️ Proven Methodology
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Process for Quick Commerce App Development
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Twenty years of development experience. We've engineered a process that eliminates common pitfalls 
            and safeguards your investment, turning the complex journey into a predictable, successful launch.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300"></div>
          
          {steps.map((step, index) => (
            <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${step.color} text-white text-2xl mb-4 ${index % 2 === 0 ? 'ml-auto' : ''}`}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Step Number */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white border-4 border-gray-300 rounded-full flex items-center justify-center z-10">
                <span className="text-lg font-bold text-gray-700">{step.step}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden">
          {steps.map((step, index) => (
            <div key={index} className="relative flex items-start mb-8 pl-16">
              <div className="absolute left-0 top-0">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} text-white flex items-center justify-center text-xl`}>
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-16 bg-gray-300 ml-6 mt-2"></div>
                )}
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex-1">
                <div className="text-sm font-bold text-gray-500 mb-2">STEP {step.step}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process