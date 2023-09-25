import { useEffect, useState } from "react";
import AllDonationCard from "../AllDonationCard/AllDonationCard";


const DonaTion = () => {

    const [donat, setDonat] = useState([])
    const [noDataFound , setNoDataFound] =useState('');

    useEffect(() => {

        const donaTion = JSON.parse(localStorage.getItem('donaTion'));
        if (donaTion) {
            setDonat(donaTion)
        }
        else{
         
            setNoDataFound('No DonaTion Found ')
        }

    }, [])
    console.log(donat);

    return (
        <div>
            { 
                noDataFound ? <p className=" h-[80vh] flex justify-center items-center ">{noDataFound} </p> : <div>
                    <div className=" grid lg:grid-cols-2 grid-cols-1 gap-6 ">
                        {
                            donat?.map(card => <AllDonationCard key={card.id} card={card}></AllDonationCard>)
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default DonaTion;