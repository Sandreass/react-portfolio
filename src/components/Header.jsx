import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import Logo from "./Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center">
        <div className="flex-shrink-0">
          <Link to="#home">
            {" "}
            <Logo />
          </Link>
        </div>

        <div className="hidden md sm lg:flex justify-center flex-1">
          <Navigation />
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        <div>
          <Link
            to="/services"
            className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-gray-200 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <Navigation />
        </div>
      )}
    </header>
  );
};

export default Header;
