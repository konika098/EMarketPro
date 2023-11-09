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
        <th>1</th>
        <td>{BEmail}</td>
        <td>{Title}</td>
        <td>{Deadline}</td>
        <td>{Price}</td>
        <td>{Status}</td>
        <button onClick={()=>handleProgressStatus(_id)} className="btn-one mr-3">Accept</button>
        <button onClick={()=>handleReject(_id)} className="btn-one">Reject</button>
      </tr>
    

       </>
    );
};

export default BidData;