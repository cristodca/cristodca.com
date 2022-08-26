import { Html, Main } from "next/document";
import Head from "next/head";
import Script from "next/script";
import React from "react";

const Document = () => {
  return (
    <Html lang="es">
      <Head>
        {/* <!-- Google tag (gtag.js) --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZX957538N8"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-ZX957538N8');
        </script>
      </Head>
      <body>
        <Main />
      </body>
    </Html>
  );
};

export default Document;
