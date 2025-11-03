import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '@/layout/MainLayout'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Service from '@/pages/Service'
import Contact from '@/pages/Contact'
import ScrollToTop from '@/utils/ScrollToTop'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
      offset: 120,
      easing: 'ease-in-out',
    })
  }, [])

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="nosotros" element={<About />} />
          <Route path="servicios" element={<Service />} />
          <Route path="contacto" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
