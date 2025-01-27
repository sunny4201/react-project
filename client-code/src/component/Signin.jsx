import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify'
import {Link, useNavigate} from 'react-router-dom'
import { handleError, handleSuccess } from './Utils';

const Signin = () => {
  const [signinInfo, setSigninInfo] = useState({
    username: '',
    password: '',
  });

  // const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSigninInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
    // if (error) {
    //   setError(''); // Clear error if user starts typing
    // }
  };
  console.log(signinInfo);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!signinInfo.username) {
      // setError('Username is required');
      handleError("Username is required.")
      return;
    }
    if (!signinInfo.password) {
      // setError('Password is required');
      handleError('Password is required.');
      return;
    }
    try {
      const url = "https://fictional-eureka-6wppvg4xwqxfxq74-4000.app.github.dev/api/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signinInfo)
      })
      const result = await response.json();
      const { message, success, token, username, email, error } = result
      if (success) {
        handleSuccess(message);
        localStorage.setItem('token', token);
        localStorage.setItem('loggedInUsername', username);
        localStorage.setItem('loggedInEmail', email);

        setTimeout(() => {
          navigate('/home');
        }, 1000);
      }
      else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      }
      else if (!success) {
        handleError(message);
      }
      console.log(result)

    } catch (error) {
      handleError(error);

    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      <div className="w-full max-w-lg p-8 bg-gradient-to-r from-gray-700 to-gray-800 rounded-3xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">Sign In</h2>
        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="mb-5">
            <label htmlFor="username" className="block text-lg font-medium text-gray-300">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={signinInfo.username}
              onChange={handleChange}
              placeholder="Enter your username"
              className="mt-2 w-full px-4 py-3 border border-gray-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-600 transition-transform duration-300 ease-in-out bg-gray-900 text-white"
            // required
            />
          </div>

          {/* Password Field */}
          <div className="mb-5">
            <label htmlFor="password" className="block text-lg font-medium text-gray-300">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={signinInfo.password}
              onChange={handleChange}
              placeholder="Enter a strong password"
              className="mt-2 w-full px-4 py-3 border border-gray-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-600 transition-transform duration-300 ease-in-out bg-gray-900 text-white"
            // required
            />
          </div>

          {/* Display error message */}
          {/* {error && <p className="text-red-500 text-sm mt-2">{error}</p>} */}

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
              Don't have an account?
              <Link to="/signup" className="text-teal-500 hover:underline">Sign up</Link>
            </span>
          </div>
        </form>
        {/* This below line of code for showing the error and success */}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Signin;
