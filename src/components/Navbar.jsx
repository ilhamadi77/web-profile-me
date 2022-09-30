import React, { useState } from "react";

//import react icons
import { FaTimes, FaBars, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

//import asset
import Logo from "../assets/logo.png";

//import react-scroll
import { Link } from "react-scroll";

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
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
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
        <li className="py-6 text-3xl">
          <Link onClick={handleClik} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link onClick={handleClik} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link onClick={handleClik} to="skill" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link onClick={handleClik} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link onClick={handleClik} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Icons */}
      <div className="hidden lg:flex flex-col fixed top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center bg-blue-600 ml-[-100px] hover:ml-[-10px] duration-300 ">
            <a
              target={"blank"}
              href="https://www.linkedin.com/in/ilham-irawan"
              className="text-gray-300 w-full flex justify-between items-center "
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center bg-[#333333] ml-[-100px] hover:ml-[-10px] duration-300 ">
            <a
              target={"blank"}
              href="https://github.com/ilhamadi77"
              className="text-gray-300 w-full flex justify-between items-center "
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center bg-blue-700 ml-[-100px] hover:ml-[-10px] duration-300 ">
            <a
              target={"blank"}
              href="/home "
              className="text-gray-300 w-full flex justify-between items-center "
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center bg-[#565f69] ml-[-100px] hover:ml-[-10px] duration-300 ">
            <a
              target={"blank"}
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
