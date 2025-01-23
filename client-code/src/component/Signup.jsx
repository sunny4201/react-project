import React, { useState } from 'react';
import {ToastContainer} from 'react-toastify'
import { handleError, handleSuccess } from './Utils';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: '',
  });

  // const [signupInfo, setSignupInfo] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   role: ""
  // })
  
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form data
    if (name === 'confirmPassword') {
      setConfirmPassword(value); // Handle confirm password separately
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    if (error) {
      setError(''); // Clear error if user starts typing
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate password and confirm password match
    if (formData.password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    const {username, email, password, role} = formData;
    if(!username ||  ! email || !password || !role) {
      return handleError('All field are required.');
    }
    try {
      const url = "https://fictional-eureka-6wppvg4xwqxfxq74-4000.app.github.dev/api/auth/register";
      const response = await fetch(url, {
        method : "POST",
        headers:{
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(formData)
      })
      const result = await response.JSON();
      console.log(result)
      
    } catch (error) {
      
    }


    // Proceed with form submission if validation passes
    console.log('Form Data Submitted:', formData);
    // You can proceed with API call or other logic here.
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      <div className="w-full max-w-lg p-8 bg-gradient-to-r from-gray-700 to-gray-800 rounded-3xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">Create Your Account</h2>
        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="mb-5">
            <label htmlFor="username" className="block text-lg font-medium text-gray-300">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter a valid username"
              className="mt-2 w-full px-4 py-3 border border-gray-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-600 transition-transform duration-300 ease-in-out bg-gray-900 text-white"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-5">
            <label htmlFor="email" className="block text-lg font-medium text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter a valid email"
              className="mt-2 w-full px-4 py-3 border border-gray-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-600 transition-transform duration-300 ease-in-out bg-gray-900 text-white"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-5">
            <label htmlFor="password" className="block text-lg font-medium text-gray-300">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter a strong password"
              className="mt-2 w-full px-4 py-3 border border-gray-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-600 transition-transform duration-300 ease-in-out bg-gray-900 text-white"
              required
            />
          </div>

          {/* Confirm Password Field */}
          <div className="mb-5">
            <label htmlFor="confirmPassword" className="block text-lg font-medium text-gray-300">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter your password"
              className="mt-2 w-full px-4 py-3 border border-gray-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-600 transition-transform duration-300 ease-in-out bg-gray-900 text-white"
              required
            />
          </div>

          {/* Display error message */}
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          {/* Role Selection */}
          <div className="mb-5">
            <label htmlFor="role" className="block text-lg font-medium text-gray-300">Role</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-3 border border-gray-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-600 transition-transform duration-300 ease-in-out bg-gray-900 text-white"
              required
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="Manager">Manager</option>
              <option value="user">User</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-gray-700 to-gray-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-gray-600 hover:shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Sign Up
          </button>

          {/* Sign In Link */}
          <div className="text-center mt-4">
            <span className="text-sm text-gray-400">
              Already have an account?{' '}
              {/* <a href="#" className="text-teal-500 hover:underline">Sign In</a> */}
            </span>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Signup;
