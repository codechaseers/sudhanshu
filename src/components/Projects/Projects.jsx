import React from "react";
import "./Project.css";
import weather from "../../assets/weather.png";
import egmi from "../../assets/egmi.png";
import deshboard from "../../assets/deshboard.png";
import rockgame from "../../assets/rockgame.png";

import { FaHtml5, FaCss3, FaNodeJs, FaReact } from "react-icons/fa";
export default function Projects() {
  return (
    <div
      className="project_Maindiv h-full  dark:bg-neutral-800 flex justify-center items-center flex-col gap-7 lg:pb-[2em] pb-[4em]"
      id=""
    >
      <p
        className="text-center drop-shadow-lg text-5xl font-sans font-bold text-neutral-600 mt-[2em] mb-5 dark:text-neutral-200"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        My
        <span className="text-purple-400"> Projects 🤖</span>
      </p>
{/* /egmi */}
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
            src={egmi}
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
            Built a full-stack e-commerce platform with user authentication,
            product listings, shopping cart functionality, and secure payment
            integration. Utilized Redux for state management and MongoDB for
            data storage.
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
            src={deshboard}
            alt=""
          />
        </div>
        <div className="product_Detail flex flex-col p-[2em]  items-center flex-wrap gap-2  rounded-xl  ">
          <p
            className="text-3xl font-sans font-bold text-neutral-600  "
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            Morden Dashboard
          </p>
          <p
            className="text-center "
            data-aos="fade-left"
            data-aos-duration="1000"
          >
           A sleek and responsive dashboard application built using React, Node.js, Redux, Tailwind CSS, and Material Tailwind components. The dashboard features intuitive navigation, dynamic data visualization, and a clean, modern interface, ensuring an enhanced user experience.


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
            src={rockgame}
            alt=""
          />
        </div>
        <div className="product_Detail flex flex-col p-[2em]  items-center flex-wrap gap-2  rounded-xl  ">
          <p
            className="text-3xl font-sans font-bold text-neutral-600  "
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            Rock-Paper-Scissors game
          </p>
          <p
            className="text-center "
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            Developed a real-time multiplayer Rock-Paper-Scissors game using
            Socket.io for live interactions. Designed an engaging and responsive
            user interface with React and managed server-side logic with
            Node.js.
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
            src={weather}
            alt=""
          />
        </div>
        <div className="product_Detail flex flex-col p-[2em]  items-center flex-wrap gap-2  rounded-xl  ">
          <p
            className="text-3xl font-sans font-bold text-neutral-600  "
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            Weather Forecat
          </p>
          <p
            className="text-center "
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            A user-friendly weather forecast application developed with React and CSS, utilizing a weather API for real-time updates. The app provides detailed forecasts and interactive visualizations, featuring an intuitive interface that allows users to easily access weather information for any location.
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
