import { Icon } from "@iconify/react";
import Switcher from "./Switcher";

function Header() {
  return (
    <nav className="fixed z-50 w-full h-16 bg-altGray bg-opacity-5 dark:bg-dark dark:text-gray-100 backdrop-filter backdrop-blur-lg dark:bg-opacity-5">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex text-center items-center justify-center md:justify-between h-16">
          <span className="hidden md:block text-lg text-gray-900 font-semibold">
            &#128171; Alessio Romano
          </span>
          <div className="flex space-x-4 items-center text-gray-900">
            <a href="#" className="font-medium text-lg">
              Devlog
            </a>
            <a
              href="https://github.com/AlessioRoman"
              className="font-medium text-lg"
            >
              Source
            </a>
            <a href="#contactme" className="font-medium text-lg">
              Contact me
            </a>
            <Switcher />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
