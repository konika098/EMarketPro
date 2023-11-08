

const BidData = ({BidReqData}) => {
    const {BEmail,Deadline,Price,Title}= BidReqData
   
    return (
       <>
       
      
    
     <tr className="hover">
        <th>1</th>
        <td>{BEmail}</td>
        <td>{Title}</td>
        <td>{Deadline}</td>
        <td>{Price}</td>
        <td>Pending</td>
        <button className="btn mr-3">Accept</button>
        <button className="btn">Reject</button>
      </tr>
    

       </>
    );
};

export default BidData;