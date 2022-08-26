import { Html, Main } from "next/document";
<<<<<<< HEAD
import Head from "next/document";
=======
import Head from "next/head";
>>>>>>> 8f209ca82c221905bfc7e6cf694df3475cd20c78
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
          src="https://www.googletagmanager.com/gtag/js?id=G-ZX957538N8"
        ></Script>
        <Script id="google-tag-script" strategy="afterInteractive" dangerouslySetInnerHTML={{ _html: `window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag(&lsquo;js&lsquo;, new Date()); gtag(&lsquo;config&lsquo;,
          &lsquo;G-ZX957538N8&lsquo;);`}}>
        </Script>
      </Head>
      <body>
        <Main />
      </body>
    </Html>
  );
};

export default Document;
