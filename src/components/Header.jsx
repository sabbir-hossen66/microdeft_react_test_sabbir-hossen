import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="p-4 shadow-md bg-gray-50">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <img
            src="https://i.ibb.co.com/zxtvcZ5/logo.webp"
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-black text-xl md:text-2xl font-bold">
            Course
          </h1>
        </div>

        <div className="w-full md:w-auto">
          <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/course-list"
                className="text-gray-700 hover:text-blue-600 transition duration-300"
              >
                CourseList
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          <Link to="/login">
            <button className="relative px-5 py-1 border-2 border-black hover:text-white hover:border-none bg-white border-solid-6 text-black font-semibold rounded  overflow-hidden group">
              <span className="absolute inset-0 w-0 bg-blue-500 transition-all duration-500 ease-out group-hover:w-full"></span>
              <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                Login
              </span>
            </button>
          </Link>

          <Link to="/register">
            <button className="relative px-5 py-1 bg-white border-2 border-black hover:text-white hover:border-none text-black font-semibold rounded shadow-lg overflow-hidden group">
              <span className="absolute inset-0 w-0 bg-blue-500 transition-all duration-500 ease-out group-hover:w-full"></span>
              <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                Register
              </span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;