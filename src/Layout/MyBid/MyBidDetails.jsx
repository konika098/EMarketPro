
const MyBidDetails = ({Bids}) => {
  const {BEmail,Deadline,Price,Title}=Bids
    return (
    <>
      <tr className="hover">
        <th>1</th>
        <td>{BEmail}</td>
        <td>{Title}</td>
        <td>{Deadline}</td>
        <td>{Price}</td>
        <td>Pending</td>
        <button className="btn">complete</button>
      </tr>
    </> 
      
 
    
      
  
    
    );
};

export default MyBidDetails;