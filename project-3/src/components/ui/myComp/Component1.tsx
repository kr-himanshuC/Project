
import React from 'react'
import { Button } from "@/components/ui/button"
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';


const Components1 = () => {
  return (
    <div  className="relative h-[100%] bg-[#0B153C] z-0 ">
      {/* <div style={{backgroundImage: "image.png", }} className="bg-opacity-20 h-screen z-10"> */}

      {/* background image */}
      <div className=" w-[100%] absolute opacity-20 " >
        <img src="image.png" className='h-[100%] w-[100%] object-cover' />
      </div> 
      
      
    
      <Navbar />

      <Hero/>

      <Footer />

      </div>

    
  )
}

export default Components1