import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const Tablayout = () => {
    return (
       <>
     <div className=''>
     <h1 className='text-4xl text-[#244034] font-semibold mb-10 text-center mt-14'>Most Demanding <span className='text-[#4d7c0f]'>Categories</span> </h1>
    <div className='flex justify-center '>
      <img className='w-[450px] mr-20' src="https://i.ibb.co/X2X6vC4/alison-courseware-intro-4164.jpg" alt="" />
    <Tabs >
    <TabList className="text-xl font-semibold mt-3 ">
      <Tab>Web Development</Tab>
      <Tab>Digital Marketing</Tab>
      <Tab>Graphics Design</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
    </div>
     </div>
       
       </>
    );
};

export default Tablayout;