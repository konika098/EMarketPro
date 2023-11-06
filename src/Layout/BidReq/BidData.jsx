import { useEffect } from "react";
import BidReq from "./BidReq";


const BidData = () => {
    const [Bid ,setBid]=useState([])
    const FetchBid=()=>{
        fetch("http://localhost:5000/PBid")
        .then(res=>{
            return res.json()
        })
        .then(Bid =>{
            setBid(Bid)
        })
    }
    useEffect(()=>{
        FetchBid()
    },[])
    return (
       <>
       {
        Bid.map(BidData=><BidReq key={BidData.id} BidData={BidData}></BidReq>)
        
       }

       </>
    );
};

export default BidData;