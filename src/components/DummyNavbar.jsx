// import ThemeToggle from "./ThemeToggle";
// import Logo from "./Logo";
import { useState } from "react";
import { Menu, X ,Sun,Moon } from "lucide-react";

const DummyNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-[1] mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between border-b border-gray-100 bg-background p-[2em] font-sans font-bold uppercase text-text-primary backdrop-blur-[100px]  dark:border-gray-800 dark:bg-d-background dark:text-d-text-primary">
      {/* <Logo /> */}
      <a href="/" className="navlink p-2">
        Sudhanshu
      </a>

      <div className="flex flex-[1] items-center justify-end overflow-hidden">
        <div className="hidden justify-end md:flex">
          <a href="/" className="navlink p-2">
            Homee
          </a>
          <a href="/blog" className="navlink p-2">
            Blog
          </a>
        </div>
        <div className="w-[75px] dark:co">< Sun /></div>
        <div className="flex w-[75px] justify-end md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </div>

      {isOpen && (
        <div className="mt-4  w-full  flex flex-col items-center">
          <a href="/" className="navlink p-2">
            Home
          </a>
          <a href="/blog" className="navlink p-2">
            Blog
          </a>
          {/* Add more links as needed */}
        </div>
      )}
    </nav>
  );
};

export default DummyNav;
