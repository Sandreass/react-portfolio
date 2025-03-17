import React from 'react';

const Navigation = () => {
  return (
    <nav>
      <ul className="flex md:flex-row flex-col md:space-x-12 md:space-y-0 space-y-4">
        <li><a href="#home" className="hover:text-gray-300 transition-colors">Home</a></li>
        <li><a href="#contact" className="hover:text-gray-300 transition-colors">Contact Me</a></li>
        <li><a href="#about" className="hover:text-gray-300 transition-colors">About Me</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;