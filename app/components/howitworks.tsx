import React from "react";

// Replace these with your actual icons or images
const StepIcon1 = "stepone.png";
const StepIcon2 = "steptwo.png";
const StepIcon3 = "stepthree.png";

const HowItWorks: React.FC = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">How It Works</h2>
        <div className="flex flex-col md:flex-row md:justify-center md:space-x-8 lg:space-x-12 mt-6">
          <div className="mt-6 md:mt-0">
            <img src={StepIcon1} alt="Step 1" className="mx-auto h-12 w-12" />
            <h3 className="mt-2 text-lg font-semibold text-gray-700">
              Step 1: Input Your Data
            </h3>
            <p className="mt-1 text-gray-600">
              Paste your resume, job description, and qualifications.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <img src={StepIcon2} alt="Step 2" className="mx-auto h-12 w-12" />
            <h3 className="mt-2 text-lg font-semibold text-gray-700">
              Step 2: AI Analysis
            </h3>
            <p className="mt-1 text-gray-600">
              Our AI analyzes and generates a tailored statement.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <img src={StepIcon3} alt="Step 3" className="mx-auto h-12 w-12" />
            <h3 className="mt-2 text-lg font-semibold text-gray-700">
              Step 3: Review & Use
            </h3>
            <p className="mt-1 text-gray-600">
              Review the statement, make edits if needed, and use it in your
              applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
