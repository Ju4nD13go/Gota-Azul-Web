"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Droplet, Waves } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  const [particles, setParticles] = useState<Array<{ left: number; top: number; duration: number; delay: number }>>([])

  useEffect(() => {
    // Generar posiciones aleatorias solo en el cliente
    setParticles(
      Array.from({ length: 20 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2,
      }))
    )
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/5 to-background">
        <div className="absolute inset-0 opacity-10">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: particle.duration,
                repeat: Number.POSITIVE_INFINITY,
                delay: particle.delay,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
            <Waves className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Próximamente disponible</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-balance leading-tight">
            Monitorea el consumo de agua de tu hogar
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground text-pretty leading-relaxed">
            Visualiza, entiende y analiza el consumo de agua de tu hogar desde tu celular. Toma decisiones responsables
            sobre el uso del recurso más importante.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto">
              <a href="#contacto">
                Únete a la Beta
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 bg-transparent w-full sm:w-auto">
              Conocer Más
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative mx-auto w-full max-w-md">
            {/* Phone mockup */}
            <div className="relative z-10 bg-card rounded-3xl p-4 shadow-2xl border border-border">
              <div className="bg-primary/5 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <Droplet className="w-8 h-8 text-primary" />
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Consumo Hoy</p>
                    <p className="text-2xl font-bold text-primary">245 L</p>
                  </div>
                </div>

                <div className="h-48 bg-gradient-to-t from-primary/20 to-accent/20 rounded-xl flex items-end justify-center p-4">
                  <div className="w-full h-32 bg-primary/40 rounded-lg" />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-card p-3 rounded-lg">
                    <p className="text-xs text-muted-foreground">Ayer</p>
                    <p className="text-sm font-bold">289 L</p>
                  </div>
                  <div className="bg-card p-3 rounded-lg">
                    <p className="text-xs text-muted-foreground">Semana</p>
                    <p className="text-sm font-bold">1.8 m³</p>
                  </div>
                  <div className="bg-card p-3 rounded-lg">
                    <p className="text-xs text-muted-foreground">Mes</p>
                    <p className="text-sm font-bold">7.2 m³</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
