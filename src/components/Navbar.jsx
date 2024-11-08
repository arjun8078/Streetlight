import logo from '../assets/images/statuspage1.png'

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
  
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Smart Lights" className="h-8" /> 
        <span className="text-lg font-semibold tracking-wide">Smart Lights</span>
      </div>

   
      <ul className="hidden md:flex space-x-10">
        <li><a href="#home" className="hover:text-blue-400">Home</a></li>
        <li><a href="#products" className="hover:text-blue-400">Products</a></li>
        <li><a href="#services" className="hover:text-blue-400">Software Services</a></li>
      </ul>

   
      <div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-5 py-2 rounded-lg">
          Login
        </button>
      </div>
    </nav>
  )
}

export default Navbar