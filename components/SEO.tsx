import Head from "next/head";
import React from "react";

const SEO = ({ title, description, url, keywords }: any) => {
  return (
    <Head>
      {title && (
        <>
          <title>{title} - cristodca.com</title>
          <meta name="title" content={title}/>
          <meta property="og:title" content={`${title} - cristodca.com`} />
          <meta property="twitter:title" content={`${title} - cristodca.com`} />
        </>
      )}
      {description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta property="twitter:description" content={description} />
        </>
      )}
      <meta name="keywords" content={keywords} />

      {/* Og Metatags */}
      <meta property="og:site" content="website" />
      <meta
        property="og:url"
        content={url}
      />
      <meta
        property="og:image"
        content="https://www.cristodca.com/banner.png"
      />

      {/* Twitter Metatags */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="og:url"
        content={url}
      />
      <meta
        property="twitter:image"
        content="https://www.cristodca.com/banner.png"
      />
      <meta property="twitter:creator" content="@cristodca" />
    </Head>
  );
};

export default SEO;
