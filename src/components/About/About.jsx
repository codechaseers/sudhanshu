import React from "react";
import { useEffect, useState } from "react";
import chinku from "../../assets/chinku.png";


export default function About() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <div className="dark:bg-neutral-800  w-full h-full  flex items-center justify-center flex-col">
      <p
        className=" drop-shadow-lg text-5xl font-sans font-bold text-neutral-600  dark:text-neutral-200 lg:mt-[2em] overflow-visible" 
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        
      <span className="underline1"><span className="underline2">About <span className="text-purple-400">Me 💫</span></span> </span> 
      </p>
        <div className="flex flex-col lg:flex-row flex-wrap items-center dark:bg-neutral-800">
          <div
            className="bg-orange-00 flex flex-col w-[90%] lg:w-[50%] lg:h-screen flex-wrap items-center justify-center"
            // style={{ transform: `translateY(-${offsetY * 0.2}px)`,transition:"smooth"}}
          >
            <img
              data-aos="zoom-in"
              data-aos-duration="2000"
              src={chinku}
              
              alt="Developer Vector"
              className="lg:w-[70%] lg:h-[70%]"
            />
          </div>
          <div
            className=" lg:w-[50%] p-2 flex flex-wrap items-center justify-center flex-wrap bg-lime-00"
            data-aos="fade-left"
            data-aos-duration="3000"
            // style={{ transform: `translateY(-${offsetY * 0.2}px)` }}
          >
            <p className="text-[1.2em] mx-2 mt-3 text-pretty    text-start   border-solid text-purple-300    font-sans font-bold">
              Hi , Everyone, I am{" "}
              <span className="text-purple-500">Sudhanshu Shekhar Ojha</span>{" "}
              from <span className="text-purple-500">Bhadrak, Odisha</span> I
              have completed my graduation in{" "}
              <span className="text-purple-500">
                Bachelor of Computer Application{" "}
              </span>{" "}
              from Maharaja Purna Chandra (Autonomous) College ,Baripada
            </p>
            <p className=" bg-slate-00  text-[1.3em]  mx-2 mt-3 w-full  text-pretty    text-start  border-solid text-neutral-400    font-sans font-bold">
              Some of my interests apart form Coding :
            </p>
            <p className=" bg-slate-00  text-[1.2em]  mx-2 mt-3 w-full  text-pretty    text-start  border-solid text-neutral-500    font-sans font-bold">
              → Esports
            </p>
            <p className=" bg-slate-00  text-[1.2em]  mx-2 mt-3 w-full  text-pretty    text-start  border-solid text-neutral-500    font-sans font-bold">
              → Traveling
            </p>
            <p className=" bg-slate-00  text-[1.2em]  mx-2 mt-3 w-full  text-pretty    text-start  border-solid text-neutral-500    font-sans font-bold">
              → Bike Riding
            </p>
          </div>
        </div>
        
       
        
      </div>
    </>
  );
}
