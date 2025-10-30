import { ArrowRight, Mail, MapPin, User, Weight } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="bg-[#f68b21] h-min-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 relative">
        <div className="relative z-10 ml-0 md:ml-30 mr-0 md:mr-[-100px] bg-[#003d4d] m-4 md:m-10 p-6 md:p-15" data-aos="zoom-in">
          <span className="text-[#f68b21] text-base font-bold">Reserva una cita</span>
          <h2 className="text-white text-4xl font-bold py-5">Contactanos</h2>
          <form action="" className="space-y-10">
            <div className="flex gap-4">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="bg-white py-3 px-5 rounded-sm w-full border-none outline-none pr-10"
                />
                <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <User className="w-5 h-5 text-[#f68b21]" />
                </span>
              </div>
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-white py-3 px-5 rounded-sm w-full border-none outline-none pr-10"
                />
                <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <Mail className="w-5 h-5 text-[#f68b21]" />
                </span>
              </div>
            </div>
            <div className="flex gap-4"> 
              <div className="relative w-full">
                <input
                  type="number"
                  placeholder="Peso (kg)"
                  className="bg-white py-3 px-5 rounded-sm w-full border-none outline-none pr-10"
                />
                <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <Weight className="w-5 h-5 text-[#f68b21]" />
                </span>
              </div>
              <div className="relative w-full">
                <input
                  type="number"
                  placeholder="Distancia (km)"
                  className="bg-white py-3 px-5 rounded-sm w-full border-none outline-none pr-10"
                />
                <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <MapPin className="w-5 h-5 text-[#f68b21]" />
                </span>
              </div>
            </div>
            <div> 
              <textarea name="" id="" placeholder="Mensaje" className="bg-white py-3 px-5 rounded-sm w-full border-none outline-none" />
            </div>
            <button type="submit" className="bg-[#f68b21] text-white px-8 py-2 text-lg font-semibold flex items-center gap-3 overflow-hidden transition-all duration-500 ease-in-out uppercase hover:bg-white hover:text-black cursor-pointer">
              Enviar
              <ArrowRight className="w-5 h-5 " />
            </button>
          </form>
        </div>
        <div className="relative w-full h-full overflow-hidden hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470"
            alt="contacto"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-30 transition-opacity duration-500 ease-in-out"></div>
        </div>
      </div>
    </div>
  )
}
