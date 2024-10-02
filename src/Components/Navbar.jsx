import React, { useState } from 'react'
import logo from '../Resources/logo.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='shadow-md bg-gray-600 text-white'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between'>
          <div className='flex space-x-7'>
            <div>
              <a href='#' className='flex items-center py-4 gap-2'>
                <img src={logo} alt='Logo' className='rounded-xl w-[8%] mr-2' />
                <span className='tracking-normal text-3xl font-bold'>OnRoute</span>
              </a>
            </div>
          </div>
          <div className='hidden md:flex items-center space-x-1'>
            <a href='#' className='py-4 px-2 font-semibold hover:text-blue-500 transition duration-300'>Home</a>
            <a href='#' className='py-4 px-2 font-semibold hover:text-blue-500 transition duration-300'>About</a>
            <a href='#' className='py-4 px-2 font-semibold hover:text-blue-500 transition duration-300'>Contact</a>
          </div>
          <div className='md:hidden flex items-center'>
            <button onClick={() => setIsOpen(!isOpen)} className='outline-none mobile-menu-button'>
              <svg className='w-6 h-6 hover:text-blue-500'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path d='M4 6h16M4 12h16M4 18h16'></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <a href='#' className='block py-2 px-4 text-sm hover:bg-gray-200'>Home</a>
        <a href='#' className='block py-2 px-4 text-sm hover:bg-gray-200'>About</a>
        <a href='#' className='block py-2 px-4 text-sm hover:bg-gray-200'>Contact</a>
      </div>
    </nav>
  )
}

export default Navbar