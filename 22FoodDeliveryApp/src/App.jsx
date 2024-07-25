import Navbar from "./components/navbar/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home.jsx"
import Cart from "./pages/cart/Cart.jsx"
import PlaceOrder from "./pages/place-order/PlaceOrder.jsx"
import Footer from "./components/footer/Footer.jsx"
import { useState } from "react"
import Loginpopup from "./components/loginpopup/Loginpopup.jsx"

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <Loginpopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
