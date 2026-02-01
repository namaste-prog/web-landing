import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import OurServices from './components/OurServices'
import WhyChooseUs from './components/WhyChooseUs'
import OurWork, { TechnologySlider } from './components/OurWork'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <OurServices />
      <WhyChooseUs />
      <OurWork />
      <TechnologySlider />
    </div>
  )
}

export default App
