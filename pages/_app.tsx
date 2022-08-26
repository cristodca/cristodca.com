import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        id="google-tag-url"
        async
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-ZX957538N8`}
      ></Script>
      <Script id="google-tag-script" strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments)}gtag('js', new Date()); gtag('config','G-ZX957538N8');`}
      </Script>
      {/* <!-- Google Tag Manager --> */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5Z5NJ48');`}
      </Script>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
