import { useState, useEffect } from 'react'

const OurWork = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    industry: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          industry: formData.industry,
          subject: 'New Contact Form Submission - Our Work Modal'
        })
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', industry: '' })
        setTimeout(() => {
          setShowModal(false)
          setSubmitStatus('')
        }, 2000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const projects = [
    {
      title: "Koskii E-Commerce Platform",
      description: "Koskii is a premium Indian ethnic wear brand offering a curated selection of designer lehengas, sarees, and suits via its web and mobile platforms. The digital experience provides a seamless way to shop for bridal and festive fashion with secure payments and streamlined order management.",
      image: "/img/koskii.png",
      url: "https://www.koskii.com/",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "E-Commerce"
    },
    {
      title: "Online Food Delivery",
      description: "Foodro is a Kerala-based online grocery marketplace providing home delivery of fresh produce, packaged goods, and household essentials. The platform specializes in flexible fulfillment through same-day delivery and convenient scheduled time slots.",
      image: "/img/foodro.png", 
      url: "https://www.foodro.in/",
      tech: ["React Native", "Firebase", "Redux", "TypeScript"],
      category: "Online Food Delivery"
    },
    {
      title: "Online Food Delivery",
      description: "JustMyRoots is a specialized food-tech platform that delivers authentic regional cuisine and \"Direct From Home\" meals across Indian cities. Using advanced perishable shipping and specialty packaging, it bridges the distance between people and their favorite hometown flavors.",
      image: "/img/justmyroots.png",
      url: "https://www.justmyroots.com/",
      tech: ["Vue.js", "Laravel", "MySQL", "AWS"],
      category: "Online Food Delivery"
    },
    {
      title: "Real estate",
      description: "AM Realty Solutions is a trusted real estate firm offering government-approved residential and commercial plots in Phulera, Jaipur. The company focuses on high-growth, strategically connected developments tailored for both long-term investors and homebuyers.",
      image: "/img/amrealtysolutions.png",
      url: "https://www.amrealtysolutions.com/",
      tech: ["Angular", "Python", "PostgreSQL", "Docker"],
      category: "Real estate"
    }
  ]

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % projects.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, projects.length])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const goToSlide = (index) => {
    setIsAutoPlaying(false)
    setCurrentSlide(index)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Discover our portfolio of successful projects that showcase our expertise and commitment to excellence
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 lg:p-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      {/* Left Content */}
                      <div className="space-y-6">
                        <div className="inline-block px-3 py-1 bg-red-500/20 text-red-400 text-sm font-medium rounded-full">
                          {project.category}
                        </div>
                        
                        <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-300 text-lg leading-relaxed">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* CTA Button */}
                        <button 
                          onClick={() => setShowModal(true)}
                          className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg group"
                        >
                          <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                          <span>LET'S DISCUSS YOUR PROJECT</span>
                        </button>
                      </div>

                      {/* Right Content - Project Image */}
                      <div className="relative">
                        <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-4 shadow-2xl">
                          {/* Browser Mock */}
                          <div className="bg-gray-600 rounded-t-lg p-2 flex items-center gap-2">
                            <div className="flex gap-1">
                              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                            </div>
                            <div className="flex-1 bg-gray-500 rounded px-3 py-1 text-xs text-gray-300 text-center">
                              {project.url || "www.example-project.com"}
                            </div>
                          </div>
                          
                          {/* Project Screenshot */}
                          <div className="h-64 lg:h-80 rounded-b-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                            {project.image ? (
                              <img 
                                src={project.image} 
                                alt={project.title}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 w-full h-full flex items-center justify-center">
                                <div className="text-center text-white">
                                  <div className="text-4xl font-bold mb-2">{project.title.split(' ')[0]}</div>
                                  <div className="text-sm opacity-80">Project Screenshot</div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-300 group"
          >
            <svg className="w-6 h-6 text-white group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-300 group"
          >
            <svg className="w-6 h-6 text-white group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800/90 backdrop-blur-md border border-gray-600/50 rounded-2xl p-8 w-full max-w-md relative">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {submitStatus === 'success' && (
              <div className="mb-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 text-sm">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 text-sm">
                Sorry, there was an error sending your message. Please try again.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY} />
              {/* Name Field */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">Email address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="zora@example.com"
                  className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 XXXXXXXXXX"
                  className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Industry Field */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">Tell Us Your Industry</label>
                <input
                  type="text"
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  placeholder="Business Industry"
                  className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <span>{isSubmitting ? 'Sending...' : 'Talk to Us'}</span>
                {!isSubmitting && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}

// Technology Slider Component
const TechnologySlider = () => {
  const technologies = [
    {
      name: "Shopify",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.337 2.813c-.234-.012-.487.008-.764.06-1.28.24-2.634.948-3.808 1.993-.905.807-1.638 1.756-2.003 2.532-.287-.084-.6-.12-.932-.096-.912.066-1.659.51-2.106 1.251-.447.74-.447 1.638-.18 2.532.268.895.758 1.74 1.366 2.37.608.63 1.329 1.056 2.106 1.086.018.006.03.006.048.006.018 0 .036 0 .048-.006.777-.03 1.498-.456 2.106-1.086.608-.63 1.098-1.475 1.366-2.37.096-.323.132-.632.12-.923.287-.036.568-.108.836-.222.395 1.062.419 2.298-.036 3.48-.455 1.183-1.317 2.298-2.484 3.132-1.167.835-2.616 1.38-4.065 1.38h-.048c-1.449 0-2.898-.545-4.065-1.38-1.167-.834-2.029-1.949-2.484-3.132-.455-1.182-.431-2.418-.036-3.48.395-1.062 1.146-1.98 2.124-2.586.978-.606 2.154-.894 3.36-.815.048.006.09.006.138.006h.048c.048 0 .09 0 .138-.006 1.206-.079 2.382.209 3.36.815.978.606 1.729 1.524 2.124 2.586.287.771.287 1.59.12 2.37.877-.593 1.652-1.398 2.22-2.364.568-.966.914-2.077.984-3.216.066-1.14-.144-2.287-.6-3.312-.455-1.025-1.146-1.914-1.988-2.574-.842-.66-1.819-1.08-2.838-1.224-.257-.036-.514-.054-.77-.048z"/>
        </svg>
      )
    },
    {
      name: "WordPress",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.135-2.85-.135-.584-.031-.69.854-.067.899 0 0 .584.075 1.207.105l1.8 4.931-2.534 7.6-4.21-12.531c.647-.03 1.231-.105 1.231-.105.582-.075.516-.93-.065-.899 0 0-1.756.135-2.88.135-.202 0-.438-.008-.69-.015C4.911 5.15 8.235 3.1 12.001 3.1c2.756 0 5.27 1.08 7.127 2.847-.046-.003-.091-.009-.141-.009-.615 0-1.052.54-1.052 1.122 0 .525.315.967.645 1.487.255.42.555.967.555 1.757 0 .54-.21 1.172-.48 2.043l-.645 2.16-2.32-6.918zm-8.678 14.583C2.61 19.048 1 15.751 1 12c0-.69.12-1.36.315-2.01l4.36 11.958zm12.35-2.7c2.73-1.584 4.565-4.53 4.565-7.913 0-1.665-.464-3.22-1.26-4.565-.75 1.47-1.275 2.85-1.965 4.565l-1.34 3.913z"/>
        </svg>
      )
    },
    {
      name: "AWS",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.763 10.036c0 .296.032.535.088.714.064.18.144.368.256.576.04.063.056.127.056.2 0 .088-.064.175-.207.272l-.68.456c-.096.064-.192.096-.271.096-.104 0-.207-.048-.31-.152-.112-.112-.208-.232-.296-.576-.087-.24-.135-.504-.135-.808 0-.63.144-1.135.424-1.518.288-.384.68-.576 1.2-.576.528 0 .944.192 1.23.568.288.384.424.888.424 1.526v.816h-2.295c0 .48.088.855.272 1.118.184.272.456.408.8.408.176 0 .36-.032.55-.088.192-.056.384-.144.584-.248.088-.04.152-.064.2-.08.048-.016.088-.024.12-.024.104 0 .152.072.152.216v.344c0 .112-.016.2-.056.256-.04.064-.104.128-.2.184-.192.096-.424.176-.68.232-.264.056-.528.088-.792.088-.6 0-1.04-.136-1.334-.408-.296-.272-.448-.68-.448-1.214v-2.23zm2.295-.856c0-.479-.096-.863-.296-1.15-.192-.288-.472-.424-.832-.424-.384 0-.696.136-.920.424-.224.288-.344.672-.368 1.15h2.416zm3.45 2.392c-.096 0-.16-.016-.2-.056-.04-.032-.08-.104-.12-.2L10.52 6.86c-.04-.128-.064-.208-.064-.256 0-.104.056-.16.152-.16h.624c.096 0 .168.016.2.056.04.032.072.104.112.2l1.176 4.632 1.096-4.632c.032-.128.064-.2.104-.2.04-.032.112-.056.2-.056h.512c.096 0 .168.016.2.056.04.032.08.104.112.2L16.24 11.1l1.208-4.632c.04-.128.08-.2.112-.2.04-.032.112-.056.2-.056h.6c.096 0 .152.056.152.16 0 .032-.008.064-.016.104-.008.04-.024.088-.048.152l-1.648 5.28c-.04.128-.08.2-.12.2-.04.032-.112.056-.2.056h-.544c-.096 0-.168-.016-.2-.056-.04-.032-.08-.104-.112-.2L14.624 7.58l-1.072 4.328c-.032.128-.072.2-.112.2-.04.032-.112.056-.2.056h-.544zm5.944.32c-.272 0-.544-.032-.808-.096-.264-.064-.47-.144-.608-.256-.088-.072-.144-.152-.168-.232-.024-.08-.04-.168-.04-.256v-.344c0-.144.056-.216.16-.216.04 0 .08.008.128.024.048.016.12.048.2.08.192.08.384.144.576.184.2.04.392.064.592.064.312 0 .552-.056.728-.168.176-.112.256-.272.256-.472 0-.144-.048-.264-.152-.36-.104-.096-.296-.192-.568-.288l-.816-.256c-.416-.128-.720-.32-.904-.568-.192-.248-.288-.528-.288-.864 0-.248.056-.472.16-.664.104-.2.248-.368.424-.504.184-.144.392-.248.632-.32.248-.08.504-.112.784-.112.12 0 .248.008.368.032.128.016.248.048.368.08.112.040.216.08.31.128.096.048.176.104.232.16.088.064.152.136.184.2.032.072.048.152.048.248v.304c0 .144-.056.224-.16.224-.064 0-.16-.032-.288-.096-.256-.128-.544-.192-.856-.192-.296 0-.528.048-.68.152-.160.104-.232.248-.232.448 0 .128.056.248.16.344.104.096.312.2.624.304l.8.256c.408.128.704.304.888.536.184.232.272.504.272.832 0 .256-.056.488-.16.696-.112.208-.256.384-.44.528-.192.144-.416.256-.68.336-.256.072-.544.112-.856.112z"/>
        </svg>
      )
    },
    {
      name: "Microsoft Azure",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5.483 21.8H2.68L8.4 6.7h3.84L18.72 21.8h-2.88l-1.44-3.6H7.003l-1.52 3.6zm2.76-6.48h4.8l-2.4-6.24-2.4 6.24z"/>
        </svg>
      )
    },
    {
      name: "Google Cloud",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.01 1.238c-3.45 0-6.624 1.437-8.883 3.75L.63 7.485c-.225.225-.225.59 0 .815l2.497 2.497c.225.225.59.225.815 0L6.439 8.3c1.437-1.437 3.413-2.33 5.571-2.33s4.134.893 5.571 2.33l2.497 2.497c.225.225.59.225.815 0l2.497-2.497c.225-.225.225-.59 0-.815L20.893 4.988C18.634 2.675 15.46 1.238 12.01 1.238zm0 5.571c-1.793 0-3.413.72-4.59 1.897L4.923 11.2c-.225.225-.225.59 0 .815l2.497 2.497c.225.225.59.225.815 0L10.732 12c.36-.36.855-.585 1.278-.585s.918.225 1.278.585l2.497 2.497c.225.225.59.225.815 0l2.497-2.497c.225-.225.225-.59 0-.815L16.6 8.688C15.423 7.529 13.803 6.809 12.01 6.809z"/>
        </svg>
      )
    },
    {
      name: "Flutter",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.37zm.159 11.871L11.3 14.04l-4.97-4.97L14.473 0H22l-7.527 11.871zm-3.068 1.034L17.91 18.41c-.45.45-.45 1.18 0 1.63.45.45 1.18.45 1.63 0l6.46-6.46V22L8.406 12.905z"/>
        </svg>
      )
    },
    {
      name: "React",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.866.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.948.445-.226.925-.424 1.42-.588.19.066.375.138.595.202zm7.26 0c.2-.064.385-.138.60-.202.493.164.971.362 1.416.588-.185.638-.406 1.292-.675 1.947-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.16zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.445.226-.925.424-1.42.588-.19-.066-.375-.138-.595-.202.24-.375.48-.762.705-1.158.225-.39.435-.788.634-1.180zm-7.26 0c.2.392.41.783.64 1.175.225.392.465.774.705 1.158-.2.064-.385.138-.6.202-.493-.164-.97-.362-1.416-.588.185-.636.406-1.29.675-1.947zm3.063.675c.74 0 1.477.034 2.202.093.406.582.802 1.204 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.866.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.948.445-.226.925-.424 1.42-.588.19.066.375.138.595.202zm7.26 0c.2-.064.385-.138.6-.202.493.164.971.362 1.416.588-.185.638-.406 1.292-.675 1.947-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.16zm-11.678 4.28c.265.657.49 1.312.676 1.948-.445.226-.925.424-1.42.588-.19-.066-.375-.138-.595-.202.24-.375.48-.762.705-1.158.225-.39.435-.788.634-1.180zm7.26 0c.2.392.41.783.64 1.175.225.392.465.774.705 1.158-.2.064-.385.138-.6.202-.493-.164-.97-.362-1.416-.588.185-.636.406-1.29.675-1.947z"/>
        </svg>
      )
    },
    {
      name: "Swift",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.508 0c-.287 0-.573.06-.84.179-.267.118-.53.297-.773.54C5.374 1.235 4.867 1.97 4.47 2.86c-.397.89-.594 1.95-.594 3.18v11.92c0 1.23.197 2.29.594 3.18.397.89.904 1.625 1.425 2.141.243.243.506.422.773.54.267.119.553.179.84.179.287 0 .573-.06.84-.179.267-.118.53-.297.773-.54.52-.516 1.028-1.251 1.425-2.141.397-.89.594-1.95.594-3.18V6.04c0-1.23-.197-2.29-.594-3.18C9.949 1.97 9.441 1.235 8.92.719c-.243-.243-.506-.422-.773-.54C7.88.06 7.595 0 7.508 0z"/>
        </svg>
      )
    },
    {
      name: "Angular",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9.93 12.645h4.134L12 7.647l-2.07 4.998zm8.055-10.11L12 0 5.015 2.535l1.096 9.5L12 24l5.889-11.965 1.096-9.5z"/>
        </svg>
      )
    },
    {
      name: "Vue.js",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/>
        </svg>
      )
    },
    {
      name: "Next.js",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 01-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 00-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 00-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 01-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 01-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 01.174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 004.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 002.466-2.163 11.944 11.944 0 002.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 00-2.499-.523A33.119 33.119 0 0011.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 01.237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 01.233-.296c.096-.05.13-.054.5-.054z"/>
        </svg>
      )
    },
    {
      name: "Node.js",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
        </svg>
      )
    },
    {
      name: "PHP",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .982-.152 1.278-.457.296-.305.444-.74.444-1.305 0-.397-.117-.72-.353-.97-.235-.249-.563-.373-.984-.373l.236-1.543zm5.191-.038h-.944l-.515 2.648h.838c.556 0 .982-.152 1.278-.457.296-.305.444-.74.444-1.305 0-.397-.117-.72-.353-.97-.235-.249-.563-.373-.984-.373l.236-1.543z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.74 4.858l.034.086L10.793 8.2c.433.06.869.09 1.306.09.437 0 .874-.03 1.306-.09L12.74 4.944l.034-.086zm1.398 3.314c-.433.06-.869.09-1.306.09-.437 0-.874-.03-1.306-.09l.54-1.398.766 1.398zm-1.398 7.656l-.034-.086L11.727 12.2c.433-.06.869-.09 1.306-.09.437 0 .874.03 1.306.09L13.74 15.744l-.034.086zm1.398-3.314c-.433-.06-.869-.09-1.306-.09-.437 0-.874.03-1.306.09l.54 1.398.766-1.398z"/>
        </svg>
      )
    },
    {
      name: "Python",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05 1.07.13zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z"/>
        </svg>
      )
    },
    {
      name: "Ruby on Rails",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.523 7.781c-.199.04-.398.08-.597.159-.358.119-.677.278-.955.477-.398.279-.756.597-1.034.956-.318.398-.556.836-.716 1.314-.119.359-.199.717-.239 1.076-.04.319-.04.638.04.956.04.199.119.398.199.597.079.159.159.278.238.438.159.239.318.477.517.676.318.318.676.596 1.074.835.438.239.916.398 1.394.517.359.08.717.119 1.076.119.319 0 .637-.04.956-.119.358-.08.677-.199.995-.358.398-.199.756-.438 1.075-.756.278-.278.517-.596.716-.955.199-.358.318-.756.398-1.154.04-.199.04-.398.04-.597 0-.278-.04-.556-.119-.835-.08-.278-.159-.556-.278-.795-.159-.318-.318-.596-.517-.835-.318-.358-.676-.676-1.074-.955-.398-.238-.835-.398-1.274-.517-.318-.08-.637-.119-.955-.119-.279 0-.558.04-.836.119z"/>
        </svg>
      )
    },
    {
      name: "Go",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.070-.105.070zM2.828 12.381c-.046 0-.058-.035-.035-.07l.163-.292c.023-.035.070-.070.117-.070h2.337c.047 0 .070.035.070.082l-.023.28c0 .047-.047.082-.082.082z"/>
          <path d="M21.5 12.85c0-.81-.152-1.477-.457-2.001-.305-.524-.762-.935-1.371-1.231-.61-.297-1.332-.445-2.167-.445-.835 0-1.558.148-2.167.445-.61.296-1.067.707-1.371 1.231-.305.524-.457 1.191-.457 2.001 0 .81.152 1.477.457 2.001.304.524.761.935 1.371 1.231.609.297 1.332.445 2.167.445.835 0 1.558-.148 2.167-.445.61-.296 1.066-.707 1.371-1.231.305-.524.457-1.191.457-2.001zm-1.371 0c0 .715-.304 1.274-.913 1.677-.608.403-1.427.604-2.456.604-1.029 0-1.848-.201-2.456-.604-.609-.403-.913-.962-.913-1.677 0-.715.304-1.274.913-1.677.608-.403 1.427-.604 2.456-.604 1.029 0 1.848.201 2.456.604.609.403.913.962.913 1.677z"/>
          <path d="M24 10.314c-.152-.423-.411-.768-.777-1.035-.366-.267-.835-.4-1.407-.4-.571 0-1.041.133-1.407.4-.366.267-.625.612-.777 1.035h4.368z"/>
        </svg>
      )
    },
    {
      name: "Java",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/>
        </svg>
      )
    },
    {
      name: "Kotlin",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 24H0V0h24L12 12 24 24z"/>
        </svg>
      )
    },
    {
      name: "MongoDB",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/>
        </svg>
      )
    },
    {
      name: "React Native",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 12C1.5 12 4.5 9 12 9s10.5 3 10.5 3-3 3-10.5 3S1.5 12 1.5 12zM12 10.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5z"/>
        </svg>
      )
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Technologies We <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">Use</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Trusted by global companies across all industries
          </p>
        </div>

        {/* Technology Slider */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlay - Left */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
          
          {/* Gradient Overlay - Right */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black via-black/80 to-transparent z-10"></div>

          {/* Scrolling Container */}
          <div className="flex animate-scroll hover:pause-animation">
            {/* First set of technologies */}
            {technologies.map((tech, index) => (
              <div
                key={`first-${index}`}
                className="flex flex-col items-center justify-center min-w-[140px] h-28 bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-sm border border-gray-700/30 rounded-xl hover:border-red-500/50 transition-all duration-500 group hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-red-900/20 mx-4 flex-shrink-0"
              >
                <div className="text-gray-300 group-hover:text-red-400 transition-colors duration-300 mb-2">
                  {tech.icon}
                </div>
                <span className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors duration-300 font-medium text-center px-2">
                  {tech.name}
                </span>
              </div>
            ))}

            {/* Duplicate set for seamless scrolling */}
            {technologies.map((tech, index) => (
              <div
                key={`second-${index}`}
                className="flex flex-col items-center justify-center min-w-[140px] h-28 bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-sm border border-gray-700/30 rounded-xl hover:border-red-500/50 transition-all duration-500 group hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-red-900/20 mx-4 flex-shrink-0"
              >
                <div className="text-gray-300 group-hover:text-red-400 transition-colors duration-300 mb-2">
                  {tech.icon}
                </div>
                <span className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors duration-300 font-medium text-center px-2">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurWork
export { TechnologySlider }