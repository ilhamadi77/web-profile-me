import React, { useState } from "react";

//import react icons
import { FaTimes, FaBars } from "react-icons/fa";

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
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
