import React from 'react';

const Team = () => {
    return (
        <>
      <div className="flex items-center justify-center bg-[#d9f99d] mt-7 w-3/4 mx-auto rounded-br-full rounded-tl-full text-center">
  <div className="flex flex-col p-2 m-2  max-w-7xl ">
    <div className="text-xl md:text-3xl my-5 font-medium">Meet Our Guides</div>

    <div className="flex items-center justify-center md:flex-row flex-col space-x-4 space-y-2 p-2">
      <div className="flex-col px-6 py-2 ">
        <div className="h-40 w-60 rounded-2xl overflow-hidden bg-gray-200">
          <img src="https://source.unsplash.com/300x300/?man,businessman" alt className />
        </div>
        <div className="text-lg font-medium text-[#244034] cursor-pointer hover:text-stone-400">John Doe</div>
        <div className=" italic text-[#244034]">Developer, Code</div>
      </div>
      <div className="flex-col px-6 py-2 ">
        <div className="h-40 w-60 rounded-2xl overflow-hidden bg-gray-200">
          <img src="https://source.unsplash.com/300x300/?boy" alt className />
        </div>
        <div className="text-lg font-medium text-[#244034] cursor-pointer hover:text-stone-400">Arkay</div>
        <div className=" italic text-[#244034]">Design, Art</div>
      </div>
      <div className="flex-col px-6 py-2 ">
        <div className="h-40 w-60 rounded-2xl overflow-hidden bg-gray-200">
          <img src="https://source.unsplash.com/300x300/?girl" alt className />
        </div>
        <div className="text-lg font-medium text-[#244034] cursor-pointer hover:text-stone-400">Elina Gilbert</div>
        <div className=" italic text-[#244034]">Solution,Work</div>
      </div>
    </div>
    
      
      
    </div>
  </div>


          
        </>
    );
};

export default Team;