import "./home.css"
import Header from "../../components/header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import { useState } from "react";
import FoodDisplay from "../../components/foodDisplay/FoodDisplay";

const Home = () => {
    const [category, setCategory] = useState("All")
    return (
        <>
           <Header />
           <ExploreMenu category={category} setCategory={setCategory} />
           <FoodDisplay category={category} />
        </>
    )
}

export default Home;