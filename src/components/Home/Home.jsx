import React from "react";
import developerVector from "../../assets/developerVector.png";
import boy3d from "../../assets/boy2.png";
import swboy from "../../assets/swboy.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import aos styles

import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({
      once: false, // Trigger animation only once
    });
  }, []);
  return (
    <div className="flex flex-col lg:flex-row h-full w-full items-center dark:bg-neutral-800 pt-[1em]">
      <div
        className=" lg:w-[50%] p-2   flex flex-wrap md:items-center md:justify-center  "
        data-aos="fade-right"
        data-aos-duration="2000"
        style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
      >
        <span className="text-[4em]  text-neutral-600 dark:text-purple-400 font-sans font-bold mx-2" >
          Hey, i am
        </span>
        <span className="text-[4em]  mx-2 lg:mx-2    text-indigo-400 font-sans font-bold">
          Sudhanshu Shekhar
        </span>
        <span className="text-[4em] mx-2  lg:mx-2 md:text-center w-full    text-indigo-400  font-sans font-bold">
          Ojha
        </span>

        <p className="text-[2em] mx-4 mt-2  text-center   text-neutral-400  uppercase font-sans font-bold">
          {/* Web dev */}
          <Typewriter
            words={["A web Developer", "A Mern Developer", ""]}
            loop={true}
            cursor={true}
            typeSpeed={90}
          />
        </p>
        <p className="text-[1em] mx-4 mt-3 text-center     text-neutral-400    font-sans font-bold">
          A Full Stack Developer who loves solving problems and building
          projects. I am equipped with a variety of technologies and tools to
          help me build the best possible product.
        </p>
      </div>

      <div
        className="bg-orange-00 flex flex-col w-[90%] lg:w-[50%] lg:h-full  flex-wrap "
        style={{
          transform: `translateY(-${offsetY * 0.3}px)`,
          transition: "smooth",
        }}
      >
        <img
          data-aos="zoom-in"
          data-aos-duration="2000"
          src={boy3d}
          alt="Developer Vector"
          className="lg:w-[100%] lg:h-[100%]"
        />
      </div>
    </div>
  );
}
