import React from 'react';
import SocialIcons from './SocialIcons';

const ProfileInfo = () => {
  return (
    <div className="md:w-1/2 mb-12 md:mb-0">
      <div className="space-y-4">
        <p className="text-xl">Hi, I am</p>
        <h1 className="text-3xl md:text-3xl text-gray-400 font-bold">Andreas St</h1>
        <h2 className="text-2xl md:text-3xl text-orange-500">WEB-DEVELOPER</h2>
        <SocialIcons />
      </div>
    </div>
  );
};

export default ProfileInfo;