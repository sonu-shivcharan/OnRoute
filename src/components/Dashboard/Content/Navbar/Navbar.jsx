import React, { useState } from "react";
import logo from "../../../assets/logo.jpg";
const Navbar = ({ userDetails }) => {
  const { displayName: name, photoURL, email="" } = userDetails;
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-screen shadow-md bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-2">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a href="#" className="flex items-center">
              <img src={logo} alt="Logo" className="rounded-xl w-[8%]" />
              <span className="tracking-normal text-3xl font-bold">
                OnRoute
              </span>
            </a>
          </div>

          {/* Profile, Notifications, and Settings */}
          <div className="flex items-center space-x-4">
            {/* Notification bell icon */}
            <button className="relative text-gray-600 hover:text-blue-500">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.437L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              {/* Notification badge */}
              <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
            </button>

            {/* Profile dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center focus:outline-none"
              >
                {" "}
                <img
                  src={photoURL}
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <span className="hidden md:block ml-2 font-semibold">
                  {name}
                </span>
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {/* Dropdown menu */}
              <div
                className={`absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 ${
                  isDropdownOpen ? "" : "hidden"
                }`}
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Logout
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="outline-none mobile-menu-button"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <input
          type="text"
          placeholder="Search..."
          className="block w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Profile
        </a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Settings
        </a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Logout
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
