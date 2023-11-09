// import { BiData } from "react-icons/bi";
import { useLoaderData } from "react-router-dom";
import BidData from "./BidData";
import { useState } from "react";
import { useEffect } from "react";


const BidReq = () => {
  

  const [Bid,setBid]= useState([])
  const [asc ,setAsc]=useState(true)
  useEffect(() => {
    fetch(`https://assignment-11-server-side-black.vercel.app/Sort?sort=${asc?"asc":"des" }`)
    .then(response => {
      return response.json()
    })
    .then(data => {
      setBid(data)
      console.log(data)
    })
  
   
  },[asc]);


  return (
    <>
      <div className='mt-10'>
        <button onClick={()=>setAsc(!asc)} className="btn-one bg-[#bef264] flex justify-center mx-auto p-3">{asc? "AllPending":"AllProgress"}</button>
        <div className="overflow-x-auto ">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>E-mail</th>
                <th>Job Title</th>
                <th>Deadline</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                Bid.map(BidReq => <BidData key={BidReq} BidReqData={BidReq} ></BidData>)
              }


            </tbody>

          </table>
        </div>
      </div>

    </>
  );
};

export default BidReq;