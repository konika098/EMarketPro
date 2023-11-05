import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { IoBagHandle, IoCodeSlashOutline } from "react-icons/io5";
import { GoPencil } from "react-icons/go";

import { useEffect, useState } from 'react';
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
      <div className=''>
        <h1 className='text-4xl text-[#244034] font-semibold mb-10 text-center mt-14'>Most Demanding <span className='text-[#4d7c0f]'>Categories</span> </h1>
        <div className='flex justify-center '>
          <img className='w-[450px] mr-20' src="https://i.ibb.co/X2X6vC4/alison-courseware-intro-4164.jpg" alt="" />
          <Tabs >
            <TabList className="text-xl font-semibold mt-3 ">
              <Tab>Web Development</Tab>
              <Tab>Graphics Design</Tab>
              <Tab>Digital Marketing</Tab>
            </TabList>
            <TabPanel>
              <div className='grid grid-cols-2 mt-4'>
                {webDevelop.map((job, index) => (

                  <div key={index} className="p-4  lg:w-[80%]">

                    <div className="h-full bg-[#7ab128] bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                      <IoCodeSlashOutline></IoCodeSlashOutline>
                      <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">{job.Title}</h2>
                      <p className="leading-relaxed text-white mb-3">{job.Description}</p>
                      <div className='flex gap-4'>
                        <h1 className="title-font  font-medium text-white mb-3">Deadline: {job.Deadline}</h1>
                        <h1 className="title-font  font-medium text-white mb-3">Offer Price: {job.MinimumPrice}</h1>
                      </div>
                      <a className="text-white inline-flex items-center">Bid Now
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>

                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className='grid grid-cols-2 mt-4'>
                {Graphics.map((job, index) => (
                  <div key={index} className="p-4 lg:w-[80%]">


                    <div className="h-full bg-[#7ab128] bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                      <GoPencil></GoPencil>
                      <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">{job.Title}</h2>
                      <p className="leading-relaxed mb-3">{job.Description}</p>
                      <div className='flex gap-4'>
                        <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">Deadline: {job.Deadline}</h1>
                      </div>
                      <a className="text-[#bef264] inline-flex items-center">Bid Now
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className='grid grid-cols-2 mt-4'>
                {Digital.map((job, index) => (
                  <div key={index} className="p-4 lg:w-[80%]">

                    <div className="h-full bg-[#7ab128] bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                      <IoBagHandle></IoBagHandle>
                      <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">{job.Title}</h2>
                      <p className="leading-relaxed mb-3">{job.Description}</p>
                      <div className='flex gap-4'>
                        <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">Deadline: {job.Deadline}</h1>
                      </div>
                      <a className="text-[#bef264] inline-flex items-center">Bid Now
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </a>
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