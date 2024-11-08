import logo from '../assets/images/Group 8954.png'

const About = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
   
    <h2 className="text-2xl font-semibold text-center mb-12">
      The platform assists city managers on multiple fronts
    </h2>

 
    <div className="grid grid-cols-1 md:grid-cols-2  mb-8">
      <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
        <img src={logo} alt="Icon" className="mx-auto mb-4"/>
        <p>Saves on power consumption & related costs</p>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
        <img src={logo} alt="Icon" className="mx-auto mb-4"/>
        <p>Lowers downtimes</p>
      </div>
    </div>

 
    <div className="grid grid-cols-1 md:grid-cols-3  mb-8">
      <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center md:col-span-1">
        <img src={logo} alt="Icon" className="mx-auto mb-4"/>
        <p>Detects power thefts.</p>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center md:col-span-2">
        <img src={logo} alt="Icon" className="mx-auto mb-4"/>
        <p>Ensures smart monitoring and control of the street light infrastructure.</p>
      </div>
    </div>


    <div className="grid grid-cols-1 md:grid-cols-2 ">
      <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center md:col-span-1">
        <img src={logo} alt="Icon" className="mx-auto mb-4"/>
        <p>Ensures real-time actionable analytics on power failures, lamp malfunctions, voltage failures, etc.</p>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center md:col-span-1">
        <img src={logo} alt="Icon" className="mx-auto mb-4"/>
        <p>Ensures security in the neighborhood</p>
      </div>
    </div>
  </div>
  )
}

export default About