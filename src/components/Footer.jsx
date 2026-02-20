import { useState } from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    industry: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      // Using Web3Forms as seen in the previous implementation
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          ...formData,
          subject: 'New Contact Form Submission - Footer',
          from_name: formData.name
        })
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          industry: ''
        })
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

  return (
    <footer className="footer-new">
      <div className="footer-container-new">
        <div className="footer-grid-new">

          {/* Section 1: Logo & Description */}
          <div className="footer-section-new brand-section">
            <div className="footer-logo-new">
              <img src="/img/ZORADEVS-LOGOWhite.png" alt="Zoradevs Logo" className="footer-logo-img" />
            </div>
            <p className="footer-description-new text-justify">
              We transform your ideas into high-performing digital solutions. At Zoradevs, our expert developers blend creativity with technology to build websites that are fast, responsive, and built to grow your business. Your vision is our blueprint, we bring it to life with clean, scalable code and modern design.
            </p>
          </div>

          {/* Section 2: Contact Us */}
          <div className="footer-section-new contact-section">
            <h3 className="section-title-new">Contact Us</h3>
            <p className="contact-subtext-new">
              Stay connected with our updates.
            </p>
            <div className="contact-info-new">
              <div className="contact-item-new">
                <span className="contact-icon-new">
                  <Phone size={18} />
                </span>
                <a href="tel:+917838518049">+91 78385 18049</a>
              </div>
              <div className="contact-item-new">
                <span className="contact-icon-new">
                  <Mail size={18} />
                </span>
                <a href="mailto:namaste@zoradevs.com">namaste@zoradevs.com</a>
              </div>
              <div className="contact-item-new">
                <span className="contact-icon-new">
                  <MapPin size={18} />
                </span>
                <span>
                  Zoradevs Technologies Pvt Ltd, office no 1101 O, 11th Floor, Gaur City Centre, Noida, Gautambuddha Nagar, UP 203207
                </span>
              </div>
            </div>
          </div>

          {/* Section 3: Contact Form */}
          <div className="footer-section-new form-section">
            <h3 className="section-title-new">Get In Touch</h3>
            <div className="form-card-new">
              <form onSubmit={handleSubmit}>
                <div className="form-group-new">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group-new">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="zora@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group-new">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+91 XXXXXXXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group-new">
                  <label htmlFor="industry">Tell Us Your Industry</label>
                  <input
                    type="text"
                    id="industry"
                    name="industry"
                    placeholder="Business Industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="status-msg success">Thank you! We will get back to you soon.</div>
                )}
                {submitStatus === 'error' && (
                  <div className="status-msg error">Something went wrong. Please try again.</div>
                )}

                <button
                  type="submit"
                  className="btn-submit-new"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Talk to Us →'}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer