import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const UpdatePost = () => {
    const upData =useLoaderData()
    // console.log(upData)

   
    const handleUpdate = (event,id) => {
        event.preventDefault()
        const form = event.target;

        const Title = form.Title.value;

        const Description = form.Description.value;
        const MaximumPrice = form.MaximumPrice.value;
        const MinimumPrice = form.MinimumPrice.value;
        const Deadline = form.Deadline.value;
        const JobCategory = form.JobCategory.value;


        const updateData =  {
            Title: Title,
            Description: Description,
            MinimumPrice: MinimumPrice,
            MaximumPrice: MaximumPrice,

            JobCategory: JobCategory,
            Deadline: Deadline,
        }
        console.log(updateData)

        fetch(
            `https://assignment-11-server-side-black.vercel.app/update/${id}`,
            {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(updateData),
            }
        )
            .then((res) => res.json())
            .then((result) => {
                console.log(result)
                if (result.acknowledged) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated your post  Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }

            });
    };
   
   



    return (

        <>
       
             <div className='bg-[#d9f99d] flex justify-center' >
                        <form onSubmit={()=>(handleUpdate(upData._id))}>
                            <div className="mt-4">
                                <label className="text-black" >Job Title</label>
                                <input defaultValue={upData.Title} name="Title" className="w-full text-black bg-base-100 rounded-md border-green-700 px-2 py-1" type="text" />
                            </div>
                            <div className="mt-4">
                                <label className="text-black"> Description</label>
                                <textarea defaultValue={upData.Description} name="Description" className="w-full bg-base-100 rounded-md border-green-700 text-black px-2 py-1" id="address"  />
                            </div>
                            <div className="mt-4 flex flex-row space-x-2">

                                <div className="flex-1 mt-4">
                                    <label className="text-black" >Maximum Price </label>
                                    <input defaultValue={upData.MaximumPrice} name="MaximumPrice" className="w-full bg-base-100 rounded-md border-green-700  text-black px-2 py-1" id="state" type="text" />
                                </div>
                            </div>
                            <div className="mt-4 flex flex-row space-x-2">

                                <div className="flex-1 mt-4">
                                    <label className="text-black" >Minimum Price</label>
                                    <input defaultValue={upData.MinimumPrice} name="MinimumPrice" className="w-full bg-base-100 rounded-md border-green-700  text-black px-2 py-1" id="state" type="text" />
                                </div>
                            </div>
                            <div className="mt-4 flex flex-row space-x-2">

                                <div className="flex-1 mt-4">
                                    <label className="text-black" >Deadline</label>
                                    <input defaultValue={upData.Deadline} name="Deadline" className="w-full bg-base-100 rounded-md border-green-700  text-black px-2 py-1" id="state" type="text" />
                                </div>
                            </div>
                            <div className="mt-4 flex flex-row space-x-2">

                                <div className="flex-1 mt-4">
                                    <label className="text-black" >Job Category</label>
                                    <input defaultValue={upData.JobCategory} name="JobCategory" className="w-full bg-base-100 rounded-md border-green-700  text-black px-2 py-1" id="state" type="text" />
                                </div>
                            </div>




                            <button className="bg-base-100 mt-4 text-black rounded-md px-4 py-1 hover:bg-green-800 hover:text-white transition-all duration-200" type="submit">Submit</button>
                        </form>
                       
                    </div>



        </>
    );
}

export default UpdatePost;