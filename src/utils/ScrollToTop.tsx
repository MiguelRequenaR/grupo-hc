import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true})
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth'})
    }
  }, [pathname])
  return null
}
