import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Footer() {
  return (
    <div
      name="footer"
      className="lg:hidden w-full flex flex-col justify-center items-center my-5 bg-transparent fixed bottom-0 h-[100px]"
    >
      <h1 className="text-red-200 font-bold">Contact ME</h1>
      <ul className="flex my-3">
        <li className=" bg-blue-600 hover:mt-[-30px] duration-300   ">
          <a
            target={"blank"}
            href="https://www.linkedin.com/in/ilham-irawan"
            className="text-gray-300 w-full flex justify-between items-center py-2 "
          >
            <FaLinkedin size={30} />
          </a>
        </li>
        <li className=" bg-[#333333] hover:mt-[-30px] duration-300  ">
          <a
            target={"blank"}
            href="https://github.com/ilhamadi77"
            className="text-gray-300 w-full flex justify-between items-center py-2 "
          >
            <FaGithub size={30} />
          </a>
        </li>
        <li className=" bg-blue-700 hover:mt-[-30px] duration-300  ">
          <a
            target={"blank"}
            href="/home "
            className="text-gray-300 w-full flex justify-between items-center py-2"
          >
            <HiOutlineMail size={30} />
          </a>
        </li>
        <li className=" bg-[#565f69] hover:mt-[-30px] duration-300 ">
          <a
            target={"blank"}
            href="/home "
            className="text-gray-300 w-full flex justify-center items-center py-2"
          >
            <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
