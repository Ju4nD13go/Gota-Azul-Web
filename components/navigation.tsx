"use client"

import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#problema", label: "El Problema" },
    { href: "#solucion", label: "Solución" },
    { href: "#funcionalidades", label: "Funcionalidades" },
    { href: "#wireframes", label: "Wireframes" },
    { href: "#roadmap", label: "Roadmap" },
    { href: "#contacto", label: "Contacto" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-[5.5rem] h-[5.5rem]">
              <Image
                src="/logo-ga-bc.png"
                alt="Gota Azul"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold text-foreground">Gota Azul</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button asChild className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="#contacto" onClick={(e) => handleNavClick(e, "#contacto")}>
                Únete a la Beta
              </a>
            </Button>
            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
                <SheetDescription className="sr-only">
                  Navega por las diferentes secciones de Gota Azul
                </SheetDescription>
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex items-center gap-2 pb-4 border-b border-border">
                    <div className="relative w-[5.5rem] h-[5.5rem]">
                      <Image
                        src="/logo-ga-bc.png"
                        alt="Gota Azul"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xl font-bold text-foreground">Gota Azul</span>
                  </div>
                  
                  <nav className="flex flex-col gap-4">
                    {navItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className="text-lg text-muted-foreground hover:text-foreground transition-colors py-2"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>

                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-4">
                    <a href="#contacto" onClick={(e) => handleNavClick(e, "#contacto")}>
                      Únete a la Beta
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
