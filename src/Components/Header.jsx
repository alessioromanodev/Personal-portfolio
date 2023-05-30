import { Icon } from "@iconify/react";
import Switcher from "./Switcher";

function Header() {
  return (
    <nav className="fixed z-50 w-full bg-altGray bg-opacity-5 dark:bg-dark dark:text-gray-100 backdrop-filter backdrop-blur-lg dark:bg-opacity-5">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-lg text-gray-900 font-semibold">
            &#128171; Alessio Romano
          </span>
          <div className="flex space-x-4 items-center text-gray-900">
            <a href="#" className="font-medium">
              Devlog
            </a>
            <a href="https://github.com/AlessioRoman" className="font-medium">
              Source
            </a>
            <a href="#contactme" className="font-medium">
              Contact me
            </a>
            <Switcher className="inline" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
