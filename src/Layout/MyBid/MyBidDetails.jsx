
const MyBidDetails = ({Bids}) => {
  const {_id,BEmail,Deadline,Price,Title,Status}=Bids
  const handleComplete =(_id)=>{

    fetch(`https://assignment-11-server-side-black.vercel.app/Complete/${_id}`, {
      
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
     
        <td >{Status=="progress"&&<button onClick={()=>handleComplete(_id)} className="btn-one bg-[#bef264] p-1 mt-2">complete</button>}
</td>
        

      
      </tr>
    </> 
      
 
    
      
  
    
    );
};

export default MyBidDetails;