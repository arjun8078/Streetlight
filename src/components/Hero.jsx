import image from '../assets/images/Group 2.png'

const Hero = () => {
  return (
    <section className="h-screen bg-cover bg-center flex flex-col justify-center items-center" 
    style={{ backgroundImage: `url(${image})` }}>
<h1 className="text-[#6c7f91] text-4xl md:text-6xl font-bold text-center">Bringing A New Perspective To Street Lights</h1>
<p className="text-[#6c7f91] text-lg mt-4">And The Cities of Tomorrow</p>
<button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded">Login</button>
</section>
  )
}

export default Hero