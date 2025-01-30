import React from "react";
import "./Project.css";
import weather from "../../assets/weather.png";
import egmi from "../../assets/egmi.png";
import deshboard from "../../assets/deshboard2.png";
import rockgame from "../../assets/rockgame.png";

import { FaHtml5, FaCss3, FaNodeJs, FaReact } from "react-icons/fa";
export default function Projects() {
  const projects = [
    {
      projectImage: egmi,
      projectName: "Egmi",
      projectDes:
        "Built a full-stack e-commerce platform with user authentication, product listings, shopping cart functionality, and secure payment integration. Utilized Redux for state management and MongoDB for data storage.",
      previewLink: "https://egmi-best-products.vercel.app/",
      githubLink: "https://github.com/codechaseers/EGMI-frontend-backup",
    },
    {
      projectImage: deshboard,
      projectName: "Morden Dashboard",
      projectDes:
        "A sleek and responsive dashboard application built using React, Node.js, Redux, Tailwind CSS, and Material Tailwind components. The dashboard features intuitive navigation, dynamic data visualization, and a clean, modern interface, ensuring an enhanced user experience.",
      previewLink: "https://fitpeo-dashboard-two.vercel.app/",
      githubLink: "https://github.com/codechaseers/fitpeo-dashboard",
    },
    {
      projectImage: rockgame,
      projectName: "Rock-Paper-Scissors game",
      projectDes:
        "Developed a real-time multiplayer Rock-Paper-Scissors game using Socket.io for live interactions. Designed an engaging and responsive user interface with React and managed server-side logic with Node.js.",
      previewLink: "https://rock-paper-game-alpha-azure.vercel.app/",
      githubLink: "https://github.com/codechaseers/rock-paper-game",
    },
    {
      projectImage: weather,
      projectName: "Weather Forecat",
      projectDes:"A user-friendly weather forecast application developed with React and CSS, utilizing a weather API for real-time updates. The app provides detailed forecasts and interactive visualizations, featuring an intuitive interface that allows users to easily access weather information for any location.",
      previewLink: "https://mosamkesahe.netlify.app/",
      githubLink: "https://github.com/codechaseers/react-weather-app",
    },
  ];

  return (
    <div
      className="project_Maindiv h-full dark:bg-black   flex justify-center items-center flex-col gap-7 lg:pb-[2em] pb-[4em]  "
      id=""
    >
      <p
        className="text-center drop-shadow-lg text-5xl font-sans font-bold text-neutral-600 mt-[2em] mb-5 dark:text-neutral-200"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <span className="underline1">
          <span className="underline2">
            My
            <span className="text-purple-400"> Projects 🚀</span>
          </span>
        </span>
      </p>
      {/* /egmi */}
      {projects &&
        projects.map((data, i) => (
          <div
            className="project_Containt lg:w-[80%] lg:h-[80%] h-[70%] w-[90%] flex lg:flex-row flex-col justify-center  items-center dark:bg-violet-300  rounded-xl lg:p-2 pt-3 mb-[3em] "
            data-aos="zoom-in"
            data-aos-duration="1000"
            key={i}
          >
            <div
              className="project_img_Containt p-2  lg:w-[150em] lg:h-[21em] h-[20em] w-[20em] md:w-[42em] 2xl:h-[35em]  rounded-[1em]"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <img
                className="w-full h-full object-fit   rounded-xl"
                src={data.projectImage}
                alt=""
              />
            </div>
            <div className="product_Detail flex flex-col p-[2em]  items-center flex-wrap gap-2  rounded-xl  ">
              <p
                className="text-3xl font-sans font-bold text-neutral-600  "
                data-aos="fade-left"
                data-aos-duration="1000"
              >
               {data.projectName}
              </p>
              <p
                className="text-center "
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                {data.projectDes}
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
                <a href={data.previewLink} target="_blank">
                  <button data-aos="fade-left" data-aos-duration="1000">
                    <button className="viewSideBtn bg-transparent  text-blue-700 font-semibold  py-2 px-4 border border-blue-500   rounded m-2">
                      View Side
                    </button>
                  </button>
                </a>

                <a href={data.githubLink} target="_blank">
                  <button data-aos="fade-left" data-aos-duration="1000">
                    <button className="viewSideBtn bg-transparent  text-blue-700 font-semibold  py-2 px-4 border border-blue-500   rounded m-2">
                      View Code
                    </button>
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}

      {/* /Deshboard*/}
      {/* <div
        className="project_Containt lg:w-[80%] lg:h-[80%] h-[70%] w-[90%] flex lg:flex-row flex-col justify-center  items-center dark:bg-violet-300  rounded-xl lg:p-2 pt-3  mb-[3em]"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div
          className="project_img_Containt p-2  lg:w-[170em] lg:h-[21em] h-[18em] w-[20em] md:w-[42em]  rounded-[1em] 2xl:h-[35em]  "
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            className="w-full h-full object-fit   rounded-xl"
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
            A sleek and responsive dashboard application built using React,
            Node.js, Redux, Tailwind CSS, and Material Tailwind components. The
            dashboard features intuitive navigation, dynamic data visualization,
            and a clean, modern interface, ensuring an enhanced user experience.
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
            <a href="https://fitpeo-dashboard-two.vercel.app/" target="_blank">
              <button data-aos="fade-left" data-aos-duration="1000">
                <button className="viewSideBtn bg-transparent  text-blue-700 font-semibold  py-2 px-4 border border-blue-500   rounded m-2">
                  View Side
                </button>
              </button>
            </a>

            <a
              href="https://github.com/codechaseers/fitpeo-dashboard"
              target="_blank"
            >
              <button data-aos="fade-left" data-aos-duration="1000">
                <button className="viewSideBtn bg-transparent  text-blue-700 font-semibold  py-2 px-4 border border-blue-500   rounded m-2">
                  View Code
                </button>
              </button>
            </a>
          </div>
        </div>
      </div> */}

      {/* <div
        className="project_Containt lg:w-[80%] lg:h-[80%] h-[70%] w-[90%] flex lg:flex-row flex-col justify-center  items-center dark:bg-violet-300  rounded-xl lg:p-2 pt-3 mb-[3em]"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div
          className="project_img_Containt p-2  lg:w-[150em] lg:h-[21em] h-[20em] w-[20em] md:w-[42em]  rounded-[1em]"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            className="w-full h-full object-fit   rounded-xl"
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
            <a
              href="https://rock-paper-game-alpha-azure.vercel.app/"
              target="_blank"
            >
              <button data-aos="fade-left" data-aos-duration="1000">
                <button className="viewSideBtn bg-transparent  text-blue-700 font-semibold  py-2 px-4 border border-blue-500   rounded m-2">
                  View Side
                </button>
              </button>
            </a>
            <a
              href="https://github.com/codechaseers/rock-paper-game"
              target="_blank"
            >
              <button data-aos="fade-left" data-aos-duration="1000">
                <button className="viewSideBtn bg-transparent  text-blue-700 font-semibold  py-2 px-4 border border-blue-500   rounded m-2">
                  View Code
                </button>
              </button>
            </a>
          </div>
        </div>
      </div> */}

      {/* <div
        className="project_Containt lg:w-[80%] lg:h-[80%] h-[70%] w-[90%] flex lg:flex-row flex-col justify-center  items-center dark:bg-violet-300  rounded-xl lg:p-2 pt-3 mb-[3em]"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div
          className="project_img_Containt p-2  lg:w-[150em] lg:h-[21em] h-[20em] w-[20em] md:w-[42em]  rounded-[1em]"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            className="w-full h-full object-fit   rounded-xl"
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
            A user-friendly weather forecast application developed with React
            and CSS, utilizing a weather API for real-time updates. The app
            provides detailed forecasts and interactive visualizations,
            featuring an intuitive interface that allows users to easily access
            weather information for any location.
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
            <a href="https://mosamkesahe.netlify.app/" target="_blank">
              <button data-aos="fade-left" data-aos-duration="1000">
                <button className="viewSideBtn bg-transparent  text-blue-700 font-semibold  py-2 px-4 border border-blue-500   rounded m-2">
                  View Side
                </button>
              </button>
            </a>

            <a href="https://github.com/codechaseers/react-weather-app">
              <button data-aos="fade-left" data-aos-duration="1000">
                <button className="viewSideBtn bg-transparent  text-blue-700 font-semibold  py-2 px-4 border border-blue-500   rounded m-2">
                  View Code
                </button>
              </button>
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
}
