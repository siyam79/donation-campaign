import PropTypes from 'prop-types';

const Banner = ({ handleSearch }) => {

    return (
        <div>
            <div className="relative grid  lg:w-full flex-col items-end justify-center  rounded-xl text-center">
                <div className="absolute  h-full w-full  opacity-5  bg-[url('https://i.ibb.co/bQZw9q6/Rectangle-4281.png')] bg-cover bg-no-repeat  bg-center ">
                </div>
                <div className="relative p-2 pb-60 px-6 md:px-12 ">
                    <h2 className="mb-2 block  text-4xl font-medium leading-[1.5] tracking-normal text-black antialiased">
                        I Grow By Helping People In Need
                    </h2>
                    <div className="">
                        <input onChange={handleSearch} className=" relative z-40 border py-1   px-10 rounded-md mt-10  cursor-pointer " type="text"  placeholder="Searce Here.. " />
                        <button className=" bg-[#FF444A] px-4 text-white font-bold py-1  relative -ml-1  rounded  cursor-pointer "> Search  </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
Banner.propTypes = {
    handleSearch: PropTypes.object
}

export default Banner;