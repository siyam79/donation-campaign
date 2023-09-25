import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import OneItemCard from "../../OneItemCard/OneItemCard";


const OneCard = () => {
    const [card, setcard] = useState()

    const { id } = useParams();

    const cards = useLoaderData();

    useEffect(() => {
        
        const findCard = cards?.find((card) => card.id == id)
        setcard(findCard);
        
    }, [card])

    console.log(card);
    return (
        <div>

           <OneItemCard card={card}></OneItemCard>
        </div>
    );
};

export default OneCard;