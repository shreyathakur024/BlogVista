import React from 'react'
import { Link } from 'react-router-dom'
import{FaSearch} from 'react-icons/fa'
import { useState } from 'react'

const Navbar = () => {

  const[search,setSearch] = useState(false);
  

  return (
    <div className="bg-gray-800 justify-between items-center px-4 py-2 relative z-10 flex flex-wrap">
        <div className="inline-block text-2xl font-bold text-white hover:shadow-lg transition duration-200">BlogVista</div>
        <div className="flex space-x-4">
          <Link className="text-orange-400 hover:bg-yellow-300 hover:text-black px-3 py-1 rounded" to={'/'}>Home</Link>
        <Link className="text-orange-400 hover:bg-yellow-300 hover:text-black px-3 py-1 rounded" to={'/about'}>About</Link>
        <Link className="text-orange-400 hover:bg-yellow-300 hover:text-black px-3 py-1 rounded" to={'/contact'}>Contact</Link>
        <Link className="text-orange-400 hover:bg-yellow-300 hover:text-black px-3 py-1 rounded" to={'/articles'}>Articles </Link>      
        {search && (
            <input type="text" placeholder="Search..." className="md:flex-shrink-0 w-40 sm:w-56 top-8 right-0 border rounded px-2 py-1 bg-blue-150 text-cyan-50"/>
          )}
        </div>
    </div>
  )
}

export default Navbar;