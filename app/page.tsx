import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { FeaturesSection } from "@/components/features-section"
import { WireframesSection } from "@/components/wireframes-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ColombianFocusSection } from "@/components/colombian-focus-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { TrustSection } from "@/components/trust-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <WireframesSection />
      <HowItWorksSection />
      <ColombianFocusSection />
      <RoadmapSection />
      <TrustSection />
      <ContactSection />
    </main>
  )
}
