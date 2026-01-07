"use client"

import { motion } from "framer-motion"
import { Sparkles, Heart, Leaf } from "lucide-react"

export function SolutionSection() {
  return (
    <section id="solucion" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">La Solución</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-balance leading-tight">
              Gota Azul te ayuda a entender tu consumo
            </h2>

            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Una aplicación simple y clara que transforma datos complejos en información útil para tu día a día. Sin
              complicaciones, sin tecnicismos.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Diseñado para ti</h4>
                  <p className="text-muted-foreground">Interfaz simple e intuitiva, pensada para cualquier persona.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Leaf className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Conciencia ambiental</h4>
                  <p className="text-muted-foreground">Promueve el uso responsable del agua desde tu hogar.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 rounded-3xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-primary/40 flex items-center justify-center">
                    <Sparkles className="w-12 h-12 text-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-6xl font-bold text-primary">100%</p>
                  <p className="text-xl text-muted-foreground">Transparencia</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
