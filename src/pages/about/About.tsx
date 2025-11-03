import ServiceSection from "@/components/ServiceSection"
import AboutSection from "@/pages/about/AboutSection"
import AboutTeamSection from "@/pages/about/AboutTeamSection"
import AboutCta from "@/pages/about/AboutCta"
import PageHero from "@/components/PageHero"

export default function About() {
  return (
    <main>
      <PageHero 
        title="Sobre nosotros"
        description="Ofrecemos soluciones logísticas de alta calidad, adaptadas a cada cliente."
        imageUrl="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
      />
      <AboutSection />
      <ServiceSection />
      <AboutCta />
      <AboutTeamSection />
    </main>
  )
}
