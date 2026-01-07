"use client"

import { motion } from "framer-motion"
import { BarChart3, Calendar, Lightbulb, TrendingDown } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: BarChart3,
    title: "Visualización en tiempo real",
    description: "Observa el consumo de agua de tu hogar actualizado constantemente.",
  },
  {
    icon: Calendar,
    title: "Historial completo",
    description: "Consulta tu consumo diario y mensual para identificar tendencias.",
  },
  {
    icon: TrendingDown,
    title: "Identificación de patrones",
    description: "Descubre cuándo y cómo consumes más agua en tu hogar.",
  },
  {
    icon: Lightbulb,
    title: "Información clara",
    description: "Recibe consejos prácticos para promover el uso responsable del agua.",
  },
]

export function FeaturesSection() {
  return (
    <section id="funcionalidades" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-4"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance">Funcionalidades diseñadas para ti</h2>
          <p className="text-lg sm:text-xl text-muted-foreground text-pretty leading-relaxed">
            Cada característica está pensada para ayudarte a tomar mejores decisiones sobre el consumo de agua en tu
            hogar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 sm:p-8 hover:shadow-xl transition-all bg-card border-border h-full group hover:border-primary/50">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
