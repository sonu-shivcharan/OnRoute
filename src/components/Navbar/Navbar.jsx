import React, { useState } from "react";
import logo from "./../../assets/logo.jpg"
import { Link } from "react-router-dom";

import Sidebar from "./Sidebar";
const Navbar = () => {
  const [scrollTop, setScrollTop] = useState(0);
  window.addEventListener("scroll", ()=>{
    setScrollTop(window.scrollY);
  })
  console.log(scrollTop);
  const [isOpen, setIsOpen] = useState(false);
  return (
  <nav id="nav" className="fixed  w-full text-white z-30 px-5">
  <div className={`flex justify-around items-center max-w-6xl mx-auto px-4 mt-2 rounded-xl ${scrollTop>100? "bg-black/30 backdrop-blur": "bg-transparent"} duration-200`}>
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
      <div className="flex items-center bg-black/30 backdrop-blur rounded-md my-3 duration-200 p-3">
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