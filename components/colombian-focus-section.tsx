"use client"

import { motion } from "framer-motion"
import { MapPin, Users, Leaf } from "lucide-react"

export function ColombianFocusSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Hecho en Colombia</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-balance leading-tight">
              Diseñado para hogares colombianos
            </h2>

            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto">
              Entendemos la realidad de nuestros hogares y la importancia del agua como recurso vital para nuestras
              comunidades.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 pt-8"
          >
            <div className="p-6 rounded-2xl bg-card border border-border">
              <Users className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Cercanía cultural</h4>
              <p className="text-sm text-muted-foreground">Adaptado a las necesidades de familias colombianas</p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <Leaf className="w-8 h-8 text-accent mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Conciencia local</h4>
              <p className="text-sm text-muted-foreground">Contribuye al cuidado del agua en tu región</p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Compromiso social</h4>
              <p className="text-sm text-muted-foreground">Uso responsable como responsabilidad colectiva</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
