export default function ProductCard({ product, addToCart }) {
    return (
      <div className="border p-4">
        <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p>${product.price.toFixed(2)}</p>
        <button 
  onClick={() => {
    console.log('Button clicked:', product);
    addToCart(product);
  }} 
  className="bg-blue-500 text-white py-2 px-4 mt-2"
>
  Add to Cart
</button>

      </div>
    );
  }
  