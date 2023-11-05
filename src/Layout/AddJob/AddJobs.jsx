

const AddJobs = () => {
    const handleAddFood = event => {
        event.preventDefault()
        const form = event.target;

        const Email = form.Email.value;
        const JobCategory = form.JobCategory.value;
        const Deadline = form.Deadline.value;
        const MaximumPrice = form.MaximumPrice.value;
        const MinimumPrice = form.MinimumPrice.value;
        const Description = form.Description.value;
      
        const Title = form.Title.value;

        const newFood = { Email, JobCategory, MaximumPrice, MinimumPrice, Description,  Title }
        console.log(newFood)


        // fetch("https://delishop-rho.vercel.app/food", {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newFood)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         if (data.insertedId) {
        //             Swal.fire({
        //                 title: 'Success!',
        //                 text: 'User Added Successfully',
        //                 icon: 'success',
        //                 confirmButtonText: 'Cool'
        //             })

        //         }
        //     })


    }
    return (
        <>

          <div className="flex  items-center justify-center gap-10 ">
          <img className="w-[700px] h-[400px]" src="https://i.ibb.co/3WmRj2w/indeed-Hub-illustrations-03.png" alt="" />

          <div className="mt-4 flex flex-col bg-[#d9f99d]  w-[470px] rounded-lg p-4 shadow-sm">
                        <h2 className="text-[#244034] text-center font-bold text-xl">Add Job Here</h2>

                        <form onSubmit={handleAddFood} className='flex  flex-col justify-center mx-auto' >
                        <div className="lg:flex items-center text-[#244034]  gap-3 ">
                                <div className="flex flex-col gap-2 lg:w-[420px]  mb-5">
                                    <label htmlFor="email">E-mail</label>
                                    <input type="text" className="px-3 py-2 text-black" name="Email" placeholder="E-mail" />

                                </div>

                            </div>
                            <div className="lg:flex items-center  gap-3 ">
                               
                                <div className="flex text-[#244034] flex-col gap-2 mb-5 lg:w-[205px]">
                                    <label htmlFor="Job Category">Job Category</label>
                                    <select id="Job Category" name="JobCategory" className="px-3 py-2 text-green-800" >
                                        <option value="Web Development"  >Web Development</option>
                                        <option value="Graphics Design">Graphics Design</option>
                                        <option value="Digital Marketing">Digital Marketing</option>

                                    </select>
                                </div>
                                <div className="flex text-[#244034] flex-col gap-2  mb-5">
                                    <label htmlFor="E-mail">Deadline</label>
                                    <input type="text" className="px-3 py-2 text-black " name="Deadline" placeholder="Deadline" />
                                </div>
                            </div>
                            <div className="lg:flex items-center text-[#244034] gap-3 ">
                                <div className="flex flex-col gap-2  mb-5">
                                    <label htmlFor="Price">Maximum Price</label>
                                    <input type="text" className="px-3 py-2 text-black" name="MaximumPrice" placeholder="Max-Price" />
                                </div>
                                <div className="flex flex-col gap-2 text-[#244034]  mb-5">
                                    <label htmlFor="Minimum Price">Minimum Price</label>
                                    <input type="text" className="px-3 py-2 text-black" name="MinimumPrice" placeholder="Min-Price" />
                                </div>
                            </div>
                        
                            <div className="lg:flex items-center text-[#244034]  gap-3 ">
                                <div className="flex flex-col gap-2 lg:w-[420px]  mb-5">
                                    <label htmlFor="Rating">Job Title</label>
                                    <input type="text" className="px-3 py-2 text-black" name="Title" placeholder="Enter your Job title " />

                                </div>

                            </div>
                            <div>
                  
                                <div className='flex flex-col text-[#244034] gap-2 lg:w-[420px] mb-5'>
                                    <label htmlFor="shortDescription">Description</label>
                                    <input name="shortDescription" className="px-3 py-2 text-black " placeholder="text here....." />

                                </div>
                            </div>


                            <button type='submit' className="py-2 btn text-white bg-[#84cc16] hover:bg-[#84cc16]">Submit</button>

                        </form>
                    </div>

          </div>
        </>
    );
};

export default AddJobs;