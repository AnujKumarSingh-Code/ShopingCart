import Link from 'next/link';

const OrderConfirmation = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Thank You for Your Order!</h1>
      <p>Your order has been placed successfully.</p>
      <Link href="/">
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default OrderConfirmation;
