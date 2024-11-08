import React from 'react'
import ecosystemImage from '../assets/images/Group 8952.jpg'

const Ecosysytem = () => {
  return (
    <section className="flex flex-col items-center py-16 px-4 bg-white">
    {/* Title Section */}
    <h2 className="text-xl text-blue-600 font-bold mb-4">Ecosystem</h2>
    <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">
      How does a smart street light ecosystem work?
    </h1>
    
    {/* Image and Text Section */}
    <div className="relative w-full max-w-6xl mx-auto py-5">
      {/* Background image */}
      <img src={ecosystemImage} alt="Ecosystem Diagram" className="w-full h-auto" />
    </div>
  </section>
  )
}

export default Ecosysytem