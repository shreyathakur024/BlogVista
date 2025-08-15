import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-amber-50 py-8">
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left"> 
    <div className=" text-amber-50 w-140 py-0.5">
        <h1 className="font-bold text-xl">BlogVista</h1>
        <p className="text-sm mt-2">Your go-to destination for the latest insights,tutorials,and trends in web development and technology</p>
    </div>
    <div>
        <h2 className="hover:text-blue-100 text-neutral-400 font-medium mb-2">Contact Us</h2>
        <p>shreyathakur200402@gmail.com</p>
        <p>+91 9508671836</p>
        <p>New Delhi</p>
    </div>

    <div className="font-semibold mb-2">
            <h2>Quick Link</h2>
            <p>Home</p>
            <p>About Us</p>
            <p>Categories</p>
            <p>Write For Us</p>
            <p>Privacy Policy</p>
     </div>
    </div>
    </footer>
  )
}

export default Footer