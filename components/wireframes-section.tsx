"use client"

import { motion } from "framer-motion"
import { Smartphone, Monitor, Tablet } from "lucide-react"

export function WireframesSection() {
  const wireframes = [
    {
      title: "Bienvenida",
      description: "Pantalla de inicio con opciones de inicio de sesión y registro",
      device: "mobile",
      image: "/wireframes/Bienvenida.png",
    },
    {
      title: "Iniciar Sesión",
      description: "Accede a tu cuenta con correo electrónico y contraseña",
      device: "mobile",
      image: "/wireframes/iniciarsesion.png",
    },
    {
      title: "Dashboard Principal",
      description: "Visualiza tu consumo diario, comparativas con la OMS y análisis de consumo",
      device: "mobile",
      image: "/wireframes/dashboard.png",
    },
    {
      title: "Registro de Consumo",
      description: "Cronómetro para medir y registrar tu consumo de agua en tiempo real",
      device: "mobile",
      image: "/wireframes/registro.png",
    },
    {
      title: "Comparación OMS",
      description: "Compara tu consumo diario con las recomendaciones de la OMS y recibe consejos",
      device: "mobile",
      image: "/wireframes/comparacion.png",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  }

  return (
    <section id="wireframes" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Smartphone className="w-4 h-4" />
            <span className="text-sm font-medium">Diseño de la App</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance px-4">Explora la Interfaz de Gota Azul</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty px-4">
            Diseñada para ser intuitiva, moderna y fácil de usar. Cada pantalla está pensada para brindarte el control
            total de tu consumo de agua.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8"
        >
          {wireframes.map((wireframe, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <div className="relative bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Smartphone className="w-4 h-4 text-primary" />
                </div>

                <div className="relative aspect-[9/16] bg-muted/50 rounded-xl overflow-hidden mb-4 border border-border/50">
                  <img
                    src={wireframe.image || "/placeholder.svg"}
                    alt={wireframe.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {wireframe.title}
                </h3>
                <p className="text-sm text-muted-foreground text-pretty">{wireframe.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center px-4"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-6 sm:px-8 py-4 rounded-2xl bg-card border border-border">
            <div className="flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Android</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border" />
            <div className="flex items-center gap-2">
              <Tablet className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Tablet</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">Disponible en todas tus plataformas favoritas</p>
        </motion.div>
      </div>
    </section>
  )
}
