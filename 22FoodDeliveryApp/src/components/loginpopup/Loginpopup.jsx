import { useState } from "react";
import { assets } from "../../assets/assets";
import "./loginpopup.css"

const Loginpopup = ({setShowLogin}) => {
    const [currState, setCurrState] = useState("Login")
    return (
        <div className="login-popup">
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h1>{currState}</h1>
                    <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currState==="Login"?<></>:<input type="text" placeholder="your name" required />}
                    <input type="email" placeholder="your email" required />
                    <input type="password" placeholder="your password" required />
                </div>
                <button>{currState==="Sign up"?"create account":"Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
                {currState==="Login" ?
                <p>Create a new account? <span onClick={()=>setCurrState("Sign up")}>click here</span></p>
                : <p>Already have an account ? <span onClick={()=>setCurrState("Login")}>Login herer</span></p>
                }
            </form>
        </div>
    )
}

export default Loginpopup;