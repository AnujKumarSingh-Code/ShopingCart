<<<<<<< HEAD
// pages/_app.js
import '../styles/globals.css';
import { CartProvider } from '../contexts/CartContext';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Global Tag Manager Script */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-M8P49DBX');`,
        }}
      />
      {/* CartProvider context */}
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </>
=======
import '../styles/globals.css';
import { CartProvider } from '../contexts/CartContext';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
>>>>>>> 8f7df91548c3d6b47c48f36f004a605eb8db7d89
  );
}

export default MyApp;
