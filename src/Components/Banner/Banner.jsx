import PropTypes from 'prop-types';

const Banner = ({handleSearch}) => {

    return (
        <div>
            <div className=" relative iteam-center text-center  top-[200px] ">
                <h1 className=" font-bold text-3xl">I Grow By Helping People In Need </h1>
               <div className="">
               <input onChange={handleSearch} className=" relative z-40 border py-1 px-10 rounded-md mt-10  cursor-pointer " type="text"  placeholder="Searce Here.. " />
               <button className=" bg-[#FF444A] px-2 py-1  relative -ml-2 rounded  cursor-pointer  text-white "> Search  </button>
               </div>
            </div>
            <div className="">
                <img className=" opacity-10" src="https://i.ibb.co/bQZw9q6/Rectangle-4281.png" alt="" />
            </div>
        </div>
    );
};
Banner.propTypes ={
    handleSearch: PropTypes.object
}

export default Banner;