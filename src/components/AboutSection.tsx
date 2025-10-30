import { ArrowRight, Truck, Phone } from "lucide-react"

export default function AboutSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto p-4 md:p-20 gap-10">
      <div data-aos="fade-right">
        <img src="https://images.unsplash.com/photo-1565891741441-64926e441838?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1471" alt="about" className="w-full h-full object-cover" />
      </div>
      <div className="space-y-6">
        <div className="flex items-center gap-2" data-aos="fade-up">
          <Truck className="w-6 h-6 text-[#f68b21]" />
          <h2 className="text-lg font-bold text-[#f68b21]">Sobre nuestra compañia</h2>
        </div>
        <h2 className="text-3xl font-bold text-[#003d4d]" data-aos="fade-up">Soluciones logísticas que ofrecen excelencia</h2>
        <p className="text-sm" data-aos="fade-up" data-aos-delay="100">
          Somos una empresa dedicada a ofrecer soluciones logísticas de alta calidad para nuestros clientes.
          Contamos con un equipo de profesionales expertos en el rubro que nos permite ofrecer soluciones adaptadas a las necesidades de cada cliente.
        </p>
        <div className="flex items-center w-fit gap-5" data-aos="fade-up" data-aos-delay="200">
          <div className="flex flex-col md:flex-row items-center gap-5 p-5">
          <div className="bg-[#f68b21] w-2 h-20 hidden md:block"></div>
            <div className="border-2 border-[#f68b21] p-2 border-dashed">
              <img src="https://img.icons8.com/?size=48&id=0yWaTY5VFxAQ&format=png" alt="about" className="w-10 h-10 md:w-20 md:h-10" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#003d4d]">Seguimiento en tiempo-real</h3>
              <p className="text-sm">Mantenemos un seguimiento en tiempo real de la mercancía para que usted pueda tener un control total de su envío.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <button className="bg-[#f68b21] text-white px-3 py-2 text-sm font-semibold flex items-center gap-3 overflow-hidden transition-all duration-500 ease-in-out hover:bg-white cursor-pointer border border-transparent hover:border-[#f68b21] hover:text-[#f68b21]" data-aos="fade-up" data-aos-delay="300">
            Explorar más
            <ArrowRight className="w-5 h-5 " />
          </button>
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
  )
}
