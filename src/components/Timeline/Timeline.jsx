import React from "react";
import "./Timeline.css";
import timilineLogo from "../../assets/timilineLogo.png";
const Timeline = () => {
  return (
    <>
      <div className="dark:bg-neutral-800 mainDiv h-full pt-[6em]">
        <p
          className="text-center drop-shadow-lg text-5xl font-sans font-bold text-neutral-600 mb-[1em]  dark:text-neutral-200"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <span className="underline1"><span className="underline2">    Time <span className="text-purple-400">Line ⭐</span></span></span>
      
        </p>
        <div className="timeline dark:bg-neutral-800">
          <div className="boxContainer leftContainer  ">
            <img
              src={timilineLogo}
              alt=""
              data-aos="zoom-in"
              data-aos-duration="1000"
            />
            <div className="textbox bg-violet-300 " data-aos="zoom-in  ">
              <p
                className="text-2xl font-sans font-bold text-neutral-600"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                {" "}
               DigiDivine Online Services PVT LTD (remote)
              </p>
              <small data-aos="fade-right" data-aos-duration="1000">
                2023-2024
              </small>
              <p data-aos="fade-right" data-aos-duration="1000">
              I interned at DigiDivine Infotech LTD for one year as a Node.js and React developer, where I developed and maintained dynamic web applications. This experience honed my full-stack development skills and provided hands-on experience in a professional environment.
              </p>
            </div>
          </div>
          <div className="boxContainer rightContainer">
            <img
              src={timilineLogo}
              alt=""
              data-aos="zoom-in"
              data-aos-duration="1000"
            />
            <div
              className="textbox  bg-violet-300 "
              data-aos="zoom-in"
              data-aos-duration="000"
            >
              <p
                className="text-2xl font-sans font-bold text-neutral-600"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
              Master of Computer Applications (MCA)
              
              </p>
              <small data-aos="fade-left" data-aos-duration="1000">
                2022-2024
              </small>
              <p data-aos="fade-left" data-aos-duration="1000">
              I have completed a Master of Computer Applications (MCA), which has deepened my expertise in advanced computing, software engineering, and application development. 
              </p>
            </div>
          </div>
          <div className="boxContainer leftContainer ">
            <img
              src={timilineLogo}
              alt=""
              data-aos="zoom-in"
              data-aos-duration="1000"
            />
            <div className="textbox bg-violet-300 " data-aos="zoom-in">
              <p
                className="text-2xl font-sans font-bold text-neutral-600"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                {" "}
                 Bachelor in Computer Application (BCA)
              </p>
              <small data-aos="fade-right" data-aos-duration="1000">
                2019-2022
              </small>
              <p data-aos="fade-right" data-aos-duration="1000">
              (Maharaja Purna Chandra Autonomous College, Baripada)"
              I hold a Bachelor of Computer Applications (BCA), where I gained a solid foundation in computer science, software development, and IT concepts. 
              </p>
            </div>
          </div>
          <div className="boxContainer rightContainer">
            <img
              src={timilineLogo}
              alt=""
              data-aos="zoom-in"
              data-aos-duration="1000"
            />
            <div className="textbox bg-violet-300 " data-aos="zoom-in">
              <p
                className="text-2xl font-sans font-bold text-neutral-600"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                {" "}
                Completed Higher Secondary - Science
              </p>
              <small data-aos="fade-left" data-aos-duration="1000">
                2017-2019
              </small>
              <p data-aos="fade-left" data-aos-duration="1000">
                 Avantika Residential Junior College Charmapa, Bhadrak, Odisha,
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
