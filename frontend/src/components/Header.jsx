import React from 'react';
import logo from '../assets/LOGO.png';
import { Link } from 'react-router-dom';
import { FaBagShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Header = () => (
  <header className="bg-black text-white font-bold p-2 md:p-4 m-4 rounded-lg">
    <div className="container flex flex-col md:flex-row justify-between items-center mx-auto">
      <div className="flex justify-between items-center w-full md:w-auto">
        <Link to="/">
          <img src={logo} className="w-[40px] md:w-[50px] rounded-lg" alt="Logo" />
        </Link>
        <div className="md:hidden">
          <button id="menu-toggle" className="text-white focus:outline-none">
            {/* Add an icon here for the mobile menu toggle if needed */}
          </button>
        </div>
      </div>
      <div className=" md:flex md:items-center  flex gap-4">
        <Link to="#" className="cursor-pointer hover:scale-110">SHOES</Link>
        <Link to="#" className="cursor-pointer hover:scale-110">T-SHIRT</Link>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:gap-4 w-full md:w-auto mt-2 md:mt-0">
        <div className="flex items-center w-full md:w-auto">
          <input type="text" placeholder="Search Product" className="rounded-lg px-4 py-2 w-full md:w-auto" />
          <button className="bg-white md:bg-black rounded-lg p-2 md:p-2 hover:scale-110 ml-2 md:ml-0">
            <FaSearch />
          </button>
        </div>
        <div className="flex gap-4 md:gap-8 text-[24px] mt-2 md:mt-0 justify-center md:justify-start">
          <Link to="#" className="cursor-pointer hover:scale-110"><FaBagShopping /></Link>
          <Link to="/login" className="cursor-pointer hover:scale-110"><CgProfile /></Link>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
