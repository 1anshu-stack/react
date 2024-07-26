import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom"
import "./navbar.css"
import { StoreContext } from "../../context/StoreContext";

function Navbar ({setShowLogin}) {
    const [present, setPresent] = useState("home")
    const { getTotalCartAmount } = useContext(StoreContext)

    return (
        <div className="navbar">
            <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link> 
            <ul className="navbar-menu">
                <Link to='/' onClick={()=>setPresent("home")} className={present==="home"?"active":""}>home</Link>
                <a href="#explore-menu" onClick={()=>setPresent("menu")} className={present==="menu"?"active":""}>menu</a>
                <a href="#app-download" onClick={()=>setPresent("mobile-app")} className={present==="mobile-app"?"active":""}>mobile-app</a>
                <a href="#footer" onClick={()=>setPresent("contact-us")} className={present==="contact-us"?"active":""}>contact-us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                    <div className={getTotalCartAmount()===0 ? "":"dot"}></div>
                </div>
                <button onClick={()=>setShowLogin(true)}>sign in</button>
            </div>
        </div>
    )
}

export default Navbar;