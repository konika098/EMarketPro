import Swal from 'sweetalert2';

const UpdatePost = ({ post }) => {
    const { Title, Deadline, Description, JobCategory, MinimumPrice, MaximumPrice } = post

    const handleUpdate = (event) => {
        event.preventDefault()
        const form = event.target;

        const Title = form.Title.value;
        
        const Description = form.Description.value;
        const MaximumPrice = form.MaximumPrice.value;
        const MinimumPrice = form.MinimumPrice.value;
        const Deadline = form.Deadline.value;
        const JobCategory = form.JobCategory.value;


        const updateData = {
            Title: Title,
            Description: Description,
            MinimumPrice: MinimumPrice,
           MaximumPrice :MaximumPrice ,
          
            JobCategory: JobCategory,
            Deadline: Deadline,
        }
        console.log(updateData)

        fetch(
            `http://localhost:5000/update/${_id}`,
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

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-green-700">
                    <form onSubmit={handleUpdate}>
                        <div className="mt-4">
                            <label className="text-white" >Job Title</label>
                            <input defaultValue={Title} name="Title" className="w-full bg-base-100 rounded-md border-green-700 text-black px-2 py-1" type="text" />
                        </div>
                        <div className="mt-4">
                            <label className="text-white"> Description</label>
                            <textarea defaultValue={Description} name="Description" className="w-full bg-base-100 rounded-md border-green-700 text-black px-2 py-1" id="address" defaultValue={""} />
                        </div>
                        <div className="mt-4 flex flex-row space-x-2">

                            <div className="flex-1">
                                <label className="text-white" >Maximum Price </label>
                                <input defaultValue={MaximumPrice } name="MaximumPrice " className="w-full bg-base-100 rounded-md border-green-700  text-black px-2 py-1" id="state" type="text" />
                            </div>
                        </div>
                        <div className="mt-4 flex flex-row space-x-2">

                            <div className="flex-1">
                                <label className="text-white" >Minimum Price</label>
                                <input defaultValue={MinimumPrice} name="MinimumPrice" className="w-full bg-base-100 rounded-md border-green-700  text-black px-2 py-1" id="state" type="text" />
                            </div>
                        </div>
                        <div className="mt-4 flex flex-row space-x-2">

                            <div className="flex-1">
                                <label className="text-white" >Deadline</label>
                                <input defaultValue={Deadline} name="Deadline" className="w-full bg-base-100 rounded-md border-green-700  text-black px-2 py-1" id="state" type="text" />
                            </div>
                        </div>
                        <div className="mt-4 flex flex-row space-x-2">

                            <div className="flex-1">
                                <label className="text-white" >Job Category</label>
                                <input defaultValue={JobCategory} name="JobCategory" className="w-full bg-base-100 rounded-md border-green-700  text-black px-2 py-1" id="state" type="text" />
                            </div>
                        </div>



                      
                        <button className="bg-base-100 text-black rounded-md px-4 py-1 hover:bg-green-800 hover:text-white transition-all duration-200" type="submit">Submit</button>
                    </form>
                    <div className="modal-action">
                        <form method="dialog">

                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>

                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default UpdatePost;