import { useLoaderData } from "react-router-dom";
import AllPost from "./AllPost";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Component/ProviderFile/AuthProvider";


const MyPost = () => {
  // const allData =useLoaderData()
  // console.log(allData)
  const {user}=useContext(AuthContext)

  
  const [allData,setAllData]=useState([]);
  console.log(allData.ApplicantEmail)
  const [Post,setPost] = useState(allData);
  useEffect(() => {
    fetch(`https://assignment-11-server-side-black.vercel.app/Post`,{
      
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      setAllData(data)
      console.log(data)
    })
  
   
  },[]);
   

    const handleDetele = id => {
      console.log(id);
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
  
          fetch(`https://assignment-11-server-side-black.vercel.app/delete/${id}`, {
            method: 'DELETE'
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                )
                const remaining = Post.filter(Post => Post._id !== id)
                setPost(remaining)
              }
            })
            .catch(error=>{
              console.log(error)
            })
        }
      })
  
    }

    return (
      <>
 
      <div className="bg-[#244034] text-white text-center p-10 font-semibold">
        <h1 className="text-4xl mb-2 ">Job Listing</h1>
        <p className="text-xl">We delivered blazing fast & striking work solution</p>
      </div>
      
        <h1 className="text-2xl mb-5 mt-5 underline text-center font-semibold">All Jobs Here</h1>
   
     <div className="grid grid-cols-2 ">
     {
        allData.map(Data=><AllPost key={Data._id} datas={Data}  Post={Post} handleDetele={handleDetele} setPost={setPost} ></AllPost>)
      }
     </div>
      </>
    );
};

export default MyPost;