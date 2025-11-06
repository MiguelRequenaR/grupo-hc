export interface ServiceType {
  id: number
  slug: string
  subslug: string
  title: string
  subtitle: string
  firstDescription: string
  secondDescription: string
  image: string
  serviceImage: string
  fullDescription?: string
  features?: string[]
}

export const services: ServiceType[] = [
  {
    id: 1,
    slug: "carga-pesada",
    subslug: "Carga Pesada",
    title: "Transporte de Carga Pesada",
    subtitle: "Ventajas de nuestros servicios",
    firstDescription: "Ofrecemos servicios especializados de transporte de carga pesada con equipos modernos y personal capacitado para garantizar la seguridad y eficiencia en cada traslado. Contamos con una amplia gama de vehículos para satisfacer las necesidades de nuestros clientes. También contamos con un servicio 24/7 para garantizar la disponibilidad de nuestros servicios.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop",
    serviceImage: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1475",
    secondDescription: "Las ventajas de nuestros servicios de transporte de carga pesada son: Equipos especializados para carga pesada, Personal altamente capacitado, Cobertura nacional, Seguro de carga incluido, Seguimiento en tiempo real.",
    features: [
      "Equipos especializados para carga pesada",
      "Personal altamente capacitado",
      "Cobertura nacional",
      "Seguro de carga incluido",
      "Seguimiento en tiempo real"
    ]
  },
  {
    id: 2,
    slug: "carga-terrestre",
    subslug: "Carga Terrestre",
    title: "Transporte Terrestre",
    subtitle: "Ventajas de nuestros servicios",
    firstDescription: "Nuestro servicio de transporte terrestre ofrece una amplia cobertura nacional con rutas optimizadas para garantizar entregas puntuales y seguras. Contamos con una amplia gama de vehículos para satisfacer las necesidades de nuestros clientes. También contamos con un servicio 24/7 para garantizar la disponibilidad de nuestros servicios.",
    image: "https://images.unsplash.com/photo-1559297434-fae8a1916a79?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    serviceImage: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    secondDescription: "Las ventajas de nuestros servicios de transporte terrestre son: Amplia cobertura nacional, Rutas optimizadas, Entregas puntuales, Múltiples tipos de vehículos, Servicio 24/7.",
    features: [
      "Amplia cobertura nacional",
      "Rutas optimizadas",
      "Entregas puntuales",
      "Múltiples tipos de vehículos",
      "Servicio 24/7"
    ]
  },
  {
    id: 3,
    slug: "carga-fluvial",
    subslug: "Carga Fluvial",
    title: "Transporte de Carga Fluvial",
    subtitle: "Ventajas de nuestros servicios",
    firstDescription: "Especializados en transporte fluvial, ofrecemos soluciones logísticas eficientes para carga que requiere transporte por vías navegables. Nuestros equipos de transporte fluvial están diseñados para transportar grandes volúmenes de carga de manera segura y eficiente. También contamos con equipos de transporte terrestre para complementar nuestros servicios.",
    image: "https://images.unsplash.com/photo-1710081644060-d27e178f7786?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632",
    serviceImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    secondDescription: "Las ventajas de nuestros servicios de transporte de carga fluvial son: Embarcaciones especializadas, Transporte de grandes volúmenes, Rutas fluviales optimizadas, Cumplimiento de normativas, Logística integral.",
    features: [
      "Embarcaciones especializadas",
      "Transporte de grandes volúmenes",
      "Rutas fluviales optimizadas",
      "Cumplimiento de normativas",
      "Logística integral"
    ]
  }
]
