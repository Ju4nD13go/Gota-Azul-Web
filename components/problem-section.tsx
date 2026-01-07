"use client"

import { motion } from "framer-motion"
import { AlertCircle, TrendingUp, Eye } from "lucide-react"
import { Card } from "@/components/ui/card"

const problems = [
  {
    icon: Eye,
    title: "Falta de visibilidad",
    description: "Los hogares no conocen su consumo real de agua hasta recibir la factura del mes.",
  },
  {
    icon: TrendingUp,
    title: "Consumo oculto",
    description: "El consumo diario pasa desapercibido, dificultando la identificación de patrones.",
  },
  {
    icon: AlertCircle,
    title: "Sin herramientas claras",
    description: "Faltan soluciones simples y accesibles para cambiar hábitos de consumo.",
  },
]

export function ProblemSection() {
  return (
    <section id="problema" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-4"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance">
            El agua se agota sin que nos demos cuenta
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground text-pretty leading-relaxed">
            Cada día, miles de litros fluyen por nuestros hogares sin que tengamos conciencia real de cuánto consumimos
            o cómo lo hacemos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow bg-card border-border h-full">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
