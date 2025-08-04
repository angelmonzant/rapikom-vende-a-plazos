'use client'

import { motion } from 'framer-motion'
import { Check, Star, CreditCard, Store, Crown, ArrowRight } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const financingLines = [
  {
    title: "Línea Principal",
    subtitle: "Tres cuotas cada 14 días",
    description: "Ideal para una amplia variedad de comercios",
    features: [
      "Financiamiento accesible",
      "Tres cuotas cada 14 días",
      "Amplia variedad de comercios",
      "Proceso simple y rápido"
    ],
    popular: true,
    cardImage: "/assets/card-linea-principal.jpg" // Placeholder para la imagen
  },
  {
    title: "Línea Express",
    subtitle: "Dos cuotas cada 14 días",
    description: "Próximamente - Diseñada para supermercados, farmacias y restaurantes",
    features: [
      "Dos cuotas cada 14 días",
      "Especial para supermercados",
      "Farmacias y restaurantes",
      "Proceso optimizado"
    ],
    popular: false,
    comingSoon: true,
    cardImage: "/assets/card-linea-express.jpg" // Placeholder para la imagen
  }
]

const primeBenefits = [
  "Aumenta tu Línea Principal a $200",
  "Aumenta tu Línea Express a $80",
  "Beneficios exclusivos en primer nivel",
  "Acceso prioritario a nuevas funciones"
]

export default function PlansSection() {
  return (
    <section id="plans" className="section-padding bg-black text-white">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">¿Qué ofrece Rapikom Cash?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Financiamiento accesible para tus clientes con dos Líneas de compras diseñadas para diferentes tipos de comercios.
          </p>
        </AnimatedSection>

        {/* Financing Lines - Revolut Style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {financingLines.map((line, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.2}
              className="relative"
            >
              <motion.div
                className={`bg-gray-900 rounded-3xl p-8 border border-gray-800 relative overflow-hidden ${
                  line.comingSoon ? 'opacity-75' : ''
                }`}
                whileHover={{ 
                  y: -10,
                  scale: 1.02
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                                 {/* Card Image */}
                 <div className="mb-6">
                   <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl overflow-hidden">
                     <img src={line.cardImage} alt={`Tarjeta ${line.title}`} className="w-full h-full object-cover" />
                   </div>
                 </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {line.title}
                    </h3>
                    <p className="text-primary font-semibold text-lg mb-2">
                      {line.subtitle}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {line.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {line.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + featureIndex * 0.1 }}
                      >
                        <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300 mt-6 ${
                      line.comingSoon
                        ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                        : 'bg-primary text-white hover:bg-primary/90'
                    }`}
                    whileHover={line.comingSoon ? {} : { scale: 1.02 }}
                    whileTap={line.comingSoon ? {} : { scale: 0.98 }}
                    disabled={line.comingSoon}
                  >
                    {line.comingSoon ? 'Próximamente' : 'Afíliate ahora'}
                  </motion.button>
                </div>

                {line.comingSoon && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Próximamente
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* RCash Prime Section - Revolut Style */}
        <AnimatedSection className="mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text */}
              <div className="space-y-8">
                                 <div>
                   <div className="flex items-center mb-4">
                     <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-orange-100 rounded-full flex items-center justify-center mr-4">
                       <img src="/assets/logo-prime.png" alt="RCash Prime" className="w-8 h-8" />
                     </div>
                     <h3 className="text-3xl font-bold text-white">
                       RCash Prime
                     </h3>
                   </div>
                  <p className="text-xl text-gray-300 mb-6">
                    El Club Prime ofrece beneficios exclusivos para aumentar tu Línea de Compra a $200 en tu primer nivel.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {primeBenefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-gray-300">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  className="bg-white text-black px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Unirse a RCash Prime</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Right Side - Cards */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="bg-gray-900 rounded-2xl p-6 border border-gray-800"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-full h-32 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <img src="/assets/logo-prime.png" alt="RCash Prime" className="w-12 h-12" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Beneficios Premium</h4>
                  <p className="text-gray-400 text-sm">Acceso exclusivo a funciones avanzadas</p>
                </motion.div>

                <motion.div
                  className="bg-gray-900 rounded-2xl p-6 border border-gray-800"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-full h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl overflow-hidden mb-4">
                    <img src="/assets/card-prime.jpg" alt="Tarjeta Prime" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Multiplica tus ventas</h4>
                  <p className="text-gray-400 text-sm">Aumenta tu capacidad de compra</p>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* App Download Section - Updated Style */}
        <AnimatedSection className="text-center">
          <div className="bg-gray-900 rounded-3xl p-8 max-w-4xl mx-auto border border-gray-800">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Descarga la App de Rapikom
            </h3>
            <p className="text-lg mb-6 text-gray-300">
              Accede a todas las funcionalidades desde tu dispositivo móvil
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#"
                className="bg-white text-black rounded-xl px-6 py-3 flex items-center justify-center space-x-3 hover:bg-gray-100 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src="/assets/google-play.png" alt="Google Play" className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-xs text-gray-600">Disponible en</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </motion.a>
              
              <motion.a
                href="#"
                className="bg-white text-black rounded-xl px-6 py-3 flex items-center justify-center space-x-3 hover:bg-gray-100 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src="/assets/app-store.png" alt="App Store" className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-xs text-gray-600">Disponible en</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </motion.a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
} 