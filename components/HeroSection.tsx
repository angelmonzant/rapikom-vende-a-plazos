'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { TrendingUp, Users, CreditCard, ArrowRight } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function HeroSection() {
  const { scrollY } = useScroll()
  const blur = useTransform(scrollY, [0, 300], [0, 8])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3])

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div 
        className="absolute inset-0"
        style={{ filter: `blur(${blur}px)`, opacity }}
      >
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/portada-cover.jpg')"
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="text-center min-h-screen flex flex-col justify-center items-center">
          {/* Main Content */}
          <div className="text-white max-w-4xl mx-auto">
            <AnimatedSection delay={0.2}>
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-white">Vende a plazos</span>
                <br />
                <span style={{ color: '#ffffff' }}>en tu establecimiento</span>
              </motion.h1>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <motion.p 
                className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Haz que tu negocio venda en comodas cuotas sin interés
              </motion.p>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
                <motion.button
                  onClick={scrollToContact}
                  className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold border border-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Quiero afiliar mi comercio</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Conocer más beneficios
                </motion.button>
              </div>
            </AnimatedSection>

            {/* Stats with Icons */}
            <AnimatedSection delay={0.8}>
              <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div className="flex justify-center mb-2">
                    <TrendingUp className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">60%</div>
                  <div className="text-sm text-gray-300">Aumento en ventas</div>
                </motion.div>

                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <div className="flex justify-center mb-2">
                    <Users className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">85%</div>
                  <div className="text-sm text-gray-300">Conversión</div>
                </motion.div>

                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <div className="flex justify-center mb-2">
                    <CreditCard className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">Líneas</div>
                  <div className="text-sm text-gray-300">de Compras</div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
} 