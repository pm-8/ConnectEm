import React from 'react'
import connectEmLogo from '../assets/connectem-logo.svg';
function Navbar() {
  return (
    <div>
      <nav className="bg-blue-600 text-white flex items-center justify-between px-6 py-4">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src= {connectEmLogo}
          
          alt="ConnectEm Logo"
          className="h-15 w-12 mr-1 ml-0 pl-0"
        />
        <span className="text-2xl font-bold">ConnectEm</span>
      </div>

      {/* Buttons Section */}
      <div className="flex space-x-4">
        <button className="border-2 border-white text-white px-4 py-2 rounded hover:bg-white hover:text-blue-600 transition">
          Login
        </button>
        <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-700 hover:text-white transition">
          Signup
        </button>
      </div>
    </nav>
    </div>
  )
}

export default Navbar