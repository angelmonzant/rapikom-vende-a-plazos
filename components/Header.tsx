'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-lg transition-all duration-300">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-2 cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="/assets/logo-rapikom.png" 
              alt="Rapikom Logo" 
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold text-gray-900"></span>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-gray-800 hover:text-primary transition-colors duration-200 font-medium"
            >
              Beneficios
            </button>
            <button 
              onClick={() => scrollToSection('plans')}
              className="text-gray-800 hover:text-primary transition-colors duration-200 font-medium"
            >
              Financiamiento
            </button>
            <button 
              onClick={() => scrollToSection('asesores')}
              className="text-gray-800 hover:text-primary transition-colors duration-200 font-medium"
            >
              Testimonios
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-gray-800 hover:text-primary transition-colors duration-200 font-medium"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary/90 transition-all duration-200"
            >
              Contactar
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-gray-800"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 backdrop-blur-md rounded-b-2xl shadow-xl border-t border-gray-200"
            >
              <div className="py-6 space-y-4">
                <button 
                  onClick={() => scrollToSection('benefits')}
                  className="block w-full text-left px-6 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-200 font-medium"
                >
                  Beneficios
                </button>
                <button 
                  onClick={() => scrollToSection('plans')}
                  className="block w-full text-left px-6 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-200 font-medium"
                >
                  Financiamiento
                </button>
                <button 
                  onClick={() => scrollToSection('asesores')}
                  className="block w-full text-left px-6 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-200 font-medium"
                >
                  Testimonios
                </button>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="block w-full text-left px-6 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-200 font-medium"
                >
                  FAQ
                </button>
                <div className="px-6 pt-4">
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="w-full bg-primary text-white py-3 rounded-full font-medium hover:bg-primary/90 transition-all duration-200"
                  >
                    Contactar
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
} 