import { useContext, useState } from "react";
import { AuthContext } from "../../Component/ProviderFile/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Register = () => {
  const { createUser, loginGoogle, updateUserDetails } = useContext(AuthContext)

  const resgisterNav = useNavigate()
  const [error, setError] = useState()
  const [successfullyLogin, setSuccessfullyLogin] = useState()








  const handleRegister = e => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    const photo = e.target.photo.value
    



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

    createUser(email, password)
      .then(result => {
        console.log(result)
        updateUserDetails("",photo)
        e.target.reset()
        // resgisterNav("/")
        Swal.fire({
          icon: "success",
          title: "Sign In Successful",
          text: "You have successfully signed in!",
        });
        location.reload()
      })
      .catch(error => {
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
      .then(result => {
        console.log(result.user)

        resgisterNav("/")
        Swal.fire({
          icon: "success",
          title: "Sign In Successful",
          text: "You have successfully signed in!",
        });
        location.reload()


      })
      .catch(error => {
        console.error(error)
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
        <div className=" md:w-auto w-[90%] p-8 rounded-xl  m-4 flex flex-col items-center shadow-lg border  bg-[#d9f99d] opacity-90 ">
          <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0 ">
            <h1 className="font-semibold text-3xl text-black m-2">Register Here</h1>
            <p>Create an account & Start posting or hiring talents</p>
          </div>
          <form onSubmit={handleRegister}>
          <div className="flex flex-col justify-center items-center mt-10 md:mt-4 space-y-6 md:space-y-8">
            <div >
              <div className="m-1 text-lg text-black text-semibold">Username</div>
              <input type="text" name="email" className="border-b border-white focus:outline-none  text-black placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
            </div>
            <div >
              <div className="m-1 text-lg text-black text-semibold">Password</div>
              <input type="password" name="password" className="border-b border-white focus:outline-none  text-black placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
            </div>
            <div >
              <div className="m-1 text-lg text-black text-semibold">Photo URL</div>
              <input type="photo" name="photo" className="border-b border-white focus:outline-none  text-black placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
            </div>
          </div>
          <div className="text-center mt-7 flex flex-col gap-3">
            <button className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-[#244034] to-violet-600  font-medium ">login</button>
            <button onClick={handleGoogle} className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-[#244034] to-violet-600 flex items-center gap-4 font-medium "> login with google</button>


          </div>
          </form>
          <div className="text-center my-6 flex flex-col">
            {
              error && <p className="mx-8 text-white bg-purple-700 p-3">{error}</p>
            }
            {
              successfullyLogin && <p className="mx-8 text-green-600">{successfullyLogin}</p>
            }
            <p className="text-sm font-medium text-black  m-1">Forgot
              Password ?</p>
            <p className="text-sm font-bold text-black  m-1">
              Go here for <Link className="hover:underline" to="/login">Login</Link></p>
          </div>
        </div>

      </div>
    </>
  );
};

export default Register;