import React from 'react';
import MyBidDetails from './MyBidDetails';
import { useLoaderData } from 'react-router-dom';

const MyBid = () => {
    const MyBid =useLoaderData()
    console.log(MyBid)
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
        MyBid.map(Bid=><MyBidDetails key={Bid.id} Bid={Bid}></MyBidDetails>)
      }
       
       </>
    );
};

export default MyBid;