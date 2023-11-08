// import { BiData } from "react-icons/bi";
import { useLoaderData } from "react-router-dom";
import BidData from "./BidData";
import { useState } from "react";
import { useEffect } from "react";


const BidReq = () => {
  

  const [Bid,setBid]= useState([])
  useEffect(() => {
    fetch("https://assignment-11-server-side-black.vercel.app/PBid",{
      credentials:'include'
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      setBid(data)
      console.log(data)
    })
  
   
  },[]);


  return (
    <>
      <div className='mt-10'>
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