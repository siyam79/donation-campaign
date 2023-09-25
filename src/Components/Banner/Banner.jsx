

const Banner = () => {
    return (
        <div>
            <div className=" relative iteam-center text-center top-[200px] ">
                <h1 className=" font-bold text-3xl">I Grow By Helping People In Need </h1>
               <div className="">
               <input className=" border py-1 px-10 rounded-md mt-10  cursor-pointer " type="text"  placeholder="Searce Here.. " />
               <button className=" bg-[#FF444A] px-2 py-1  relative -ml-2 rounded  cursor-pointer  text-white "> Search  </button>
               </div>
            </div>
            <div className="">
                <img className=" opacity-10" src="https://i.ibb.co/bQZw9q6/Rectangle-4281.png" alt="" />
            </div>

            {/* <div className="relative grid h-[80vh] w-full  flex-col items-end justify-center overflow-hidden rounded-xl  bg-clip-border text-center ">
                <div className="absolute inset-0 m-0 h-full w-full opacity-100 overflow-hidden  bg-cover bg-clip-border bg-center  shadow-none">

                    <div className="to-bg-white-50 absolute inset-0 h-full w-full bg-gradient-to-t from-black/10 via-white/50">

                    </div>
                    <div className="  ">
                        <img className=" opacity-10" src="https://i.ibb.co/bQZw9q6/Rectangle-4281.png" alt="" />
                    </div>



                </div>
                <div>
                    <h1 className="  ml-20 text-3xl  "> I Grow By Helping People In Need </h1>

                </div>

            </div> */}
        </div>
    );
};

export default Banner;