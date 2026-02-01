import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-black/70 via-gray-900/60 to-black/70 backdrop-blur-lg border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/img/ZORADEVS-LOGOWhite.png" 
              alt="ZORADEVS" 
              className="h-8 w-auto"
            />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
          </div>
        </div>

        {/* Mobile Navigation */}
      </div>
    </header>
  )
}

export default Header