import PropTypes from 'prop-types';

const Banner = ({ handleSearch }) => {

    return (
        <div>
            <div className="relative grid h-[40rem] lg:w-full flex-col items-end justify-center overflow-hidden rounded-xl text-center">
                <div className="absolute inset-0 m-0 h-full  overflow-hidden  opacity-5  bg-transparent bg-[url('https://i.ibb.co/bQZw9q6/Rectangle-4281.png')] bg-cover bg-clip-border bg-center ">
                    {/* <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-white/80 via-white/100 ">

                    </div> */}
                </div>
                <div className="relative p-2 pb-60 px-6 md:px-12">
                    <h2 className="mb-2 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-black antialiased">
                        I Grow By Helping People In Need
                    </h2>
                    <div className="">
                        <input onChange={handleSearch} className=" relative z-40 border py-1     px-10 rounded-md mt-10  cursor-pointer " type="text" placeholder="Searce Here.. " />
                        <button className=" bg-[#FF444A] px-2 py-1  relative -ml-2 rounded  cursor-pointer "> Search  </button>
                    </div>
                </div>
            </div>
        </div>
        // <div classNameName='bg-[url("https://i.ibb.co/bQZw9q6/Rectangle-4281.png")] bg-center bg-cover md:h-[700px] w-full '>
        //     <div classNameName=" relative iteam-center text-center  top-[200px] ">
        //         <h1 classNameName=" font-bold text-3xl">I Grow By Helping People In Need </h1>
        //        <div classNameName="">
        //        <input onChange={handleSearch} classNameName=" relative z-40 border py-1     px-10 rounded-md mt-10  cursor-pointer " type="text"  placeholder="Searce Here.. " />
        //        <button classNameName=" bg-[#FF444A] px-2 py-1  relative -ml-2 rounded  cursor-pointer  text-white "> Search  </button>
        //        </div>
        //     </div>

        // </div>
    );
};
Banner.propTypes = {
    handleSearch: PropTypes.object
}

export default Banner;