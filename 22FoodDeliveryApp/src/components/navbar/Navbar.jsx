import { useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom"
import "./navbar.css"

function Navbar ({setShowLogin}) {
    const [present, setPresent] = useState("home")

    return (
        <div className="navbar">
            <img src={assets.logo} alt="" className="logo" /> 
            <ul className="navbar-menu">
                <Link to='/' onClick={()=>setPresent("home")} className={present==="home"?"active":""}>home</Link>
                <a href="#explore-menu" onClick={()=>setPresent("menu")} className={present==="menu"?"active":""}>menu</a>
                <a href="#app-download" onClick={()=>setPresent("mobile-app")} className={present==="mobile-app"?"active":""}>mobile-app</a>
                <a href="#footer" onClick={()=>setPresent("contact-us")} className={present==="contact-us"?"active":""}>contact-us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="" />
                    <div className="dot"></div>
                </div>
                <button onClick={()=>setShowLogin(true)}>sign in</button>
            </div>
        </div>
    )
}

export default Navbar;