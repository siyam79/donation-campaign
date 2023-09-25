// import Card3 from "../../Card3/Card3";
// import CardItem from "../CardItem/CardItem";
import { useLoaderData } from "react-router-dom";
import Cards from "../Cards/Cards";
// import Cards from "../Cards/Cards";


const Home = () => {

    const cards = useLoaderData()
    console.log(cards);


    return (
        <div>
             <Cards cards={cards}></Cards>
        </div>
    );
};

export default Home;