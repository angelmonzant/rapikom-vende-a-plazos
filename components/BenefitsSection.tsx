'use client'

import { motion } from 'framer-motion'
import { Shield, Zap, Users, TrendingUp, DollarSign, Target } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const benefits = [
  {
    icon: TrendingUp,
    title: "Aumento del 40-60%",
    subtitle: "En ticket promedio",
    description: "Tus clientes pueden comprar más productos al poder pagar en cuotas sin intereses."
  },
  {
    icon: Users,
    title: "Incremento del 45%",
    subtitle: "En tasa de conversión",
    description: "Más clientes completan sus compras al tener opciones de financiamiento flexibles."
  },
  {
    icon: Target,
    title: "Flujo de clientes",
    subtitle: "NUEVOS cada semana",
    description: "Atrae nuevos clientes que buscan opciones de pago accesibles y sin intereses."
  },
  {
    icon: Shield,
    title: "Protección total",
    subtitle: "Contra impagos",
    description: "Rapikom asume el riesgo. Tú siempre cobras seguro el monto de la venta."
  },
  {
    icon: Zap,
    title: "Pagos rápidos",
    subtitle: "En 14 días",
    description: "Recibe tus pagos de manera puntual sin preocuparte por la gestión de cobranza."
  },
  {
    icon: DollarSign,
    title: "Comisiones flexibles",
    subtitle: "Según tu volumen",
    description: "Mientras más vendas, menos pagas. Comisiones desde 5% hasta 7.50%."
  }
]

export default function BenefitsSection() {
  return (
    <section id="benefits" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Beneficios para tu negocio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Mejora tus ventas con Rapikom, ¡la plataforma de financiamiento que te permite vender en cuotas!
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.1}
              className="group"
            >
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                whileHover={{ 
                  y: -10,
                  scale: 1.02
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="text-primary font-semibold">
                      {benefit.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Section */}
        <AnimatedSection className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-orange-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Cuántas ventas has perdido este mes?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              A nuestros +900 aliados no les ha pasado. Al contrario, han logrado 
              resultados extraordinarios.
            </p>
            <motion.button
              className="bg-white text-primary px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              No dejes que tu competencia se adelante
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
} 