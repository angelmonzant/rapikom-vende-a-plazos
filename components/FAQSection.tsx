'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const faqs = [
  {
    question: "¿Qué pasa si el cliente no paga?",
    answer: "Rapikom adquiere un compromiso con el aliado comercial, así que es Rapikom quien fielmente le paga al aliado comercial el día de pago, sin atraso. Tú siempre estás protegido."
  },
  {
    question: "¿Tengo que emitir factura?",
    answer: "El aliado comercial puede emitir nota de entrega o factura. Ambas opciones son válidas para el proceso de financiamiento."
  },
  {
    question: "¿A qué tasa paga Rapikom?",
    answer: "Rapikom paga a la tasa del BCV del día de pago, garantizando transparencia y actualización constante de los valores."
  },
  {
    question: "¿Cómo funciona el programa de referidos?",
    answer: "Por cada 5 aliados que invites a nuestra plataforma y pague su activación, recibirás un descuento directo en tu comisión por ventas."
  },
  {
    question: "¿Cuánto cuesta la activación?",
    answer: "La activación tiene un costo de $65 USD. Este pago incluye la configuración de tu cuenta y el entrenamiento inicial."
  },
  {
    question: "¿Qué necesito para activar RCash en mi tienda?",
    answer: "Para activar RCash en tu tienda debes: realizar el pago de activación de $65, registrarte en nuestra plataforma, y asistir a la inducción online."
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Preguntas frecuentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestro servicio de financiamiento
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.1}
              className="mb-4"
            >
              <motion.div
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-primary" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA after FAQ */}
        <AnimatedSection className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-orange-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Tienes más preguntas?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Nuestro equipo está listo para ayudarte a resolver cualquier duda 
              sobre nuestro servicio de financiamiento.
            </p>
            <motion.button
              className="bg-white text-primary px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contactar Soporte
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
} 