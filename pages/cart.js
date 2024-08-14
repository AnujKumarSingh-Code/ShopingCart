import Link from 'next/link';
import { useCart } from '../contexts/CartContext';
import { useState } from 'react';
import { useRouter } from 'next/router';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cart, updateQuantity, removeItem, getTotalPrice, applyDiscount, discount } = useCart();
  const [discountCode, setDiscountCode] = useState('');
  const router = useRouter();

  const handleApplyDiscount = () => {
    applyDiscount(discountCode);
  };

  const handleProceedToCheckout = () => {
    router.push('/checkout');
  };

  return (
    <div className="container mx-auto p-4">
      <nav className="mb-4">
        <Link href="/">
          <span className="text-blue-500">Back to Products</span>
        </Link>
      </nav>
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.map((item) => (
        <CartItem 
          key={item.id} 
          item={item} 
          updateQuantity={updateQuantity} 
          removeItem={removeItem} 
        />
      ))}
      <div className="mt-4">
        <h2 className="text-lg font-bold">Cart Summary</h2>
        <p>Subtotal: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
        {discount.type && (
          <p>Discount: {discount.type === 'fixed' ? `$${discount.value}` : `${discount.value}%`}</p>
        )}
        <p>Total: ${getTotalPrice().toFixed(2)}</p>
      </div>

      <div className="mt-4">
        <input
          type="text"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
          placeholder="Discount code"
          className="border px-4 py-2 mr-2"
        />
        <button onClick={handleApplyDiscount} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Apply
        </button>
      </div>

      <button 
        onClick={handleProceedToCheckout} 
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
