import { RiPhoneFill,RiQuestionAnswerLine} from "react-icons/ri";
import { ImLocation2 } from "react-icons/im";

const ContactMe = () => {
    return (
        <>
       
       <div className="mt-10" >
          <h1 className="text-5xl text-center">Get in touch</h1>
         <div className="flex  justify-center mt-10 gap-10">
         <div className="flex flex-col items-center">
            <ImLocation2 className="bg-[#bef264] text-black w-16 h-16 rounded-full p-4"></ImLocation2>
            <h1 className="text-xl mt-2 font-semibold ">Our Address</h1>
            <p className="mt-2 text-base">GULSHAN-1, A-BLOCK ,<br />DHAKA-1216 ,BANGLADESH</p>
          </div>
          <div className="flex flex-col items-center">
            <RiPhoneFill  className="bg-[#bef264] text-black w-16 h-16 rounded-full p-4" ></RiPhoneFill>
            <h1 className="text-xl mt-2 font-semibold ">Contact Info</h1>
            <p className="mt-2 text-base">+91 7008090111</p>
            <p className="mt-1 text-base">info@email.com</p>
            
          </div>
          <div className="flex flex-col items-center">
            <RiQuestionAnswerLine  className="bg-[#bef264] text-black w-16 h-16 rounded-full p-4"></RiQuestionAnswerLine>
            <h1 className="text-xl mt-2 font-semibold ">Live Support</h1>
            <p className="mt-2 text-base"> live chat service</p>
            <p className="mt-1 text-base">www.e-marketpro.com</p>
          </div>
         </div>
        </div>
<section className="text-[#244034] body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-[#f0fdf4] rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" className="absolute inset-0" frameBorder={0} title="map" marginHeight={0} marginWidth={0} scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29206.49586209974!2d90.4104344!3d23.7897087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a0f70deb73%3A0x30c36498f90fe23!2sGulshan%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1699159737103!5m2!1sen!2sbd" style={{filter: 'grayscale(1) contrast(1.2) opacity(0.4)'}} />
      <div className="bg-[#bef264] relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-bold text-black tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1 text-black">GULSHAN-1, A-BLOCK ,DHAKA-1216 ,BANGLADESH</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-bold text-black tracking-widest text-xs">EMAIL</h2>
          <a className="leading-relaxed text-black">info@email.com</a>
          <h2 className="title-font font-bold text-black tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed text-black">+91 7008090111</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact with Us</h2>
      <p className="leading-relaxed mb-5 text-gray-600">Feel free and share anything you want</p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
      </div>
      <button className="bg-[#bef264] text-black p-2   rounded text-lg">Send Message</button>
    </div>
  </div>
</section>

      


        </>
    );
};

export default ContactMe;