import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//  icons importing
import { FaHtml5, FaCss3, FaNodeJs, FaReact,FaBootstrap ,FaGithubAlt,FaGithub} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress,SiPostman } from "react-icons/si";
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
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2.6,
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
      name: "Java Script",
    },
    {
      icon: <FaBootstrap size={"3em"} />,
      name: "Bootstarp",
    },
    {
      icon: <RiTailwindCssFill size={"3em"} />,
      name: "Tailwind",
    }, 
    {
      icon: <FaReact size={"3em"} />,
      name: "React Js",
    },
  ];
  const skillData2 = [
    {
      icon: <FaNodeJs size={"3em"} />,
      name: "Node js",
    },
    {
      icon: <BiLogoMongodb size={"3em"} />,
      name: "MongoDB",
    },
    {
      icon: <SiExpress size={"3em"} />,
      name: "Express",
    },
    {
      icon: <FaGithubAlt size={"3em"} />,
      name: "Git",
    },
    {
      icon: <FaGithub size={"3em"} />,
      name: "Git hub",
    }, 
    {
      icon: <SiPostman size={"3em"} />,
      name: "Postman",
    },
  ];

  return (
    <div className="dark:bg-neutral-800 h-full w-full flex items-center flex-col justify-center">
      <p
        className="text-center drop-shadow-lg text-5xl font-sans font-bold text-neutral-600  mt-[2em] mb-5 dark:text-neutral-200"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        Skill <span className="text-purple-400">Sets 🔥</span>
      </p>
      
      <div
        className=" mt-[3em] lg:w-[70%] w-[90%]   "
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <Carousel
          className="dark:bg-neutral-800 mb-5  "
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        >
          {skillData.map((skill, index) => (
            <div
              key={index}
              className="flex justify-center items-center flex-col h-[5em] w-[7em] m-3 glowing-border dark:glowing-border-light flex-wrap"

            >
              <div className="text-purple-600">{skill.icon}</div>
              <p className="text-purple-400 font-bold font-sans text-1.8xl text-wrap text-pretty">
                {skill.name}
              </p>
            </div>
          ))}
        </Carousel>
      </div> 

      <div
        className=" mt-[3em] lg:w-[70%] w-[90%]   "
        data-aos="fade-right"
        data-aos-duration="2000"
      
      >
        <Carousel
          className="dark:bg-neutral-800 mb-5"
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          rtl={true}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        >
          {skillData2.map((skill, index) => (
            <div
              key={index}
              className="flex justify-center items-center flex-col h-[5em] w-[7em] m-3 glowing-border dark:glowing-border-light flex-wrap"

            >
              <div className="text-purple-600">{skill.icon}</div>
              <p className="text-purple-400 font-bold font-sans text-1.8xl text-wrap text-pretty">
                {skill.name}
              </p>
            </div>
          ))}
        </Carousel>
      </div> 
     
    </div>
  );
}
