import UpdatePost from "./UpdatePost";
const AllPost = ({ datas ,handleDetele }) => {
    const { Title, Deadline, Description, JobCategory,MinimumPrice,MaximumPrice} = datas
    return (
        <>
   <div className=" p-4  max-w-7xl  w-full h-auto  ">
        <div className="  bg-[#ecfccb] py-10 rounded-2xl  ml-4">
          <div className="flex-col  items-center px-0 md:px-6">
            <div className="text-xl font-bold "><span className="text-xl">Job Title:</span> {Title}</div>
            <div className="text-lg mt-8 font-bold text-gray-800">{Description}</div>
          
          <div className="text-lg font-medium text-gray-800 mt-2"><span className="text-lg">Deadline:</span> {Deadline}</div>
            <div className="text-lg font-medium text-gray-800 mt-2"><span className="text-lg">Category:</span> {JobCategory}</div>
          
        <div className="flex justify-between mt-3">
        <div className="text-lg font-medium text-gray-800"><span className="text-lg">Maximum Price:</span> {MaximumPrice}</div>
            <div className="text-lg font-medium text-gray-800"><span className="text-lg">Minimum Price:</span> {MinimumPrice}</div>
        </div>
          </div>
          <div className="flex justify-between mt-7">
          <button className="btn-one ml-4 bg-[#bef264] text-black  px-6 py-2 hover:brightness-105 font-semibold" >
            Update
            </button>
          <button onClick={() => handleDetele(datas._id)} className="btn-one  mr-4 bg-[#bef264] text-black  px-6 py-2 hover:brightness-105 font-semibold" >Delete</button>


          </div>
        
        </div>
       
      </div>
      <UpdatePost post={datas}/>
            
        </>
    );
};

export default AllPost;