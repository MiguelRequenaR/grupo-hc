import { Link } from "react-router-dom"

export default function CardService() {

  const services = [
    {
      id: 1,
      icon: "https://img.icons8.com/?size=48&id=z7MXRGNk46kb&format=png",
      title: "Precio Transparante",
      description: "No ocultamos costos adicionales. Ofrecemos precios claros y justos para que no haya sorpresas.",
    },
    {
      id: 2,
      icon: "https://img.icons8.com/?size=48&id=ZH1JWehKJFAC&format=png",
      title: "Entrega Puntual",
      description: "Garantizamos entregas a tiempo, sin demoras, para mantener la satisfacción de nuestros clientes.",
    },
    {
      id: 3,
      icon: "https://img.icons8.com/?size=48&id=m4GWcMQJ427w&format=png",
      title: "Seguridad",
      description: "Garantizamos la seguridad de su mercancía durante el transporte.",
    },
    {
      id: 4,
      icon: "https://img.icons8.com/?size=48&id=xhTZ3SnZx58c&format=png",
      title: "Servicio 24/7",
      description: "Ofrecemos servicio de atención al cliente las 24 horas del día, los 7 días de la semana.",
    },
    {
      id: 5,
      icon: "https://img.icons8.com/?size=48&id=X7M4tgEcvBc1&format=png",
      title: "Traslado de Mercancía",
      description: "Ofrecemos servicio de traslado de mercancía a cualquier parte del mundo.",
    },
    {
      id: 6,
      icon: "https://img.icons8.com/?size=48&id=a4HKMu3T9OJY&format=png",
      title: "Transporte Nacional",
      description: "Ofrecemos servicios de transporte a nivel nacional para que su mercancía llegue a su destino sin problemas.",
    }
  ]
  return (
    <div className="bg-[#003d4d]">
      <div className="flex items-center mx-4 md:mx-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-aos="fade-up">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-10 relative group overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-[#f68b21] -translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out z-0"></div>
                <div className="relative z-10 space-y-4">
                  <div className="bg-[#003d4d] p-3 w-fit ">
                    <img src={service.icon} alt="icon" className="w-10 h-10" />
                  </div>
                  <h2 className="text-[#004364] font-bold text-xl md:text-2xl group-hover:text-[#003d4d] transition-colors duration-500">{service.title}</h2>
                  <p className="text-gray-500 text-sm md:text-lg group-hover:text-[#004364] transition-colors duration-500">{service.description}</p>
                  <div className="bg-[#f68b21] h-0.5 w-[40%] mt-5 group-hover:w-full transition-all duration-500 ease-in-out group-hover:bg-white"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      <p className="text-center text-white text-sm pt-20 pb-10" data-aos="fade-up" data-aos-delay="100">
        Nuestra lista de servicios no termina aquí. Descubra cómo podemos ayudarle a usted y a su empresa.
        <Link to="/servicios">
          <span className="text-[#f68b21] font-bold cursor-pointer"> Más servicios.</span>
        </Link>
      </p>
    </div>
  )
}
