import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Contact from './pages/Contact'
import About from './pages/About'
import Home from './pages/Home'
import Articles from './pages/Articles'
import Navbar from './pages/Navbar'
import './App.css'


const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/articles" element={<Articles/>} />
      </Routes>
    </Router>
    </>
    
  )
}

export default App