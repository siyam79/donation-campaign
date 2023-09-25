import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {

    const { id, Picture, Title, Category, category_bg, card_bg, text_and_button_bg } = card || {};

    return (
        
            <div style={{ background: card_bg }} >
                <Link to={`/cards/${id}`}>
                <div className=''>
                    <div className="  relative flex  w-full flex-col rounded-xl  shadow-sm">
                        <div className="relative m-0 overflow-hidden rounded-none  bg-clip-border ">
                            <img className=' w-full'
                                src={Picture}
                                alt="ui/ux review check"
                            />
                        </div>
                        <div className="p-4">
                            <h4 className=" block  text-sm font-semibold" >
                                <div className='w-[85px] rounded-md ' style={{ background: text_and_button_bg }}>
                                    <p className=' text-center py-1  font-semibold '>
                                        <span className='' style={{ color: category_bg }}>{Title}</span>
                                    </p>
                                </div>
                            </h4>
                            <p className="mt-3 block text-xl">
                                <span className='font-bold' style={{ color: category_bg }}>{Category}</span>
                            </p>
                        </div>

                    </div>

                </div>
                </Link>
            </div>
           
    );
};

Card.propTypes = {
    card: PropTypes.object
}


export default Card;