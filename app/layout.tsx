import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gota Azul - Monitorea el consumo de agua de tu hogar",
  description:
    "Aplicación móvil para visualizar, entender y analizar el consumo de agua en hogares colombianos. Toma decisiones responsables sobre el uso del agua.",
  generator: "v0.app",
  icons: {
    icon: "/logo-ga-bc.png",
    apple: "/logo-ga-bc.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`font-sans antialiased`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
