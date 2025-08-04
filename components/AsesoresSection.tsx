'use client'

import { motion } from 'framer-motion'
import { Star, Award, Building2, QrCode, Image as ImageIcon } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const aliados = [
  "OPTICA 3000",
  "LUNA WORLD", 
  "RIM 152",
  "REPUESTOS YCARS23",
  "OPTICAIMAGENVISION",
  "LARATECH",
  "TIENDA DIGO",
  "EMPODERADAS",
  "AUTOREPUESTOS4P",
  "RIGA MOTORS RM C.A",
  "ADINCA"
]

const testimonios = [
  {
    nombre: "Óptica 3000",
    testimonio: "Rapikom ha transformado nuestras ventas. Nuestros clientes ahora pueden comprar con mayor facilidad gracias al financiamiento.",
    rating: 5
  },
  {
    nombre: "Luna World",
    testimonio: "La implementación fue muy sencilla y el soporte es excelente. Nuestras ventas han aumentado significativamente.",
    rating: 5
  },
  {
    nombre: "Repuestos YCars23",
    testimonio: "Nuestros clientes están muy satisfechos con las opciones de pago. Rapikom nos ha ayudado a expandir nuestro negocio.",
    rating: 5
  }
]

const popMaterials = [
  {
    title: "Códigos QR",
    image: "/assets/material-pop/qr-codes.jpg"
  },
  {
    title: "Danglers",
    image: "/assets/material-pop/danglers.jpg"
  },
  {
    title: "Rompevientos",
    image: "/assets/material-pop/rompevientos.jpg"
  }
]

export default function AsesoresSection() {
  return (
    <section id="asesores" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <AnimatedSection delay={0.2}>
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Testimonios de Aliados
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Conoce las experiencias de nuestros aliados comerciales que ya están transformando sus negocios con Rapikom
            </motion.p>
          </div>
        </AnimatedSection>

        {/* Testimonios Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonios.map((testimonio, index) => (
            <AnimatedSection key={index} delay={0.4 + index * 0.2}>
              <motion.div 
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(testimonio.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonio.testimonio}"
                </p>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900">{testimonio.nombre}</h4>
                  <p className="text-primary text-sm">Aliado Comercial</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Logos de Aliados - Carousel */}
        <AnimatedSection delay={0.8}>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Nuestros Aliados Comerciales
            </h3>
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll">
                {[...aliados, ...aliados].map((aliado, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 bg-white rounded-2xl p-4 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 mx-3 min-w-[200px]"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 + (index % aliados.length) * 0.1 }}
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Building2 className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-sm font-semibold text-gray-700 leading-tight">
                        {aliado}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Material P.O.P. Section */}
        <AnimatedSection delay={1.2}>
          <div className="bg-gradient-to-r from-primary to-orange-600 rounded-3xl p-8 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16" />
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  Material P.O.P. de Instalación
                </h3>
                <p className="text-xl opacity-90 max-w-3xl mx-auto">
                  Este material, incluido en tu afiliación, incluye códigos QR, Danglers, Rompevientos y Pendones atractivos para aumentar tus ventas en el establecimiento.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {popMaterials.map((material, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 + index * 0.2 }}
                  >
                                         <div className="w-full h-48 bg-white/10 rounded-xl overflow-hidden">
                       <img src={material.image} alt={material.title} className="w-full h-full object-cover" />
                     </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>


      </div>
    </section>
  )
} 