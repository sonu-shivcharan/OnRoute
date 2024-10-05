import React from 'react'
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems';
function Sidebar({isOpen, setIsOpen}) {
  return (
    <div
    className={`fixed inset-y-0 right-0 transform ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    } transition duration-300 ease-in-out bg-black/30 backdrop-blur w-64 z-50 p-6`}
  >
    <button
      onClick={() => setIsOpen(false)}
      className="text-white hover:text-gray-500 focus:outline-none absolute top-4 right-4"
    >
      ✕
    </button>
    <MenuItems/>
  </div>
  )
}

export default Sidebar