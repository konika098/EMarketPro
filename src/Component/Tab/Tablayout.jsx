import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { IoBagHandle, IoCodeSlashOutline } from "react-icons/io5";
import { GoPencil } from "react-icons/go";

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Tablayout = () => {
  const [data, setData] = useState([])

  const fetchUserData = () => {
    fetch("http://localhost:5000/PostJob")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setData(data)
        console.log(data)
      })
  }
  useEffect(() => {
    fetchUserData()
  }, [])
  const webDevelop = data.filter(showData => showData.JobCategory == "WebDevelopment")
  // console.log(webDevelop[0].MinimumPrice)
  const Graphics = data.filter(showData => showData.JobCategory == "GraphicsDesign")
  const Digital = data.filter(showData => showData.JobCategory == "DigitalMarketing")
  return (
    <>
      <div className="w-full min-h-screen bg-[url('https://i.ibb.co/X2X6vC4/alison-courseware-intro-4164.jpg')] bg-cover bg-center ">
        <div className="w-full min-h-screen h-full  flex flex-col  justify-center items-center  md:backdrop-brightness-50">
        <h1 className='text-4xl text-white font-semibold mb-10 text-center mt-14'>Most Demanding <span className='text-[#bef264]'>Categories</span> </h1>
        
          {/* <img className='w-[450px] mr-20' src="https://i.ibb.co/X2X6vC4/alison-courseware-intro-4164.jpg" alt="" /> */}
          <Tabs >
            <TabList className="text-xl font-semibold mt-3 ">
              <Tab>Web Development</Tab>
              <Tab>Graphics Design</Tab>
              <Tab>Digital Marketing</Tab>
            </TabList>
            <TabPanel>
              <div className='grid grid-cols-2 mt-4'>
                {webDevelop.map((job, index) => (
                  

                  <div key={index} className="p-4  lg:w-[75%]">
                    

                  <div className="h-full bg-[#d9f99d] bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <IoCodeSlashOutline className='text-black text-3xl flex mb-5 mx-auto'></IoCodeSlashOutline>

                    <h2 className="tracking-widest text-lg title-font font-semibold text-[#244034] mb-1">{job.Title}</h2>
                    <p className="leading-relaxed text-base text-[#244034] mb-3">{job.Description}</p>
                  
                      <h1 className="title-font text-lg font-semibold text-[#244034] mb-3">Deadline: {job.Deadline}</h1>
                      <h1 className="title-font text-lg font-semibold text-[#244034] mb-3">Offer Price: {job.MinimumPrice}</h1>
                    
                    <Link to={`/job/${job?._id}`} className="btn-one bg-[#244034] text-[#f7fee7] p-2 rounded-full font-bold inline-flex items-center">Bid Now
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className='grid grid-cols-2 mt-4'>
                {Graphics.map((job, index) => (
                  <div key={index} className="p-4 lg:w-[75%]">


                    <div className="h-full bg-[#d9f99d] bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                      <GoPencil className='text-black text-3xl flex mb-5 mx-auto'></GoPencil>
                      <h2 className="tracking-widest text-lg title-font font-semibold text-[#244034] mb-1">{job.Title}</h2>
                      <p className="leading-relaxed text-[#244034] text-base mb-3">{job.Description}</p>
                     
                        <h1 className="title-font text-lg font-semibold text-[#244034] mb-3">Deadline: {job.Deadline}</h1>
                        <h1 className="title-font text-lg font-semibold text-[#244034] mb-3">Offer Price: {job.MinimumPrice}</h1>

                      <Link to={`/job/${job?._id}`} className=" btn-one bg-[#244034] text-[#f7fee7] p-2 rounded-full font-bold inline-flex items-center">Bid Now
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className='grid grid-cols-2 mt-4'>
                {Digital.map((job, index) => (
                  <div key={index} className="p-4 lg:w-[75%]">

                    <div className="h-full bg-[#d9f99d] bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                      <IoBagHandle className='text-black text-3xl flex mb-5 mx-auto'></IoBagHandle>
                      <h2 className="tracking-widest text-lg title-font font-semibold text-[#244034] mb-1">{job.Title}</h2>
                      <p className="leading-relaxed text-[#244034] text-base mb-3">{job.Description}</p>
                      
                        <h1 className="title-font  text-lg font-semibold text-[#244034] mb-3">Deadline: {job.Deadline}</h1>
                        <h1 className="title-font text-lg font-semibold text-[#244034] mb-3">Offer Price: {job.MinimumPrice}</h1>

                      
                      <Link to={`/job/${job?._id}`} className="btn-one bg-[#244034] text-[#f7fee7] p-2 rounded-full font-bold inline-flex items-center">Bid Now
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>


          </Tabs>
        </div>
        
      </div>

    </>
  );
};

export default Tablayout;