import React from 'react';

const ProfileImage = () => {
  return (
    <div className="md:w-1/2 flex justify-center">
      <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden">
        <img 
          src="/foto+logo.jpg" 
          alt="Andreas - Web Developer" 
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default ProfileImage;