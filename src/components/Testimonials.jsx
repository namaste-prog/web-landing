import './Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    {
      initial: "R",
      quote: "From the first design draft to the final product, their team understood our vision perfectly. The UI/UX was clean, intuitive, and it aligned seamlessly with our brand identity.",
      name: "Rohit Mehra",
      title: "Co-Founder, FinTech Startup"
    },
    {
      initial: "A",
      quote: "We had a flawless launch thanks to their meticulous QA and deployment process. Everything went live without a hitch, and our users loved the experience from day one.",
      name: "Ankit Rathi",
      title: "CEO, ECommerce Brand"
    },
    {
      initial: "L",
      quote: "What stood out most was the post-launch support. They didn't just disappear — they helped us optimize, scale, and continuously improve based on real-time data and feedback.",
      name: "Lina Verma",
      title: "Marketing Head, SaaS Platform"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-red-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">Leading Brands</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-500 group hover:transform hover:scale-105"
            >
              {/* Initial Circle */}
              <div className="mb-6">
                <div className="w-14 h-14 rounded-full border-2 border-red-500 flex items-center justify-center text-red-500 font-bold text-xl group-hover:bg-red-500/10 transition-all duration-300">
                  {testimonial.initial}
                </div>
              </div>

              {/* Quote */}
              <p className="text-gray-300 italic text-base leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div>
                <h4 className="text-white font-bold text-lg mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-gray-400 text-sm">
                  {testimonial.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
