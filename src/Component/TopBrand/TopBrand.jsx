import { Link } from "react-router-dom";

const TopBrand = () => {
  return (
    <>
      <div className="flex justify-evenly mt-20 mb-10">


        <div>
          <h1 className="text-[#244034]">TOP BRAND</h1>
          <h1 className="text-4xl font-bold text-[#244034]">Collaboration with Top Brands.</h1>
          <h1 className="text-[#244034] text-2xl mt-4">We collaborate with a number of top <br /> tier companies on imagining the future of work, have a look.</h1>
          <Link to="/about" className="btn-one bg-[#bef264] text-black  mt-8 p-2 rounded-full font-bold inline-flex items-center">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="flex ">
          <img className="w-48 h-36 mt-12" src="https://i.ibb.co/1XLgyGx/1200x630wa-removebg-preview.png" alt="" />
          <img className="w-52 h-36 " src="https://i.ibb.co/85W0ntg/download-removebg-preview.png" alt="" />
          <img className="w-48 h-36 mt-12" src="https://i.ibb.co/ZLg0m2f/messenger-logo-1200x630-removebg-preview.png" alt="" />
        </div>
      </div>


    </>
  );
};

export default TopBrand;