import React from 'react';

const Rating = () => {
    return (
        <>

<div className="flex justify-center mt-10  ">
      <div className="flex md:flex-row flex-col p-4 space-x-4 space-y-2 max-w-7xl justify-around w-full h-auto lg:h-60 items-center ">
        <div className="h-40 w-[70%] md:w-1/4 flex items-center justify-center ml-4">
          <div className="flex-col space-y-2 items-center  bg-[#d9f99d] p-12 rounded-r-full ">

            <div className="text-5xl font-bold text-black">7million</div>
            <div className="text-sm font-medium text-black">Completed Jobs</div>
          </div>
        </div>
        <div className="h-40 w-[70%] md:w-1/4 flex items-center justify-center">
          <div className="flex-col space-y-2 bg-[#d9f99d] p-12 rounded-r-full">
            
            <div className="text-5xl font-bold text-black">1.2M+</div>
            <div className="text-sm font-medium text-black">Worldwide Client</div>
          </div>
        </div>
        <div className="h-40 w-[70%] md:w-1/4 flex items-center justify-center">
          <div className="flex-col space-y-2 bg-[#d9f99d] p-12 rounded-r-full">
           
            <div className="text-5xl font-bold text-black">50billion</div>
            <div className="text-sm font-medium text-black">Dollar Payout</div>
          </div>
        </div>
      </div>
    </div>



        </>
    );
};

export default Rating;