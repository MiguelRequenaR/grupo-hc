import ServiceSection from "@/components/ServiceSection"
import ContactForm from "@/components/ContactForm"
import PageHero from "@/components/PageHero"

export default function Service() {
  return (
    <main>
      <PageHero
        title="Servicios"
        description="Ofrecemos una amplia gama de servicios logísticos, adaptados a las necesidades de cada cliente."
        imageUrl="https://images.unsplash.com/photo-1710081644060-d27e178f7786?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632"
      />
      <ServiceSection />
      <ContactForm />
    </main>
  )
}
