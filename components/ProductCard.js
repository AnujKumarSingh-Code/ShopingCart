import Image from 'next/image';

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="border p-4 rounded hover:shadow-lg transition-shadow">
      <img
        src={product.image}
        alt={product.name}
        width={500}  
        height={200} 
        className="object-cover mb-4"
      />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-500 line-through">${product.regularPrice.toFixed(2)}</p>
      <p className="text-red-500">${product.salePrice}</p>
      <p className="text-green-500">{product.discountPercent}% off</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
}
