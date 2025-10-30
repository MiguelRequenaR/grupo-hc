
export default function Testimony() {

  const testimonies = [
    {
      id: 1,
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
      name: "John Doe",
      job: "Jefe de logística",
      testimony: "Servicio de transporte de mercancías de alta calidad. Excelente atención al cliente y entregas puntuales.",
    },
    {
      id: 2,
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
      name: "Juan Perez",
      job: "CEO en ABC S.A.",
      testimony: "Excelente servicio de transporte de mercancías. Atención al cliente excepcional y entregas puntuales. Recomendado sin duda.",
    },
    {
      id: 3,
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
      name: "Jorge Rodriguez",
      job: "CEO en XYZ S.A.",
      testimony: "Excelente servicio de transporte. Entregas puntuales y atención al cliente excelente. Recomendado sin duda.",
    },
  ]
  return (
    <div className="max-w-7xl mx-auto pb-40">
      <div className="flex flex-col items-center justify-center my-10" data-aos="fade-up">
        <span className="text-center text-[#f68b21] font-semibold">Que dicen nuestros clientes</span>
        <h1 className="text-3xl text-center font-bold text-[#003d4d] mt-2">Historias de nuestros clientes</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:p-0">
        {
          testimonies.map((testimony) => (
          <div key={testimony.id} className="bg-[#f8f8f8] p-10 shadow-lg" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center gap-2">
              <img src={testimony.avatar} alt="avatar" className="w-20 h-20" />
              <div>
                <h3 className="text-lg font-bold text-[#003d4d] mt-2">{testimony.name}</h3>
                <p className="text-sm text-gray-500">{testimony.job}</p>
              </div>
            </div>
            <div className="bg-[#f68b21] h-[2px] w-[80%] mx-auto my-5"></div>
            <div>
              <p className="text-sm text-[#003d4d]">
                {testimony.testimony}
              </p>
            </div>
          </div>
          ))
        }
      </div>
    </div>
  )
}
