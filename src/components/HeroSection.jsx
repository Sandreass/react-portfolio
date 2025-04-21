import React from "react";
import ProfileInfo from "./ProfileInfo";
import ProfileImage from "./ProfileImage";

const HeroSection = () => {
  return (
    <main className="container mx-auto px-4 py-16 md:py-48">
      <div className="flex flex-col md:flex-row items-center">
        <ProfileInfo />
        <ProfileImage />
      </div>
    </main>
  );
};

export default HeroSection;
