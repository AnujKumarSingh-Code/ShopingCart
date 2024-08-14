import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useCart } from '../contexts/CartContext';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/data/products.json');
        const data = await response.json();
        const enhancedData = data.map(product => {
          const discountPercent = 20;
          const salePrice = product.price * (1 - discountPercent / 100);
          return {
            ...product,
            regularPrice: product.price,
            salePrice: salePrice.toFixed(2),
            discountPercent,
          };
        });
        setProducts(enhancedData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://ipinfo.io/widget"></script>

      <nav className="mb-4 flex justify-between">
        <Link href="/cart">
          <span className="text-blue-500">Go to Cart</span>
        </Link>
      </nav>
      <h1 className="text-2xl font-bold mb-4">Product Listing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Home;
