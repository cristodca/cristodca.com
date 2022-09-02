import Image from "next/image";
import React from "react";
import AnimatedTitle from "../../components/AnimatedTitle";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { getAllPostsWithSlug, getPostDataBySlug } from "./../../lib/graphcms";

export async function getStaticPaths() {
  const blogs = await getAllPostsWithSlug();

  return {
    paths: blogs.map(({ slug }: any) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps({ params }: any) {
  const blog = await getPostDataBySlug(params.slug);

  return {
    props: {
      post: blog,
    },
  };
}

const Slug = ({ post }: any) => {
  return (
    <>
        <SEO 
          title={post?.title}
          description={post?.description}
          url={`https://www.cristodca.com/blog/${post?.slug}`}
          keywords={post?.keywords}
        />

      <div className="bg-light dark:bg-dark">
        <Layout>
          <div className="main-container text-center">
            <AnimatedTitle text={`${post?.title}`} />
          </div>

          <div className="blog-container">
            <Image
              src={post?.cover?.url}
              alt={post?.title}
              className="rounded mx-auto"
              width={1280}
              height={720}
              layout="responsive"
              objectFit="cover"
            />
          </div>

          <div className="blog-container pt-16 pb-8">
            <div
              dangerouslySetInnerHTML={{ __html: post?.content?.html }}
            ></div>
          </div>
        </Layout>
      </div>
    </>
  );
};

export default Slug;
