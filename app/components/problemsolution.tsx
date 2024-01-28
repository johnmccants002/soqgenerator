import React from "react";

const ProblemSolution: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="lg:flex items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-800">
              Facing Challenges in Crafting the Perfect Statement?
            </h2>
            <p className="mt-4 text-gray-600">
              Writing a statement of qualifications can be time-consuming and
              challenging. It requires balancing professionalism with
              personalization, all while ensuring key skills and experiences are
              highlighted effectively.
            </p>
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="text-3xl font-semibold text-gray-800">
              Our Solution
            </h2>
            <p className="mt-4 text-gray-600">
              Our tool simplifies this process. By leveraging advanced AI, it
              helps you create tailored, impactful statements that resonate with
              employers, saving you time and enhancing your job application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolution;
