import { useEffect, useRef, useState } from 'react'

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      number: "5+",
      label: "Professional Experience",
    },
    {
      number: "20+",
      label: "Products & Solutions Delivered",
    },
    {
      number: "80%",
      label: "Recurring Clients",
    },
    {
      number: "20+",
      label: "Experts",
    },
    {
      number: "20+",
      label: "Developers deployed",
    },
    {
      number: "25+",
      label: "Industries We Cater to",
    }
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Red Blob Effects */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-red-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
           why choose <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">Zora Devs?</span>
          </h2>
          <p className="text-base text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're not just building or providing digital solutions, we help businesses turn ideas into practical, scalable products.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl backdrop-blur-sm border border-gray-800/50 hover:border-red-500/50 group hover:transform hover:scale-105 transform transition-all duration-700 ease-out ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-12 opacity-0'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              <div className="text-3xl md:text-4xl font-black mb-2 bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent group-hover:from-red-300 group-hover:via-red-400 group-hover:to-red-500 transition-all duration-300">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium text-xs md:text-sm group-hover:text-white transition-colors duration-300 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics