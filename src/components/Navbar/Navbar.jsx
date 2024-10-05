import React, { useState } from "react";
import logo from "./../../assets/logo.jpg"
import { Link } from "react-router-dom";

import Sidebar from "./Sidebar";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <nav id="nav" className="fixed mx-auto bg-transparent w-full text-white">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex justify-between">
      {/* Logo Section */}
      <div className="flex space-x-7">
        <div>
        <Link to="/"  className="flex items-center py-4 gap-2">
            <img src={logo} alt="Logo" className="rounded-xl w-[6%] mr-2" />
            <span className="tracking-normal text-3xl font-bold">
              OnRoute
            </span>
          </Link>
        </div>
      </div>

      {/* Hamburger Menu for Sidebar */}
      <div className="flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="outline-none mobile-menu-button"
        >
          <svg
            className="w-6 h-6 hover:text-blue-500"
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

  {/* Sidebar */}

<Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
  {/* Overlay for Sidebar (optional, for better UX) */}
  {isOpen && (
    <div
      className="fixed inset-0 bg-black opacity-50 z-40 "
      onClick={() => setIsOpen(false)}
    ></div>
  )}
</nav>
);
};

export default Navbar;