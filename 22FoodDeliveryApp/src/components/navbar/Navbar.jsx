import { useState } from "react";
import { assets } from "../../assets/assets";
import "./navbar.css"

function Navbar () {
    const [present, setPresent] = useState("home")

    return (
        <div className="navbar">
            <img src={assets.logo} alt="" className="logo" /> 
            <ul className="navbar-menu">
                <li onClick={()=>setPresent("home")} className={present==="home"?"active":""}>home</li>
                <li onClick={()=>setPresent("menu")} className={present==="menu"?"active":""}>menu</li>
                <li onClick={()=>setPresent("mobile-app")} className={present==="mobile-app"?"active":""}>mobile-app</li>
                <li onClick={()=>setPresent("contact-us")} className={present==="contact-us"?"active":""}>contact-us</li>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="" />
                    <div className="dot"></div>
                </div>
                <button>sign in</button>
            </div>
        </div>
    )
}

export default Navbar;