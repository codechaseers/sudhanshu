import { useState, useRef, useEffect } from "react";
import Navebar from "./components/Navebar/Navebar";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Timeline from "./components/Timeline/Timeline";
import Projects from "./components/Projects/Projects";
import { useLocation } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Globe from "./components/Tset/Glob";
import VantaBirdsBackground from "./components/VantaBirdsBackground";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    // console.log("kk")
    
  };

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const timelineRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className={`${darkMode ? "dark" : ""} dark:bg-neutral-900 overflow-x-hidden `} >
      
      <Navebar darkMode={darkMode} handleDarkMode={handleDarkMode} />
      <VantaBirdsBackground darkMode={darkMode}/>
      <section id="home" ref={homeRef}><Home /></section>
      <section id="about" ref={aboutRef}><About id="about" /></section>
      <section id="timeline" ref={timelineRef}><Timeline /></section>
      <section id="skills" ref={skillsRef}><Skills /></section>
      <section id="projects" ref={projectsRef}><Projects /></section>
      <section id="contacts" ref={projectsRef}><Contact /></section>
      {/* <section id="contacts"  ><Globe/></section> */}
      
    </div>
  );
}

export default App;
