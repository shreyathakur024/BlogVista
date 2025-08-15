import React from 'react'
import { Link } from 'react-router-dom'
import{FaSearch} from 'react-icons/fa'
import { useState } from 'react'

const Navbar = () => {

  const[search,setSearch] = useState(false);
  

  return (
    <div className="bg-gray-800 flex justify-between items-center px-4 py-2 relative z-10">
        <div className="inline-block text-2xl font-bold text-white hover:shadow-lg transition duration-200">BlogVista</div>
        <div className="flex space-x-4">
          <Link className="text-orange-400 hover:bg-yellow-300 hover:text-black px-3 py-1 rounded" to={'/'}>Home</Link>
        <Link className="text-orange-400 hover:bg-yellow-300 hover:text-black px-3 py-1 rounded" to={'/about'}>About</Link>
        <Link className="text-orange-400 hover:bg-yellow-300 hover:text-black px-3 py-1 rounded" to={'/contact'}>Contact</Link>
        <Link className="text-orange-400 hover:bg-yellow-300 hover:text-black px-3 py-1 rounded" to={'/articles'}>Articles</Link>
        {/* <i className="fa-solid fa-magnifying-glass text-white cursor-pointer"></i> */}
        <button onClick={()=>setSearch(!search)}>
          <FaSearch className="search text-amber-50 text-2xl hover:bg-black hover:text-white w-10 h-8" />
          </button>
          {search && (
            <input type="text" placeholder="Search..." className="abso;ute top-8 right-0 border rounded px-2 py-1 bg-blue-150 text-cyan-50"/>
          )}
        </div>
    </div>
  )
}

export default Navbar;