import { Link } from "react-router-dom";


const Banner = () => {
    return (
     <>
           <div>
 
 <div className="flex  justify-center  relative bg-gradient-to-r from-blue-900 to-fuchsia-700 p-5  md:p-16 lg:p-28">
  <div>
  <div className="flex flex-col justify-center  max-w-7xl  text-white">
     <h1 className="text-base font-medium tracking-wider ">Most trusted education platform</h1>
     <span className="underline underline-offset-2 text-white -mt-3"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
       &nbsp; </span>
     <div className="flex flex-col text-white mt-5">
       <h1 className="text-4xl md:text-[50px] font-semibold">Grow your skills and advance career</h1>
       
     </div>
   
     <p className="mt-4 text-sm md:w-[52%] tracking-wide leading-7">Start, switch or advance your career with more than 5,000 coursers, Professional Certificates, and degrees from world-class universities and companies.</p>
   
     <div className="flex mt-10 space-x-5">
       <button className="bg-white text-blue-600 px-6 py-2 hover:brightness-105 font-semibold">Read More</button>
      <Link to="/contactme"> <button className="bg-blue-900 text-white border-2 border-white px-6 py-2 hover:brightness-105 font-semibold">Contact
         Me</button></Link>
     </div>
  </div>
   
   </div>
   <div className= "absolute bottom-1  right-0">
       <img className="w-[800px] " src="https://i.ibb.co/KDnqS8V/pexels-photo-3768126-removebg-preview.png" alt="" />
     </div>
 </div> 
 
</div>
     </>
    );
};

export default Banner;