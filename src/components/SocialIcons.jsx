import React from 'react';
import { SiLinkedin, SiGithub, SiTelegram } from 'react-icons/si';

const SocialIcons = () => {
  return (
    <div className="flex space-x-6 mt-8">
      <a href="#" className="hover:text-gray-400 transition-colors">
        <SiLinkedin size={24} />
      </a>
      <a href="#" className="hover:text-gray-400 transition-colors">
        <SiGithub size={24} />
      </a>
      <a href="#" className="hover:text-gray-400 transition-colors">
        <SiTelegram size={24} />
      </a>
    </div>
  );
};

export default SocialIcons;