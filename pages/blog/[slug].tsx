import Head from "next/head";
import Image from "next/image";
import React from "react";
import AnimatedTitle from "../../components/AnimatedTitle";
import Layout from "../../components/Layout";
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
      <Head>
        {post?.title && (
          <>
            <title>{post?.title} - cristodca.com</title>
            <meta
              property="og:title"
              content={`${post?.title} - cristodca.com`}
            />
            <meta
              property="twitter:title"
              content={`${post?.title} - cristodca.com`}
            />
          </>
        )}
        {post?.description && (
          <>
            <meta name="description" content={post?.description} />
            <meta property="og:description" content={post?.description} />
            <meta property="twitter:description" content={post?.description} />
          </>
        )}

        {/* Og Metatags */}
        <meta property="og:site" content="website" />
        <meta
          property="og:url"
          content={`https://www.cristodca.com/blog/${post?.slug}`}
        />
        <meta
          property="og:image"
          content="https://www.cristodca.com/banner.png"
        />

        {/* Twitter Metatags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="og:url"
          content={`https://www.cristodca.com/blog/${post?.slug}`}
        />
        <meta
          property="twitter:image"
          content="https://www.cristodca.com/banner.png"
        />
      </Head>

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

          <div className="blog-container">
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
