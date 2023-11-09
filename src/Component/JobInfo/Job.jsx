import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../ProviderFile/AuthProvider";
// import JobDetails from '../JobInfo/JobDetails'



const Job = () => {

  const ShowData = useLoaderData()
  const {user} =useContext(AuthContext)
  const ownerEmail =user.email
  console.log(ShowData)

  const handlePlaceBid =e =>{
    e.preventDefault()
    const form = e.target;
    const Email =form.Email.value;
    const BEmail =form.BEmail.value;
    const Deadline =form.Deadline.value;
    const Price =form.Price.value;
    const Title =form.Title.value;

  const newBid ={Email,BEmail,Deadline,Price,Title}


    fetch("https://assignment-11-server-side-black.vercel.app/AddPBid", {
            // credentials:"include",
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBid)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
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
      <div>
        <div className="bg-[#244034] p-16 text-white text-center">
          <h1 className="text-4xl font-semibold">Job Details</h1>
          <p className="text-xl font-semibold mt-5">Here will be your company job details & requirements</p>
        </div>

        <div className="flex mt-10">

          <div className="flex w-3/4 flex-col gap-6">
            <div className="border-2 border-[#244034] px-7 py-10 rounded w-1/2 mx-auto">
              <div className="flex gap-2">
                <h1 className="bg-[#bef264] text-black rounded-full p-3 w-9 h-9 flex items-center font-semibold text-lg">1</h1>
                <h1 className="text-2xl font-bold">Overview</h1>
              </div>
              <p className="text-lg font-semibold mt-5">When team members told us they needed more flexibility around where and how they worked, we acted, creating two options to accommodate two different styles of work. One non-negotiable principle along the way? We had to retain our deep culture of collaboration, both among ourselves and with our clients. Introducing Work From Near and Work From Anywhere at WillowTree. Learn more here. Please indicate which location(s) you're interested.</p>
            </div>

            <div className="border-2 border-[#244034] px-7 py-10 rounded w-1/2 mx-auto">
              <div className="flex gap-2">
                <h1 className="bg-[#bef264] text-black  rounded-full p-3 w-9 h-9 flex items-center font-semibold text-lg">2</h1>
                <h1 className="text-2xl font-bold">Job Description</h1>
              </div>
              <p className="text-lg font-semibold mt-5">As a {ShowData.JobCategory} at WillowTree, you’ll give form to ideas by being the voice and owner of product decisions. You’ll drive the design direction, and then make it happen!

                We understand our responsibility to create a diverse, equitable, and inclusive place within the tech industry, while pushing to make our industry more representative..</p>
            </div>
            <div className="border-2 border-[#244034] px-7 py-10 rounded w-1/2 mx-auto">
              <div className="flex gap-2">
                <h1 className="bg-[#bef264] text-black  rounded-full p-3 w-9 h-9 flex items-center  font-semibold text-lg">3</h1>
                <h1 className="text-2xl font-bold">Responsibilities</h1>
              </div>
              <ul >
                <li>Collaborate daily with a multidisciplinary team of Software Engineers, Researchers, Strategists, and Project Managers.</li>
                <li>Co-lead ideation sessions, workshops, demos, and presentations with clients on-site</li>
                <li>Push for and create inclusive, accessible design for all</li>
                <li>Maintain quality of the design process and ensure that when designs are translated into code they accurately reflect the design specifications.</li>
                <li>Sketch, wireframe, build IA, motion design, and run usability tests</li>
                <li>Design pixel perfect responsive UI’s and understand that adopting common interface pattern is better for UX than reinventing the wheel</li>
                <li>Ensure content strategy and design are perfectly in-sync</li>
                <li>Give and receive design critique to help constantly refine and push our work</li>
              </ul>
            </div>
            <div className="border-2 border-[#244034] px-7 py-10 rounded w-1/2 mx-auto">
              <div className="flex gap-2">
                <h1 className="bg-[#bef264] text-black  rounded-full p-3 w-9 h-9 flex items-center  font-semibold text-lg">4</h1>
                <h1 className="text-2xl font-bold">Required Skills:</h1>
              </div>
              <ul >
                <li>You’ve been designing digital products for 2+ years.</li>
                <li>A portfolio that exemplifies strong visual design and a focus on defining the user experience.</li>
                <li>You’ve proudly shipped and launched several products.</li>
                <li>You have some past experience working in an agile environment – Think two-week sprints.</li>
                <li>Experience effectively presenting and communicating your design decisions to clients and team members</li>
                <li>Up-to-date knowledge of design software like Figma, Sketch etc.</li>

              </ul>
            </div>
            <div className="border-2 border-[#244034] px-7 py-10 rounded w-1/2 mx-auto">
              <div className="flex gap-2">
                <h1 className="bg-[#bef264] text-black  rounded-full p-3 w-9 h-9 flex items-center  font-semibold text-lg">5</h1>
                <h1 className="text-2xl font-bold">Benefits:</h1>
              </div>
              <ul >
                <li>We are a remote-first company.</li>
                <li>100% company-paid health insurance premiums for you & your dependents</li>
                <li>Vacation stipend</li>
                <li>Unlimited paid vacation and paid company holidays</li>
                <li>Monthly wellness/gym stipend</li>


              </ul>
            </div>
          </div>

          <div className="text-white  w-1/5 ">
            <div className="bg-[#244034]  p-10 mb-4">
              <h1 className="text-2xl font-semibold text-center underline mb-6">Information</h1>
              <div className="flex justify-between">
                <h1 ><span className="text-lg font-semibold">Max-Price:</span> {ShowData.MaximumPrice}</h1>
                <h1><span className="text-lg font-semibold">Min-Price:</span> {ShowData.MinimumPrice}</h1>
              </div>

              <h1><span className="text-lg font-semibold">Job Type:</span> FullTime</h1>
              <h1><span className="text-lg font-semibold ">Deadline:</span> {ShowData.Deadline}</h1>


              <button className="btn-one mx-auto flex mt-10 bg-white text-black  px-6 py-2 hover:brightness-105 font-semibold">Apply Now</button>
            </div>



            <div className="bg-[#244034] text-white  p-5">
              <h1 className="text-xl font-semibold mb-4">Place Your Bid Here</h1>
              <form onSubmit={handlePlaceBid}>
                <div className="flex flex-col gap-2 lg:w-[300px]  mb-5">
                  <label htmlFor="email">E-mail</label>
                  <input type="text" className="px-3 py-2 text-black" name="Email" placeholder="E-mail" value={ownerEmail} />

                </div>
                <div className="flex flex-col gap-2 lg:w-[300px]  mb-5">
                  <label htmlFor="email">Buyer E-mail</label>
                  <input type="text" className="px-3 py-2 text-black" name="BEmail" placeholder="E-mail" />

                </div>
                <div className="flex flex-col gap-2 lg:w-[300px]  mb-5">
                  <label htmlFor="email">Job Title</label>
                  <input type="text" className="px-3 py-2 text-black" name="Title" placeholder="Title" defaultValue={ShowData.Title} />

                </div>
                <div className="flex flex-col gap-2 lg:w-[300px]  mb-5">
                  <label htmlFor="email">Price</label>
                  <input type="text" className="px-3 py-2 text-black" name="Price" placeholder="Price" />

                </div>
                <div className="flex flex-col gap-2 lg:w-[300px]  mb-5">
                  <label htmlFor="email">Status</label>
                  <input type="text" value={"Pending"} className="px-3 py-2 text-black" name="Price" placeholder="Price" />

                </div>
                <div className="flex text-[#244034] flex-col gap-2 mb-5 lg:w-[300px]">
                  <label className="text-white" htmlFor="Deadline ">Deadline</label>
                  <input type="date" className="px-3 py-2 text-black" name="Deadline" />
                </div>
                <button className="btn-one bg-white text-black  px-6 py-2 hover:brightness-105 font-semibold">Bid</button>
              </form>
            </div>

          </div>









        </div>
      </div>

    </>
  );
};

export default Job;