"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Heart } from "lucide-react"

export function TrustSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Confianza y Transparencia</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-balance leading-tight">
              Tu privacidad es nuestra prioridad
            </h2>

            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Gota Azul está comprometida con el manejo responsable de tu información. Comunicación clara, honesta y
              transparente.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6"
          >
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Datos seguros</h4>
              <p className="text-sm text-muted-foreground">
                Tu información está protegida con los más altos estándares
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">Privacidad respetada</h4>
              <p className="text-sm text-muted-foreground">Solo usamos tus datos para mejorar tu experiencia</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Compromiso honesto</h4>
              <p className="text-sm text-muted-foreground">Comunicación clara sobre el estado real del proyecto</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
