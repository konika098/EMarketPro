import { BiLogoGoogle } from "react-icons/bi";
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <>
       <div className="flex flex-col justify-center items-center  ">
  <div className=" md:w-auto w-[90%] p-8 rounded-xl  m-4 flex flex-col items-center shadow-lg border bg-gradient-to-t from-black via-purple-900 to-violet-600 opacity-90 ">
    <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0 ">
      <h1 className="font-semibold text-3xl text-white m-2">Log In Here</h1>
    </div>
    <div className="flex flex-col justify-center items-center mt-10 md:mt-4 space-y-6 md:space-y-8">
      <div className>
        <div className="m-1 text-lg text-white text-semibold">Username</div>
        <input type="text" name="email" className="border-b border-white focus:outline-none  text-white placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
      </div>
      <div className>
        <div className="m-1 text-lg text-white text-semibold">Password</div>
        <input type="password" name="password" className="border-b border-white focus:outline-none  text-white placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
      </div>
    </div>
    <div className="text-center mt-7 flex flex-col gap-3">
      <button className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-gradient-to-t from-stone-900 via-purple-900 to-violet-600  font-medium ">login</button>
      <button className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-gradient-to-t from-stone-900 via-purple-900 to-violet-600 flex items-center gap-4 font-medium "><BiLogoGoogle className="bg-white rounded text-black"/> login with google</button>
 

    </div>
    <div className="text-center my-6 flex flex-col">
    <p  className="text-sm font-medium text-white  m-1">Forgot
      Password ?</p>
    <p  className="text-sm font-bold text-white  m-1">
      Don't have Account? <Link className="hover:underline" to="/register">Register Here</Link></p>
  </div>
  </div>
 
</div>

        </>
    );
};

export default Login;