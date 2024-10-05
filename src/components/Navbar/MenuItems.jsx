import React from 'react'
import { Link } from 'react-router-dom'
function MenuItems() {
  return (
    <div className="flex flex-col gap-6 mt-10">
      <Link to="/">
        <h1 className="py-4 px-2 font-semibold hover:text-[#2669D4] transition duration-300">
          Home
        </h1>
      </Link>

      <Link to='/about'>
        <h1 className="py-4 px-2 font-semibold hover:text-[#2669D4] transition duration-300">
          About
        </h1>
      </Link>

      <Link to='/contact'>
        <h1 className="py-4 px-2 font-semibold hover:text-[#2669D4] transition duration-300">
          Contact
        </h1>
      </Link>

      <Link to="/login/passenger">
        <button className="py-3 bg-[#2669D4] px-6 rounded-full font-semibold transition duration-300">
          Login
        </button>
      </Link>
    </div>
  )
}

export default MenuItems