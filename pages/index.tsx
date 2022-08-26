import type { NextPage } from "next";
import Image from "next/image";
import AboutMe from "../components/AboutMe";
import RecentPostsBlog from "../components/RecentPostsBlog";

import { GraphQLClient, gql } from "graphql-request";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import PortfolioPreview from "../components/PortfolioPreview";

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

const Home: NextPage = ({ blogs }: any) => {
  return (
    <div className="bg-light dark:bg-dark">
      <SEO
        title="Cristopher D. Chavez"
        description="Soy Desarrollador Web Fullstack con más de 5 años de experiencia en la programación. Vivo en Guadalajara y puedo hablar en inglés o español"
        url="https://www.cristodca.com/"
        keywords="programador web, guadalajara, freelance, fullstack, landing page"
      />

      <Layout>
        <div className="main-container py-8 min-h-screen md:flex md:flex-col md:justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            <div className="flex flex-col justify-center items-center lg:items-start">
              <h1 className="mb-4 text-center lg:text-start">
                <span className="hyper-title text-dark bg-secondary px-3 py-2 text-5xl sm:text-6xl md:text-6xl box-decoration-clone leading-normal sm:leading-tight md:leading-tight font-bold">
                  Cristopher D. Chavez
                </span>
              </h1>
              <h2 className="text-center lg:text-start">
                <span className="text-secondary bg-dark p-3 inline-block text-3xl sm:text-4xl md:text-5xl box-decoration-clone leading-none font-medium">
                  Frontend Developer
                </span>
              </h2>
            </div>
            <div className="flex items-center justify-center">
              <div className="dark:hidden block">
                <Image
                  src="/img/me-draw.png"
                  alt="Dibujo de mi programando en una laptop"
                  width={480}
                  height={480}
                />
              </div>
              <div className="dark:block hidden">
                <Image
                  src="/img/me-draw-dark.png"
                  alt="Dibujo de mi programando en una laptop"
                  width={480}
                  height={480}
                />
              </div>
            </div>
          </div>
        </div>

        <AboutMe />

        <PortfolioPreview />

        <RecentPostsBlog blogs={blogs} showMorePosts />
      </Layout>
    </div>
  );
};

export default Home;
