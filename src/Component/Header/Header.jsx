import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>

      <div className="flex justify-center bg-gradient-to-r from-blue-900 to-fuchsia-700 text-white ">
        <nav className="self-center w-full max-w-7xl  ">
          <div className="flex md:flex-row flex-col  justify-between items-center md:items-start">
            <img className="w-[200px] mt-2" src="https://i.ibb.co/QXXMjtB/Black-And-White-Aesthetic-Minimalist-Modern-Simple-Typography-Coconut-Cosmetics-Logo-1-removebg-prev.png" alt="" />
            <ul className="flex justify-center my-4  items-center text-sm md:text-[18px] font-bold  md:px-10">

              <NavLink to='/home' className="hover:underline  underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">Home</NavLink>
              <NavLink to='/addjob' className="hover:underline  underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">Add Job </NavLink>
              <NavLink to="/mypost" className="hover:underline  underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">My Posted Jobs</NavLink>
              <NavLink to="/mybid" className="hover:underline  underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">My Bids</NavLink>
              <NavLink to="/bidreq" className="hover:underline  underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">Bid Requests</NavLink>






            </ul>
            <div className="mt-3 flex gap-4">
              <NavLink  to="/register"  className="btn  decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">Register</NavLink>
              <NavLink to="/login" className="btn decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5" >Login</NavLink>
            </div>
          </div>
        </nav>
      </div>


    </>

  );
};

export default Header;