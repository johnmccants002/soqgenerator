import React from "react";

const CallToActionReinforced: React.FC = () => {
  return (
    <div className="bg-blue-600">
      <div className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-semibold text-white">
          Ready to Elevate Your Applications?
        </h2>
        <p className="text-white mt-4">
          Get started with our AI-powered statement generator today!
        </p>
        <button className="mt-6 bg-white text-blue-600 font-bold py-2 px-6 rounded hover:bg-gray-100">
          Try It Now
        </button>
      </div>
    </div>
  );
};

export default CallToActionReinforced;
