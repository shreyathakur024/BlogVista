import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Contact from './pages/Contact'
import About from './pages/About'
import Home from './pages/Home'
import Articles from './pages/Articles'
import Navbar from './Components/Navbar'
import './App.css'
import Footer from './Components/Footer'


const App = () => {
  return (
    <>
    <div className="overflow-x-hidden">
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/articles" element={<Articles/>} />
      </Routes>
      <Footer/>
    </Router>
    </div>
    </>
    
  )
}

export default App