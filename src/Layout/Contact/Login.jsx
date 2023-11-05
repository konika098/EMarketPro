import { BiLogoGoogle } from "react-icons/bi";


import { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { AuthContext } from "../../Component/ProviderFile/AuthProvider";

const Login = () => {
  const {loginUser,loginGoogle}=useContext(AuthContext)
  const logInNav =useNavigate()
  const [error, setError] = useState()
  const [successfullyLogin, setSuccessfullyLogin] = useState()
  const location = useLocation();

  const handleLogin = e =>{
      e.preventDefault()
      const email =e.target.email.value
      const password =e.target.password.value

      console.log(email,password)
      setError(" ")
      setSuccessfullyLogin(" ")
  
      if (password.length < 6) {
          setError(" Password should be at least 6 characters ")
          return;
      } else if (!/[A-Z]/.test(password)) {
          setError('you should use one uppercase character.')
          return;
      } else if (!/[!@#$%^&*]/.test(password))
          setError('you should a special character')

      loginUser(email,password)
      .then(result=>{
          console.log(result.user)
          e.target.reset()
          logInNav("/")
          Swal.fire({
              icon: "success",
              title: "Sign In Successful",
              text: "You have successfully signed in!",
            });
          location.reload()
          Navigate(location?.state ? location.state : '/');

          
      })
      .catch(error=>{
          console.error(error)
          Swal.fire({
              icon: "success",
              title: "Sign In Successful",
              text: "You have successfully signed in!",
            });
        })

  }
  const handleGoogle = () => {
      loginGoogle()
      .then(result=>{console.log(result.user)
        
      logInNav('/')
      Swal.fire({
          icon: "success",
          title: "Sign In Successful",
          text: "You have successfully signed in!",
        });
        location.reload()
    
        
    })
    .catch(error=>{console.error(error)
      Swal.fire({
          icon: "success",
          title: "Sign In Successful",
          text: "You have successfully signed in!",
        });
      })
     

}
  return (
    <>
      <div className="flex flex-col justify-center items-center  ">
        <div className=" md:w-auto w-[90%] p-8 rounded-xl  m-4 flex flex-col items-center shadow-lg border bg-[#d9f99d] opacity-90 ">
          <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0 ">
            <h1 className="font-semibold text-3xl text-black m-2">Log In Here</h1>
          </div>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col justify-center items-center mt-10 md:mt-4 space-y-6 md:space-y-8">
              <div >
                <div className="m-1 text-lg text-black text-semibold">Username</div>
                <input type="text" name="email" className="border-b border-white focus:outline-none  text-black placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
              </div>
              <div className>
                <div className="m-1 text-lg text-black text-semibold">Password</div>
                <input type="password" name="password" className="border-b border-white focus:outline-none  text-black placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
              </div>
            </div>
            <div className="text-center mt-7 flex flex-col gap-3">
              <button className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-[#244034]  font-medium ">login</button>
              <button onClick={handleGoogle} className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-[#244034] flex items-center gap-4 font-medium ">
                <BiLogoGoogle className="bg-white rounded text-black" /> login with google</button>


            </div>
          </form>
          <div className="text-center my-6 flex flex-col">
            {
              error && <p className="mx-8 text-green-400   mt-1 mb-4">{error}</p>
            }
            {
              successfullyLogin && <p className="mx-8 text-red-600">{successfullyLogin}</p>
            }
            <p className="text-sm font-medium text-black  m-1">Forgot
              Password ?</p>
            <p className="text-sm font-bold text-black  m-1">
              Don't have Account? <Link className="hover:underline" to="/register">Register Here</Link></p>
          </div>
        </div>

      </div>

    </>
  );
};

export default Login;