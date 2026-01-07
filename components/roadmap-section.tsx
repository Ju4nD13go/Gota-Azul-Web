"use client"

import { motion } from "framer-motion"
import { Rocket, Code, Sparkles } from "lucide-react"
import { Card } from "@/components/ui/card"

const roadmapItems = [
  {
    phase: "Actual",
    icon: Code,
    title: "Desarrollo en progreso",
    description: "Estamos construyendo las funcionalidades principales de la aplicación.",
    status: "in-progress",
  },
  {
    phase: "Próximo",
    icon: Rocket,
    title: "Versión Beta",
    description: "Lanzamiento para usuarios iniciales y recolección de retroalimentación.",
    status: "upcoming",
  },
  {
    phase: "Futuro",
    icon: Sparkles,
    title: "Nuevas características",
    description: "Alertas personalizadas, comparativas y más herramientas de análisis.",
    status: "future",
  },
]

export function RoadmapSection() {
  return (
    <section id="roadmap" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">Estado del proyecto</h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Gota Azul está en desarrollo activo. Conoce nuestro progreso y lo que viene.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-6">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={item.phase}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className={`p-6 border-l-4 ${
                  item.status === "in-progress"
                    ? "border-l-primary bg-primary/5"
                    : item.status === "upcoming"
                      ? "border-l-accent bg-accent/5"
                      : "border-l-muted bg-card"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      item.status === "in-progress"
                        ? "bg-primary/20"
                        : item.status === "upcoming"
                          ? "bg-accent/20"
                          : "bg-muted"
                    }`}
                  >
                    <item.icon
                      className={`w-6 h-6 ${
                        item.status === "in-progress"
                          ? "text-primary"
                          : item.status === "upcoming"
                            ? "text-accent"
                            : "text-muted-foreground"
                      }`}
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-medium text-muted-foreground">{item.phase}</span>
                      {item.status === "in-progress" && (
                        <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                          En progreso
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
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
