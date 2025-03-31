import React from "react";
import { Linkedin, Github, Send, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Andreas</h3>
            <p className="text-gray-400 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              repudiandae animi impedit necessitatibus laborum aliquid tempora?
              Quae sed laborum labore non ea, ducimus nihil numquam vitae quo,
              ipsa ipsam aliquid.
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-gray-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-400 transition-colors"
              >
                <Send size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© {currentYear} Andreas. All Rights Reserved.</p>
          <p className="mt-2 text-sm">Created with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
