import Link from 'next/link';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const { cart, updateQuantity, removeItem, getTotalPrice } = useCart();

  return (
    <div className="container mx-auto p-4">
      <nav className="mb-4">
        <Link href="/" className="text-blue-500">
          Back to Product Listing
        </Link>
      </nav>
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div>
        {cart.map((item) => (
          <div key={item.id} className="border p-4 rounded mb-4">
            <img src={item.image} alt={item.name} className="mb-4" />
            <h2 className="text-lg font-bold">{item.name}</h2>
            <p>${item.price.toFixed(2)}</p>
            <div className="flex items-center">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="bg-gray-200 px-2 py-1"
                disabled={item.quantity === 1}
              >
                -
              </button>
              <span className="mx-2">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="bg-gray-200 px-2 py-1"
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
            >
              Remove Item
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Cart Summary</h2>
        <p>Subtotal: ${getTotalPrice().toFixed(2)}</p>
        <p>Total Price: ${getTotalPrice().toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
