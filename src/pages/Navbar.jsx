import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-gray-800 flex justify-between items-center px-4 py-2">
        <div className="inline-block text-2xl font-bold text-white hover:shadow-lg transition duration-200">BlogVista</div>
        <div className="flex space-x-4">
          <Link className="text-orange-400 hover:bg-yellow-300 hover:text-black px-3 py-1 rounded" to={'/'}>Home</Link>
        <Link className="text-orange-400 hover:bg-yellow-300 hover:text-black px-3 py-1 rounded" to={'/about'}>About</Link>
        <Link className="text-orange-400 hover:bg-yellow-300 hover:text-black px-3 py-1 rounded" to={'/contact'}>Contact</Link>
        <Link className="text-orange-400 hover:bg-yellow-300 hover:text-black px-3 py-1 rounded" to={'/articles'}>Articles</Link>
        <i className="fa-solid fa-magnifying-glass text-white cursor-pointer"></i>

        </div>
    </div>
  )
}

export default Navbar;