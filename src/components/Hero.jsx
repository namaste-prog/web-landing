import { useState } from 'react'
import './Hero.css'

const Hero = () => {
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    organization: ''
  })
  const [modalFormData, setModalFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')
  const [modalSubmitStatus, setModalSubmitStatus] = useState('')
  const [isModalSubmitting, setIsModalSubmitting] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleModalInputChange = (e) => {
    setModalFormData({
      ...modalFormData,
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
          organization: formData.organization,
          message: formData.message,
          subject: 'New Contact Form Submission - Hero Section'
        })
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '', organization: '' })
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

  const handleModalSubmit = async (e) => {
    e.preventDefault()
    setIsModalSubmitting(true)
    setModalSubmitStatus('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: modalFormData.name,
          email: modalFormData.email,
          phone: modalFormData.phone,
          organization: modalFormData.organization,
          subject: 'New Contact Form Submission - Let\'s Talk CTA'
        })
      })

      const result = await response.json()

      if (result.success) {
        setModalSubmitStatus('success')
        setModalFormData({ name: '', email: '', phone: '', organization: '' })
        setTimeout(() => {
          setShowModal(false)
          setModalSubmitStatus('')
        }, 2000)
      } else {
        setModalSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setModalSubmitStatus('error')
    } finally {
      setIsModalSubmitting(false)
    }
  }

  return (
    <section className="min-h-screen md:h-screen text-white overflow-hidden relative flex items-center pt-16 md:pt-0 pb-0" style={{background: 'linear-gradient(135deg, #000000 0%, #1f2937 50%, #000000 100%)'}}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl opacity-40 animate-pulse" style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-red-600/15 rounded-full blur-3xl opacity-40 animate-pulse" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
      </div>

      <div className="w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-6 items-center gap-6 sm:gap-8 md:gap-10">
          {/* Left Content */}
          <div className="lg:col-span-7 animate-slide-up order-1">
            <h1 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-black leading-tight sm:leading-[1.1] md:leading-[0.95] mb-3 sm:mb-4 md:mb-6 tracking-tight text-center lg:text-left">
              <span className="bg-gradient-to-r from-red-400 via-red-500 to-orange-500 bg-clip-text text-transparent block mb-1 sm:mb-2">Next-Gen Technical</span>
              <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent block mb-1 sm:mb-2">Solutions for</span>
              <span className="text-white font-bold">High-Growth Enterprises</span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-4 sm:mb-5 md:mb-6 font-medium max-w-full sm:max-w-2xl lg:max-w-2xl text-justify">
              Architecting future-proof digital infrastructure with a focus on speed, security, and scale. Zora Devs bridges the gap between complex business challenges and elegant technical execution—delivering custom software that doesn't just work, but leads.
            </p>

            {/* CTA Card */}
            <div className="mb-4 max-w-full sm:max-w-2xl lg:max-w-2xl">
              <p className="text-white font-semibold text-sm sm:text-base md:text-base leading-relaxed mb-3 sm:mb-4 bg-gradient-to-r from-red-500/20 via-orange-500/20 to-transparent px-4 py-3 rounded-lg border border-red-500/30">
                Don't wait months for results. Deploy your website in 7 days—let's start today
              </p>
              <button 
                onClick={() => setShowModal(true)}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 hover:border-white/50 text-white font-bold py-2 px-6 sm:px-8 md:py-3 md:px-10 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 text-sm sm:text-base whitespace-nowrap shadow-lg">
                Book your free consultation call
              </button>
            </div>

          </div>

          {/* Right Form */}
          <div className="lg:col-span-5 order-2 w-full">
            <div className="relative z-20 bg-gray-900/40 backdrop-blur-xl border border-white/30 rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-5 md:p-6 w-full max-w-full sm:max-w-sm mx-auto lg:mx-0 animate-float hover:shadow-3xl transition-all duration-500">
              {submitStatus === 'success' && (
                <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 text-xs sm:text-sm">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 text-xs sm:text-sm">
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3">
                <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY} />
                {/* Name Field */}
                <div>
                  <label className="block text-white text-xs sm:text-xs font-medium mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 sm:py-2.5 bg-gray-800/50 border border-gray-600/30 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-white placeholder-gray-400 backdrop-blur-sm text-xs sm:text-sm"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-white text-xs sm:text-xs font-medium mb-1">Email address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="zora@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 sm:py-2.5 bg-gray-800/50 border border-gray-600/30 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-white placeholder-gray-400 backdrop-blur-sm text-xs sm:text-sm"
                    required
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-white text-xs sm:text-xs font-medium mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 XXXXXXXXXX"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 sm:py-2.5 bg-gray-800/50 border border-gray-600/30 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-white placeholder-gray-400 backdrop-blur-sm text-xs sm:text-sm"
                    required
                  />
                </div>

                {/* Industry Field */}
                <div>
                  <label className="block text-white text-xs sm:text-xs font-medium mb-1">Tell Us Your Industry</label>
                  <input
                    type="text"
                    name="organization"
                    placeholder="Business Industry"
                    value={formData.organization || ''}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 sm:py-2.5 bg-gray-800/50 border border-gray-600/30 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-white placeholder-gray-400 backdrop-blur-sm text-xs sm:text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl shadow-lg relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-xs sm:text-sm active:scale-95"
                >
                  <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-2">
                    {isSubmitting ? 'Sending...' : 'Talk to Us'}
                    {!isSubmitting && (
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 via-red-500/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Let's Talk Modal Form */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-3 sm:p-4">
          <div className="bg-gray-900/80 backdrop-blur-xl border border-white/30 rounded-xl sm:rounded-2xl shadow-2xl p-5 sm:p-6 md:p-8 w-full max-w-full sm:max-w-md max-h-[90vh] overflow-y-auto relative">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent pr-8">
              Let's Talk
            </h3>

            {modalSubmitStatus === 'success' && (
              <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 text-xs sm:text-sm">
                Thank you! We'll contact you soon.
              </div>
            )}
            {modalSubmitStatus === 'error' && (
              <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 text-xs sm:text-sm">
                Sorry, there was an error. Please try again.
              </div>
            )}

            <form onSubmit={handleModalSubmit} className="space-y-3 sm:space-y-4">
              <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY} />
              
              {/* Name Field */}
              <div>
                <label className="block text-white text-xs sm:text-sm font-medium mb-1 sm:mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={modalFormData.name}
                  onChange={handleModalInputChange}
                  className="w-full px-3 py-2 sm:py-2.5 bg-gray-800/50 border border-gray-600/30 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-white placeholder-gray-400 backdrop-blur-sm text-xs sm:text-sm"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-white text-xs sm:text-sm font-medium mb-1 sm:mb-2">Email address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="zora@example.com"
                  value={modalFormData.email}
                  onChange={handleModalInputChange}
                  className="w-full px-3 py-2 sm:py-2.5 bg-gray-800/50 border border-gray-600/30 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-white placeholder-gray-400 backdrop-blur-sm text-xs sm:text-sm"
                  required
                />
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-white text-xs sm:text-sm font-medium mb-1 sm:mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 XXXXXXXXXX"
                  value={modalFormData.phone}
                  onChange={handleModalInputChange}
                  className="w-full px-3 py-2 sm:py-2.5 bg-gray-800/50 border border-gray-600/30 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-white placeholder-gray-400 backdrop-blur-sm text-xs sm:text-sm"
                  required
                />
              </div>

              {/* Industry Field */}
              <div>
                <label className="block text-white text-xs sm:text-sm font-medium mb-1 sm:mb-2">Tell Us Your Industry</label>
                <input
                  type="text"
                  name="organization"
                  placeholder="Business Industry"
                  value={modalFormData.organization || ''}
                  onChange={handleModalInputChange}
                  className="w-full px-3 py-2 sm:py-2.5 bg-gray-800/50 border border-gray-600/30 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-white placeholder-gray-400 backdrop-blur-sm text-xs sm:text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={isModalSubmitting}
                className="w-full bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl shadow-lg relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none active:scale-95"
              >
                <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-2">
                  {isModalSubmitting ? 'Sending...' : 'Talk to Us'}
                  {!isModalSubmitting && (
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 via-red-500/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}

export default Hero