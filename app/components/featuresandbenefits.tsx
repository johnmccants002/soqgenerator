import React from "react";

const FeaturesAndBenefits: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800">
          Features & Benefits
        </h2>
        <div className="flex flex-wrap mt-6 justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
              <h3 className="font-semibold text-xl text-gray-800">
                AI-Powered Analysis
              </h3>
              <p className="text-gray-600 mt-2">
                Our tool uses advanced AI algorithms to analyze your inputs and
                generate precise, tailored statements.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
              <h3 className="font-semibold text-xl text-gray-800">
                User-Friendly Interface
              </h3>
              <p className="text-gray-600 mt-2">
                The intuitive design makes it easy for anyone to create
                professional statements without prior experience.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
              <h3 className="font-semibold text-xl text-gray-800">
                Time-Saving Solution
              </h3>
              <p className="text-gray-600 mt-2">
                Quickly generate statements, allowing you to focus on other
                important aspects of your job application.
              </p>
            </div>
          </div>
          {/* Add more features as needed */}
        </div>
      </div>
    </div>
  );
};

export default FeaturesAndBenefits;
