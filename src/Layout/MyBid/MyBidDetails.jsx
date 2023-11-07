
const MyBidDetails = ({Bids}) => {
  const {BEmail,Deadline,Price,Title}=Bids
    return (
     <div className="overflow-x-auto ">
      <table className="table">
       <tbody>
      {/* row 1 */}
      <tr className="hover">
        <th>1</th>
        <td>{BEmail}</td>
        <td>{Title}</td>
        <td>{Deadline}</td>
        <td>{Price}</td>
        <td>Pending</td>
        <button className="btn">complete</button>
      </tr>
      
    </tbody>
     </table>
     </div>
    );
};

export default MyBidDetails;