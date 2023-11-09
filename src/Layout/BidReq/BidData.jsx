import Swal from "sweetalert2";


const BidData = ({BidReqData}) => {
    const {_id,BEmail,Deadline,Price,Title,Status}= BidReqData
    console.log(Status)

    const handleProgressStatus =(_id)=>{

      fetch(`https://assignment-11-server-side-black.vercel.app/Status/${_id}`, {
        
         method: 'PUT',
         headers: {
             'content-type': 'application/json'
         },
        
        
     })
         .then(res => res.json())
         .then(data => {
             console.log(data)
             if (data.updatedCount) {
                 Swal.fire({
                     title: 'Success!',
                     text: 'Successfully added your post',
                     icon: 'success',
                     confirmButtonText: 'Cool'
                 })

             }
         })

    }
    const handleReject =(_id)=>{

      fetch(`https://assignment-11-server-side-black.vercel.app/Reject/${_id}`, {
        
         method: 'PUT',
         headers: {
             'content-type': 'application/json'
         },
        
        
     })
         .then(res => res.json())
         .then(data => {
             console.log(data)
             if (data.updatedCount) {
                 Swal.fire({
                     title: 'Success!',
                     text: 'Successfully added your post',
                     icon: 'success',
                     confirmButtonText: 'Cool'
                 })

             }
         })

    }

  
   
    return (
       <>
       
      
    
     <tr className="hover">
        <th></th>
        <td>{BEmail}</td>
        <td>{Title}</td>
        <td>{Deadline}</td>
        <td>{Price}</td>
        <td>{Status}</td>
        <button disabled={Status=="cancel" || Status=="complete"?true:false} onClick={()=>handleProgressStatus(_id)} className="btn-one bg-[#bef264] p-1 mt-2  mr-3">Accept</button>
        <button disabled={Status=="progress" || Status=="complete"?true:false} onClick={()=>handleReject(_id)} className="btn-one bg-[#bef264] p-1 mt-2 ">Reject</button>
      </tr>
    

       </>
    );
};

export default BidData;