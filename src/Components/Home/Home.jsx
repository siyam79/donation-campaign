
import { useLoaderData } from "react-router-dom";
import Cards from "../Cards/Cards";
import Banner from "../Banner/Banner";
import { useState } from "react";

const Home = () => {

    const cards = useLoaderData()
    const [searchCards,setSearchCards] = useState([...cards]);
    const [filtersDatas] = useState([...cards]);
    // console.log(cards);

    const handleSearch = (e) => {
        let value = e.target.value.toLowerCase();
        const searchFilter = filtersDatas.filter(card => card.Title.toLowerCase().startsWith(value));
        setSearchCards(searchFilter);
    }

    return (
        <div>
            <Banner handleSearch={handleSearch}></Banner>
             <Cards cards={searchCards}></Cards>
        </div>
    );
};

export default Home;