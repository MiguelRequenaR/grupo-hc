
export default function CardService() {

  const services = [
    {
      id: 1,
      icon: "https://img.icons8.com/?size=48&id=4l2As6xQb797&format=png",
      title: "Precio Transparante",
      description: "No ocultamos costos adicionales. Ofrecemos precios claros y justos para que no haya sorpresas.",
    },
    {
      id: 2,
      icon: "https://img.icons8.com/?size=48&id=ateOmIb82zBa&format=png",
      title: "Entrega Puntual",
      description: "Garantizamos entregas a tiempo, sin demoras, para mantener la satisfacción de nuestros clientes.",
    },
    {
      id: 3,
      icon: "https://img.icons8.com/?size=48&id=tNfYPX5QwwR1&format=png",
      title: "Seguridad",
      description: "Garantizamos la seguridad de su mercancía durante el transporte.",
    },
    {
      id: 4,
      icon: "https://img.icons8.com/?size=48&id=8Fo6CSPDByxN&format=png",
      title: "Servicio 24/7",
      description: "Ofrecemos servicio de atención al cliente las 24 horas del día, los 7 días de la semana.",
    },
    {
      id: 5,
      icon: "https://img.icons8.com/?size=48&id=0yWaTY5VFxAQ&format=png",
      title: "Traslado de Mercancía",
      description: "Ofrecemos servicio de traslado de mercancía a cualquier parte del mundo.",
    },
    {
      id: 6,
      icon: "https://img.icons8.com/?size=48&id=vxdv9fQWaA77&format=png",
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
                  <img src={service.icon} alt="icon" className="w-10 h-10" />
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
        <span className="text-[#f68b21] font-bold cursor-pointer"> Más servicios.</span>
      </p>
    </div>
  )
}
