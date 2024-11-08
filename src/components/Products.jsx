import {useState} from 'react'
import products from '../Data/product';
import Cards from './Cards';

const Products = () => {
    const [selectedProduct, setSelectedProduct] = useState(products[0]);
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
    <h1 className="text-3xl font-bold">Cutting-edge hardware</h1>
    <p className="text-gray-600">Helping cities optimize resources and achieve smart development goals</p>
    
    <div className="flex space-x-4 overflow-x-auto">
      {products.map((product) => (
        <button
          key={product.id}
          className={`px-4 py-2 rounded ${selectedProduct.id === product.id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => setSelectedProduct(product)}
        >
          {product.name}
        </button>
      ))}
    </div>

    <Cards product={selectedProduct} />
  </div>
  )
}

export default Products