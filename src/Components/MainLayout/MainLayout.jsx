import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const MainLayout = () => {
    return (
        <div className="w-[95%] mx-auto "> 
    
         <Header></Header>
          <div className="mt-10 ">
          <Outlet></Outlet>
          </div>
          
        </div>
    );
};

export default MainLayout;