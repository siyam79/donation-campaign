import { useEffect, useState } from "react";
import AllDonationCard from "../AllDonationCard/AllDonationCard";


const DonaTion = () => {

    const [donat, setDonat] = useState([])
    const [noDataFound, setNoDataFound] = useState('');
    const [showButton ,setShowButton] = useState('4');

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
        <div className="">

            <div>
                {
                    noDataFound ? <p className=" h-[80vh] flex justify-center items-center ">{noDataFound} </p> : <div>
                        <div className=" grid lg:grid-cols-2 grid-cols-1 gap-6 ">
                            {
                                donat?.slice(0 ,showButton ).map(card => <AllDonationCard key={card.id} card={card}></AllDonationCard>)
                            }
                        </div>
                    </div>
                }
            </div>
            <div className={showButton === donat.length && 'hidden'}>
               <span className= " w-[80px] mx-auto flex items-center  justify-center rounded-md mt-4 bg-[#009444] ">
               <button onClick={()=>setShowButton(donat.length)} className=" font-semibold text-lg text-[#fff] ">See All</button>
               </span>
            </div>
        </div>
    );
};

export default DonaTion;