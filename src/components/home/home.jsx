import banner from "../../assets/banner.png";
import homeicone from "../../assets/home-icon-for-status.png";
import React from "react";
import play from "../../assets/play.png";

const Home = () => {
  return (
    <div className="hero  w-10/12 mx-auto p-4 ">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10 pb-">
        <img src={banner} className="w-max rounded-lg shadow-2xl " />
        <div>
          <div className="badge bg-[#E1E7FF] rounded-full border-none mb-4 p-4 flex gap-2 items-center">
            <span>
              <img src={homeicone} alt="Success" />
            </span>
            <div className="  text-md  font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text  ">
              New: AI-Powered Tools Available
            </div>
          </div>

          <h1 className="text-2xl lg:text-6xl font-extrabold leading-tight">
            Supercharge Your <br /> Digital Workflow
          </h1>
          <p className="py-6 text-md lg:text-lg text-gray-700">
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br />
            software—all in one place. Start creating faster today. <br />
            Explore Products
          </p>
          <div class="flex gap-4">
            <button class="btn bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-6 py-3 font-semibold hover:from-purple-600 hover:to-blue-600 transition-all">
              Explore Products
            </button>
            <button class="btn  bg-gradient-to-r from-blue-600 to-purple-600  border-[#4F39F6] text-transparent bg-clip-text  rounded-full px-6 py-3 font-semibold flex items-center gap-2 hover:bg-blue-50 transition-all">
              <img src={play} alt="Watch Demo" />
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
