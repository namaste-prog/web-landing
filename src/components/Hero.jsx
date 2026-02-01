import { useState } from 'react'

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    organization: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section className="h-screen text-white overflow-hidden relative flex items-center">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-black/60 to-gray-800/80"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center h-full">
          {/* Left Content */}
<div className="lg:col-span-7 animate-slide-up pt-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black leading-[0.95] mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-red-400 via-red-500 to-orange-500 bg-clip-text text-transparent block mb-1">Next-Gen Technical</span>
              <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent block mb-1">Solutions for</span>
              <span className="text-white font-bold">High-Growth Enterprises</span>
            </h1>
            
            <p className="text-base lg:text-lg text-gray-100 mb-6 leading-relaxed max-w-xl font-medium">
              Architecting future-proof digital infrastructure with a focus on speed, security, and scale. Zora Devs bridges the gap between complex business challenges and elegant technical execution—delivering custom software that doesn't just work, but leads.
            </p>

            {/* Feature Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-xl p-4 flex items-center space-x-3 hover:from-white/20 hover:to-white/10 transition-all duration-300 group">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-white font-semibold text-sm">Lightning-Fast Prototyping</span>
              </div>
              <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-xl p-4 flex items-center space-x-3 hover:from-white/20 hover:to-white/10 transition-all duration-300 group">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="text-white font-semibold text-sm">Seamless Operations Engine</span>
              </div>
              <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-xl p-4 flex items-center space-x-3 hover:from-white/20 hover:to-white/10 transition-all duration-300 group">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-white font-semibold text-sm">Proven Success 20+ Industries</span>
              </div>
              <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 rounded-xl p-4 flex items-center space-x-3 hover:from-white/20 hover:to-white/10 transition-all duration-300 group">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                  </svg>
                </div>
                <span className="text-white font-semibold text-sm">24*7 Dedicated Support</span>
              </div>
            </div>

          </div>

          {/* Right Form */}
          <div className="lg:col-span-5 mt-8 lg:mt-0">
            <div className="bg-gradient-to-br from-gray-900/30 via-black/20 to-gray-800/30 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl p-6 card-shadow animate-float hover:shadow-3xl transition-all duration-500">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Field */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600/30 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-white placeholder-gray-400 backdrop-blur-sm"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Email address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="zora@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600/30 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-white placeholder-gray-400 backdrop-blur-sm"
                    required
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 XXXXXXXXXX"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600/30 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-white placeholder-gray-400 backdrop-blur-sm"
                    required
                  />
                </div>

                {/* Industry Field */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Tell Us Your Industry</label>
                  <input
                    type="text"
                    name="organization"
                    placeholder="Business Industry"
                    value={formData.organization || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/30 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-white placeholder-gray-400 backdrop-blur-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gray-700/80 via-gray-800/80 to-gray-900/80 hover:from-gray-600/90 hover:via-gray-700/90 hover:to-gray-800/90 text-white font-bold py-5 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl shadow-lg border border-gray-600/30 backdrop-blur-md relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Talk to Us
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero