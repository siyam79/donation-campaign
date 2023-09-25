import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
// import Home from "../Home/Home";


const MainLayout = () => {
    return (
        <div className=" w-[95%] mx-auto "> 
    
         <Header></Header>
          <div>
          <Outlet></Outlet>
          </div>

        </div>
    );
};

export default MainLayout;