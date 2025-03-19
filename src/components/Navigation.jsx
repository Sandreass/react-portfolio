import React from "react";

const Navigation = () => {
  return (
    <nav>
      <ul className="flex md:flex-row flex-col md:space-x-12 md:space-y-0 space-y-4">
        <li>
          <a
            href="#home"
            className="text-orange-500 hover:text-gray-300 transition-colors"
          >
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-gray-300 transition-colors">
            About Me
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className="hover:text-gray-300 transition-colors"
          >
            Portfolio
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
