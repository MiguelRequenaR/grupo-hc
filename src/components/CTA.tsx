import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <div
      className="w-full flex flex-col justify-center gap-6 py-30 mb-30 relative bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1565891741441-64926e441838?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1471')"
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-2xl md:text-4xl text-center font-bold text-white" data-aos="fade-up">¿Estás buscando el mejor servicio de transporte y logística?</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-10">
          <button className="bg-[#f68b21] text-white px-8 py-3 text-lg font-semibold flex items-center gap-3 overflow-hidden transition-all duration-500 ease-in-out uppercase hover:bg-white hover:text-black cursor-pointer" data-aos="zoom-in" data-aos-delay="100">
            Contactanos
            <ArrowRight className="w-5 h-5 " />
          </button>
          <button className="bg-[#003d4d] text-white px-8 py-3 text-lg font-semibold flex items-center gap-3 overflow-hidden transition-all duration-500 ease-in-out uppercase hover:bg-white hover:text-black cursor-pointer" data-aos="zoom-in" data-aos-delay="200">
            Más detalles
            <ArrowRight className="w-5 h-5 " />
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row bottom-[-200px] bg-white relative z-20 shadow-lg" data-aos="fade-up">
        <div className="w-full md:w-2/3 p-6 md:p-10 space-y-5">
          <h3 className="text-2xl font-bold text-[#003d4d]">¿Por qué elegirnos?</h3>
          <p className="text-sm text-gray-500">
            Somos una empresa dedicada a ofrecer soluciones logísticas de alta calidad para nuestros clientes. Contamos con un equipo de profesionales expertos en el rubro que nos permite ofrecer soluciones adaptadas a las necesidades de cada cliente.
          </p>
          <div className="flex flex-row items-start sm:items-center gap-3">
            <div className="bg-[#f68b21] w-1 h-20"></div>
            <div>
              <h4 className="text-sm font-bold text-[#f68b21]">Experiencia y Expertise</h4>
              <p className="text-sm text-gray-500">
                Nuestra experiencia y expertise en el rubro nos permite ofrecer soluciones adaptadas a las necesidades de cada cliente.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 h-48 md:h-auto">
          <img 
            src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470" 
            alt="cta" 
            className="w-full h-full object-cover rounded-b-md md:rounded-none md:rounded-r-md"
          />
        </div>
      </div>
    </div>
  )
}
