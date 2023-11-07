import { BiData } from "react-icons/bi";
import { useLoaderData } from "react-router-dom";
import BidData from "./BidData";


const BidReq = () => {
    const Bid =useLoaderData()
  
    
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
              <th></th>
            </tr>
          </thead>
          
        </table>
      </div>
        </div>
        {
        Bid.map(BidReq=><BidData key={BidReq} BidReqData={BidReq} ></BidData>)
      }
        </>
    );
};

export default BidReq;