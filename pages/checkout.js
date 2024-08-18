import { useCart } from '../contexts/CartContext';
import { useRouter } from 'next/router';

const Checkout = () => {
  const { cart, getTotalPrice, discount, setCart } = useCart(); 
  const router = useRouter();

  const handleCheckout = () => {
    
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const totalPrice = getTotalPrice();
    const orderDetails = {
      items: cart,
      total: totalPrice.toFixed(2),
      discountApplied: discount.type ? true : false,
    };

    
    submitOrder(orderDetails)
      .then((response) => {
        if (response.success) {
          alert("Order placed successfully!");
          setCart([]);
          router.push('/order-confirmation');
        } else {
          alert("Checkout failed, please try again.");
        }
      })
      .catch((error) => {
        console.error("Checkout error:", error);
        alert("There was an error processing your checkout.");
      });
  };

  const submitOrder = async (orderDetails) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true });
      }, 1000);
    });
  };

  return (
    <div>
      <h1>Checkout</h1>
      <button onClick={handleCheckout}>Submit Order</button>
    </div>
  );
};

export default Checkout;
