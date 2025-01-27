import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left side: Navigation Links */}
        <div className="flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-gray-300 hover:text-gray-500'
                : 'text-gray-400 hover:text-gray-300'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'text-gray-300 hover:text-gray-500'
                : 'text-gray-400 hover:text-gray-300'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'text-gray-300 hover:text-gray-500'
                : 'text-gray-400 hover:text-gray-300'
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Right side: Authentication Links */}
        <div className="flex space-x-6">
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive
                ? 'text-gray-300 hover:text-gray-500'
                : 'text-gray-400 hover:text-gray-300'
            }
          >
            Sign Up
          </NavLink>
          <NavLink
            to="/signin"
            className={({ isActive }) =>
              isActive
                ? 'text-gray-300 hover:text-gray-500'
                : 'text-gray-400 hover:text-gray-300'
            }
          >
            Sign In
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
