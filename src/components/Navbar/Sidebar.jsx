import React from 'react'
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import { Link } from 'react-router-dom';
import LoginPage from '../LoginPage';
function Sidebar({isOpen, setIsOpen}) {
  return (
    <div
    className={`fixed inset-y-0 right-0 transform ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    } transition duration-300 ease-in-out bg-[#1A1A1A] w-64 z-50 p-6`}
  >
    <button
      onClick={() => setIsOpen(false)}
      className="text-white hover:text-gray-500 focus:outline-none absolute top-4 right-4"
    >
      ✕
    </button>
    <div className="flex flex-col gap-6 mt-10">
      <Link to="/" element={<Home />}>
        <h1 className="py-4 px-2 font-semibold hover:text-[#2669D4] transition duration-300">
          Home
        </h1>
      </Link>

      <Link to='/about' element={<About />}>
        <h1 className="py-4 px-2 font-semibold hover:text-[#2669D4] transition duration-300">
          About
        </h1>
      </Link>

      <Link to='/contact' element={<Contact />}>
        <h1 className="py-4 px-2 font-semibold hover:text-[#2669D4] transition duration-300">
          Contact
        </h1>
      </Link>

      <Link to="/login/passenger" element={<LoginPage />}>
        <button className="py-3 bg-[#2669D4] px-6 rounded-full font-semibold transition duration-300">
          Login
        </button>
      </Link>
    </div>
  </div>
  )
}

export default Sidebar