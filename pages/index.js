import Link from 'next/link';
import { useCart } from '../contexts/CartContext';
import products from '../data/products.json';

const Home = () => {
  const { addToCart, animateButtons } = useCart();

  return (
    <div className="container mx-auto p-4">
      <nav className="mb-4">
        <Link href="/cart" className="text-blue-500">
          Go to Cart
        </Link>
      </nav>
      <h1 className="text-2xl font-bold mb-4">Product Listing</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <img src={product.image} alt={product.name} className="mb-4" />
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart(product)}
              className={`mt-2 bg-blue-500 text-white px-4 py-2 rounded ${
                animateButtons[product.id] ? 'flash' : ''
              }`}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
