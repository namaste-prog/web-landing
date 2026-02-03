import './OurServices.css'

const OurServices = () => {
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
          <path d="M12 18h.01"/>
        </svg>
      ),
      title: "Mobile App Development",
      description: "We design and develop scalable mobile applications that deliver seamless performance, engaging user experiences, and support your business growth."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M2 12h20"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
      title: "Website Development",
      description: "We create fast, responsive, and SEO-friendly websites that reflect your brand and drive results."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <path d="M3 9h18"/>
          <path d="M9 3v18"/>
        </svg>
      ),
      title: "Web App Development",
      description: "We build dynamic web applications that deliver powerful functionality through browsers."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a3 3 0 0 0-3 3v1H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-3V5a3 3 0 0 0-3-3z"/>
          <circle cx="9" cy="13" r="1" fill="currentColor"/>
          <circle cx="15" cy="13" r="1" fill="currentColor"/>
          <path d="M9 17c0 1 1 2 3 2s3-1 3-2"/>
        </svg>
      ),
      title: "AI Development",
      description: "We develop intelligent AI solutions that automate processes, enhance decision-making, and improve user experiences."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
          <path d="M21 3v5h-5"/>
          <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
          <path d="M3 21v-5h5"/>
        </svg>
      ),
      title: "UI/UX Design",
      description: "We craft intuitive and engaging user interfaces with a deep focus on user experience."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7"/>
          <rect x="14" y="3" width="7" height="7"/>
          <rect x="14" y="14" width="7" height="7"/>
          <rect x="3" y="14" width="7" height="7"/>
        </svg>
      ),
      title: "Custom Development",
      description: "We develop custom software that solves unique business challenges. From CRM to complex enterprise solutions."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 10l-4 4m8-4l4 4M3 3h18v18H3z"/>
        </svg>
      ),
      title: "Software Development",
      description: "We build robust, scalable software tailored to your business needs. From planning to deployment."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: "Hire Software Developers",
      description: "Scale your team with our vetted, skilled software developers. Whether you need short-term or long-term collaboration."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9"/>
          <path d="M12 8v4l3 2"/>
        </svg>
      ),
      title: "Consulting",
      description: "Our IT consulting services help you define clear digital strategies, select the right technologies."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 11v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6"/>
          <path d="M5 11l7-5 7 5"/>
          <path d="M9 11v6h6v-6"/>
        </svg>
      ),
      title: "Digital Marketing",
      description: "We create powerful digital marketing strategies that boost your online presence, increase engagement, and drive measurable business results."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <path d="M2 17h20"/>
          <path d="M6 20h12"/>
          <circle cx="9" cy="10" r="1.5" fill="currentColor"/>
          <circle cx="15" cy="10" r="1.5" fill="currentColor"/>
        </svg>
      ),
      title: "Generative AI",
      description: "Leverage advanced generative AI models to automate content creation, enhance decision-making, and unlock new business opportunities with cutting-edge technology."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="5" cy="12" r="3"/>
          <circle cx="19" cy="12" r="3"/>
          <line x1="8" y1="12" x2="16" y2="12"/>
        </svg>
      ),
      title: "Agentic AI",
      description: "Deploy intelligent autonomous agents that learn, adapt, and take actions independently to streamline workflows and maximize operational efficiency."
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Red Blob Effects */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-red-600/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-20 w-64 h-64 bg-red-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-red-900/50 via-red-800/40 to-red-900/50 backdrop-blur-sm border border-red-700/30 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-500 group hover:transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-200 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurServices