import ServiceSection from "../components/ServiceSection"
import ContactForm from "../components/ContactForm"

export default function Service() {
  return (
    <>
      <section className="relative w-full h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1710081644060-d27e178f7786?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632"
            alt="heroAbout"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-8 max-w-7xl pt-0 md:pt-52">
            <div className="max-w-5xl" data-aos="fade-up">
              <h1 className="text-white text-4xl md:text-7xl font-bold mb-6">Servicios</h1>
              <p className="text-white/90 text-sm md:text-lg  mb-8 max-w-2xl">
                Ofrecemos una amplia gama de servicios logísticos, adaptados a las necesidades de cada cliente.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <ServiceSection />
      </section>
      <section>
        <ContactForm />
      </section>
    </>
  )
}
