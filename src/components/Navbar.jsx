import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-5">
        <div>
          <Link to="/">
            <h2 className="text-xl font-bold text-white hover:text-gray-400">
              Blogging
            </h2>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/blog"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            Blog
          </Link>
          <Link
            to="/addblog"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            Add Blog
          </Link>
        </div>
        <div onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`${isOpen ? "" : "hidden"}`}>
        <ul className="flex flex-col items-center space-y-4 p-4">
          <Link
            to="/"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/blog"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            Blog
          </Link>
          <Link
            to="/addblog"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            Add Blog
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
