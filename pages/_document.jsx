import { Html, Main } from "next/document";
import Head from "next/document";
import Script from "next/script";
import React from "react";

const Document = () => {
  return (
    <Html lang="es">
      <Head>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          id="google-tag-url"
          async
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-ZX957538N8"
        ></Script>
        <Script
          id="google-tag-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments)}gtag(&lsquo;js&lsquo;, new Date()); gtag(&lsquo;config&lsquo;,&lsquo;G-ZX957538N8&lsquo;);`,
          }}
        ></Script>
        {/* <!-- Google Tag Manager --> */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5Z5NJ48');`,
          }}
        ></Script>
        {/* <!-- End Google Tag Manager --> */}
      </Head>
      <body>
        {/* <!-- Google Tag Manager (noscript) --> */}
        {/* <noscript
          dangerouslySetInnerHTML={{
            _html: `<iframesrc="https://www.googletagmanager.com/ns.html?id=GTM-5Z5NJ48"height="0"width="0"style="display:none;visibility:hidden"></iframesrc=>`,
          }}
        ></noscript> */}
        {/* <!-- End Google Tag Manager (noscript) --> */}

        <Main />
      </body>
    </Html>
  );
};

export default Document;
