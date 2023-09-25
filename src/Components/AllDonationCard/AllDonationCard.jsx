

const AllDonationCard = ({ card }) => {

    const { id, Category, Title,  Picture,  Price, category_bg, card_bg , text_and_button_bg } = card || {};

    return (
        <div>
           
            <div className="relative flex w-full   flex-row rounded-xl   shadow-md"  style={{background : card_bg}}>
                <div className="relative m-0 w-[200px]  overflow-hidden">
                    <img
                        src={Picture}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <div  style={{background : text_and_button_bg}}>
                    <h6 className="mb-4 block ">
                       <span style={{color : category_bg}}> {Title}</span>
                    </h6>
                    </div>
                    <h4 className="mb-2 block  ">
                       <span className=" text-[#0B0B0B] font-bold text-2xl ">{Category}</span>
                    </h4>
                    <p className="mb-8 block font-bold text-xl " style={{color : category_bg}}>
                        ${Price}
                    </p>
                   <button > View Details </button>
                </div>
            </div>





        </div>
    );
};

export default AllDonationCard;