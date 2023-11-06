
import { Outlet } from "react-router-dom";
import Header from "../Component/Header/Header";
import Footer from "../Layout/Footer/Footer";
import Headroom from "react-headroom";



const Root = () => {
  return (
    <>

      <Headroom>
        <Header />
      </Headroom>
      <Outlet />
      <div className="mt-10">
        <Footer />
      </div>


    </>
  );
};

export default Root;