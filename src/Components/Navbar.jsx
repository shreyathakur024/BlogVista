import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="left">BlogVista</div>
        <div className="right"></div>
        <div className="inline">
          <Link className="heading" to={'/'}>Home</Link>
        <Link className="heading" to={'/about'}>About</Link>
        <Link className="heading" to={'/contact'}>Contact</Link>
        <Link className="heading" to={'/articles'}>Articles</Link>
        <i className="fa-solid fa-magnifying-glass"></i>

        </div>
    </div>
  )
}

export default Navbar;