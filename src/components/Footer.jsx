import { useState } from 'react'

const Footer = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handlePhoneSubmit = async (e) => {
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
          phone: phoneNumber,
          subject: 'New Phone Number Submission - Footer',
          message: `New phone number submission: ${phoneNumber}`
        })
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setPhoneNumber('')
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

  const footerSections = {
    'Services': [
      'Quick Commerce Development',
      'Mobile App Development', 
      'Web Development',
      'API Integration',
      'Cloud Solutions',
      'Maintenance & Support'
    ],
    'Industries': [
      'Grocery & Food',
      'Pharmacy & Health',
      'E-commerce & Retail',
      'Logistics & Transport',
      'On-demand Services',
      'Home Services'
    ],
    'Company': [
      'About Us',
      'Our Team',
      'Careers',
      'Case Studies',
      'Blog',
      'Contact'
    ],
    'Resources': [
      'Documentation',
      'API Reference',
      'Help Center',
      'Community',
      'Status Page',
      'Privacy Policy'
    ]
  }

  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' }
  ]

  const certifications = [
    { name: 'NASSCOM', icon: '🏢' },
    { name: 'ISO 27001', icon: '🔒' },
    { name: 'AICPA SOC 2', icon: '✅' },
    { name: 'ISO 9001:2015', icon: '⭐' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold text-gradient mb-4">
              QuickCommerce
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We are a trusted digital transformation company helping businesses of varying scales 
              access technology expertise for quick commerce success.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-400">
                <span className="mr-3">📧</span>
                info@quickcommerce.com
              </div>
              <div className="flex items-center text-gray-400">
                <span className="mr-3">📞</span>
                +91 98765 43210
              </div>
              <div className="flex items-center text-gray-400">
                <span className="mr-3">📍</span>
                India, USA, UK, Australia
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-xl hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-white mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center mb-8">
            <h4 className="text-lg font-semibold text-white mb-6">Protected & Certified By</h4>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300">
                  <div className="text-3xl mb-2">{cert.icon}</div>
                  <span className="text-sm font-medium">{cert.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Let's Grow Your Business - You Lead, We Manage
            </h3>
            {submitStatus === 'success' && (
              <div className="mb-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-200 text-sm max-w-md mx-auto">
                Thank you! We'll contact you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-200 text-sm max-w-md mx-auto">
                Sorry, there was an error. Please try again.
              </div>
            )}
            <form onSubmit={handlePhoneSubmit} className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY} />
              <div className="flex-1 flex">
                <div className="flex items-center px-3 py-3 bg-white rounded-l-lg">
                  <span className="text-gray-600 font-medium">+91</span>
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-r-lg border-0 focus:ring-2 focus:ring-blue-500 text-gray-900"
                  required
                />
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2026 QuickCommerce. All rights reserved. | Privacy Policy | Terms of Service
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-gray-400 text-sm">Protected By:</div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🛡️</span>
                <span className="text-sm text-gray-400">DMCA Protected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer