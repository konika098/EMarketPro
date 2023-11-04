import { RiUser3Fill,RiFileList2Line,RiPencilFill} from "react-icons/ri";

const HowItWorks = () => {
    return (
       <>
       <div className='bg-[#244034] p-20'>
        <h1 className='text-white text-4xl text-center pb-14'>How it’s work?</h1>
      <div className="flex justify-center gap-8 ">
      <div className="flex flex-col items-center w-[50%]">
        <RiUser3Fill className="bg-[#bef264] w-14 h-14 rounded-full p-2 text-black"></RiUser3Fill>
        <h1 className="text-white text-2xl pt-3 pb-3 font-semibold">Create Account</h1>
        <p className="text-white text-lg"> It’s very easy to open an account and start your journey.</p>
       </div>
       <div className="flex flex-col w-[50%] items-center">
        <RiFileList2Line className="bg-[#bef264] w-14 h-14 rounded-full p-2 text-black"></RiFileList2Line>
        <h1 className="text-white text-2xl pt-3 pb-3 font-semibold">Complete your profile</h1>
        <p className="text-white text-lg ">Complete your profile with all the info  
        to get attention of client.</p>
       </div>
       <div className="flex flex-col items-center w-[50%]">
        <RiPencilFill className="bg-[#bef264] w-14 h-14 rounded-full p-2 text-black"></RiPencilFill>
        <h1 className="text-white text-2xl pt-3 pb-3 font-semibold">Apply job or hire</h1>
        <p className="text-white text-lg">Apply & get your preferable jobs with all the requirements and get it.</p>
       </div>
      </div>

       </div>
       </>
    );
};

export default HowItWorks;