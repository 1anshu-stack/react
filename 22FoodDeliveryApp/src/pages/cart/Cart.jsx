import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import {useNavigate} from "react-router-dom"
import "./cart.css";


const Cart = () => {
    const {cardItems, food_list, removeFromCard, getTotalCartAmount} = useContext(StoreContext);
    const navigate = useNavigate();
    return (
        <div className="cart">
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item, index)=>{
                    if(cardItems[item._id]>0)
                    {
                        return (
                            <div key={index}>
                             <div className="cart-items-title cart-items-item">
                                <img src={item.image} alt="" />
                                <p>{item.name}</p>
                                <p>Rs.{item.price}</p>
                                <p>{cardItems[item._id]}</p>
                                <p>Rs.{item.price*cardItems[item._id]}</p>
                                <p className="cross" onClick={()=>removeFromCard(item._id)} >X</p>
                             </div>
                             <hr />
                            </div>
                        )
                    }
                })}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal:</p>
                            <p>Rs.{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee:</p>
                            <p>Rs.{getTotalCartAmount()===0?0:2}</p>
                        </div>
                        <div className="cart-total-details">
                            <b>Total:</b>
                            <b>Rs.{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
                        </div>
                    </div>
                    <button onClick={()=>navigate('/order')}>PROCEED TO PAY</button>
                </div>
                <div className="cart-promocode">
                    <div>
                        <p>If you have a promo code, Enter it herer</p>
                        <div className="cart-promocode-input">
                            <input type="text" placeholder="promo code" />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;