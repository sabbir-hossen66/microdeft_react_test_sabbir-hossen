import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header className=" p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo and Site Name */}
          <div className="flex items-center space-x-3">
            <img
              src="https://via.placeholder.com/50"
              alt="Logo"
              className="w-10 h-10 rounded-full"
            />
            <h1 className="text-black text-xl md:text-2xl font-bold">
              Front Project
            </h1>
          </div>

          {/* Buttons */}
          <div className="flex items-center space-x-4">

            <Link to="/login">
              <button className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:scale-105 hover:bg-blue-100 transition duration-300">
                Login
              </button>
            </Link>

            <Link to='/register'>
              <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:scale-105 hover:bg-blue-700 transition duration-300">
                Register
              </button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;