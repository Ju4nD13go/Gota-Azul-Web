"use client"

import { motion } from "framer-motion"
import { UserPlus, Download, Eye } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Regístrate",
    description: "Crea tu cuenta y vincula tu hogar en segundos.",
  },
  {
    number: "02",
    icon: Download,
    title: "Conecta",
    description: "La app recopila y procesa los datos de consumo de tu hogar.",
  },
  {
    number: "03",
    icon: Eye,
    title: "Visualiza",
    description: "Consulta tu consumo y toma decisiones informadas.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">¿Cómo funciona?</h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Tres pasos simples para comenzar a monitorear tu consumo de agua
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="text-center space-y-4">
                  <div className="relative inline-block">
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                      <step.icon className="w-10 h-10 text-primary" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
