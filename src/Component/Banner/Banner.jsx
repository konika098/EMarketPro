import { Link } from "react-router-dom";


const Banner = () => {
    return (
     <>
           <div>
 
 <div className="flex  justify-between  relative bg-[#244034] p-5  md:p-16 lg:p-28">
  <div>
  <div className="flex flex-col justify-center  max-w-7xl  text-white">
     <h1 className="text-base font-medium  ">Most trusted Job platform</h1>
     <span className="underline underline-offset-2 text-white -mt-3"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
       &nbsp; </span>
     <div className="flex flex-col text-white mt-5">
       <h1 className="text-4xl md:text-[50px]  font-semibold">Find & Hire 
       Top 3% of  expert <br />
 on E-Market Pro</h1>
       
     </div>
   
     <p className="mt-4 text-lg md:w-[52%] tracking-wide leading-7">Grow your skills and advance career</p>
   
     <div className="flex mt-10 space-x-5">
       <button className="bg-none border-[#a3e635] border-[2px] text-white px-6 py-2 hover:brightness-105 font-semibold">Looking for Job?</button>
      <Link to="/contactme"> <button className="btn-one bg-[#bef264] text-black  px-6 py-2 hover:brightness-105 font-semibold">Post a Job
         </button></Link>
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