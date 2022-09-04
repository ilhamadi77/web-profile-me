import React, { useState } from "react";

//import react icons
import { FaTimes, FaBars, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

//import asset
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClik = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo navbar" style={{ width: "50px" }} />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex ">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* icon hamburger */}
      <div
        className="md:hidden z-10"
        onClick={handleClik}
        style={{ cursor: "pointer" }}
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Phone */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-3xl">Home</li>
        <li className="py-6 text-3xl">About</li>
        <li className="py-6 text-3xl">Skills</li>
        <li className="py-6 text-3xl">Work</li>
        <li className="py-6 text-3xl">Contact</li>
      </ul>

      {/* Icons */}
      <div className="hidden lg:flex flex-col fixed top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center bg-blue-600 ml-[-100px] hover:ml-[-10px] duration-300 ">
            <a
              href="/home "
              className="text-gray-300 w-full flex justify-between items-center "
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center bg-[#333333] ml-[-100px] hover:ml-[-10px] duration-300 ">
            <a
              href="/home "
              className="text-gray-300 w-full flex justify-between items-center "
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center bg-[#6cf2b0] ml-[-100px] hover:ml-[-10px] duration-300 ">
            <a
              href="/home "
              className="text-gray-300 w-full flex justify-between items-center "
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center bg-[#565f69] ml-[-100px] hover:ml-[-10px] duration-300 ">
            <a
              href="/home "
              className="text-gray-300 w-full flex justify-between items-center "
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
