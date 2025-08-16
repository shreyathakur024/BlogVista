import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-amber-50 py-8 flex justify-evenly">
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-40 text-left"> 
    <div className=" text-amber-50 w-90 py-0.5 ">
        <h1 className="font-bold text-xl">BlogVista</h1>
        <p className="text-sm mt-3 leading-relaxed ">Your go-to destination for the latest insights,tutorials,
                 and trends in web development and technology</p>
    </div>
    <div className="w-90">
        <h2 className="hover:text-blue-100 text-neutral-400 font-medium mb-3">Contact Us</h2>
        <p>shreyathakur200402@gmail.com</p>
        <p>+91 9508671836</p>
        <p>New Delhi</p>
    </div>

    <div className="font-semibold mb-3 w-90">
      <ul className="space-y-1">
            <h2>Quick Link</h2>
            <p><Link className="text-white hover:text-orange-400" to={'/'}>Home</Link></p>
            <p><Link className="text-white hover:text-orange-400" to={'/about'}>About Us</Link></p>
            <p>Categories</p>
            {/* <Link className="text-white hover:text-orange-400" to={'/'}>Categories</Link> */}
            <p className="hover:text-orange-400">Write For Us</p>
            <p>Privacy Policy</p>
      </ul>
     </div>
    </div>
    </footer>
  )
}

export default Footer