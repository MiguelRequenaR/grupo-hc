
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
  ]
  return (
    <div className="bg-[#003d4d]">
      <div className="flex items-center mx-4 md:mx-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-aos="fade-up">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-10 space-y-2">
                <img src={service.icon} alt="icon" className="w-10 h-10" />
                <h2 className="text-[#004364] font-bold text-xl">{service.title}</h2>
                <p className="text-gray-500 text-sm">{service.description}</p>
                <div className="bg-[#f68b21] h-[2px] w-[40%] mt-5"></div>
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
