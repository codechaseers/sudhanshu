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
          Time <span className="text-purple-400">Line ⭐</span>
        </p>
        <div className="timeline dark:bg-neutral-800">
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
                Amazon
              </p>
              <small data-aos="fade-right" data-aos-duration="1000">
                2018-2019
              </small>
              <p data-aos="fade-right" data-aos-duration="1000">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                harum sapiente repellendus consequuntur in, similique qui nulla
                quibusdam necessitatibus molestias, sed ea? Iure labore magnam
                dignissimos corrupti animi dicta libero!
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
                {" "}
                Tcs
              </p>
              <small data-aos="fade-left" data-aos-duration="1000">
                2018-2019
              </small>
              <p data-aos="fade-left" data-aos-duration="1000">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                harum sapiente repellendus consequuntur in, similique qui nulla
                quibusdam necessitatibus molestias, sed ea? Iure labore magnam
                dignissimos corrupti animi dicta libero!
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
                Google
              </p>
              <small data-aos="fade-right" data-aos-duration="1000">
                2018-2019
              </small>
              <p data-aos="fade-right" data-aos-duration="1000">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                harum sapiente repellendus consequuntur in, similique qui nulla
                quibusdam necessitatibus molestias, sed ea? Iure labore magnam
                dignissimos corrupti animi dicta libero!
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
                Samsung
              </p>
              <small data-aos="fade-left" data-aos-duration="1000">
                2018-2019
              </small>
              <p data-aos="fade-left" data-aos-duration="1000">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                harum sapiente repellendus consequuntur in, similique qui nulla
                quibusdam necessitatibus molestias, sed ea? Iure labore magnam
                dignissimos corrupti animi dicta libero!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
