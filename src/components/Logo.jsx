import React from "react";

const Logo = ({ size = "default" }) => {
  const sizeClasses = {
    small: "text-xl font-bold",
    default: "text-2xl font-bold",
    large: "text-3xl font-bold",
  };
  const sizeClass = sizeClasses[size] || sizeClasses.default;

  return (
    <div className={`${sizeClass} flex items-center`}>
      <div className="bg-white text-black px-2 py-1 rounded-md">
        <span>AS</span>
      </div>
    </div>
  );
};

export default Logo;
