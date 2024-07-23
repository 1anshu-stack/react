import Navbar from "./components/navbar/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home.jsx"
import Cart from "./pages/cart/Cart.jsx"
import PlaceOrder from "./pages/place-order/PlaceOrder.jsx"

function App() {

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
    </div>
  )
}

export default App
