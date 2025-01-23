import React from 'react';
import { Link } from 'react-router-dom'; // If you are using React Router for navigation

const Navbar = () => {
  return (
    <div className="bg-teal-600 text-white py-4">
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
        {/* Left side (Home) */}
        <div className="text-xl font-semibold">
          <Link to="/" className="hover:text-teal-200">
            Home
          </Link>
        </div>

        {/* Right side (Sign In / Sign Up) */}
        <div className="space-x-6">
          <Link
            to="/signin"
            className="px-4 py-2 text-lg rounded-md hover:bg-teal-500 hover:text-white transition duration-200"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 text-lg rounded-md hover:bg-teal-500 hover:text-white transition duration-200"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
