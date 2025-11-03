import HeroSection from "@/pages/home/HeroSection";
import CardService from "@/pages/home/CardService";
import AboutHome from "@/pages/home/AboutHome";
import ServiceSection from "@/components/ServiceSection";
import Testimony from "@/pages/home/Testimony";
import ContactForm from "@/components/ContactForm";
import Gallery from "@/pages/home/Gallery";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CardService />
      <AboutHome />
      <ServiceSection />
      <Testimony />
      <ContactForm />
      <Gallery />
    </main>
  )
}
