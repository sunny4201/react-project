import React, { useState } from 'react';

const Home = () => {
  const [user, ] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'User',
    address: '1234 Elm Street, Springfield',
    phone: '(123) 456-7890',
    avatar: 'https://www.w3schools.com/w3images/avatar2.png', // Example avatar URL
  });

  const handleLogout = () => {
    // Handle logout functionality here, such as clearing session or token
    console.log('User logged out');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar with user icon */}
      <div className="flex justify-between items-center p-6 bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-md">
        <div className="text-xl font-semibold">User Dashboard</div>
        <div className="flex items-center space-x-4">
          <span className="text-lg">{user.name}</span>
          <div className="relative">
            <img
              src={user.avatar}
              alt="User Avatar"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          </div>
          <button
            onClick={handleLogout}
            className="text-lg text-white bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-md flex items-center"
          >
            Logout
          </button>
        </div>
      </div>

      {/* User Profile Section */}
      <div className="max-w-4xl mx-auto p-6 bg-gray-200 mt-8 rounded-xl shadow-lg">
        <div className="flex items-center space-x-6">
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-24 h-24 rounded-full border-4 border-gray-600"
          />
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">{user.name}</h1>
            <p className="text-lg text-gray-700">{user.role}</p>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900">Profile Details</h2>
          <div className="mt-4 space-y-4">
            <div className="flex justify-between">
              <span className="text-lg font-medium text-gray-700">Email:</span>
              <span className="text-lg text-gray-600">{user.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg font-medium text-gray-700">Phone:</span>
              <span className="text-lg text-gray-600">{user.phone}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg font-medium text-gray-700">Address:</span>
              <span className="text-lg text-gray-600">{user.address}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
