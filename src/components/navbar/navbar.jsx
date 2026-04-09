import React from "react";
import { LuShoppingCart } from "react-icons/lu";

const Navbar = ({ c }) => {
    return (

      <div className="navbar   w-10/12 mx-auto p-4 flex-col lg:flex-row gap-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-4 shadow"
            >
              <li className="text-[16px] font-medium text-[#101727] hover:text-[#4F39F6] cursor-pointer">
                Home
              </li>
              <li className="text-[16px] font-medium text-[#101727] hover:text-[#4F39F6] cursor-pointer">
                Features
              </li>
              <li className="text-[16px] font-medium text-[#101727] hover:text-[#4F39F6] cursor-pointer">
                Pricing
              </li>
              <li className="text-[16px] font-medium text-[#101727] hover:text-[#4F39F6] cursor-pointer">
                Testimonials
              </li>
              <li className="text-[16px] font-medium text-[#101727] hover:text-[#4F39F6] cursor-pointer">
                FAQ
              </li>
            </ul>
          </div>
          <a className="btn text-3xl font-extrabold bg-linear-to-r from-[#4c34ff] to-[#9412f8] text-transparent bg-clip-text border-none">
            DigiTools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-8 items-center">
            <li className="text-[16px] font-medium text-[#101727] hover:text-[#4F39F6] cursor-pointer">
              Home
            </li>
            <li className="text-[16px] font-medium text-[#101727] hover:text-[#4F39F6] cursor-pointer">
              Features
            </li>
            <li className="text-[16px] font-medium text-[#101727] hover:text-[#4F39F6] cursor-pointer">
              Pricing
            </li>
            <li className="text-[16px] font-medium text-[#101727] hover:text-[#4F39F6] cursor-pointer">
              Testimonials
            </li>
            <li className="text-[16px] font-medium text-[#101727] hover:text-[#4F39F6] cursor-pointer">
              FAQ
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-8 items-center ">
            <h2 className="text-xl relative">
              <LuShoppingCart />
              <span className="absolute -top-3 -right-3 bg-red-500 text-xs rounded-full py-0.5 px-2 text-white font-semibold">
                {c}
              </span>
            </h2>
            <a className="text-[16px] font-medium text-[#101727] hover:text-[#4F39F6] cursor-pointer">
              login
            </a>
            <button className="btn btn-active bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-3 py-4 rounded-full text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    );
}

export default Navbar