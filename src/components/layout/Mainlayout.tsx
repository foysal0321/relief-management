import { Outlet } from "react-router-dom"
import NavbarMenu from "../Home/NavbarMenu"
import Footer from "../Home/footer/Footer"

function Mainlayout() {
  return (
    <div>
      <NavbarMenu />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Mainlayout
