import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="navbar bg-[#244034]">
        <img className="w-[200px] mt-2 ml-20" src="https://i.ibb.co/QXXMjtB/Black-And-White-Aesthetic-Minimalist-Modern-Simple-Typography-Coconut-Cosmetics-Logo-1-removebg-prev.png" alt="" />


        <div className="navbar-start ">

          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <NavLink to='/home' className="hover:text-[#d9f99d] text-semibold text-xl py-2 rounded-lg px-2 md:px-5">Home</NavLink>
              <NavLink to='/addjob' className=" hover:text-[#d9f99d] text-semibold text-xl py-2 rounded-lg px-2 md:px-5">Add Job </NavLink>
              <NavLink to="/mypost" className="hover:text-[#d9f99d] text-semibold text-xl py-2 rounded-lg px-2 md:px-5">My Posted Jobs</NavLink>
              <NavLink to="/mybid" className=" hover:text-[#d9f99d]text-semibold text-xl py-2 rounded-lg px-2 md:px-5">My Bids</NavLink>
              <NavLink to="/bidreq" className=" hover:text-[#d9f99d] text-semibold text-xl py-2 rounded-lg px-2 md:px-5">Bid Requests</NavLink>
            </ul>
          </div>

        </div>
        <div className="navbar-center hidden mr-10 text-white lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLink to='/home' className=" hover:text-[#d9f99d] text-semibold text-xl py-2 rounded-lg px-2 md:px-5">Home</NavLink>
            <NavLink to='/addjob' className="text-semibold hover:text-[#d9f99d] text-xl py-2 rounded-lg px-2 md:px-5">Add Job </NavLink>
            <NavLink to="/mypost" className="text-semibold hover:text-[#d9f99d] text-xl py-2 rounded-lg px-2 md:px-5">My Posted Jobs</NavLink>
            <NavLink to="/mybid" className="text-semibold hover:text-[#d9f99d] text-xl py-2 rounded-lg px-2 md:px-5">My Bids</NavLink>
            <NavLink to="/bidreq" className="text-semibold hover:text-[#d9f99d] text-xl py-2 rounded-lg px-2 md:px-5">Bid Requests</NavLink>
          </ul>
        </div>
        <div className="mt-3 ml-10 flex gap-4">
          <NavLink to="/register" className="btn  bg-[#bef264] py-2 rounded-lg px-2 md:px-5">Register</NavLink>
          <NavLink to="/login" className="btn bg-[#bef264] py-2 rounded-lg px-2 md:px-5" >Login</NavLink>
        </div>
      </div>









      



    </>

  );
};

export default Header;