import React, { useState } from 'react';

const Signin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error) {
      setError(''); // Clear error if user starts typing
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.username) {
      setError('Username is required');
      return;
    }
    if (!formData.password) {
      setError('Password is required');
      return;
    }

    // Proceed with form submission if validation passes
    console.log('Form Data Submitted:', formData);
    // You can proceed with API call or other logic here.
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
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
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

          {/* Display error message */}
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

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
      </div>
    </div>
  );
};

export default Signin;
