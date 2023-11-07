import React, { useState } from 'react';
import { useEffect } from 'react';

const useBid = () => {
    const [MyBid,setMyBid]=useState([])
    useEffect(() => {
        fetch("http://localhost:5000/PBid",{
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