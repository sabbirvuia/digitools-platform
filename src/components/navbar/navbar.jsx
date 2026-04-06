import React from "react";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center p-4 ">
            <h1 className="text-3xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text">DigiTools</h1>
            <ul 
                className="flex gap-8 items-center">
                <li className="text-[16px] font-medium text-[#101727] hover:text-[#4F39F6] cursor-pointer">Home</li>
                <li className="text-[16px] font-medium text-[#101727] hover:text-[#4F39F6] cursor-pointer">Features</li>
                <li className="text-[16px] font-medium text-[#101727] hover:text-[#4F39F6] cursor-pointer">Pricing</li>
                <li className="text-[16px] font-medium text-[#101727] hover:text-[#4F39F6] cursor-pointer">Testimonials</li>
                <li className="text-[16px] font-medium text-[#101727] hover:text-[#4F39F6] cursor-pointer">FAQ</li>
            </ul>
            <div className="flex gap-8 items-center ">
                
                <a className="text-[16px] font-medium text-[#101727] hover:text-[#4F39F6] cursor-pointer">login</a>
                <button className="btn btn-active bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-3 py-4 rounded-full text-white">Get Started</button>
            </div>
        </div>
    )
}

export default Navbar