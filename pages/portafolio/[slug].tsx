import Image from "next/image";
import React from "react";
import AnimatedTitle from "../../components/AnimatedTitle";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import {
  getPortfolioDataBySlug,
  gettAllPortfolioSlugs,
} from "../../lib/graphcms";

export async function getStaticPaths() {
  const portafolios = await gettAllPortfolioSlugs();

  return {
    paths: portafolios.map(({ slug }: any) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const portafolio = await getPortfolioDataBySlug(params.slug);

  console.log(portafolio)

  return {
    props: {
      portafolio,
    },
  };
}

const PortfolioEntry = ({ portafolio }: any) => {
  return (
    <>
      <SEO
        title={portafolio?.name}
        description={portafolio?.description}
        url={`https://www.cristodca.com/blog/${portafolio?.slug}`}
      />

      <Layout>
        <div className="main-container text-center">
          {portafolio.name && <AnimatedTitle text={portafolio?.name} />}
          
          {portafolio?.imgRoute && <Image 
            src={`/img/portfolio/${portafolio?.imgRoute}.png`}
            alt={portafolio?.name}
            className="rounded mx-auto"
            width={1280}
            height={720}
            layout="responsive"
            objectFit="cover"
          />}
        </div>

        <div className="blog-container py-4">
          <div dangerouslySetInnerHTML={{ __html: portafolio?.content?.html }}></div>
        </div>
      </Layout>
    </>
  );
};

export default PortfolioEntry;
