import React from "react";
import "./Project.css";

import { FaHtml5, FaCss3, FaNodeJs, FaReact } from "react-icons/fa";
export default function Projects() {
  return (
    <div className="project_Maindiv h-full  dark:bg-neutral-800 flex justify-center items-center flex-col gap-7 lg:pb-[2em] pb-[4em]" id="">
      <p
        className="text-center drop-shadow-lg text-5xl font-sans font-bold text-neutral-600 mt-[2em] mb-5 dark:text-neutral-200"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        My
        <span className="text-purple-400"> Projects 🤖</span>
      </p>

      <div
        className="project_Containt lg:w-[80%] lg:h-[80%] h-[70%] w-[90%] flex lg:flex-row flex-col justify-center  items-center dark:bg-violet-300  rounded-xl lg:p-2 pt-3"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div
          className="project_img_Containt p-2  lg:w-[103em] lg:h-[21em] h-[20em] w-[20em] md:w-[42em]  rounded-[1em]"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            className="w-full h-full object-cover   rounded-xl"
            src="https://khageswar-ojha.netlify.app/static/media/unplash.90100c41.png"
            alt=""
          />
        </div>
        <div className="product_Detail flex flex-col p-[2em]  items-center flex-wrap gap-2  rounded-xl  ">
          <p
            className="text-3xl font-sans font-bold text-neutral-600  "
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            Egmi
          </p>
          <p
            className="text-center "
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            perspiciatis quis eaque soluta nulla? Ratione porro iure et tempore,
            inventore eos voluptas sequi eum rerum totam? Ratione animi nobis
            aliquid?
          </p>
          <div
            className="flex gap-1 mt-2"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <FaHtml5 size={"3em"} />
            <FaCss3 size={"3em"} />
            <FaNodeJs size={"3em"} />
            <FaReact size={"3em"} />
          </div>
          <div className="">
            <button data-aos="fade-left" data-aos-duration="1000">
              <button className="viewSideBtn bg-transparent  text-blue-700 font-semibold  py-2 px-4 border border-blue-500   rounded m-2">
                View Side
              </button>
            </button>
            <button data-aos="fade-left" data-aos-duration="1000">
              <button className="viewSideBtn bg-transparent  text-blue-700 font-semibold  py-2 px-4 border border-blue-500   rounded m-2">
                View Code
              </button>
            </button>
          </div>
        </div>
      </div>
      
      <div
        className="project_Containt lg:w-[80%] lg:h-[80%] h-[70%] w-[90%] flex lg:flex-row flex-col justify-center  items-center dark:bg-violet-300  rounded-xl lg:p-2 pt-3"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div
          className="project_img_Containt p-2  lg:w-[103em] lg:h-[21em] h-[20em] w-[20em] md:w-[42em]  rounded-[1em]"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            className="w-full h-full object-cover   rounded-xl"
            src="https://khageswar-ojha.netlify.app/static/media/unplash.90100c41.png"
            alt=""
          />
        </div>
        <div className="product_Detail flex flex-col p-[2em]  items-center flex-wrap gap-2  rounded-xl  ">
          <p
            className="text-3xl font-sans font-bold text-neutral-600  "
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            Egmi
          </p>
          <p
            className="text-center "
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            perspiciatis quis eaque soluta nulla? Ratione porro iure et tempore,
            inventore eos voluptas sequi eum rerum totam? Ratione animi nobis
            aliquid?
          </p>
          <div
            className="flex gap-1 mt-2"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <FaHtml5 size={"3em"} />
            <FaCss3 size={"3em"} />
            <FaNodeJs size={"3em"} />
            <FaReact size={"3em"} />
          </div>
          <div>
            <button data-aos="fade-left" data-aos-duration="1000">
              <button className="viewSideBtn bg-transparent  text-blue-700 font-semibold  py-2 px-4 border border-blue-500   rounded m-2">
                View Side
              </button>
            </button>

            <button data-aos="fade-left" data-aos-duration="1000">
              <button className="viewSideBtn bg-transparent  text-blue-700 font-semibold  py-2 px-4 border border-blue-500   rounded m-2">
                View Code
              </button>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
