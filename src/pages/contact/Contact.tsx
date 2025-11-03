import ContactFormCard from "@/pages/contact/ContactFormCard"
import PageHero from "@/components/PageHero"

export default function Contact() {
  return (
    <main>
      <PageHero
        title="Contactanos"
        description="Contactanos para resolver tus dudas o solicitar un servicio."
        imageUrl="https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1175"
      />
      <ContactFormCard />
    </main>
  )
}
