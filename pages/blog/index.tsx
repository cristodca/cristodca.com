import React from 'react'
import AnimatedTitle from '../../components/AnimatedTitle'
import Layout from '../../components/Layout'
import RecentPostsBlog from '../../components/RecentPostsBlog'

import { GraphQLClient, gql } from "graphql-request";
import Head from 'next/head';

const graphcms = new GraphQLClient(
  "https://api-us-west-2.hygraph.com/v2/cl5t3r73o1y6b01ukchus83jv/master"
);

const QUERY = gql`
  query MyQuery {
    blogs(orderBy: publishedAt_ASC, first: 4) {
      date
      cover {
        url
      }
      id
      slug
      title
      description
    }
  }
`;

export async function getStaticProps() {
  const { blogs } = await graphcms.request(QUERY);

  return {
    props: {
      blogs,
    },
  };
}

const index = ({ blogs }: any) => {
  return (
    <div className='bg-light dark:bg-dark'>
      <Head>
        <title>Blog | cristodca.com</title>
        <meta name="description" content="Bienvenido a mi blog personal, comparto tutoriales, novedades, reviews y ocasionalmente escribo sobre mí. Muchas gracias por llegar aquí." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="main-container">
          <AnimatedTitle text='Bienvenido a mi Blog' />  
        </div>

        <RecentPostsBlog blogs={blogs} />
      </Layout>
    </div>
  )
}

export default index