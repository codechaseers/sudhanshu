import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar({ darkMode, handleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  console.log(darkMode);
  console.log(handleDarkMode);

  return (
    <nav className="flex items-center flex-wrap lg:flex-nowrap p-[2em] md:flex-no-wrap  md:h-24 justify-between sticky top-0 z-10  w-full   border-gray-100 font-sans font-bold uppercase dark:bg-neutral-700 bg-slate-50 text-neutral-700">
      <div className="name dark:text-neutral-200 ">
        <p className="text-2xl font-bold mx-2">Sudhanshu</p>
      </div>
      {/* <div className="flex bg-red-400     ">
        <button onClick={toggleMenu}>{isOpen ?  <Sun/> : <Moon />}</button>
      </div> */}
      <div className="listContainer items-center   md:flex justify-end md:mr-6  ">
        <ul
          className={`md:flex  flex-row   md:gap-4 md:mr-6 hidden   dark:text-neutral-200`}
        >
          <li className="py-2 md:py-0">
            <Link to={"#home"}>Home</Link>
          </li>
          <li className="py-2 md:py-0 hover-underline ">
            <Link to={"#about"}>About</Link>
          </li>   
          <li className="py-2 md:py-0 hover-underline">
            <Link to={"#timeline"}>Timeline</Link>
          </li>
          <li className="py-2 md:py-0 hover-underline">
            {" "}
            <Link to={"#skills"}>Skills</Link>
          </li>
          <li className="py-2 md:py-0 hover-underline">
            {" "}
            <Link to={"#projects"}>Projects</Link>
          </li>
          <li className="py-2 md:py-0 hover-underline">
            <Link to={"#contacts"}>Contacts</Link>
          </li>
        </ul>
        <div className="dark:text-slate-100 hover-underline " onClick={handleDarkMode}>
          {darkMode && darkMode ? <Sun /> : <Moon />}
        </div>
      </div>
      <div className="flex   justify-end md:hidden">
        <button className="dark:text-slate-100 hover-underline" onClick={toggleMenu}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="listContainer   mt-4  w-full  flex flex-col items-center md:hidden">
          <ul
            className={`flex  flex-col   md:gap-4 md:mr-24  dark:text-neutral-200`}
          >
            <li className="py-2 md:py-0 hover-underline">
              <a href="#project_Maindiv"> <Link to={"#home"}>Home</Link></a>
            </li>
            <li className="py-2 md:py-0 hover-underline"> <Link to={"#about"}>About</Link></li>
            <li className="py-2 md:py-0 hover-underline"><Link to={"#timeline"}>Timeline</Link></li>
            <li className="py-2 md:py-0 hover-underline"> <Link to={"#skills"}>Skills</Link></li>           
            <li className="py-2 md:py-0 hover-underline"> <Link to={"#projects"}>Projects</Link></li>
            <li className="py-2 md:py-0 hover-underline"><Link to={"#contacts"}>Contacts</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
