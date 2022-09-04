import React from "react";

import { HiArrowNarrowRight } from "react-icons/hi";

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}

      <div className="max-w-[1000px] h-full mx-auto px-8 flex flex-col justify-center">
        <p className=" text-pink-600">Hi My Name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#cdc6f6]">
          Ilham A. Irawan
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Fullstack Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          i'm a full-stack developer specializing in building web with react.js
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quae
          distinctio sequi sit veritatis incidunt, eum, necessitatibus tempore
          eos perspiciatis cumque quis voluptatem odit dignissimos ex? Quisquam
          at officiis velit.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-150">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
