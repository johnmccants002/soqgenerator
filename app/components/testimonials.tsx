import React from "react";

const Testimonials: React.FC = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800">
          What Our Users Say
        </h2>
        <div className="flex flex-wrap mt-6 justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="max-w-sm bg-white rounded overflow-hidden shadow-lg p-4 m-4">
              <p className="text-gray-600 italic">
                "This tool transformed the way I approach job applications. The
                statements it generates are clear, professional, and
                personalized."
              </p>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-800">
                  - Jane Doe, Marketing Specialist
                </h4>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="max-w-sm bg-white rounded overflow-hidden shadow-lg p-4 m-4">
              <p className="text-gray-600 italic">
                "As a busy professional, saving time on applications is crucial.
                This tool helps me do just that, with impressive results."
              </p>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-800">
                  - John Smith, Project Manager
                </h4>
              </div>
            </div>
          </div>
          {/* Add more testimonials as needed */}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
