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

const slug = ({ post }: any) => {
  return (
    <div className="bg-light dark:bg-dark">
      <Layout>
        <div className="main-container">
          <AnimatedTitle text={`${post?.title}`} />
        </div>
        <div className="blog-container">
          <div dangerouslySetInnerHTML={{ __html: post?.content?.html }}></div>
        </div>
      </Layout>
    </div>
  );
};

export default slug;
