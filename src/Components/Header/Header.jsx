import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <nav className="mx-auto block w-full max-w-screen-xl  py-2 px-4 backdrop-blur-2xl backdrop-saturate-200 lg:px-4 lg:py-4">

                <div>
                    <div className="container mx-auto md:flex items-center justify-center md:justify-between">
                        <h1
                            href="#"
                            className="mr-4 block  py-1.5 font-sans text-sm font-normal leading-normal text-inherit antialiased"
                        >
                            <div className="flex items-center justify-center md:justify-start ">
                                <img className="w-36 -ml-4" src="https://i.ibb.co/J23R4YR/Logo.png" alt="" />
                            </div>

                        </h1>
                        <ul className=" flex  items-center md:justify-end justify-center gap-6 lg:flex">
                            <li className="block p-1 s text-lg text-[#0B0B0B]  font-semibold ">
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? 'bg-[#FF444A] px-4  rounded-md ' : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="block p-1 s text-lg text-[#0B0B0B] font-semibold ">
                                <NavLink
                                    to="/donation"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? 'bg-[#FF444A] px-4  rounded-md ' : ""
                                    }
                                >
                                    Donation
                                </NavLink>
                            </li>
                            <li className="block p-1 s text-lg text-[#0B0B0B]  font-semibold ">
                                <NavLink
                                    to="/statistics"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? 'bg-[#FF444A] px-4  rounded-md ' : ""
                                    }
                                >
                                    Statistics
                                </NavLink>
                            </li>

                        </ul>


                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;