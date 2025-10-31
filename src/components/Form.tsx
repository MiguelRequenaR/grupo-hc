import { User, Mail, Weight, MapPin, ArrowRight } from "lucide-react"
export default function Form() {
  return (
    <div>
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
        <button
          type="submit"
          className="relative bg-[#f68b21] text-white px-8 py-2 text-lg font-semibold flex items-center gap-3 overflow-hidden transition-all duration-500 ease-in-out group uppercase cursor-pointer">
          <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
          <span className="relative z-10 flex items-center gap-3 group-hover:text-[#f68b21] transition-colors duration-500 uppercase">
            Enviar
            <ArrowRight className="w-5 h-5 " />
          </span>
        </button>
      </form>
    </div>
  )
}
