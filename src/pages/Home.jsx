import React from 'react'
import Image from "./Image.png"
const Home = () => {
  return (
    <div>
      <img src={Image} alt="Book" style={{width:"100%", maxHeight:"600px", objectFit:"cover" , opacity:"0.9"}}/>
    </div>
  )
}

export default Home