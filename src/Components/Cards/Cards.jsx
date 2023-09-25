// import { useEffect, useState } from "react";
import Card from "../Card/Card";
import PropTypes from 'prop-types';
const Cards = ({cards}) => {
    console.log(cards);
 
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

Cards.propTypes ={
    cards: PropTypes.object
}
export default Cards;