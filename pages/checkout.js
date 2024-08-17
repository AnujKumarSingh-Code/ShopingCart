import { useCart } from '../contexts/CartContext';
import { useRouter } from 'next/router';

const Checkout = () => {
  const { cart, getTotalPrice, discount, setCart } = useCart(); 
  const router = useRouter();

  const handleCheckout = () => {
    // Ensure cart is not empty
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Calculate total price
    const totalPrice = getTotalPrice();

    // Proceed with checkout logic
    const orderDetails = {
      items: cart,
      total: totalPrice.toFixed(2),
      discountApplied: discount.type ? true : false,
    };

    // Simulate order submission (replace with actual API call)
    submitOrder(orderDetails)
      .then((response) => {
        if (response.success) {
          alert("Order placed successfully!");
          // Clear cart after successful order
          setCart([]);
          // Redirect to order confirmation page
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
    // Simulate an API request (replace with actual request)
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
