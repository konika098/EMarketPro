import { Link } from "react-router-dom";
import HowItWorks from "../HowItWorks/HowItWorks";
import Rating from "../Rating/Rating";

const About = () => {
    return (
        <>
            <div className="flex justify-evenly mt-16  items-center  mx-auto">
                <h1 className="text-4xl text-[#244034] font-bold">We’ve been <br /> helping customer <br /> globally.</h1>
                <div className="join join-vertical w-[50%]">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" checked="checked" />
                        <div className="collapse-title text-2xl text-[#244034] font-semibold">
                            Who we are?
                        </div>
                        <div className="collapse-content">
                            <p className="text-lg font-semibold ">Our founders Dustin Moskovitz and Justin lorem Rosenstein met while
                                leading Engineering teams at Facebook quesi. Lorem ipsum dolor sit,
                                amet consectetur adipisicing elit.

                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-2xl font-semibold">
                            What’s our goal
                        </div>
                        <div className="collapse-content">
                            <p className="text-lg font-semibold ">Our founders Dustin Moskovitz and Justin lorem Rosenstein met while
                                leading Engineering teams at Facebook quesi. Lorem ipsum dolor sit, amet
                                consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-2xl font-semibold">
                            Our vision
                        </div>
                        <div className="collapse-content ">
                            <p className="text-lg font-semibold ">Our founders Dustin Moskovitz and Justin lorem Rosenstein met while leading Engineering teams at Facebook quesi.
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Rating />
            <HowItWorks />
           

            <div className="mt-10 flex items-center justify-evenly">
              
                <div className="flex justify-center  ">
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex flex-col  max-w-7xl justify-center items-center space-y-3 w-full ">
                            <div className="flex flex-col   md:items-start items-center justify-center  space-y-3 px-8 text-center ">




                            </div>
                            <div className="flex flex-col lg:flex-row space-x-2 space-y-3 md:space-x-6   w-full items-center justify-center ">
                                <div className="lg:w-40 w-64 h-40  overflow-hidden rounded-xl ">
                                    <img src="https://source.unsplash.com/random/300x500/?man
                              
                                                      " alt className />
                                </div>
                                <div className="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center">
                                    <div className="w-32 lg:w-40 h-32  overflow-hidden rounded-xl ">
                                        <img src="https://source.unsplash.com/random/300x500/?man
                              
                                                          " alt className />
                                    </div>
                                    <div className="w-32 lg:w-40 h-48  overflow-hidden rounded-xl ">
                                        <img src="https://source.unsplash.com/random/300x500/?man
                              
                                                          " alt className />
                                    </div>
                                </div>
                                <div className="lg:w-60 w-64 h-96  overflow-hidden rounded-xl ">
                                    <img src="https://source.unsplash.com/random/300x500/?man
                              
                                                      " alt className />
                                </div>
                                <div className="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center ">
                                    <div className="w-32 lg:w-40 h-48  overflow-hidden rounded-xl ">
                                        <img src="https://source.unsplash.com/random/300x500/?man
                              
                                                          " alt className />
                                    </div>
                                    <div className="w-32 lg:w-40 h-32  overflow-hidden rounded-xl ">
                                        <img src="https://source.unsplash.com/random/300x500/?man
                              
                                                          " alt className />
                                    </div>
                                </div>
                                <div className="lg:w-40 w-64 h-40  overflow-hidden rounded-xl ">
                                    <img src="https://source.unsplash.com/random/300x500/?man
                              
                                                      " alt className />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[30%]" >
                    <h1 className="text-3xl md:text-4xl font-bold text-center  text-[#244034]"> Get over 50.000+ talented  experts in E-Market Pro.</h1>
                    <h1 className="text-xl font-semibold text-center text-[#244034] mt-5">A full hybrid workforce management tools are yours to use,<br /> as well as access to our top 1% of talent.</h1>
                    <ul className="mt-7 text-lg text-[#244034] font-semibold ml-20">
                        <li>Seamless searching</li>
                        <li>Get top 3% experts for your project</li>
                        <li>Protected payments system</li>
                    </ul>
                    <Link to="/addjob" > <button className="btn-one mt-9 ml-20 bg-[#bef264] text-black  px-6 py-2 hover:brightness-105 font-semibold">Post a Job
                    </button></Link>
                </div>
            </div>


        </>
    );
};

export default About;