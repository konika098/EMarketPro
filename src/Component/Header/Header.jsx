import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../ProviderFile/AuthProvider";
import { useContext } from "react";
const Header = () => {
  const {user,logOut} =useContext(AuthContext)
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    
    const handleLogOut =()=>{
        logOut()
        .then(()=>console.log("successfully log out"))
        .catch(error=>console.error(error))
    }

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
              <NavLink to='/' className="hover:text-[#d9f99d] text-semibold text-xl py-2 rounded-lg px-2 md:px-5">Home</NavLink>
              <NavLink to='/addjob' className=" hover:text-[#d9f99d] text-semibold text-xl py-2 rounded-lg px-2 md:px-5">Add Job </NavLink>
              <NavLink to="/mypost" className="hover:text-[#d9f99d] text-semibold text-xl py-2 rounded-lg px-2 md:px-5">My Posted Jobs</NavLink>
              <NavLink to="/mybid" className=" hover:text-[#d9f99d]text-semibold text-xl py-2 rounded-lg px-2 md:px-5">My Bids</NavLink>
              <NavLink to="/bidreq" className=" hover:text-[#d9f99d] text-semibold text-xl py-2 rounded-lg px-2 md:px-5">Bid Requests</NavLink>
              <NavLink to="/contactme" className=" hover:text-[#d9f99d] text-semibold text-xl py-2 rounded-lg px-2 md:px-5">Contact</NavLink>
            </ul>
          </div>

        </div>
        <div className="navbar-center hidden mr-10 text-white lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLink to='/' className=" hover:text-[#d9f99d] text-semibold text-xl py-2 rounded-lg px-2 md:px-5">Home</NavLink>
            <NavLink to='/addjob' className="text-semibold hover:text-[#d9f99d] text-xl py-2 rounded-lg px-2 md:px-5">Add Job </NavLink>
            <NavLink to='/mypost' className="text-semibold hover:text-[#d9f99d] text-xl py-2 rounded-lg px-2 md:px-5">My Posted Jobs</NavLink>
            <NavLink to='/mybid' className="text-semibold hover:text-[#d9f99d] text-xl py-2 rounded-lg px-2 md:px-5">My Bids</NavLink>
            <NavLink to='/bidreq' className="text-semibold hover:text-[#d9f99d] text-xl py-2 rounded-lg px-2 md:px-5">Bid Requests</NavLink>
            <NavLink to='/contactme' className="text-semibold hover:text-[#d9f99d] text-xl py-2 rounded-lg px-2 md:px-5">Contact</NavLink>
            
            

          </ul>
        </div>
        <div className="mt-3 navbar-end gap-4 flex ">
        {
          user? "":<>
          <Link to="/register" className="btn  bg-[#bef264] py-2 rounded-lg px-2 md:px-5">Register</Link>
          <Link to="/login" className="btn bg-[#bef264] py-2 rounded-lg px-2 md:px-5" >Login</Link>
          
          </>
        }
        <div className="flex items-center gap-1 ">
          {
            user?<img className="rounded-full w-9 md:w-16" src={user.photoURL} alt="" />:""
          }
          {
            user?<button onClick={handleLogOut}className="btn bg-[#bef264] py-2 rounded-lg px-2 md:px-5" >Sign Out</button>
          :" "
          }

        </div>
          
          
        </div>
      </div>









      



    </>

  );
};

export default Header;