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
            src={`https://www.googletagmanager.com/gtag/js?id=YOUR_GA4_MEASUREMENT_ID`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'YOUR_GA4_MEASUREMENT_ID');
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
