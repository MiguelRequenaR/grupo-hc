import { ArrowRight } from "lucide-react";

export default function ServiceSection() {

  const logisticsServices = [
    {
      id: 1,
      icon: "https://img.icons8.com/?size=48&id=ateOmIb82zBa&format=png",
      title: "Seguimiento",
      description: "Transporte por carretera",
    },
    {
      id: 2,
      icon: "https://img.icons8.com/?size=48&id=0yWaTY5VFxAQ&format=png",
      title: "Seguridad",
      description: "Seguridad de la mercancía",
    },
    {
      id: 3,
      icon: "https://img.icons8.com/?size=48&id=4l2As6xQb797&format=png",
      title: "Precio Transparente",
      description: "Precios claros y justos",
    }
  ]

  return (
    <div className="max-w-7xl mx-auto pb-40">
      <div className="flex flex-col items-center justify-center my-10" data-aos="fade-up">
        <span className="text-center text-[#f68b21] font-semibold">Servicios Logísticos</span>
        <h1 className="text-3xl text-center font-bold text-[#003d4d] mt-2">Servicios Logísticos Populares</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-28 md:gap-4">
        {logisticsServices.map((service) => (
          <div key={service.id} className="relative" data-aos="fade-up" data-aos-delay="100">
            <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop" alt="service" />
            <div className="absolute top-0 left-0 bg-white p-3 rounded-br-xl">
              <img src={service.icon} alt="icon" />
            </div>
            <div className="absolute bottom-[-70px] left-1/2 -translate-x-1/2 w-10/12 bg-white p-7 border-l-4 border-[#f68b21] shadow-lg">
              <div className="flex items-center gap-2">  
                <div className="bg-[#f68b21] h-[2px] w-[15%]"></div>
                <span className="text-sm font-bold text-[#f68b21]">{service.title}</span>
              </div>
              <h3 className="pb-2 text-[#003d4d] text-base">{service.description}</h3>
              <div className="absolute bottom-[-20px] right-0 bg-[#003d4d] text-white w-20 py-3 flex items-center justify-center cursor-pointer hover:bg-[#f68b21] transition-all duration-500 ease-in-out">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
