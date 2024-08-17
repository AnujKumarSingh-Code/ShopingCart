import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){
                  w[l]=w[l]||[];
                  w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),
                      dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true;
                  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                  f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-M8P49DBX');
              `,
            }}
          />
          {/* End Google Tag Manager */}

          {/* Google Analytics 4 Script */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=GTM-M8P49DBX`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'GTM-M8P49DBX');
                
                // Set user property (e.g., user ID)
                const userId = 'user123'; // Replace with dynamic user ID if available
                gtag('set', 'user_properties', {
                  'user_id': userId
                });
              `,
            }}
          />
          {/* End Google Analytics 4 Script */}

          {/* Inline script to track all link clicks */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                function trackLinkClick(event) {
                  const link = event.target;
                  const linkUrl = link.href;
                  const userId = 'user123'; // Replace with dynamic user ID if available

                  gtag('event', 'click', {
                    'event_category': 'Link Click',
                    'event_label': linkUrl,
                    'user_id': userId
                  });
                }

                document.addEventListener('DOMContentLoaded', () => {
                  const links = document.querySelectorAll('a');
                  links.forEach(link => {
                    link.addEventListener('click', trackLinkClick);
                  });
                });
              `,
            }}
          />
          {/* End Inline Script to Track Link Clicks */}

          {/* Plausible Analytics Script */}
          <script
            defer
            data-domain="shoping-cart-xort.vercel.app"
            src="https://plausible.io/js/script.outbound-links.js"
          ></script>
          {/* End Plausible Analytics Script */}
          
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `
                <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M8P49DBX"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>
              `,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
