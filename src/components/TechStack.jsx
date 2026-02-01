import { useState } from 'react'

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('Programming Language')

  const techCategories = {
    'Programming Language': [
      { name: 'JavaScript', icon: '🟨' },
      { name: 'Python', icon: '🐍' },
      { name: 'Java', icon: '☕' },
      { name: 'Swift', icon: '🍎' },
      { name: 'Kotlin', icon: '📱' },
      { name: 'TypeScript', icon: '📘' }
    ],
    'Frameworks': [
      { name: 'React', icon: '⚛️' },
      { name: 'React Native', icon: '📱' },
      { name: 'Flutter', icon: '💙' },
      { name: 'Node.js', icon: '🟢' },
      { name: 'Django', icon: '🎸' },
      { name: 'Spring Boot', icon: '🍃' }
    ],
    'Analytics Tools': [
      { name: 'Google Analytics', icon: '📊' },
      { name: 'Mixpanel', icon: '📈' },
      { name: 'Amplitude', icon: '📉' },
      { name: 'Firebase Analytics', icon: '🔥' },
      { name: 'Tableau', icon: '📋' },
      { name: 'Power BI', icon: '⚡' }
    ],
    'Database': [
      { name: 'MongoDB', icon: '🍃' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MySQL', icon: '🐬' },
      { name: 'Redis', icon: '🔴' },
      { name: 'Firebase', icon: '🔥' },
      { name: 'DynamoDB', icon: '⚡' }
    ],
    'Cloud Platforms': [
      { name: 'AWS', icon: '☁️' },
      { name: 'Google Cloud', icon: '☁️' },
      { name: 'Azure', icon: '☁️' },
      { name: 'Digital Ocean', icon: '🌊' },
      { name: 'Heroku', icon: '💜' },
      { name: 'Vercel', icon: '▲' }
    ],
    'CRM Software': [
      { name: 'Salesforce', icon: '☁️' },
      { name: 'HubSpot', icon: '🧡' },
      { name: 'Zoho', icon: '📋' },
      { name: 'Pipedrive', icon: '🚰' },
      { name: 'Freshworks', icon: '🌿' },
      { name: 'Monday.com', icon: '📅' }
    ]
  }

  const categories = Object.keys(techCategories)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-100 text-cyan-800 mb-4">
            🚀 Advanced Technology
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cutting-Edge Tech Stack Engineered for Rapid Development and Stability
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As a proven Quick Commerce development company, we only use the best-suited platforms, 
            languages, and tools, tailor-made for your needs. Here's the technology we use to build your dream app.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {techCategories[activeCategory].map((tech, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg hover:border-blue-300 transition-all duration-300 group cursor-pointer"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="text-5xl mb-6">⚡</div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Build with the Best Technology?
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Let our expert developers leverage these cutting-edge technologies to create 
            your next-generation quick commerce platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-8 rounded-lg transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack