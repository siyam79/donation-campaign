import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = ({cards}) => {
    console.log(cards);
 


//     const [cards , setCards] = useState([]);

//     useEffect(() =>{
//         fetch(`data.json`)
//         .then(res => res.json())
//         .then(data => setCards(data))
//     } , [])

// console.log(cards);


    return (
        <div>
            
            <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-40" >
                {
                    cards?.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;