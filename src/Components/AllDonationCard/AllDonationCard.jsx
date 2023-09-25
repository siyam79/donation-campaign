import PropTypes from 'prop-types';

const AllDonationCard = ({ card }) => {

    const { Category, Title, Picture, Price, category_bg, card_bg, text_and_button_bg } = card || {};

    return (
        <div className=" rounded-lg ">

            <div className="relative flex w-full  flex-row rounded-xl shadow-md" style={{ background: card_bg }}>
                <div className="relative m-0 w-[200px]  rounded-md  overflow-hidden">
                    <img
                        src={Picture}
                        alt="image"
                        className="h-full lg:w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <div style={{ background: text_and_button_bg }} className="w-16 text-center font-semibold text-sm rounded-md  ">
                        <h6 className="mb-2 block py-1">
                            <span style={{ color: category_bg }}> {Title}</span>
                        </h6>
                    </div>
                    <h4 className="mb-2 block  ">
                        <span className=" text-[#0B0B0B] font-bold text-2xl ">{Category}</span>
                    </h4>
                    <p className="mb-2 block font-bold text-xl  " style={{ color: category_bg }}>
                        ${Price}
                    </p>
                    <span style={{ background: category_bg }} className="py-1.5  px-3  rounded-md ">
                        <button className="text-xl text-white font-bold py-1">View Details </button>
                    </span>
                </div>
            </div>

        </div>
    );
};
AllDonationCard.propTypes = {
    card: PropTypes.object
}


export default AllDonationCard;