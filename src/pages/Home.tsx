import HeroSection from "../components/HeroSection";
import CardService from "../components/CardService";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import Testimony from "../components/Testimony";
import ContactForm from "../components/ContactForm";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CardService />
      <AboutSection />
      <ServiceSection />
      <Testimony />
      <ContactForm />
      <Gallery />
    </div>
  )
}
