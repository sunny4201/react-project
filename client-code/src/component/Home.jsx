import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import { handleSuccess } from './Utils';


const Home = () => {
  const [loggedInUsername, setLoggedInUsername] = useState(' ');
  const [product, setProduct] = useState([]);


  useEffect(() => {
    setLoggedInUsername(localStorage.getItem('loggedInUsername'));
  }, [])
  const [user,] = useState({
    email: 'john.doe@example.com',
    role: 'User',
    address: '1234 Elm Street, Springfield',
    phone: '(123) 456-7890',
    avatar: 'https://www.w3schools.com/w3images/avatar2.png', // Example avatar URL
  });
  const navigate = useNavigate();

  const handleLogout = () => {
    // Handle logout functionality here, such as clearing session or token
    handleSuccess("User Logout Successfully");
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUsername');
    localStorage.removeItem('loggedInEmail');
    setTimeout(() => {
      navigate('/signin');
    }, 2.5 * 1000);
    // console.log('User logged out');
  };

  const fetchProduct = async () => {
    const url = 'https://fictional-eureka-6wppvg4xwqxfxq74-4000.app.github.dev/products'
    const headers = {
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    }
    const response = await fetch(url, headers);
    const result = await response.json();
    // setProduct(result);
    setProduct(result);
    // console.log(result);
  };
  useEffect(() => {
    fetchProduct();
  }, [])


  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar with user icon */}
      <div className="flex justify-between items-center p-6 bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-md">
        <div className="text-xl font-semibold">User Dashboard</div>
        <div className="flex items-center space-x-4">
          <span className="text-lg">{loggedInUsername}</span>
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
      <ToastContainer />
      {/* User Profile Section */}
      <div className="max-w-4xl mx-auto p-6 bg-gray-200 mt-8 rounded-xl shadow-lg">

        <div className="flex items-center space-x-6">
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-24 h-24 rounded-full border-4 border-gray-600"
          />
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">{loggedInUsername}</h1>
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
      <div className="max-w-4xl mx-auto p-6 bg-gray-200 mt-8 rounded-xl shadow-lg">
        {
          <table className="min-w-full border-collapse border border-gray-300" >
            <thead>
              <tr>
                <th className="border-b-2 border-gray-500 px-4 py-2 text-left" >Product Name</th>
                <th className="border-b-2 border-gray-500 px-4 py-2 text-left "> Price</th>
              </tr>
            </thead>
            <tbody>
              {product.map((data, index) => (
                <tr key={index}
                  className={`${index % 2 === 0 ? 'bg-gray-400' : 'bg-gray-200'
                    } hover:bg-gray-200`}>
                  <td className="border-b border-gray-300 px-4 py-2">{data.name}</td>
                  <td className="border-b border-gray-300 px-4 py-2">{data.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      </div>
    </div>
  );
};

export default Home;
