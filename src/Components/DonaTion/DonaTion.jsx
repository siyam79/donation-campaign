import { useEffect, useState } from "react";
import AllDonationCard from "../AllDonationCard/AllDonationCard";


const DonaTion = () => {

    const [donat, setDonat] = useState([])
    const [noDataFound, setNoDataFound] = useState('');
    const [showButton ,setShowButton] = useState(false)

    useEffect(() => {

        const donaTion = JSON.parse(localStorage.getItem('donaTion'));
        if (donaTion) {
            setDonat(donaTion)
        }
        else {

            setNoDataFound('No DonaTion Found ')
        }

    }, [])
    console.log(donat);

    return (
        <div>

            {/* {donat.length >= 4  && <button className=" px-5 bg-green-600 "> SEE ALL </button> } */}


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
            <div className=" text-center mt-6 py-1  w-[80px] mx-auto rounded-md text-[#fff] bg-[#009444] ">
                <button onClick={()=>setShowButton(showButton)} className=" font-semibold text-lg ">See All</button>
            </div>
        </div>
    );
};

export default DonaTion;