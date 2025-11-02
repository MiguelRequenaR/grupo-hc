import { XIcon } from "lucide-react"
import { useState } from "react"

const phoneNumber = "+51933728244"
const defaultMessage = "Hola, me gustaría saber más sobre sus servicios"
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  
  const toggleChat = () => {
    if (isOpen) {
      setIsClosing(true)
      setTimeout(() => {
        setIsOpen(false)
        setIsClosing(false)
      }, 300)
    } else {
      setIsOpen(true)
    }
  }

  return (
    <div>
      {isOpen && (
        <div 
          className={`fixed right-6 bottom-22 z-40 w-80 rounded-xl bg-white shadow-xl my-3 transition-all duration-300 ${
            isClosing ? 'animate-fade-down' : ''
          }`}
          data-aos={isClosing ? "" : "fade-up"}
        >
          <header className="mb-3 flex items-start gap-2 bg-green-500 p-5 rounded-t-xl">
            <img src="https://img.icons8.com/?size=48&id=16713&format=png" alt="logo" className="w-10 h-10" />
            <div className="space-y-3">
              <h3 className="font-semibold text-white text-[16px]">Iniciar una conversación</h3>
              <p className="text-xs text-white">
                ¡Hola! Da click en el botón para chatear con nosotros por WhatsApp.
              </p>
            </div>
          </header>

          <div>
            <span className="text-[11px] px-5">El equipo suele responder en unos minutos.</span>
            <div className="bg-gray-100 m-5 border-l-2 border-green-500 hover:bg-white transition-all duration-300 ease-in-out">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-lg p-5 text-sm font-semibold transition"
              >
                <img src="https://img.icons8.com/?size=48&id=16713&format=png" alt="logo" className="w-10 h-10" />
                <div className="flex flex-col">
                  <span className="text-lg">Grupo HC</span>
                  <span className="text-[11px] font-normal text-gray-500">Asesoría</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={toggleChat}
        aria-expanded={isOpen}
        aria-label="Iniciar una conversación"
        className="fixed right-6 bottom-6 z-50 flex items-center gap-2 rounded-full bg-green-500 text-white p-3 font-semibold shadow-lg  transition hover:bg-green-600 focus:outline-none cursor-pointer">
          {
            isOpen ? (
              <span
                key="close"
                className="inline-block animate-[spin_0.4s_ease-in-out] animate-fade-in"
              >
                <XIcon className="w-10 h-10" />
              </span>
            ) : (
              <span
                key="logo"
                className="inline-block animate-[spin_0.4s_ease-in-out] animate-fade-in"
              >
                <img src="https://img.icons8.com/?size=48&id=16713&format=png" alt="logo" className="w-10 h-10" />
              </span>
            )
          }
      </button>
    </div>
  );
}
