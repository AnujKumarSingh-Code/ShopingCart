import '../styles/globals.css';
import { CartProvider } from '../contexts/CartContext';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://ipinfo.io/widget"></script>

      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
