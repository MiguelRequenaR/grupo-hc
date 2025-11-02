import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import CTA from "../components/CTA"
import Footer from "../components/Footer"
import WhatsAppButton from "../components/WhatsAppButton"
import { useLenis } from "../hooks/useLenis"

export default function MainLayout() {
  useLenis();
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <CTA />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
