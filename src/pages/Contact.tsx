import { Mail, MapPin, Phone } from "lucide-react";
import Form from "@/components/Form";

export default function Contact() {
  return (
    <>
      <section className="relative w-full h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1175"
            alt="heroAbout"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-8 max-w-7xl pt-0 md:pt-52">
            <div className="max-w-5xl" data-aos="fade-up">
              <h1 className="text-white text-4xl md:text-7xl font-bold mb-6">Contactanos</h1>
              <p className="text-white/90 text-sm md:text-lg  mb-8 max-w-2xl">
                Contactanos para resolver tus dudas o solicitar un servicio.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="flex flex-col items-center justify-center my-10" data-aos="fade-up">
          <span className="text-center text-[#f68b21] font-semibold">Siempre a tu disposición</span>
          <h2 className="text-3xl text-center font-bold text-[#003d4d] mt-2">Contacta con nosotros</h2>
        </div>
        <div className="max-w-7xl mx-auto md:p-20 grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-xl rounded-lg">
          <div className="bg-[#003d4d] p-10 rounded-lg space-y-3 m-2 md:m-0" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-white">Información de contacto</h2>
            <div className="bg-[#f68b21] h-0.5 w-full my-5"></div>
            <div className="space-y-10 my-auto">
              <div className="bg-white p-4 flex items-center gap-5 group cursor-pointer">
                <div className="bg-[#003d4d] p-3 group-hover:bg-[#f68b21] transition-all duration-500 ease-in-out">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="text-lg font-bold text-[#003d4d]">Dirección:</span>
                  <span className="text-[16px] text-[#003d4d]">Av. Real Huancayo, PE</span>
                </div>
              </div>
              <div className="bg-white p-4 flex items-center gap-5 group cursor-pointer">
                <div className="bg-[#003d4d] p-3 group-hover:bg-[#f68b21] transition-all duration-500 ease-in-out">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="text-lg font-bold text-[#003d4d]">Número de contacto:</span>
                  <span className="text-[16px] text-[#003d4d]">(+51) 987 654 321</span>
                </div>
              </div>
              <div className="bg-white p-4 flex items-center gap-5 group cursor-pointer">
                <div className="bg-[#003d4d] p-3 group-hover:bg-[#f68b21] transition-all duration-500 ease-in-out">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="text-lg font-bold text-[#003d4d]">Email:</span>
                  <span className="text-[16px] text-[#003d4d]">info@grupo-hc.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-3 bg-gray-100 p-10 rounded-lg" data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-3xl font-bold text-[#003d4d]">Reserva una cita</h2>
            <p className="text-sm md:text-[17px] text-[#003d4d]">Llena el formulario para reservar una cita con nosotros.</p>
            <Form />
          </div>
        </div>
      </section>
    </>
  )
}
