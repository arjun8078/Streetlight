import image from '../assets/images/planet-earth-from-space 1.png'
import logo from '../assets/images/statuspage1.png'

const Footer = () => {
  return (
    <div
    className="relative bg-cover bg-center text-white"
    style={{
      backgroundImage: `url(${image})`,
      backgroundColor: "#000000", 
    }}
  >

    <div className="absolute inset-0 bg-black opacity-50"></div>
    

    <div className="relative max-w-6xl mx-auto px-6 py-12 text-center md:text-left">
      
    
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
   
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Smart Lights Logo" className="h-6" />
          <span className="text-lg font-semibold">Smart Lights</span>
        </div>
        
  
        <div className="flex space-x-8 text-sm font-medium mt-6 md:mt-0">
          <a href="#product" className="hover:underline">Product</a>
          <a href="#services" className="hover:underline">Software Services</a>
          <a href="#follow-us" className="hover:underline">Follow Us</a>
        </div>
      </div>

   
      <div className="border-t border-gray-500 my-4"></div>

   
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center space-y-4 md:space-y-0">
       
        <div className="flex space-x-6 text-xs text-gray-300">
          <a href="#privacy-policy" className="hover:underline">Privacy Policy</a>
          <a href="#terms-conditions" className="hover:underline">Terms & Conditions</a>
          <a href="#cookie-policy" className="hover:underline">Cookie Policy</a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer