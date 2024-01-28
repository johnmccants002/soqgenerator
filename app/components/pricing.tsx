import React from "react";

const Pricing: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800">
          Pricing Plans
        </h2>
        <div className="flex flex-wrap mt-6 justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="bg-gray-100 rounded-lg p-6 text-center shadow-lg m-4">
              <h3 className="text-2xl font-semibold text-gray-800">Basic</h3>
              <p className="mt-4 text-gray-600">Ideal for individuals</p>
              <p className="text-4xl font-bold mt-4">$3</p>
              <p className="mt-4 text-gray-600">per credit</p>
              <button className="mt-6 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
                Choose Basic
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="bg-gray-100 rounded-lg p-6 text-center shadow-lg m-4">
              <h3 className="text-2xl font-semibold text-gray-800">Premium</h3>
              <p className="mt-4 text-gray-600">Best for professionals</p>
              <p className="text-4xl font-bold mt-4">$7</p>
              <p className="mt-4 text-gray-600">for 5 credits</p>
              <button className="mt-6 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
                Choose Premium
              </button>
            </div>
          </div>
          {/* Add more plans as needed */}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
