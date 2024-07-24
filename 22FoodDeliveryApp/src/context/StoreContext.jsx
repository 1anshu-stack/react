import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);


export const StoreContextProvider = (props) => {

    const [cardItems, setCardItems] = useState({});
    const addToCard = (itemId) => {
        if(!cardItems[itemId]){
            setCardItems((prev)=>({...prev, [itemId]:1}));
        }
        else{
            setCardItems((prev)=>({...prev, [itemId]:prev[itemId]+1}));
        }
    }
   
    const removeFromCard = (itemId) => {
        setCardItems((prev)=>({...prev, [itemId]:prev[itemId]-1}));
    }

    useEffect(()=>{
        console.log(cardItems);
    }, [cardItems])

    const contextValue = {
        food_list,
        cardItems,
        setCardItems,
        addToCard,
        removeFromCard
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}