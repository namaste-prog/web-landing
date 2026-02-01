import { useEffect, useRef, useState } from 'react'

const WhyChooseUs = () => {
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
      title: "YEARS OF EXPERIENCE",
      description: "With over 5 years in the industry, we bring a wealth of experience and innovation to every project, ensuring solutions that stand the test of time."
    },
    {
      number: "20+",
      title: "SUCCESSFUL PROJECTS",
      description: "We have successfully delivered over 20 projects across various industries, helping businesses achieve their digital transformation goals."
    },
    {
      number: "98%",
      title: "CLIENT SATISFACTION",
      description: "Our commitment to excellence has earned us a 98% client satisfaction rate, with long-term partnerships built on trust and results."
    }
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-red-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Statistics with Bottom to Top Animation */}
          <div className="space-y-12">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`group transform transition-all duration-700 ease-out ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-12 opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`
                }}
              >
                <div className="mb-4">
                  <div className="text-5xl md:text-6xl font-black mb-3 bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent group-hover:from-red-300 group-hover:via-red-400 group-hover:to-red-500 transition-all duration-500">
                    {stat.number}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 tracking-wider uppercase">
                    {stat.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Content */}
          <div className="lg:pl-8">
            <div className="mb-8">
              <p className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
                WHY CHOOSE US
              </p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                <span className="text-white">Discover What Sets Us</span><br />
                <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">Apart: Your Success,</span><br />
                <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">Our Commitment</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                At <span className="text-white font-semibold">Zora Devs</span>, we bring your vision to life with 
                innovative and impactful solutions. In our close to 2 decade of 
                journey and we've earned the trust of startups and global brands by 
                delivering exceptional Websites, Web Applications and Mobile apps.
              </p>
              
              <p>
                We are overwhelmed to have played a substantial role in the success 
                of many startups and big brands by providing them with strong and 
                robust tech solutions.
              </p>
              
              <p>
                Our team combines cutting-edge technology with deep industry expertise 
                to create solutions that not only meet your current needs but also 
                scale with your business as it grows.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <button className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg relative overflow-hidden group">
                <span className="relative z-10">Learn More About Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 via-red-500/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs