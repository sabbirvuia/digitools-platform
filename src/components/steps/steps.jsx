import React from 'react';
import userPng from '../../assets/user.png';
import packagePng from '../../assets/package.png';
import rocketPng from  '../../assets/rocket.png';

const Steps = () => {
  return (
    <div className="px-6 md:px-16 py-16 bg-base-100 mt-44">
      
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
         Get Started in 3 Steps
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center p-6  rounded-lg shadow-sm hover:shadow-xl transition duration-300">
                <div className="flex justify-end text-end w-full mb-4">
                    <button className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full p-2 text-xs font-bold">01</button>
                    </div>
                <div className=' rounded-full w-20 h-20 items-center flex justify-center bg-violet-200'>
                <img src={userPng} alt="Sign Up" className="w-12 h-12 mb-4" />
                </div>
                <h3 className="text-xl font-semibold m-4">Create Account</h3> 
                <p className="text-gray-500">Sign up for free in seconds. No credit card required to get started.</p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center p-6  rounded-lg shadow-sm hover:shadow-xl transition duration-300">
                <div className="flex justify-end text-end w-full mb-4">
                    <button className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full p-2 text-xs font-bold">02</button>
                </div>
                  <div className=' rounded-full w-20 h-20 items-center flex justify-center bg-violet-200'>
                <img src={packagePng} alt="Choose Plan" className="w-12 h-12 mb-4" />
                </div>
                <h3 className="text-xl font-semibold m-4">Choose Products</h3>
                <p className="text-gray-500">Browse our catalog and select the tools that fit your needs.</p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center p-6  rounded-lg shadow-sm hover:shadow-xl transition duration-300">
                <div className="flex justify-end text-end w-full mb-4">
                    <button className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full p-2 text-xs font-bold">03</button>
                </div>
                <div className=' rounded-full w-20 h-20 items-center flex justify-center bg-violet-200'>
                    <img src={rocketPng} alt="Get Started" className="w-12 h-12 mb-4 flex items-center" />
                </div>
                <h3 className="text-xl font-semibold m-4">Start Creating</h3>
                <p className="text-gray-500">Download and start using your premium tools immediately.</p>
            </div>
        </div>

    </div>
  );
};

export default Steps;