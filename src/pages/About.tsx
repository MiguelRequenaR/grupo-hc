import { Truck, ArrowRight, Phone, ListCheck } from "lucide-react"
import ServiceSection from "@/components/ServiceSection"
import TeamSection from "@/components/TeamSection"
import { Link } from "react-router-dom"

export default function About() {
  return (
    <>
      <section className="relative w-full h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
            alt="heroAbout"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-8 max-w-7xl pt-0 md:pt-52">
            <div className="max-w-5xl" data-aos="fade-up">
              <h1 className="text-white text-4xl md:text-7xl font-bold mb-6">Sobre nosotros</h1>
              <p className="text-white/90 text-sm md:text-lg  mb-8 max-w-2xl">
                Ofrecemos soluciones logísticas de alta calidad, adaptadas a cada cliente.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto p-4 md:p-20 gap-20">
          <div data-aos="fade-right">
            <div className="relative h-full">
              <img src="https://images.unsplash.com/photo-1565891741441-64926e441838?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1471" alt="about" className="w-full h-full object-cover" />
            </div>
            <div className="bg-[#003d4d] text-white p-5 rounded-lg flex items-center gap-5 w-fit absolute -right-2 -bottom-10 md:-right-10 shadow-lg">
              <div >
                <img src="https://img.icons8.com/?size=48&id=8cINOmIl0XpA&format=png" alt="yearsxp" className="w-10 h-10" />
              </div>
              <div className="flex flex-col text-3xl">
                10+
                <span className="text-lg">
                  Años de Experiencia
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-2" data-aos="fade-up">
              <Truck className="w-6 h-6 text-[#f68b21]" />
              <h2 className="text-lg font-bold text-[#f68b21]">Sobre nuestra compañia</h2>
            </div>
            <h2 className="text-3xl font-bold text-[#003d4d]" data-aos="fade-up">Soluciones logísticas que ofrecen excelencia</h2>
            <p className="text-sm md:text-lg" data-aos="fade-up" data-aos-delay="100">
              Somos una empresa con más de 10 años de experiencia en el rubro logístico, brindando soluciones integrales de logística y transporte, asegurando entregas seguras, puntuales y eficientes para que su mercancía llegue a destino sin contratiempos.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10" data-aos="fade-up">
              <div className="flex items-center gap-2">
                <ListCheck className="w-6 h-6 text-[#f68b21]" />
                <span>Servicios Nacionales</span>
              </div>
              <div className="flex items-center gap-2">
                <ListCheck className="w-6 h-6 text-[#f68b21]" />
                <span>Servicios Locales</span>
              </div>
              <div className="flex items-center gap-2">
                <ListCheck className="w-6 h-6 text-[#f68b21]" />
                <span>Servicios de Carga y Descarga</span>
              </div>
              <div className="flex items-center gap-2">
                <ListCheck className="w-6 h-6 text-[#f68b21]" />
                <span>Entregas puntuales</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-10">
              <Link to="/contacto">
                <button
                  className="relative bg-[#f68b21] text-white px-4 py-2 text-sm font-semibold flex items-center gap-3 overflow-hidden border border-transparent transition-all duration-500 ease-in-out group cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>

                  <span className="relative z-10 flex items-center gap-3 group-hover:text-[#f68b21] transition-colors duration-500 uppercase">
                    Contactanos
                    <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" />
                  </span>
                </button>
              </Link>
              <div className="flex items-center gap-3" data-aos="fade-up" data-aos-delay="400">
                <div className="bg-[#fce6ce] text-[#f68b21] p-3 rounded-full">
                  <Phone className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#f68b21]">Contactanos</h4>
                  <p className="text-sm text-gray-500">+56 (201) 555-0124</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <ServiceSection />
      </section>
      <section className="py-20">
        <div
          className="w-full flex flex-col justify-center gap-6 relative bg-scroll md:bg-fixed bg-center bg-cover h-[80vh]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="px-4 md:mx-60 mx-auto w-full max-w-7xl z-10 space-y-6">
            <p
              className="text-white text-xl md:text-2xl font-bold"
              data-aos="fade-up"
            >
              ¿Listo para trabajar con nosotros?
            </p>
            <h2
              className="text-white text-2xl md:text-4xl font-bold w-full md:w-2/3"
              data-aos="fade-up"
            >
              Contactanos estamos disponibles las 24 horas del día
            </h2>
            <p
              className="text-white text-base md:text-lg w-full md:w-2/3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Reserva una cita con nosotros para que podamos atenderte y resolver tus dudas. Llámanos o envíanos un mensaje. Estamos para ayudarte.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4 mt-10 w-full">
              <Link to="/contacto"> 
              <button  
                className="relative bg-[#f68b21] text-white px-6 md:px-8 py-3 text-base md:text-lg font-semibold flex items-center gap-3 overflow-hidden transition-all duration-500 ease-in-out uppercase group cursor-pointer"
                data-aos="zoom-in"
              >
                <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                <span className="relative z-10 flex items-center gap-3 group-hover:text-[#f68b21] transition-colors duration-500 uppercase">
                  Contactanos
                  <ArrowRight className="w-5 h-5" />
                </span>
              </button>
              </Link>
              <Link to="/servicios">
                <button
                  className="relative bg-[#003d4d] text-white px-6 md:px-8 py-3 text-base md:text-lg font-semibold flex items-center gap-3 overflow-hidden transition-all duration-500 ease-in-out uppercase group cursor-pointer"
                  data-aos="zoom-in"
                >
                  <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                  <span className="relative z-10 flex items-center gap-3 group-hover:text-[#003d4d] transition-colors duration-500 uppercase">
                    Más detalles
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section >
        <TeamSection />
      </section>
    </>
  )
}
