
import { Outlet } from "react-router-dom";
import Header from "../Component/Header/Header";
import Footer from "../Layout/Footer/Footer";



const Root = () => {
    return (
      <>
      <Header/>
      <Outlet/>
    <div className="mt-10">
    <Footer/>
    </div>
   
      
      </>
    );
};

export default Root;