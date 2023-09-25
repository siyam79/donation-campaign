import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
const OneItemCard = ({ card }) => {

    const { id, Category, cover_img, Description, Price, category_bg, background } = card || {};

    const handleAddToDonat = () => {
      
        const addedDonationArr = [];

        const donaTion = JSON.parse(localStorage.getItem('donaTion'))

        if (!donaTion) {
            addedDonationArr.push(card)
            localStorage.setItem('donaTion',JSON.stringify(addedDonationArr))
            toast.success('Donnat SuccessFull',{
                position:"top-center"
            })
        }
       
        else{


            const isExits = donaTion.find(card=>card.id === id)
          if (!isExits) {
            addedDonationArr.push(...donaTion,card)
            localStorage.setItem('donaTion',JSON.stringify(addedDonationArr))
            toast.success('Donnat SuccessFull',{
                position:"top-center"
            })
            
          }else{
            toast.warn('AllReady Donnat',{
                position:"top-right"
            })
          }
           
        }
    }

    return (
        <div>
            <div className=''>
                <img src={cover_img} alt="" />
            </div>
            <div className=' relative bottom-16  py-2  ' style={{ background: background }}>
                <span className=' py-1 rounded-md  text-white  lg:ml-10  ml-4 ' style={{ background: category_bg }}>
                    <button onClick={handleAddToDonat} className=' px-4 py-3 font-bold text-lg'>  Donate ${Price} </button>
                </span>
            </div>
            <h1 className=' lg:text-4xl text-3xl font-bold  lg:py-2  p-2 '> {Category} </h1>
            <h1 className=' text-lg p-2 font-normal  '> {Description} </h1>
            <ToastContainer></ToastContainer>
        </div>
    );
};
OneItemCard.propTypes = {
    card: PropTypes.object
}
export default OneItemCard;