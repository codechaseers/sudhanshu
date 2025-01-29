import React from "react";
import { FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaInstagram, FaGithub } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";

export default function Contact() {
  return (
    <div
      className="project_Maindiv h-full  dark:bg-black flex justify-center items-center flex-col gap-7 lg:pb-[2em] pb-[4em]"
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
            {" "}
            Get in
            <span className="text-purple-400"> Touch 👋</span>
          </span>
        </span>
      </p>
      <div className="flex gap-3 md:gap-[6em] flex-wrap">
        <div className="hover-underline zoomHover dark:text-slate-50">
          {" "}
          <a href="https://www.linkedin.com/in/sudhanshu-shekhar-ojha-b7798a205/">
            <FaLinkedin size={"3em"} />
          </a>
        </div>
        <div className="hover-underline zoomHover dark:text-slate-50">
          <a href="https://www.instagram.com/sudhanshushekharojha220/">
            <FaInstagram size={"3em"} />
          </a>
        </div>
        <div className="hover-underline zoomHover dark:text-slate-50">
          {" "}
          <a href="mailto:sudhanshuojha7234@gmail.com">
            <CgMail size={"3.4em"} />
          </a>
        </div>
        <div className="hover-underline zoomHover dark:text-slate-50">
          {" "}
          <a href="https://github.com/codechaseers/">
            <FaGithub size={"2.8em"} />
          </a>
        </div>
        <div className="hover-underline zoomHover dark:text-slate-50">
          {" "}
          <a href="tel:+917978797234"></a>
          <IoCallOutline size={"2.6em"} />
        </div>
      </div>
    </div>
  );
}
