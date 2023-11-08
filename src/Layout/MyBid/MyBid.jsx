import React, { useEffect } from 'react';
import MyBidDetails from './MyBidDetails';
// import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
// import useBid from '../../Component/Hook/useBid';

const MyBid = () => {
    // const MyBid =useLoaderData()
    // const MyBidData =useBid()
    // console.log(MyBidData)
    const [MyBid,setMyBid]=useState([])
    useEffect(() => {
      fetch("https://assignment-11-server-side-black.vercel.app/PBid",{
        credentials:'include'
      })
      .then(response => {
        return response.json()
      })
      .then(data => {
        setMyBid(data)
        console.log(data)
      })
    
     
    },[]);
    // console.log(MyBid)
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
          <tbody>
          {
        MyBid.map(Bid=><MyBidDetails key={Bid.id} Bids={Bid}></MyBidDetails>)
      }
          </tbody>
          
        </table>
      </div>
        </div>
     
       
       </>
    );
};

export default MyBid;