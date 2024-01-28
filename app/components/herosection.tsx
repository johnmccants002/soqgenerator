import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800 md:text-6xl">
          Elevate Your Job Applications
        </h1>
        <h2 className="text-xl text-gray-700 mt-6">
          Create compelling statements of qualifications effortlessly
        </h2>
        <button className="mt-8 bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150">
          Try It Now
        </button>
        {/* Placeholder for Visuals */}
        <div className="mt-8">
          {/* Insert image or video here */}
          <img
            src="ladder.png"
            alt="Product Visual"
            className="max-w-xs md:max-w-sm mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
