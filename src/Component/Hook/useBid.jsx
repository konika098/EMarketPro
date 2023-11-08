import React, { useState } from 'react';
import { useEffect } from 'react';

const useBid = () => {
    const [MyBid,setMyBid]=useState([])
    useEffect(() => {
        fetch("https://assignment-11-server-side-black.vercel.app/PBid",{
        //   credentials:'include'
        })
        .then(res => {
          return res.json()
        })
        .then(data => {
          setMyBid(data)
          console.log(data)
        })
      
       
      },[]);
      console.log(MyBid)
    return MyBid
};

export default useBid;