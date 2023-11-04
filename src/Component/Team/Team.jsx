import React from 'react';

const Team = () => {
    return (
        <>
      <div className="flex items-center justify-center text-center">
  <div className="flex flex-col p-2 m-2  max-w-7xl ">
    <div className="text-xl md:text-3xl font-medium">Meet Our Guides</div>

    <div className="flex items-center justify-center md:flex-row flex-col space-x-4 space-y-2 p-2">
      <div className="flex-col px-6 py-2 ">
        <div className="h-40 w-60 rounded-2xl overflow-hidden bg-gray-200">
          <img src="https://source.unsplash.com/300x300/?man,businessman" alt className />
        </div>
        <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">John Doe</div>
        <div className=" italic text-gray-500">Developer, Code</div>
      </div>
      <div className="flex-col px-6 py-2 ">
        <div className="h-40 w-60 rounded-2xl overflow-hidden bg-gray-200">
          <img src="https://source.unsplash.com/300x300/?boy" alt className />
        </div>
        <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">Arkay</div>
        <div className=" italic text-gray-500">Design, Art</div>
      </div>
      <div className="flex-col px-6 py-2 ">
        <div className="h-40 w-60 rounded-2xl overflow-hidden bg-gray-200">
          <img src="https://source.unsplash.com/300x300/?girl" alt className />
        </div>
        <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">Elina Gilbert</div>
        <div className=" italic text-gray-500">Solution,Work</div>
      </div>
    </div>
    
      
      
    </div>
  </div>


          
        </>
    );
};

export default Team;