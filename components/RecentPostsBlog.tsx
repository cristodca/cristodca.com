import Link from "next/link";
import React, { FunctionComponent } from "react";
import AnimatedSubTitle from "./AnimatedSubTitle";

type RecentBlogs = {
  blogs: [],
  showMorePosts?: Boolean,
}

const RecentPostsBlog: FunctionComponent<RecentBlogs> = ({ blogs, showMorePosts }) => {
  return (
    <div className="main-container">
      <AnimatedSubTitle text="Posts más recientes de mi blog" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs &&
          blogs.map((post: any) => (
            <a href={`/blog/${post?.slug}`} key={post?.id}>
              <div className="group h-full flex flex-col justify-between rounded-2xl border overflow-hidden p-4 border-dark transition-all duration-300 dark:border-light hover:-translate-x-2 hover:-translate-y-2 hover:border-b-8 hover:border-r-8 hover:border-primary dark:hover:border-secondary">
                <p className="normal-text text-2xl text-primary font-bold line-clamp-2 dark:text-secondary">
                  {post?.title}
                </p>
                <p className="normal-text font-normal line-clamp-4">
                  {post?.description}
                </p>
                <small className="text-gray-600 dark:text-gray-300">
                  {post?.date}
                </small>
              </div>
            </a>
          ))}
      </div>
      {showMorePosts && (
        <div className="flex justify-end">
          <Link href="/blog">
            <a className="hover-link normal-text hover:text-primary dark:hover:text-secondary">
              Ver todos los posts
            </a>
          </Link>
        </div>
      )}
    </div>
  );
}

export default RecentPostsBlog;