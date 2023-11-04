import React from 'react';

const Rating = () => {
    return (
        <>

<div className="flex justify-center mt-10  ">
      <div className="flex md:flex-row flex-col p-4 space-x-4 space-y-2 max-w-7xl justify-around w-full h-auto lg:h-60 items-center ">
        <div className="h-40 w-[70%] md:w-1/4 flex items-center justify-center ml-4">
          <div className="flex-col space-y-2 items-center  bg-blue-900 p-8 ">
            <div className="text-sm font-medium text-gray-200">Clients</div>
            <div className="text-5xl font-bold text-white">15k+</div>
            <div className="text-sm font-medium text-gray-200">we have more than 15k+ visitors per month.</div>
          </div>
        </div>
        <div className="h-40 w-[70%] md:w-1/4 flex items-center justify-center">
          <div className="flex-col space-y-2 bg-blue-900 p-8">
            <div className="text-sm font-medium text-gray-200">Users</div>
            <div className="text-5xl font-bold text-white">1.2M+</div>
            <div className="text-sm font-medium text-gray-200">We have more than 1.2M+ total users.</div>
          </div>
        </div>
        <div className="h-40 w-[70%] md:w-1/4 flex items-center justify-center">
          <div className="flex-col space-y-2 bg-blue-900 p-8">
            <div className="text-sm font-medium text-gray-200">Engagement</div>
            <div className="text-5xl font-bold text-white">69k</div>
            <div className="text-sm font-medium text-gray-200">We has gained 69k+ users last month.</div>
          </div>
        </div>
      </div>
    </div>



        </>
    );
};

export default Rating;