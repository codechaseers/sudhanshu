import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaHtml5, FaCss3, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { Key } from "lucide-react";

export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };
  const skillData = [
    {
      icon: <FaHtml5 size={"3em"} />,
      name: "HTML",
    },
    {
      icon: <FaCss3 size={"3em"} />,
      name: "CSS",
    },
    {
      icon: <IoLogoJavascript size={"3em"} />,
      name: "Js",
    },
    {
      icon: <FaNodeJs size={"3em"} />,
      name: "Node Js",
    },
    {
      icon: <FaReact size={"3em"} />,
      name: "React Js",
    },
  ];

  return (
    <div className="dark:bg-neutral-800 h-full w-full flex items-center flex-col">
      <p
        className="text-center drop-shadow-lg text-5xl font-sans font-bold text-neutral-600  mt-[2em] mb-5 dark:text-neutral-200"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        Skill <span className="text-purple-400">Sets 🔥</span>
      </p>
      <div
        className=" mt-[3em] lg:w-[70%] w-[90%]"
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <Carousel
          className="dark:bg-neutral-800 mb-5"
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        >
          {skillData.map((skill, index) => (
            <div
              key={index}
              className="flex justify-center items-center flex-col h-[5em] w-[7em] m-3 glowing-border dark:glowing-border-light"
            >
              <div className="text-purple-600">{skill.icon}</div>
              <p className="text-purple-400 font-bold font-sans text-2xl">
                {skill.name}
              </p>
            </div>
          ))}
        </Carousel>
      </div>{" "}
      <div className=" mt-[3em] lg:w-[70%] w-[90%]"
       data-aos="fade-right"
       data-aos-duration="5000"
       >
        <Carousel
          className="dark:bg-neutral-800 "
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        >
          {skillData.map((skill, index) => (
            <div
              key={index}
              className="flex justify-center items-center flex-col h-[5em] w-[7em] m-3 glowing-border dark:glowing-border-light"
            >
              <div className="text-purple-600">{skill.icon}</div>
              <p className="text-purple-400 font-bold font-sans text-2xl">
                {skill.name}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
