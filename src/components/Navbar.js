// Navbar.js

import React, { useState } from "react";

const Navbar = (props) => {
  const { logo } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-lg font-bold">{logo}</div>

        {/* Hamburger Icon for mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleNavbar}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-700 text-white px-3 py-1 rounded-md focus:outline-none focus:shadow-outline"
          />
          <button className="bg-blue-500 text-white px-3 py-1 rounded-md">
            Search
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:space-x-4 mt-4 lg:mt-0`}
        >
          <a href="/" className="text-white">
            Home
          </a>
          <a href="/about" className="text-white">
            About
          </a>
          <a href="services" className="text-white">
            Services
          </a>
          <a href="/contact" className="text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
