import React from "react";

//import assets
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import Reacting from "../assets/react.png";
import Node from "../assets/node.png";

import AWS from "../assets/aws.png";
import GitHub from "../assets/github.png";
import Mongo from "../assets/mongo.png";

const dataTools = [
  {
    id: 1,
    name: "HTML",
    atl: "HTML Icon",
    icon: HTML,
  },
  {
    id: 2,
    name: "CSS",
    atl: "CSS Icon",
    icon: CSS,
  },
  {
    id: 3,
    name: "JavaScript",
    atl: "JavaScript Icon",
    icon: JavaScript,
  },
  {
    id: 4,
    name: "React",
    atl: "React Icon",
    icon: Reacting,
  },
  {
    id: 5,
    name: "AWS",
    atl: "AWS Icon",
    icon: AWS,
  },
  {
    id: 6,
    name: "Node",
    atl: "Node Icon",
    icon: Node,
  },
  {
    id: 7,
    name: "Github",
    atl: "Github Icon",
    icon: GitHub,
  },
  {
    id: 8,
    name: "Mongo DB",
    atl: "Mongo Icon",
    icon: Mongo,
  },
];

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen text-gray-300 bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Experience
          </p>
          <p className="py-4"> This are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {dataTools.map((item) => (
            <div
              key={item.id}
              className="shadow-md shadow-[#040c16] hover:scale-90 duration-500"
            >
              <img className="w-20 mx-auto" src={item.icon} alt={item.atl} />
              <p className="py-4">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
