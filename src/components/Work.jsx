import React from "react";
//import assets image
import RealEstate from "../assets/realestate.jpg";
import WorkImage from "../assets/workImg.jpeg";

const dataProject = [
  {
    id: 1,
    name: "React JS Application",
    demo: "Demo",
    code: "Code",
    image: WorkImage,
  },
  {
    id: 2,
    name: "React JS Application",
    demo: "Demo",
    code: "Code",
    image: RealEstate,
  },
  {
    id: 3,
    name: "React JS Application",
    demo: "Demo",
    code: "Code",
    image: WorkImage,
  },
  {
    id: 4,
    name: "React JS Application",
    demo: "Demo",
    code: "Code",
    image: RealEstate,
  },
  {
    id: 5,
    name: "React JS Application",
    demo: "Demo",
    code: "Code",
    image: WorkImage,
  },
  {
    id: 6,
    name: "React JS Application",
    demo: "Demo",
    code: "Code",
    image: RealEstate,
  },
];

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6"> Check out of my recent work</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {dataProject.map((item) => (
              <div
                key={item.id}
                style={{ backgroundImage: `url( ${item.image})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              >
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    {item.name}
                  </span>
                  <div className="pt-8 text-center">
                    <a href="/homep">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        {item.code}
                      </button>
                    </a>
                    <a href="/home">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        {item.demo}
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
