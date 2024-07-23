import "./home.css"
import Header from "../../components/header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import { useState } from "react";

const Home = () => {
    const [category, setCategory] = useState("All")
    return (
        <>
           <Header />
           <ExploreMenu category={category} setCategory={setCategory} />
        </>
    )
}

export default Home;