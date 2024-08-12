import { useCart } from '../contexts/CartContext';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    if (cart.length === 0) {
      router.push('/cart');
    }
  }, [cart, router]);

  const handleCheckout = () => {
    clearCart();
    alert('Thank you for your purchase!');
    router.push('/');
  };

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Checkout</h1>
      {cart.map(item => (
        <div key={item.id} className="flex justify-between mb-2">
          <span>{item.name} x {item.quantity}</span>
          <span>${(item.price * item.quantity).toFixed(2)}</span>
        </div>
      ))}
      <button onClick={handleCheckout} className="bg-blue-500 text-white py-2 px-4 mt-4">
        Complete Purchase
      </button>
    </div>
  );
}
