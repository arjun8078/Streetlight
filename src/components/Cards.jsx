/* eslint-disable react/prop-types */


const Cards = ({ product }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start bg-blue-50 p-6 rounded-lg shadow-lg space-y-6 md:space-y-0 md:space-x-6">

    <div className="md:w-1/2 flex justify-center md:justify-end">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
   
      <div className="md:w-1/2">
        <h3 className="text-2xl font-semibold mb-4">{product.name}</h3>
        <p className="text-gray-700">{product.description}</p>
   
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Know More
        </button>
      </div>

      
    </div>
  )
}

export default Cards