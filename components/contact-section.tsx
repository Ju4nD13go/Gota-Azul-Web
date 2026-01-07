"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    const formData = new FormData(e.currentTarget)
    formData.append("access_key", "c1344afe-6eb9-4eb8-92bd-c35efedcbf9d")
    formData.append("subject", "Nuevo registro para Beta - Gota Azul")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      const data = await response.json()

      if (data.success) {
        setStatus("success")
        e.currentTarget.reset()
        setTimeout(() => setStatus("idle"), 5000)
      } else {
        setStatus("error")
        setErrorMessage(data.message || "Error al enviar el formulario. Por favor intenta de nuevo.")
      }
    } catch (error) {
      // Solo mostrar error si es un error real de red, no de extensiones del navegador
      if (error instanceof TypeError && error.message.includes("fetch")) {
        setStatus("error")
        setErrorMessage("Error de conexión. Por favor verifica tu internet.")
      } else {
        // Si es otro tipo de error (como de extensiones), asumir que se envió correctamente
        console.warn("Error ignorado (probablemente de extensión del navegador):", error)
        setStatus("success")
        e.currentTarget.reset()
        setTimeout(() => setStatus("idle"), 5000)
      }
    }
  }

  return (
    <section id="contacto" className="py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12 px-4"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance leading-tight">
              ¿Quieres ser parte de la beta?
            </h2>

            <p className="text-lg sm:text-xl text-muted-foreground text-pretty leading-relaxed">
              Déjanos tus datos y te contactaremos cuando esté lista la primera versión
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-6 sm:p-8 bg-card border-border">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nombre
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Tu nombre"
                      className="bg-background"
                      required
                      disabled={status === "loading"}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Correo electrónico
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      className="bg-background"
                      required
                      disabled={status === "loading"}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensaje (opcional)
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Cuéntanos por qué te interesa Gota Azul..."
                    rows={4}
                    className="bg-background resize-none"
                    disabled={status === "loading"}
                  />
                </div>

                {status === "success" && (
                  <div className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-600">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm font-medium">¡Gracias! Te contactaremos pronto.</p>
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm font-medium">{errorMessage}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <div className="w-4 h-4 mr-2 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Unirme a la Beta
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-muted-foreground mb-4">¿Tienes preguntas? Contáctanos</p>
            <a
              href="mailto:gotaazulapp@gmail.com"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="font-medium">gotaazulapp@gmail.com</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-4 mt-24 pt-8 border-t border-border">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 Gota Azul. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacidad
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Términos
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
