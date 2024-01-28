import React from "react";

const LoadingState: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="text-white text-lg font-semibold">Processing...</div>
    </div>
  );
};

export default LoadingState;
