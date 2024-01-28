import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div>
          {/* Logo or Brand Name */}
          <a href="/" className="text-xl font-bold text-gray-800">
            SOQGenerator
          </a>
        </div>
        <div>
          <a
            href="/dashboard"
            className="text-gray-800 hover:text-gray-600 mr-4"
          >
            Sign In
          </a>
          <a
            href="/signup"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
