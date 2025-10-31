import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServiceSection() {

  const logisticsServices = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop",
      title: "Rapidez",
      description: "Transporte de carga pesada",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1559297434-fae8a1916a79?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      title: "Cobertura",
      description: "Transporte de carga consolidada",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600352706622-cb5221ea6c59?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      title: "Logística",
      description: "Transporte de carga a granel",
    }
  ]

  return (
    <div className="max-w-7xl mx-auto pb-40">
      <div className="flex flex-col items-center justify-center my-10" data-aos="fade-up">
        <span className="text-center text-[#f68b21] font-semibold">Servicios Logísticos</span>
        <h2 className="text-3xl text-center font-bold text-[#003d4d] mt-2">Servicios Logísticos Populares</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-28 md:gap-4">
        {logisticsServices.map((service) => (
          <div key={service.id} className="relative group cursor-pointer" data-aos="fade-up" data-aos-delay="100">
            <Link to="/servicios">
              <img src={service.image} alt="service" className="w-full h-full object-cover" />
              <div className="absolute bottom-[-70px] left-1/2 -translate-x-1/2 w-10/12 bg-white p-7 border-l-4 border-[#f68b21] shadow-lg overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-white transition-all duration-500 ease-in-out z-0"></div>
                <div className="absolute inset-0 bg-[#f68b21] -translate-x-full group-hover:translate-x-0 transition-all duration-500 ease-in-out z-10"></div>
                <div className="relative z-20">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#f68b21] h-0.5 w-[15%] group-hover:bg-white transition-colors duration-500"></div>
                    <span className="text-sm font-bold text-[#f68b21] group-hover:text-white transition-colors duration-500">{service.title}</span>
                  </div>
                  <h3 className="pb-2 text-xl text-[#003d4d] group-hover:text-white transition-colors duration-500">{service.description}</h3>
                </div>
              </div>
              <div className="absolute -bottom-22 right-5 bg-[#003d4d] text-white w-20 py-3 flex items-center justify-center cursor-pointer group-hover:bg-[#f68b21] transition-all duration-500 ease-in-out">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
